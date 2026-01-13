import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Journey from '@/components/Journey';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <main className="relative">
      <Header />
      <Hero />
      <Journey />
      <Services />
      <Portfolio />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default Index;
