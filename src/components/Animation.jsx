import { useEffect, useRef, useState } from "react"

export default function Animation({children, delay=0, className=''}){

    const ref = useRef(null)
    const [visible, setVisible] = useState(false)

    useEffect(()=>{
        const el= ref.current
        const observer = new IntersectionObserver(([entry])=>{
            if(entry.isIntersecting){
                setVisible(true)
                observer.disconnect() //lets me animate just once
            }
        },
        {threshold: 0.15, rootMargin: '0px 0px -8% 0px'})
        observer.observe(el)
        return()=> observer.disconnect()
    }, [])

    return(
        <>
            <div 
            ref={ref} 
            style={{transitionDelay:`${delay}ms`}}
            className={`transition duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:none ${visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} ${className}`}
            >
                {children}
            </div>
        </>
    )
}