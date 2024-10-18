import { Element } from "react-scroll";
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Contact from "../components/Contact"

const Home = () => {
  return (
    <div>
        <Navbar />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  )
}

export default Home