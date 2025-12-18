import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import useSEO from "../../public/hooks/useSEO";

export default function Careers() {
  useSEO({
    title: "Careers | ViyaInnovations",
    description:
      "Join ViyaInnovations and be part of a creative digital agency shaping brands and digital experiences.",
  });

  return (
    <>
      <NavBar />
      <main className="min-h-screen p-10 text-center">
        <h1 className="text-3xl font-bold">Careers at ViyaInnovations</h1>
        <p className="mt-4">We’re hiring! Please contact us for opportunities.</p>
      </main>
      <Footer />
    </>
  );
}
