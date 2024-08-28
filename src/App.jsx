import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Pricing from "./Components/Pricing/Pricing"
import Services from "./Components/Services/Services"


function App() {
  

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Pricing />
      <Contact />
      <Footer/>
    </>
  )
}

export default App
