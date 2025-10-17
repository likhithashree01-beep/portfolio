import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Contact />

      <footer className="bg-black border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Likhitha Shree Bethi. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://github.com/likhithashree01-beep" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-nvidia-green transition-colors text-sm">
                GitHub
              </a>
              <a href="https://linkedin.com/in/likhitha-shree-bethi-a48927156" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-nvidia-green transition-colors text-sm">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
