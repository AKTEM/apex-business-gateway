import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseAkilina from './components/WhyChooseAkilina';
import VideoSection from './components/VideoSection';
import ClientsServed from './components/ClientsServed';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';

function AppContent() {
  return (
    <div className="bg-white dark:bg-brand-dark transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseAkilina />
        <VideoSection />
        <ClientsServed />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppChat />
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
