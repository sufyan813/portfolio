import { useState, useEffect } from 'react';
import { PortfolioSlider } from '@/components/portfolio/PortfolioSlider';
import { ArrowDown } from 'lucide-react';

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-fog min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 
            className={`font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-wide text-foreground ${
              isLoaded ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            Morten Valde
          </h1>
          
          <p 
            className={`mt-6 text-base md:text-lg text-muted-foreground tracking-wide font-light ${
              isLoaded ? 'animate-fade-up-delay-1' : 'opacity-0'
            }`}
          >
            Gothic logo and brand identity designer
          </p>
          
          <button 
            onClick={scrollToWork}
            className={`mt-16 group inline-flex items-center gap-3 text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-500 ${
              isLoaded ? 'animate-fade-up-delay-2' : 'opacity-0'
            }`}
          >
            View Work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Subtle scroll indicator */}
        <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 ${isLoaded ? 'animate-fade-up-delay-3' : 'opacity-0'}`}>
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-muted-foreground/50 to-transparent" />
        </div>
      </section>

      {/* Portfolio Section */}
      <PortfolioSlider />

      {/* About Section */}
      <section className="py-32 md:py-48">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground mb-12">
              About
            </h2>
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-foreground/90">
              Design focused on symbolism, contrast, and mood. Built for brands that prefer darkness over noise.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground mb-16 text-center">
              Services
            </h2>
            <ul className="space-y-6 text-center">
              {['Logo Design', 'Brand Identity', 'Gothic Visual Concepts'].map((service) => (
                <li 
                  key={service}
                  className="font-display text-xl md:text-2xl text-foreground/80 hover:text-foreground transition-colors duration-300"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 md:py-48 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-display text-sm tracking-[0.3em] uppercase text-muted-foreground mb-12">
              Contact
            </h2>
            <p className="text-muted-foreground mb-12 font-light">
              For inquiries and collaborations
            </p>
            
            <a 
              href="mailto:hello@mortenvalde.com"
              className="inline-block font-display text-2xl md:text-3xl text-foreground hover:text-muted-foreground transition-colors duration-500 border-b border-border hover:border-foreground pb-2"
            >
              hello@mortenvalde.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
            <p className="font-body tracking-wide">
              © 2025 Morten Valde
            </p>
            <nav className="flex gap-8">
              <button onClick={scrollToWork} className="hover:text-foreground transition-colors duration-300">
                Work
              </button>
              <button onClick={scrollToContact} className="hover:text-foreground transition-colors duration-300">
                Contact
              </button>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
