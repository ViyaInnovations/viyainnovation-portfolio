<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contac from "./components/Contact";
=======
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Service from "./components/Service" 
import Studies from "./components/Studies"  
import Footer from "./components/Footer"
import TrustBar from "./components/TrustBar"
import Process from "./components/Process"
import PortfolioPreview from "./components/PortfolioPreview"
import Testimonials from "./components/Testimonials"
import MeetTheTeam from "./components/MeetTheTeam"
import Contact from "./components/Contact"
>>>>>>> main
function App() {

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contac />} />

<<<<<<< HEAD
      </Routes>
    </BrowserRouter>
  );
=======
8,OurStaff / MeetTheTeam,Humanize the company. Briefly introduce key members to build connection and transparency.
9,CallToAction (Secondary),"A final, distinct section to prompt conversion before the footer (e.g., ""Ready to Elevate Your Brand? Contact Us Today"")."
10,Footer,"Contains contact details, sitemap links, social media icons, and legal information."
    */}
    <NavBar />
    <Hero />
    <TrustBar/>
    <Service />
    <Process/>
<section id="work">
  <PortfolioPreview/>
</section>
{/* <Testimonials/> */}
<section id="about"> 
  <MeetTheTeam/>
</section>

<section id="contact">
  <Contact/>

</section>
 <Footer />


    {/* <Studies /> */}

   

  

    </>
  )
>>>>>>> main
}

export default App
