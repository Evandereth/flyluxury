import Title from "../components/Title";
import image from "../img/img-10.jpg"

export default function Product() {
    return(
        <>
            <section className="bg-sand py-10 px-4 rounded-2xl">
                <div className="relative w-full h-100 lg:w-full lg:h-[50em]">
                    <img src={image} alt="Featured Product" className="w-full h-full object-cover md:object-bottom rounded-2xl"/>

                    <div className="w-[70%] bg-black/20 rounded-2xl py-5 px-2 backdrop-blur absolute top-0 left-0 md:w-[45%] lg:top-[80%] lg:h-40">
                        <h1 className="text-xs md:text-md lg:text-lg uppercase tracking-[0.28em] text-cream pb-3"> 
                            Featured Collection
                        </h1>

                        <h2 className="text-cream font-serif md:text-md lg:text-2xl">
                            Grin Curved Fabric Sofa
                        </h2>

                        <p className="py-5 text-xs md:text-md lg:text-xl font-extralight text-ivory">
                            Designed to feel effortless, enduring and entirely yours.
                        </p>

                    </div>
                </div>
            </section>
        </>
    )
}