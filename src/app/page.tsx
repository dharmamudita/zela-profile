import ThreeGalaxyBackground from '@/components/ThreeGalaxyBackground';
import HeroSection from '@/components/HeroSection';
import DocumentationSection from '@/components/DocumentationSection';
import SocialLinks from '@/components/SocialLinks';
import ProductGrid from '@/components/ProductGrid';
import ParallaxGallery from '@/components/ParallaxGallery';
import AboutSection from '@/components/AboutSection';
import SupportContact from '@/components/SupportContact';
import { Instagram } from 'lucide-react';

export default function Home() {
  return (
    <main style={{ position: 'relative', width: '100%', overflow: 'hidden', minHeight: '100vh' }}>
      <ThreeGalaxyBackground />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection />
        <AboutSection />
        <SocialLinks />
        <DocumentationSection />
        <ProductGrid />
        <SupportContact />

        <footer style={{
          textAlign: 'center',
          padding: '3rem 2rem',
          color: 'rgba(255,255,255,0.4)',
          fontSize: '0.9rem',
          marginTop: '4rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          background: 'rgba(0,0,0,0.2)'
        }}>
          <p>© {new Date().getFullYear()} _.zeeelaa. All rights reserved.</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>Designed with Galaxy Aesthetics</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.75rem', opacity: 0.7, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
            Website by <Instagram size={12} style={{ marginLeft: '4px' }} /> <a href="https://instagram.com/anothervoltz" target="_blank" rel="noopener noreferrer" style={{ color: '#ec4899', textDecoration: 'none' }}>anothervoltz</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
