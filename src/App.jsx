function App() {

  const colors = [
    {
      id: 1,
      color: "ivory"
    },
    {
      id: 2,
      color: "cream"
    },
    {
      id: 3,
      color: "sand"
    },
    {
      id: 4,
      color: "brass"
    },
    {
      id: 5,
      color: "brass-dar"
    }
  ]


  return (
    <>

    <section className="mx-auto my-0 p-3 flex flex-row justify-center align-center gap-1 flex-wrap">
        {
          colors.map(col => 
            <div Key={col.Key} className={`w-[15em] h-[2em] bg-${col.color} text-center rounded-md`}>
              <p>bg-{col.id}</p>
            </div>
          )
        }

      
    </section>
      
    </>
  )
}

export default App
