import image from "../img/img3.jpg"

export default function Hero() {
    return(
        <>
            <section className=" w-full font-sans flex flex-col md:flex-row md:justify-center items-center gap-10 p-5 mt-10">
                <div className="w-[90%] mt-20 md:w-[50%]">
                    <h2 className="uppercase text-[.8em] md:text-md lg:text-lg text-brass font-extralight">
                        rooms that feel as good as they look.
                    </h2>

                    <h1 className="text-ink font-semibold font-serif text-[2.5em] md:text-[2.8em] lg:text-[3.5em] py-3">
                        Creating Interiors that Inspire living
                    </h1>

                    <p className="py-2 my-2 md:my-1 lg:my-5 md:py-5 text-ink text-justify text-sm  lg:text-xl">
                        <span className="text-brass underline">Fly Luxury</span> creates Interiors that blend beauty, comfort and functionality. Crafting spaces that harmonize modern aesthetics with timeless elegance, our contemprorary interior designs breathe life into every room, redefining the essence of chic living.
                    </p>

                    <button className="lg:block uppercase border text-[.8em] lg:text-lg font-extralight rounded-md py-2 px-5 lg:my-5 cursor-pointer border-sand transition-colors duration-300 bg-ink text-ivory hover:bg-ivory hover:text-ink ">
                        book a consultation
                    </button>
                </div>

                <div className="bg-sand w-80 md:w-[20em] md:h-[24em] lg:h-[40em] lg:w-[40em] h-[40em] mx-auto my-5 rounded-t-full ">
                    <img className="w-full h-full object-cover rounded-t-full hover:scale-101 transition-scale ease-in-out duration-300" src={image} alt="" />
                </div>

                
            </section>
        </>
    )
}