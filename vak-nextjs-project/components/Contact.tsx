'use client';

import { useState, FormEvent } from 'react';
import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';

const registry: [string, string][] = [
  ['Headquarters', 'Al Nahda, Sharjah, UAE'],
  ['Landline', '+971 6 563 1954'],
  ['Mobile', '+971 50 551 8726'],
  ['Digital Portal', 'To be updated'],
  ['Corporate E-mail', 'To be updated'],
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    e.currentTarget.reset();
    setSent(true);
  }

  return (
    <section id="contact" className="bg-paper py-28 md:py-36">
      <Container>
        <div className="max-w-2xl mb-16 reveal">
          <Eyebrow>Corporate Registry &amp; Contact</Eyebrow>
          <h2 className="font-display text-[clamp(2rem,3.8vw,3.2rem)] leading-[1.05] text-pine mb-6">
            Let&rsquo;s talk investment, franchise, or catering.
          </h2>
          <p className="text-[15px] text-ink/65 leading-relaxed">
            Connect with our corporate development team for investment inquiries, franchise applications, and
            catering contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 border border-line reveal">
          <div className="lg:col-span-5 bg-panel p-10 md:p-12">
            {registry.map(([label, value]) => (
              <div key={label} className="flex justify-between items-baseline py-5 border-t border-line first:border-t-0 gap-4">
                <span className="text-[11px] uppercase tracking-widest2 text-pine font-medium flex-none">{label}</span>
                <span className="text-[14px] text-ink/75 text-right">{value}</span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-7 bg-paper p-10 md:p-12 flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              <label className="block mb-6">
                <span className="block text-[11px] uppercase tracking-widest2 text-pine font-medium mb-2">Name</span>
                <input required type="text" className="w-full bg-transparent border-b border-line focus:border-pine outline-none py-2 text-[14.5px] transition-colors" />
              </label>
              <label className="block mb-6">
                <span className="block text-[11px] uppercase tracking-widest2 text-pine font-medium mb-2">Company</span>
                <input type="text" className="w-full bg-transparent border-b border-line focus:border-pine outline-none py-2 text-[14.5px] transition-colors" />
              </label>
            </div>
            <label className="block mb-6">
              <span className="block text-[11px] uppercase tracking-widest2 text-pine font-medium mb-2">Email</span>
              <input required type="email" className="w-full bg-transparent border-b border-line focus:border-pine outline-none py-2 text-[14.5px] transition-colors" />
            </label>
            <label className="block mb-8">
              <span className="block text-[11px] uppercase tracking-widest2 text-pine font-medium mb-2">Message</span>
              <textarea required rows={3} className="w-full bg-transparent border-b border-line focus:border-pine outline-none py-2 text-[14.5px] resize-y transition-colors" />
            </label>
            <div className="flex items-center gap-6">
              <Button type="submit">Submit Enquiry</Button>
              {sent && (
                <p className="text-[13px] text-pine">Thank you — our team will be in touch shortly.</p>
              )}
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
}
