import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import Extra from "./components/Extra"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Quote from "./components/Quote"

function App() {

  return (
    <>
    <div className="w-[95%] mx-auto my-2">
      <Navbar />
      <main>
        <Hero />
        <div className="bg-white rounded-2xl my-10">
          <Extra />
          <Quote />
        </div>

        <Portfolio />
        <Services />
      </main>
    </div>
    </>
  )
}

export default App
