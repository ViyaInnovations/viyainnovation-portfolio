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
function App() {

  return (
    <>

    {/* 
 Order,Component/Section,Purpose & Content
1,Navbar,"Essential for navigation, branding, and contact access. Should be sticky or fixed."
2,HeroSection,"First impression! Clearly state who you are and what you do. Include your 4 rotating images and a strong Call to Action (CTA) button (e.g., ""Start a Project"")."
3,ClientsOrTrustBar,Build Immediate Trust. A simple horizontal bar showing logos of recognizable past clients or industry accreditations.
4,OurServices,"What you offer. Detail the services from your revised list. Group them logically (e.g., Strategy, Design, Development)."
5,WhyChooseUs / OurProcess,"Differentiate yourself. Briefly explain your unique approach, values, or the step-by-step process of working with you."
6,OurWork / PortfolioPreview,"Show, don't just tell. This is critical. Showcase 3-4 of your absolute best case studies with high-quality visuals. (Crucial for global clients)"
7,Testimonials / SocialProof,External validation. Quotes or short video clips from happy clients.

8,OurStaff / MeetTheTeam,Humanize the company. Briefly introduce key members to build connection and transparency.
9,CallToAction (Secondary),"A final, distinct section to prompt conversion before the footer (e.g., ""Ready to Elevate Your Brand? Contact Us Today"")."
10,Footer,"Contains contact details, sitemap links, social media icons, and legal information."
    */}
    <NavBar />
    <section id="#hero">
      <Hero />
    </section>
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
}

export default App