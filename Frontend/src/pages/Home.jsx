import { Element } from "react-scroll";
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Contact from "../components/Contact"
import TestimonialCarousel from "../components/Carausal"
const Home = () => {
  return (
    <div className="relative min-h-screen flex flex-col">
      <div  className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
      {/* <div class="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-[radial-gradient(circle_800px_at_100%_200px,#f56e69,transparent)]"></div> */}
        <div className="flex-grow">
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
            
            <Element name="testimonial">
              <TestimonialCarousel />
            </Element>
            
            <Element name="footer">
            <Footer />
            </Element>

        </div>
              
          </div>
    </div>
    
  )
}

export default Home;