import Footer from "./Footer"
import TrustBar from "./TrustBar"
import Process from "./Process"
import PortfolioPreview from "./PortfolioPreview"
import Testimonials from "./Testimonials"
import MeetTheTeam from "./MeetTheTeam"
import Hero from "./Hero"
import Service from "./Service" 
import Studies from "./Studies" 
export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <section id='service'>
        <Service />
      </section>
      <Process />
      <PortfolioPreview />
      <MeetTheTeam />
      <Footer />
    </>
  );
}
