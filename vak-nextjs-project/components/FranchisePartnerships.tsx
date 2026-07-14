import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';

const franchise = [
  ['Flexible Operating Formats', 'Full dining layouts, express counters, or digital delivery pods.'],
  ['Site Selection Support', 'Demographic tools, foot-traffic analytics, lease negotiation.'],
  ['Training & Launch', 'Kitchen management, service standards, opening marketing playbooks.'],
  ['Supply Chain Access', 'Audited vendors, proprietary spice mixes, volume-discounted contracts.'],
];

const partnerships = [
  ['Investor Partnerships', 'Equity and debt structures for institutional funds accelerating UAE expansion.'],
  ['Real Estate Alliances', 'Anchor tenancy with mall developers and mixed-use property managers.'],
  ['B2B & Institutional Catering', 'Long-term contracts for enterprises, universities, and government bodies.'],
  ['Supply Chain Collaborations', 'Sourcing agreements with agricultural producers and packaging innovators.'],
];

export default function FranchisePartnerships() {
  return (
    <section className="bg-paper py-28 md:py-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-line border border-line reveal">
          <div className="bg-paper p-10 md:p-14">
            <Eyebrow tone="brass">Franchise Development</Eyebrow>
            <h3 className="font-display text-[clamp(1.6rem,2.4vw,2.1rem)] text-pine mb-5 leading-snug">
              A plug-and-play system for qualified operators.
            </h3>
            <p className="text-[14.5px] text-ink/60 leading-relaxed mb-8">
              Structured for sophisticated investment groups, experienced operators, and enterprise partners
              entering the premium vegetarian sector.
            </p>
            <div className="flex flex-col">
              {franchise.map(([t, b]) => (
                <div key={t} className="py-5 border-t border-line">
                  <h4 className="text-[14.5px] font-semibold text-pine mb-1">{t}</h4>
                  <p className="text-[13px] text-ink/55">{b}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-panel p-10 md:p-14">
            <Eyebrow tone="oxblood">Strategic Partnerships</Eyebrow>
            <h3 className="font-display text-[clamp(1.6rem,2.4vw,2.1rem)] text-pine mb-5 leading-snug">
              Built through collaboration.
            </h3>
            <p className="text-[14.5px] text-ink/60 leading-relaxed mb-8">
              Clear, mutually beneficial alignment across every stakeholder relationship in our network.
            </p>
            <div className="flex flex-col">
              {partnerships.map(([t, b]) => (
                <div key={t} className="py-5 border-t border-line">
                  <h4 className="text-[14.5px] font-semibold text-pine mb-1">{t}</h4>
                  <p className="text-[13px] text-ink/55">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
