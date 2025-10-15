import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Partners from './components/Partners';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import SuccessStories from './components/SuccessStories';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  const [showForm, setShowForm] = useState(false);

  const scrollToForm = () => {
    setShowForm(true);
    setTimeout(() => {
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero onCtaClick={scrollToForm} />
      <Partners />
      <HowItWorks />
      <WhyChooseUs onCtaClick={scrollToForm} />
      <SuccessStories />
      <ContactForm show={showForm} />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
