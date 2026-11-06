import Animation from "./Animation"
import { IoDiamondOutline } from "react-icons/io5";
import { LiaCertificateSolid } from "react-icons/lia";
import { LuLeaf } from "react-icons/lu";
import { SiGreenhouse } from "react-icons/si";


export default function Extra(){
    
const cards = [
    {
        id:1,
        icon: <IoDiamondOutline />,
        title: "Timeless Design",
        caption: "Elegant styles that never go out of fashion."
    },
    {
        id:2,
        icon: <LiaCertificateSolid />,
        title: "Built to Last",
        caption: "Durable materials and quality you can trust."
    },
    {
        id:3,
        icon: <LuLeaf />,
        title: "Sustainable Choice",
        caption: "Eco-friendly materials for a better tomorrow."
    },
    {
        id:4,
        icon: <SiGreenhouse />,
        title: "Made for you",
        caption: "Personalized options to fit your lifestyle."
    }
]

    return(
        <>
            <section className="relative w-full rounded-2xl py-10">
            <Animation>

                
                <div className="mt-10 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {
                    cards.map((card)=>(
                        <Animation>
                        <div delay={100} key={card.id} className="flex min-h-48 flex-col justify-center items-center rounded-xl border border-brass p-5 sm:min-h-52 lg:min-h-64">
                            <div className="text-2xl md:text-4xl text-brass-dark">
                                {card.icon}
                            </div>
                                
                                <h2 className="font-bold text-brass-dark font-serif uppercase my-2 py-5 lg:text-2xl text-xl">
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