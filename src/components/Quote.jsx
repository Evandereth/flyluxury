import Animation from "./Animation"
export default function Quote(){
    return(
        <>
            <Animation>
            <section className="w-[85%] lg:h-[30em] flex flex-col justify-start items-start gap-5 mx-auto text-justify p-5">
                <h2 className="uppercase text-[.8em] md:text-md lg:text-lg text-brass-dark font-extralight">
                    THE ART OF THOUGHTFUL DESIGN
                </h2>

                <p className="text-ink text-[1em] lg:text-2xl border-l border-sand rounded-2xl p-5">
                    At <span className="text-brass underline">Fly Luxury Interior</span>, every space begins with a vision and evolves into a carefully crafted expression of style,comfort and individuality.
                    <br/><br/>
                    We take a personalised approach to interior design, combining creative thinking, premium materials and carefully selected finishes to create spaces that feel distinctive and effortlessly elegant.
                    <br/><br/>
                    Our commitment goes beyond beautiful interiors. We focus on understanding how each space should function, feel and inspire, ensuring that every design reflects our clients’ lifestyles while maintaining the highest standards of quality and sophistication.
                    <br/><br/>
                    Your vision inspires us. Our creativity brings it to life.
                </p>
            </section>
            </Animation>
        </>
    )
}