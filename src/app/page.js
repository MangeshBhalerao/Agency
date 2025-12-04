// Import all section components
import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Services from '@/sections/Services';
import Contact from '@/sections/Contact';

// Main homepage component - Integrates all sections
export default function Home() {
  return (
    // Main container with black background
    <main style={{ background: '#000000' }}>
      {/* Navigation bar - Fixed at top */}
      <Navbar />
      {/* Hero section - Landing page */}
      <Hero />
      {/* About section - Company information */}
      <About />
      {/* Projects section - Portfolio showcase */}
      <Projects />
      {/* Services section - What we offer */}
      <Services />
      {/* Contact section - Get in touch form */}
      <Contact />
    </main>
  );
}
