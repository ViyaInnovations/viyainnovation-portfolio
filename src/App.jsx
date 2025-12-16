import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Service from "./components/Service"
import Footer from "./components/Footer"
import TrustBar from "./components/TrustBar"
import Process from "./components/Process"
import PortfolioPreview from "./components/PortfolioPreview"
import MeetTheTeam from "./components/MeetTheTeam"
import useSEO from "../public/hooks/useSEO"
import Contact from "./components/Contact"
function App() {

  useSEO({
    title: "ViyaInnovations | Branding, Web Development & Digital Marketing Agency",
    description:
      "ViyaInnovations is a creative digital agency offering branding, web development, SEO, motion design, digital marketing, photography, and event solutions.",
  });
  return (
    <>

      <NavBar />
      <Hero />
      <TrustBar />
      <Service />
      <Process />
      <PortfolioPreview />
      <MeetTheTeam />
      <Contact />
      <Footer />
    </>
  )
}

export default App