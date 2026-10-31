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
            <section className="w-full px-6 py-20 md:py-32">
                <Title name="Services" />

                <div className="mx-auto my-20 flex flex-col md:flex-row justify-center items-center gap-10">
                    <div className=" w-full h-70 md:w-10 md:h-50 lg:w-250 lg:h-150">
                        <img className="w-full h-full object-cover rounded-2xl" src={image1} alt="" />
                    </div>
                <div>
                    <div>
                    <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                        Here's what we do
                    </h2>
                </div>
                <div className="my-10 flex flex-wrap gap-5 justify-start items-center">

                        {
                            serviceCard.map((card)=>(
                                <div key={card.id} className="w-80 h-50 md:50  lg:w-80 lg:h-50 flex flex-col justify-between items-start border border-sand p-5 rounded-xl">
                                    <h2 className="text-brass-dark">
                                        {card.id}
                                    </h2>

                                    <h1 className="text-ink text-2xl font-medium">
                                        {card.title}
                                </h1>
                                <p>
                                    {card.caption}
                                </p>
                            </div>
                            ))
                        }
                    
                    </div>
                </div>
                    
                </div>

                



                {/* <div className="md:w-[90%] mx-auto flex flex-col md:flex-row justify-center items-center gap-10">
                    <div>
                            <div>
                    <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                        How we work
                    </h2>
                </div>

                <div className="my-10 flex flex-wrap gap-5 justify-start items-center">
{
                        serviceCardTwo.map((card)=>(
                            <div key={card.id} className="w-80 h-50 flex flex-col justify-between items-start border-t border-sand p-5">
                                <h2 className="text-brass-dark">
                                    {card.id}
                                </h2>

                                <h1 className="text-ink text-xl font-medium uppercase">
                                    {card.title}
                            </h1>
                            <p>
                                {card.caption}
                            </p>
                        </div>
                        ))
                    }
                </div>
                    </div>

                    <div className="w-full h-70 lg:w-250 lg:h-150">
                        <img className="w-full h-full object-cover rounded-2xl" src={image2} alt="" />
                    </div>
                </div> */}

                
            </section>
        </>
    )
}