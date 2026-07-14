import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-pine text-paper">
      {/* atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full bg-pine3/40 blur-[120px]" />
        <div className="absolute bottom-0 left-[-10%] w-[420px] h-[420px] rounded-full bg-brass/10 blur-[100px]" />
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage:
            'linear-gradient(rgba(247,242,230,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(247,242,230,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }} />
      </div>

      <Container className="relative pt-40 md:pt-48 pb-28 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-end">
          <div className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-widest2 text-brasslight/90 mb-7 font-medium">
              Al Nahda, Sharjah &nbsp;·&nbsp; United Arab Emirates &nbsp;·&nbsp; Est. as a single cafeteria concept
            </p>
            <h1 className="font-display font-medium leading-[0.98] text-[clamp(2.8rem,7vw,5.6rem)] tracking-tight">
              Pure vegetarian
              <br />
              <span className="italic font-normal text-brasslight">hospitality,</span>
              <br />
              engineered like
              <br />
              an institution.
            </h1>
          </div>

          <div className="lg:col-span-5">
            <p className="text-[17px] leading-relaxed text-paper/75 max-w-md mb-9 lg:ml-auto">
              A diversified culinary infrastructure group headquartered in Sharjah — restaurants, cloud
              kitchens, catering, and cafés, unified under one standard of authenticity and one governance
              framework built for institutional scale.
            </p>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <Button href="#divisions" variant="outline-light">
                Our Divisions
              </Button>
              <Button href="#about" variant="solid" className="!bg-brass hover:!bg-brass/90 !text-ink">
                About the Company
              </Button>
            </div>
          </div>
        </div>

        {/* layered composition: framed panel + floating quote card */}
        <div className="relative mt-24 md:mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-8 relative border border-paper/15 bg-gradient-to-br from-pine2/60 via-pine/40 to-oxblood/30 p-10 md:p-14 min-h-[280px] flex flex-col justify-between">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-widest2 text-paper/50">
                <span>Corporate Portfolio — 2026</span>
                <span>Restaurants · Cloud Kitchens · Catering · Café</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                {['Vrinda', 'Bhoji', 'Khichi', 'Al Nida'].map((b) => (
                  <div key={b} className="border-t border-paper/20 pt-4">
                    <p className="font-display italic text-2xl text-paper">{b}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 relative border border-paper/15 bg-paper text-ink p-9 flex flex-col justify-between shadow-panel">
              <p className="font-display italic text-[19px] leading-snug text-pine">
                &ldquo;Authentic vegetarian cuisine, executed with absolute meticulousness, holds a universal
                appeal.&rdquo;
              </p>
              <p className="text-[11px] uppercase tracking-widest2 text-ink/50 mt-8">Founding Premise</p>
            </div>
          </div>
        </div>
      </Container>

      {/* stat strip, overlapping into next section */}
      <div className="relative border-t border-paper/15 bg-pine2/60">
        <Container className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-paper/15">
          {[
            ['10', 'Cloud kitchens across the UAE'],
            ['4', 'Distinct hospitality brands'],
            ['100%', 'Pure vegetarian across every kitchen'],
          ].map(([n, l], i) => (
            <div key={i} className="py-8 px-6 md:px-10 first:pl-0">
              <p className="font-display text-3xl md:text-4xl text-brasslight">{n}</p>
              <p className="text-[13px] text-paper/60 mt-2 max-w-[24ch]">{l}</p>
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}
