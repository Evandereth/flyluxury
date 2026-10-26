import Hero from "./components/Hero"
import Navbar from "./components/Navbar"

function App() {

  return (
    <>
    <div className="w-[95%] mx-auto my-2">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
    </>
  )
}

export default App
