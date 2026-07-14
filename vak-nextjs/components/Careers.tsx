import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import Button from '@/components/ui/Button';

export default function Careers() {
  return (
    <section id="careers" className="relative bg-oxblood text-paper py-28 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute top-[-30%] right-[-10%] w-[520px] h-[520px] rounded-full bg-brass/10 blur-[110px]" />
      <Container className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
        <div className="lg:col-span-8 reveal">
          <Eyebrow tone="brass" className="!text-brasslight">Careers</Eyebrow>
          <h2 className="font-display text-[clamp(2.1rem,4vw,3.4rem)] leading-[1.05] max-w-xl">
            Build your career with an enterprise that&rsquo;s still growing.
          </h2>
          <p className="text-[15px] text-paper/65 leading-relaxed max-w-xl mt-6">
            From kitchen leadership to corporate development, VAK is looking for people who share our
            commitment to quality, hospitality, and operational excellence — across restaurants, cloud
            kitchens, catering, and cafés.
          </p>
        </div>
        <div className="lg:col-span-4 lg:justify-self-end reveal reveal-delay-1">
          <Button href="#contact" variant="outline-light">
            Connect With Our Team
          </Button>
        </div>
      </Container>
    </section>
  );
}
