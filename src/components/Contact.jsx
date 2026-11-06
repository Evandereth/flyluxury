import { useRef, useState } from 'react'
import Animation from './Animation'
import { FaInstagram, FaTiktok, FaFacebookSquare } from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";


const CONTACT = {
  email: 'admin@flyluxuryinterior.com',
  whatsapp: '2349119239488',
  address: 'Lagos, Nigeria.',
}

const SOCIALS = [
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    url: 'https://instagram.com/',
  },
  {
    name: 'TikTok',
    icon: <FaTiktok />,
    url: 'https://tiktok.com/',
  },
  {
    name: 'Twitter',
    icon: <FaXTwitter />,
    url: 'https://tiktok.com/',
  },
  {
    name: 'Facebook',
    icon: <FaFacebookSquare/>,
    url: 'https://tiktok.com/',
  }
]

const projectTypes = [
  'Residential design',
  'Commercial design',
  'Styling & decor',
  'Something else',
]

const initial = {
  name: '',
  email: '',
  phone: '',
  type: projectTypes[0],
  message: '',
  company: '', // honeypot: real people never fill this
}

const inputClass =
  'w-full border-0 border-b border-brass bg-transparent py-3 text-base outline-none transition-colors placeholder:text-ink/40 focus:border-ink'
const labelClass =
  'block text-xs uppercase tracking-[0.18em] text-ink/70'

function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-err`} className="mt-2 text-sm text-[#9B3B2E]">
          {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const openedAt = useRef(Date.now())

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }))
  }

  const validate = () => {
    const er = {}
    if (form.name.trim().length < 2) er.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim()))
      er.email = 'Please enter a valid email address.'
    if (form.message.trim().length < 10)
      er.message = 'Please tell us a little more (at least 10 characters).'
    return er
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const er = validate()
    setErrors(er)

    const firstError = Object.keys(er)[0]
    if (firstError) {
      document.getElementById(firstError)?.focus()
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('/send-mail.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          elapsed: Date.now() - openedAt.current,
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.ok) throw new Error(data.error || 'failed')
      setForm(initial)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const waLink = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(
    "Hello Fly Luxury, I'd like to discuss an interior design project."
  )}`

  return (
    <section id="contact" className="bg-ivory px-6 py-20 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2 md:gap-20">


        {/* Left: info */}
        <Animation>
          <p className="text-xs uppercase tracking-[0.28em] text-brass-dark">
            Contact
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            Let&rsquo;s design your space.
          </h2>
          <p className="mt-6 max-w-md text-lg text-ink/70">
            Tell us about your project and we&rsquo;ll arrange a private
            consultation.
          </p>

          <ul className="flex flex-wrap gap-3">
            {SOCIALS.map(({ name, url, icon }) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="mx-10 text-2xl"
                >
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        
          <p className="text-ink/80">{CONTACT.address}</p>
        
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block border border-ink px-6 py-3 text-xs uppercase tracking-[0.18em] transition-colors hover:bg-ink hover:text-ivory"
          >
            Chat on WhatsApp
          </a>
        </Animation>
            
             {/* Right: form or success */}

        <Animation delay={150}>
          {status === 'success' ? (
            <div role="status" className="border border-sand bg-cream p-8 md:p-10">
              <h3 className="font-serif text-3xl">Thank you.</h3>
              <p className="mt-3 text-ink/70">
                Your message is on its way to us. We&rsquo;ll reply within one
                to two working days.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-6 border-b border-brass py-1 text-xs uppercase tracking-[0.18em] transition-colors hover:text-brass-dark"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="space-y-7">
              {/* Honeypot (hidden from people) */}
              <div className="absolute left-[-9999px]" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={form.company}
                  onChange={onChange}
                />
              </div>

              <Field id="name" label="Name" error={errors.name}>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={onChange}
                  className={inputClass}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-err' : undefined}
                />
              </Field>

              <Field id="email" label="Email" error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={onChange}
                  className={inputClass}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-err' : undefined}
                />
              </Field>

              <div className="grid gap-7 sm:grid-cols-2">
                <Field id="phone" label="Phone (optional)">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={onChange}
                    className={inputClass}
                  />
                </Field>

                <Field id="type" label="Project type">
                  <select
                    id="type"
                    name="type"
                    value={form.type}
                    onChange={onChange}
                    className={inputClass}
                  >
                    {projectTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field id="message" label="About your project" error={errors.message}>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={onChange}
                  className={`${inputClass} resize-none`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-err' : undefined}
                />
              </Field>
                 <div aria-live="polite">
                {status === 'error' && (
                  <p className="text-sm text-[#9B3B2E]">
                    Something went wrong and your message wasn&rsquo;t sent.
                    Please try again, or reach us on WhatsApp.
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="min-h-12 w-full bg-ink px-8 text-xs uppercase tracking-[0.18em] text-ivory transition-colors duration-300 hover:bg-brass-dark disabled:opacity-60 sm:w-auto cursor-pointer"
              >
                {status === 'sending' ? 'Sending…' : 'Send enquiry'}
              </button>
            </form>
          )}
        </Animation>
      </div>
    </section>
  )
}