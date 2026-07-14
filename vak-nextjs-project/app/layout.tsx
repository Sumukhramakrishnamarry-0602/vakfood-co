import type { Metadata } from 'next';
import { Bodoni_Moda, Inter } from 'next/font/google';
import './globals.css';
import Reveal from '@/components/Reveal';

const display = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'VAK Food Company — Corporate Portfolio',
  description:
    'A premium hospitality and culinary infrastructure group headquartered in Sharjah, UAE — Restaurant Operations, Cloud Kitchens, Premium Catering, and Café & QSR.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        <div className="grain-overlay bg-grain" />
        <Reveal />
        {children}
      </body>
    </html>
  );
}
