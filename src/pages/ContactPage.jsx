import NavBar from "../components/NavBar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import useSEO from "../../public/hooks/useSEO";

export default function ContactPage() {
  useSEO({
    title: "Contact Us | ViyaInnovations",
    description:
      "Get in touch with ViyaInnovations for branding, web development, and digital marketing solutions.",
  });

  return (
    <>
      <NavBar />
      <Contact />
      <Footer />
    </>
  );
}
