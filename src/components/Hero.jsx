import Animation from "./Animation"
import image from "../img/img3.jpg"

export default function Hero() {
    return(
        <>
            <section className=" w-full md:w-[90%] font-sans flex flex-col md:flex-row md:justify-around items-center gap-10 p-5 mt-10 mx-auto">
                <Animation>
                    <div className="w-full mt-10  p-8 ">
                        <h2 className="uppercase text-[.8em] md:text-md lg:text-lg text-brass font-extralight">
                            LUXURY REDEFINED THROUGH DESIGN.
                        </h2>

                        <h1 className="text-ink font-semibold font-serif text-[2em] md:text-[2.8em] lg:text-[3.5em] py-3 lg:w-[80%] leading-tight">
                            Elevating Spaces. Enriching Lifestyles.
                        </h1>
                        <Animation delay={200}>
                            <p className="py-2 my-2 md:my-1 lg:my-5 md:py-5 text-ink text-justify text-sm  lg:text-xl lg:w-[80%] leading-relaxed">
                                At <span className="text-brass underline">Fly Luxury</span> we transform ordinary spaces into extraordinary experiences. Through thoughtful design, refined aesthetics and exceptional attention to detail, we create interiors that reflect your personality, inspire comfort and embody timeless luxury
                            </p>
                        </Animation>
                        

                        <button className="lg:block uppercase border text-[.8em] lg:text-lg font-extralight rounded-md py-2 px-5 lg:my-5 cursor-pointer border-sand transition-colors duration-300 bg-ink text-ivory hover:bg-ivory hover:text-ink ">
                            book a Design consultation
                        </button>
                    </div>
                </Animation>
                

                <Animation delay={200}>
                    <div className="bg-sand w-80 md:w-[20em] md:h-[24em] lg:h-[35em] lg:w-[32em] h-[40em] mx-auto my-5 rounded-t-full ">
                        <img className="w-full h-full object-cover rounded-t-full hover:scale-101 transition-scale ease-in-out duration-300" src={image} alt="" />
                    </div>
                </Animation>
                

                
            </section>
        </>
    )
}