function App() {

  const colors = [
    {
      id: 1,
      color: "ivory",
      className: "bg-ivory"
    },
    {
      id: 2,
      color: "cream",
      className: "bg-cream"
    },
    {
      id: 3,
      color: "sand",
      className: "bg-sand"
    },
    {
      id: 4,
      color: "brass",
      className: "bg-brass"
    },
    {
      id: 5,
      color: "brass-dar",
      className: "bg-brass-dar"
    }
  ]


  return (
    <>

    <section className="mx-auto my-0 p-3 flex flex-row justify-center align-center gap-1 flex-wrap">
        {
          colors.map(col => 
            <div key={col.id} className={`w-[15em] h-[2em] ${col.className} text-center rounded-md`}>
            <p>bg-{col.id}</p>
            </div>
          )
        }

      
    </section>
      
    </>
  )
}

export default App
