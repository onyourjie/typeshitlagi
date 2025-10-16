import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import RecentProjects from "./components/RecentProjects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import ThemeToggle from "./components/ThemeToggle";
import { FloatingNav } from "./components/ui/floating-navbar";
import { navItems } from "@/data/nav-items";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black flex justify-center items-center mx-auto 
    px-5 sm:px-10">
      <div className="max-w-7xl w-full">
        <ThemeToggle />
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <TechStack />
        <RecentProjects />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}
