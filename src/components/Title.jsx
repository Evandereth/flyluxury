export default function Title({name, subName}){
    return(
        <>
             <div>
              <p className="text-xs uppercase tracking-[0.28em] text-brass-dark">
                {name}
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                {subName}
              </h2>
            </div>
        </>
    )
}