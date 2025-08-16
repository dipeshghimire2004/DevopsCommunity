import About from "./components/About";
import Contact from "./components/Contact";
import Events from "./components/Events";
import Team from "./components/Team";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Team />
      <Contact />
    </main>
  );
}
