'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Us' },
  { href: '#divisions', label: 'Divisions' },
  { href: '#careers', label: 'Careers' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-paper/95 backdrop-blur-md border-b border-line' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-wrap px-6 md:px-10 flex items-center justify-between h-20 md:h-24">
        <a href="#home" className={`flex items-center gap-3 font-display text-xl md:text-2xl tracking-tight ${scrolled ? 'text-pine' : 'text-paper'}`}>
          <span
            className={`w-4 h-4 border-[2px] rounded-[3px] relative flex-none ${scrolled ? 'border-brass' : 'border-brasslight'}`}
          >
            <span className={`absolute inset-[3px] rounded-full ${scrolled ? 'bg-brass' : 'bg-brasslight'}`} />
          </span>
          <span>
            VAK
            <span className="hidden sm:inline font-body text-[10px] tracking-widest2 uppercase align-middle ml-2 opacity-70">
              Food &amp; Beverage Co.
            </span>
          </span>
        </a>

        <div className={`hidden md:flex items-center gap-10 text-[13px] font-medium tracking-wide ${scrolled ? 'text-ink' : 'text-paper'}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="relative py-1 after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-brass after:transition-all after:duration-300 hover:after:w-full">
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className={`hidden md:inline-flex text-[11px] font-medium uppercase tracking-widest2 px-6 py-3 border transition-colors duration-300 ${
            scrolled
              ? 'border-ink/25 text-ink hover:bg-ink hover:text-paper'
              : 'border-paper/40 text-paper hover:bg-paper hover:text-oxblood'
          }`}
        >
          Enquire
        </a>

        <button
          aria-label="menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`w-6 h-px ${scrolled ? 'bg-ink' : 'bg-paper'}`} />
          <span className={`w-6 h-px ${scrolled ? 'bg-ink' : 'bg-paper'}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-paper border-t border-line px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-ink text-sm font-medium">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
