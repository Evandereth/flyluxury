import { useEffect, useState } from "react"
import logo from "../img/logo.png"

const navMenu = [
    {id:1, label:"Services", href:'#services'},
    {id:1, label:"Porfolio", href:'#work'},
    {id:1, label:"Process", href:'#process'},
    {id:1, label:"Contact", href:'#contact'},

    
]

export default function Navbar() {

    const [menu, setMenu] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const handleMenu = () =>{
        setMenu(prev => !prev)
    }

    useEffect(()=>{
        const onScroll = () => setScrolled(window.scrollY > 24)
        onScroll()
        window.addEventListener('scroll', onScroll, {passive:true})
        document.body.style.overflow = menu ? 'hidden' : ""
        return()=>{
           window.removeEventListener("scroll", onScroll) 
           document.body.style.overflow=''
        } 
    }, [])

    const solid = scrolled || menu
    

    return(
        <> 
            <nav className={`fixed top-5 w-[95%] h-15 md:h-18 p-2 border border-sand backdrop-blur flex justify-between items-center rounded-lg z-10 font-serif text-brass-dark ${solid ? 'bg-ivory backdrop-blur' : 'bg-transparent'}`}>
                <div className="flex flex-nowrap gap-1 items-center">
                    <img className="w-12 object-cover" src={logo} alt="Fly Luxury brand logo" />
                    <h1 className="uppercase font-bold text-2xl border-b-2 font-serif text-brass-dark">fly luxury</h1>
                </div>


                {/* ::::::::::DESKTOP MENU:::::::::::::::: */}

                <div className="hidden lg:block">
                    <ul className={`w-full flex flex-row gap-5 uppercase p-3 text-brass-dark`}>
                    {
                        navMenu.map((link) => (
                            <li key={link.id} className="md:text-md lg:text-lg">
                                <a href={link.href}>{link.label}</a> 
                            </li>
                        ))
                    }
                    </ul>
                </div>

                <button className="hidden lg:block uppercase border text-sm font-bold rounded-md py-2 px-4 cursor-pointer border-sand text-brass-dark transition-colors duration-300 hover:bg-brass-dark hover:text-sand">
                    book a consultation
                </button>


                <div className="lg:hidden">
                    <button className="cursor-pointer pt-2" onClick={handleMenu}>
                    <svg width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="#7A5C2E" strokeWidth="2" aria-hidden="true">
                        <path d="M3 8h18M3 16h18" />
                    </svg>
                </button>
                </div>
            </nav>

            {/* :::::::::::::MOBILE MENU::::::::::::::::::: */}


            { document.documentElement.style.overflow = menu ? 'hidden' : ''}


            <div className={`lg:hidden bg-cream/70 backdrop-blur-sm  fixed top-0 overflow-y-hidden w-[98%] h-screen z-50 transition-translate ease-in-out duration-500 ${menu ? "right-0" : "-right-full"} `}>

                <div className="w-full h-15 p-2 mt-2 flex justify-between items-center mb-5">
                    <div className="flex flex-nowrap items-center">
                        <img className="w-12 object-cover" src={logo} alt="Fly Luxury brand logo" />
                        <h1 className="uppercase font-bold text-2xl border-b-2 font-serif text-brass-dark">fly luxury</h1>
                    </div>

                    <button className="cursor-pointer" onClick={handleMenu}>
                        <svg width="24" height="24" viewbox="0 0 24 24" fill="none" stroke="#7A5C2E" strokeWidth="2" aria-hidden="true" >
                            <path d="M5 5l14 14M19 5L5 19" />
                        
                        </svg>
                    </button>
                    
                    
                </div>

                <ul className={`bg-transparent absolute right-0 w-[80%] h-full flex flex-col gap-5 uppercase items-end p-2 font-serif text-brass-dark`}>
                        {
                        navMenu.map((link) => (
                            <li key={link.id} className="mr-8 text-xl cursor-pointer">
                                <a href={link.href}>{link.label}</a> 
                            </li>

                        ))
                    }
                    
                </ul>
                
                
            </div>

            <div>

            </div>
        </>
    )
}