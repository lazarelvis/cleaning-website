import Hero from "./components/Hero";
import Services from "./components/Services";
import BeforeAndAfter from "./components/BeforeAndAfter";

export default function Home() {
  return (
    <div className=" min-h-screen pb-20 font-[family-name:var(--font-poppins)]">
      <main>
        <Hero />
        <Services />
        <BeforeAndAfter />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
