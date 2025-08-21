import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

function Homepage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default Homepage;
