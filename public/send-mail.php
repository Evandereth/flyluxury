<?php
header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

// ---------- SETTINGS ----------

$to       = 'ogunledunoluwatobi@gmail.com'; // where enquiries arrive
$from     = 'admin@flyluxuryinterior.com'; // must be a real mailbox on your domain
$siteName = 'Fly Luxury Interiors';

// ------------------------------

function out($code, $data) {
    http_response_code($code);
    echo json_encode($data);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    out(405, ['ok' => false, 'error' => 'Method not allowed']);
}

$d = json_decode(file_get_contents('php://input'), true);
if (!is_array($d)) {
    out(400, ['ok' => false, 'error' => 'Bad request']);
}

// Bot checks: hidden field filled, or form submitted impossibly fast.
// Pretend success so bots don't learn anything.
if (!empty($d['company']) || (isset($d['elapsed']) && (int)$d['elapsed'] < 2000)) {
    out(200, ['ok' => true]);
}

// Rate limit: one message per 30 seconds per visitor
$ip   = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$lock = sys_get_temp_dir() . '/fl_' . md5($ip);
if (is_file($lock) && time() - filemtime($lock) < 30) {
    out(429, ['ok' => false, 'error' => 'Please wait a moment and try again.']);
}

// One-line fields: strip line breaks (prevents email header injection)
$line = function ($s, $max) {
    $s = preg_replace('/[\r\n]+/', ' ', (string)$s);
    return mb_substr(trim($s), 0, $max);
};

$name    = $line($d['name'] ?? '', 100);
$email   = trim((string)($d['email'] ?? ''));
$phone   = $line($d['phone'] ?? '', 40);
$type    = $line($d['type'] ?? '', 60);
$message = mb_substr(trim((string)($d['message'] ?? '')), 0, 5000);

if (mb_strlen($name) < 2  !filter_var($email, FILTER_VALIDATE_EMAIL)  mb_strlen($message) < 10) {
    out(422, ['ok' => false, 'error' => 'Please check your details.']);
}

$subject = '=?UTF-8?B?' . base64_encode("New enquiry from $name") . '?=';

$body  = "New enquiry from your website\n";
$body .= "------------------------------\n";
$body .= "Name:    $name\n";
$body .= "Email:   $email\n";
$body .= "Phone:   " . ($phone ?: '-') . "\n";
$body .= "Project: " . ($type ?: '-') . "\n\n";
$body .= "Message:\n$message\n";

$headers = [
    'MIME-Version' => '1.0',
    'Content-Type' => 'text/plain; charset=UTF-8',
    'From'         => "$siteName <$from>",
    'Reply-To'     => $email,
    'X-Mailer'     => 'PHP/' . phpversion(),
];

if (!mail($to, $subject, $body, $headers, '-f' . $from)) {
    out(500, ['ok' => false, 'error' => 'Mail could not be sent.']);
}

@touch($lock);
out(200, ['ok' => true]);