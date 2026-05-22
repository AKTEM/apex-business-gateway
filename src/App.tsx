import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseAkilina from './components/WhyChooseAkilina';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function AppContent() {
  return (
    <div className="bg-white dark:bg-brand-dark transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseAkilina />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
