import Portfolio from "./components/Portfolio"
import Extra from "./components/Extra"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
    <div className="w-[95%] mx-auto my-2">
      <Navbar />
      <main>
        <Hero />
        <Extra />
        <Portfolio />
      </main>
    </div>
    </>
  )
}

export default App
