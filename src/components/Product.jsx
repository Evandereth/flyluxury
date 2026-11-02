import Title from "../components/Title";
import image from "../img/img-10.jpg"

export default function Product() {
    return(
        <>
            <section className="md:hidden bg-sand py-10 px-4 rounded-2xl">
                <div className="relative w-full h-100">
                    <img src={image} alt="Featured Product" className="w-full h-full object-cover rounded-2xl"/>

                    <div className="w-[70%] bg-black/20 rounded-2xl py-5 px-2 backdrop-blur absolute top-0 left-0">
                        <h1 className="text-xs uppercase tracking-[0.28em] text-cream pb-3"> 
                            Featured Collection
                        </h1>

                        <h2 className="text-cream font-serif">
                            Grin Curved Fabric Sofa
                        </h2>

                        <p className="py-5 text-xs font-extralight text-ivory">
                            Designed to feel effortless, enduring and entirely yours.
                        </p>

                    </div>
                </div>
            </section>
        </>
    )
}