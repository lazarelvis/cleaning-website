import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className=" min-h-screen pb-20 font-[family-name:var(--font-poppins)]">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Services />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
