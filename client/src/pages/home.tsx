import { Navigation } from '@/components/ui/navigation';
import { Hero } from '@/components/sections/hero';
import { Experience } from '@/components/sections/experience';
import { Skills } from '@/components/sections/skills';
import { Projects } from '@/components/sections/projects';
import { Philosophy } from '@/components/sections/philosophy';
import { Vision } from '@/components/sections/vision';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Philosophy />
      <Vision />
      <Contact />
      <Footer />
    </div>
  );
}
