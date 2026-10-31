import Animation from "./Animation"
export default function Quote(){
    return(
        <>
            <Animation>
            <section className="w-[85%] lg:h-[20em] flex justify-center items-center mx-auto text-justify p-5">
                <p className="text-ink text-[1em] lg:text-2xl border-l border-sand rounded-2xl p-8">
                    At <span className="text-brass underline">Fly Luxury Interior</span>, we believe that design is more than just aesthetics - it's about creating environments that enhance the way you live. Our philosophy is rooted in a deep understanding of our clients' needs, blending functionality with sophisticated style. 
                    <br/><br/>
                    From concept to completion, our team of dedicated designers work tirelessly to bring your vision to life, ensuring every deatail is meticulously curated and executed to perfection.
                </p>
            </section>
            </Animation>
        </>
    )
}