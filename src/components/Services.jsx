import Title from "./Title"
import image1 from "../img/img8.jpg"
import image2 from "../img/img9.jpg"


export default function Services(){

    const serviceCard = [
        {id: "01", title:"Residential", caption:"Full-home design, from layout and journey to furniture and finishing touches"},
        {id: "02", title:"Commercial", caption:"Boutiques, restaurant adn offices with a distinct, memorable atmosphere"},
        {id: "03", title:"Styling", caption:"Art, textiles and objects curated to finish a room you already love"}
    ]

    const serviceCardTwo = [
            {id: 1, title:"consult", caption:"We listen, visit the space and define the brief together."},
            {id: 2, title:"design", caption:"Concept boards, layouts and material palettes for your approval."},
            {id: 3, title:"curate", caption:"We source furniture, lighting and art, and manage every order."},
            {id: 4, title:"install", caption:"Delivery, styling and a final walkthrough, so you simply move in"}

    ]

    return(
        <>
            <section id="services" className="w-full px-4 sm:px-6 my-10 py-12 sm:py-20 bg-sand rounded-2xl ">
                <Title name="Services" subName="What we do" />

                <div className="mx-auto my-12 sm:my-20 grid max-w-7xl items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
                    <div className="mx-auto h-80 w-full max-w-xl sm:h-96 lg:h-[37.5rem]">
                        <img className="w-full h-full object-cover rounded-2xl" src={image1} alt="" />
                    </div>
                <div>

                <div className="my-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">

                        {
                            serviceCard.map((card)=>(
                                <div key={card.id} className="flex min-h-48 flex-col items-start justify-between rounded-2xl border border-brass p-5 sm:min-h-52 lg:min-h-64">
                                    <h2 className="text-brass-dark font-serif text-xl">
                                        {card.id}
                                    </h2>

                                    <h1 className="text-brass-dark text-xl font-medium uppercase">
                                        {card.title}
                                </h1>
                                <p className="text-sm sm:text-base lg:text-lg">
                                    {card.caption}
                                </p>
                            </div>
                            ))
                        }

                    </div>
                </div>

                </div>


                <div>
                    <h2 id="process" className="my-10 font-serif text-4xl leading-tight md:text-5xl">
                        How we work
                    </h2>
                </div>

                <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-10" >
                    <div className="mx-auto h-80 w-full max-w-xl sm:h-96 lg:order-2 lg:h-[37.5rem]">
                        <img className="w-full h-full object-cover rounded-2xl" src={image2} alt="" />
                    </div>


                    <div className="my-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:order-1 lg:gap-8">
                    {
                        serviceCardTwo.map((card)=>(
                            <div key={card.id} className="flex min-h-48 flex-col items-start justify-between border-t border-brass p-5 sm:min-h-52 lg:min-h-64">
                                <h2 className="text-brass-dark font-serif text-xl">
                                    {card.id}
                                </h2>

                                <h1 className="text-brass-dark text-xl font-medium uppercase">
                                    {card.title}
                            </h1>
                            <p className="text-sm sm:text-base lg:text-lg">
                                {card.caption}
                            </p>
                        </div>
                        ))
                    }
                    </div>

                </div>


            </section>
        </>
    )
}