import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';

const pillars = [
  {
    n: '01',
    title: 'Authentic Culinary Preservation',
    body: 'Sourcing regional ingredients and protecting legacy preparations through strict recipe documentation and central processing audits.',
  },
  {
    n: '02',
    title: 'Operational Optimization',
    body: 'Digital analytics deployed across inventory management, supply routes, kitchen prep schedules, and workforce distribution.',
  },
  {
    n: '03',
    title: 'Sustainable Growth Models',
    body: 'Low-capex, asset-light expansion through cloud kitchen integration, master-franchising, and strategic B2B supply contracts.',
  },
  {
    n: '04',
    title: 'Customer-Centric Ecosystems',
    body: 'Direct feedback tracking and deep loyalty data that continuously shape menu development and brand positioning.',
  },
];

const values = [
  ['Quality Excellence', 'Zero-compromise standards across the culinary pipeline, from procurement to table presentation.'],
  ['Authenticity & Tradition', 'Precise preparation profiles, contextualized gracefully for a cosmopolitan audience.'],
  ['Customer First', 'Every guest touchpoint reflects proactive hospitality and dynamic responsiveness.'],
  ['Pioneering Innovation', 'Automated kitchen technology, predictive logistics, and agile digital-first hospitality.'],
  ['Sustainability', 'Food-waste reduction protocols, clean sourcing, and compostable packaging innovation.'],
  ['Integrity & Professionalism', 'Compliance, fiscal transparency, and equitable labor standards at every tier.'],
];

export default function About() {
  return (
    <section id="about" className="bg-paper py-28 md:py-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 mb-24">
          <div className="lg:col-span-5 reveal">
            <Eyebrow>About Us</Eyebrow>
            <h2 className="font-display text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.05] text-pine mb-8">
              From one cafeteria to a multi-brand hospitality group.
            </h2>
            <div className="space-y-5 text-[15px] leading-relaxed text-ink/70">
              <p>
                Our journey began with a humble, community-centric cafeteria in Al Nahda — built on fresh
                procurement, legacy recipes, and warm hospitality. That first address earned an immediate,
                loyal following and proved traditional culinary heritage could coexist with rigorous modern
                food-safety standards.
              </p>
              <p>
                As digital delivery, plant-based wellness, and premium event culture reshaped the UAE&rsquo;s
                food scene, we transitioned into a multi-brand corporate vehicle — with the procurement,
                production, and governance infrastructure to match.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 reveal reveal-delay-1">
            <div className="relative h-full min-h-[360px] bg-pine text-paper p-10 md:p-14 flex flex-col justify-between overflow-hidden">
              <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-brass/10 blur-[90px]" />
              <p className="text-[11px] uppercase tracking-widest2 text-brasslight/80 relative">A Note on Our Foundation</p>
              <p className="font-display italic text-[clamp(1.4rem,2.4vw,2rem)] leading-snug relative mt-6 mb-10 max-w-2xl">
                &ldquo;Today, the company&rsquo;s operating infrastructure encompasses multiple specialized
                brands, robust procurement supply chains, and a resilient culinary production network —
                prepared to capture expanding market share across the UAE.&rdquo;
              </p>
              <div className="relative flex items-center gap-4 text-[13px] text-paper/60">
                <span className="w-8 h-px bg-brass" />
                Corporate Governance, VAK Food Company
              </div>
            </div>
          </div>
        </div>

        {/* Vision / Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line mb-28 border border-line reveal">
          <div className="bg-panel p-10 md:p-12">
            <Eyebrow tone="brass">Our Vision</Eyebrow>
            <p className="text-[15px] leading-relaxed text-ink/75">
              To establish VAK Food Company as the standard-setting food and beverage
              enterprise within the GCC region — globally celebrated for authentic vegetarian culinary
              innovation, premier multi-channel delivery, high-yield scalable growth, and unwavering
              consumer satisfaction.
            </p>
          </div>
          <div className="bg-paper p-10 md:p-12">
            <Eyebrow>Our Mission</Eyebrow>
            <p className="text-[15px] leading-relaxed text-ink/75">
              To curate and deliver nutritionally balanced, culturally rich culinary experiences by deploying
              premium ingredients, maintaining rigorous operational excellence, pioneering digital food
              concepts, and reinforcing long-term stakeholder value.
            </p>
          </div>
        </div>

        {/* Pillars — institutional list, not cards */}
        <div className="mb-28">
          <Eyebrow tone="oxblood" className="reveal">Corporate Pillars</Eyebrow>
          <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.2rem)] text-pine mb-10 reveal">
            Four pillars of institutional execution.
          </h3>
          <div className="border-t border-line reveal">
            {pillars.map((p) => (
              <div key={p.n} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-8 border-b border-line items-baseline">
                <div className="md:col-span-1 font-display text-brass text-lg">{p.n}</div>
                <div className="md:col-span-4">
                  <h4 className="font-display text-[19px] text-pine leading-snug">{p.title}</h4>
                </div>
                <div className="md:col-span-7 text-[14.5px] text-ink/65 leading-relaxed">{p.body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div>
          <Eyebrow className="reveal">Core Values</Eyebrow>
          <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.2rem)] text-pine mb-10 reveal">
            The non-negotiables.
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 reveal">
            {values.map(([title, body]) => (
              <div key={title} className="pt-6 border-t-[1.5px] border-pine">
                <h4 className="font-display text-[17px] text-pine mb-2">{title}</h4>
                <p className="text-[13.5px] text-ink/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
