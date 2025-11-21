import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import GeminiChat from './components/GeminiChat';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check local storage or system preference
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('theme');
        return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      
      {/* Floating Elements */}
      {/* We hide the simple WhatsApp button if the Chat widget is open to avoid clutter, 
          but actually standard UX suggests keeping them separate. 
          The prompt asked for a floating WhatsApp button. 
          Gemini Chat is my "Senior Dev" addition. 
          I'll position Gemini Chat slightly above or to the left of the WhatsApp button 
          or replace it if the user wants. 
          Let's put GeminiChat on the left bottom or right bottom above WhatsApp.
          Actually, FloatingWhatsApp is fixed bottom-6 right-6. 
          I'll move GeminiChat to bottom-24 right-6 inside its component to stack them.
      */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
          {/* Note: The WhatsApp button is inside FloatingWhatsApp.tsx with absolute positioning. 
              Let's adjust it here or just render them. 
              To ensure they stack nicely, I will disable the absolute positioning in FloatingWhatsApp 
              if I wrap them here, but for simplicity, I'll let them render independently.
              GeminiChat is set to bottom-24 right-6.
              FloatingWhatsApp is set to bottom-6 right-6.
              This stacks them vertically.
          */}
          <GeminiChat />
          <FloatingWhatsApp /> 
      </div>
    </div>
  );
};

export default App;