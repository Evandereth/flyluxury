import Animation from './Animation'
import image1 from '../img/img1.jpg'
import image2 from '../img/img2.jpg'
import image3 from '../img/img5.jpg'
import image4 from '../img/img4.jpg'



const projects = [
  { title: 'Living Room', type: 'Residential', city: 'Lagos', image: image1,
    span: 'md:col-span-8', tone: 'from-cream to-sand', height:'h-64 md:h-80 lg:h-[26rem]' } ,
  { title: 'Show Room', type: 'Styling', city: 'Lagos', image: image4,
    span: 'md:col-span-6', tone: 'from-ivory to-sand', height:'h-64 md:h-80 lg:h-[26rem]' },
  { title: 'Office Room(Reception)', type: 'Commercial', city: 'Port Harcourt', image: image3,
    span: 'md:col-span-5', tone: 'from-sand to-[#CDB991]', height:'h-64 md:h-80 lg:h-[26rem]' },
  { title: 'Bedroom', type: 'Residential', city: 'Lagos', image: image2,
    span: 'md:col-span-9', tone: 'from-cream to-[#DDCDB0]', height:'h-64 md:h-80 lg:h-[26rem]' },
]

export default function Portfolio() {
  return (
    <section id="work" className="bg-cream px-6 py-20 md:py-32 rounded-2xl">
      <div className="mx-auto max-w-6xl">
        <Animation>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4 md:mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-brass-dark">
                Portfolio
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                Recent projects
              </h2>
            </div>
            <a
              href="#contact"
              className="border-b border-brass py-1 text-xs uppercase tracking-[0.18em] transition-colors hover:text-brass-dark"
            >
              Start your project
            </a>
          </div>
        </Animation>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-14">
          {projects.map((p, i) => (
            <Animation key={i} delay={(i % 2) * 120} className={p.span}>
              <article className={`group relative overflow-hidden ${p.height} `}>
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.title}, ${p.type} project in ${p.city}`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-2xl"
                  />
                ) : (
                  <div
                    className={`size-full bg-linear-to-br ${p.tone} transition-transform duration-700 group-hover:scale-105 rounded-2xl`}
                  />
                )}

                <div className="absolute bottom-4 left-4 bg-ivory/50 px-4 py-3 backdrop-blur rounded-lg">
                  <p className="font-serif text-lg leading-tight">{p.title}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-brass-dark">
                    {p.type} · {p.city}
                  </p>
                </div>
              </article>
            </Animation>
          ))}
        </div>
      </div>
    </section>
  )
}