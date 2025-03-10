import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TechStack from '@/components/TechStack';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Hero />
      <Features />
      <TechStack />
      <CTA />
      <Footer />
    </main>
  );
}