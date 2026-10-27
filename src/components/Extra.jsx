import Animation from "./Animation"


export default function Extra(){
    
const cards = [
    {
        id:1,
        icon:'',
        title: "Timeless Design",
        caption: "Elegant styles that never go out of fashion."
    },
    {
        id:2,
        icon:'',
        title: "Built to Last",
        caption: "Durable materials and quality you can trust."
    },
    {
        id:3,
        icon:'',
        title: "Sustainable Choice",
        caption: "Eco-friendly materials for a better tomorrow."
    },
    {
        id:4,
        icon:'',
        title: "Made for you",
        caption: "Personalized options to fit your lifestyle."
    }
]

    return(
        <>
            <section className="relative bg-white w-full rounded-2xl py-10 my-10">
            <Animation>

                
                <div className="w-full flex gap-5 flex-wrap justify-center items-center mt-10">
                {
                    cards.map((card)=>(
                        <Animation>
                        <div delay={100} key={card.id} className="w-70 h-50 md:w-50 md:h-50 lg:w-80 lg:h-70 p-5 rounded-xl border border-sand flex flex-col justify-center ">
                                {card.icon}
                                <h2 className="font-bold text-ink py-5 lg:text-2xl">
                                    {card.title}
                                </h2>
                                <p className="text-ink/70 text-sm font-extralight lg:text-lg">
                                    {card.caption}
                                </p>
                            </div>
                        </Animation>
                    ))
                }
                </div>
            </Animation>
            </section>
        </>
    )
}