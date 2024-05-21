import { AboutMe, AnimCursor, Contact, Hero, MatrixRainingCode, Navbar, Projects, Skills } from "./components"


function App() {

  return (
    <div className="min-h-screen overflow-hidden">
      <MatrixRainingCode className="absolute inset-0" />
      <div className="flex flex-col">
        <AnimCursor/>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Contact/>
      </div>
    </div>
  )
}

export default App
