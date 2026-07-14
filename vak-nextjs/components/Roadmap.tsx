import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';

const phases = [
  {
    n: 'Phase 01',
    title: 'Foundation & Stabilization',
    items: [
      'Formalize corporate governance',
      'Consolidate current restaurant operations',
      'Build the baseline 10-unit cloud kitchen grid',
      'Centralize procurement, standardize recipes',
    ],
  },
  {
    n: 'Phase 02',
    title: 'Regional Expansion',
    items: [
      'Scale into Abu Dhabi and Dubai',
      'Open flagship dining in key retail hubs',
      'Expand commercial catering to B2B clients',
      'Roll out digital logistics optimization',
    ],
  },
  {
    n: 'Phase 03',
    title: 'Franchise & Global Reach',
    items: [
      'Launch master franchise framework',
      'Expand into Saudi Arabia, Oman, Qatar',
      'Form joint-venture retail partnerships',
      'Explore international metro markets',
    ],
  },
];

export default function Roadmap() {
  return (
    <section className="bg-panel py-28 md:py-36">
      <Container>
        <div className="max-w-2xl mb-8 reveal">
          <Eyebrow tone="oxblood">Strategic Growth Roadmap</Eyebrow>
          <h2 className="font-display text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.05] text-pine mb-6">
            A phased approach to regional reach.
          </h2>
          <p className="text-[15px] text-ink/65 leading-relaxed">
            Each milestone is gated by strict financial KPIs — capital allocation requires predefined
            cash-flow thresholds and secured anchor real estate.
          </p>
        </div>

        <div className="relative mt-20 reveal">
          <div className="hidden md:block absolute top-[7px] left-0 right-0 h-px bg-line" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {phases.map((p) => (
              <div key={p.n} className="relative pt-8 md:pt-10">
                <span className="hidden md:block absolute top-0 left-0 w-3.5 h-3.5 rounded-full bg-brass ring-4 ring-panel" />
                <p className="text-[11px] uppercase tracking-widest2 text-brass font-semibold mb-4">{p.n}</p>
                <h4 className="font-display text-[22px] text-pine mb-6 leading-snug">{p.title}</h4>
                <ul className="flex flex-col">
                  {p.items.map((it) => (
                    <li key={it} className="text-[13.5px] text-ink/65 py-3 border-t border-line leading-relaxed">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
