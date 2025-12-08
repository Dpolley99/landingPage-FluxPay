import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import HowItWorks from './components/HowItWorks';
import Problem from './components/Problem';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <HowItWorks />
      <Problem />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

