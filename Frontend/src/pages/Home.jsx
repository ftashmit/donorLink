import { Element } from "react-scroll";
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import TestimonialCarousel from "../components/Carausal";
const Home = () => {
  return (
    <div className="">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:16px_20px]">
        {/* <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:16px_20px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div> */}

        <Navbar />
        <Element name="hero" className="z-10">
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
  );
};

export default Home;
