import { Features, Footer, Hero, MatrixRainingCode, Navbar, Pricing, Testimonials } from "./components"


function App() {

  return (
    <div className="min-h-screen overflow-hidden">
      <MatrixRainingCode className="absolute inset-0" />
      <div className="flex flex-col">
      <Navbar/>
      <Hero/>
      <Features/>
      <Testimonials/>
      <Pricing/>
      <Footer/>
      </div>
    </div>
  )
}

export default App
