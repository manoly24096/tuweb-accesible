import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Expertise from "./components/Expertise";
import Dominios from "./components/Dominios";
import Metodologia from "./components/Metodologia";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Dominios />
        <Metodologia />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
