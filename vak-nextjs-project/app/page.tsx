import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Leadership from '@/components/Leadership';
import Divisions from '@/components/Divisions';
import MenuMatrix from '@/components/MenuMatrix';
import Operations from '@/components/Operations';
import CateringSustainability from '@/components/CateringSustainability';
import Roadmap from '@/components/Roadmap';
import FranchisePartnerships from '@/components/FranchisePartnerships';
import Careers from '@/components/Careers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Leadership />
        <Divisions />
        <MenuMatrix />
        <Operations />
        <CateringSustainability />
        <Roadmap />
        <FranchisePartnerships />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
