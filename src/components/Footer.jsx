import { FaEnvelope, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosGlobe } from "react-icons/io";


export default function Footer(){
    return(
        <>
            <footer className="w-full h-[2em] my-1 border-t border-sand  flex flex-col justify-center items-center">
                
                <div className="py-3 font-sans">
                    &copy; 2026 Built with ❤️ || <a className="text-brass font-extralight italic cursor-pointer" href="https://wa.me/2349129272008">Oluwatobi</a>.
                </div>
            </footer>
        </>
    )
}