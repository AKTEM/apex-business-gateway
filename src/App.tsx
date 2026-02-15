import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import OurApproach from './components/OurApproach';
import Partnerships from './components/Partnerships';
import CTASection from './components/CTASection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar scrolled={scrolled} />
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <OurApproach />
      <Partnerships />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
