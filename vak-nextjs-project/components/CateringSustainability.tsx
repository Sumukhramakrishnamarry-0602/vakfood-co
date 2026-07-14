import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';

const catering = [
  ['Corporate Events', 'Executive lunches, AGMs, conventions, and multi-site institutional meal programs.'],
  ['Weddings & Galas', 'Elaborate themed buffets, luxury family-style service, customized regional menus.'],
  ['Private Gatherings', 'Curated catering for milestones and festive events, with live culinary stations.'],
  ['Civic & Public Festivals', 'High-volume service for multi-day cultural events and community holidays.'],
];

const sustainability = [
  ['Eco-Friendly Materials', 'Transitioning delivery lines to biodegradable and recyclable packaging.'],
  ['Food-Waste Reduction', 'Demand analytics match prep levels to real-time consumption trends.'],
  ['Responsible Sourcing', 'Direct partnerships with regional agricultural and fair-trade providers.'],
  ['Resource Conservation', 'Induction cooking, smart ventilation, and low-flow water systems.'],
];

export default function CateringSustainability() {
  return (
    <section className="bg-paper py-28 md:py-36">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          <div className="lg:col-span-7 reveal">
            <div className="bg-panel border border-line p-10 md:p-14 h-full">
              <Eyebrow tone="oxblood">Premium Catering</Eyebrow>
              <h2 className="font-display text-[clamp(1.9rem,3vw,2.6rem)] leading-[1.08] text-pine mb-6">
                Institutional event execution, at scale.
              </h2>
              <p className="text-[15px] text-ink/65 leading-relaxed mb-10 max-w-lg">
                A specialized corporate and event catering division built to match the tone, scale, and
                operational demands of every client.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                {catering.map(([t, b]) => (
                  <div key={t} className="py-5 border-t border-line">
                    <h4 className="text-[14.5px] font-semibold text-pine mb-1.5">{t}</h4>
                    <p className="text-[13px] text-ink/55 leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 reveal reveal-delay-1">
            <div className="bg-pine text-paper p-10 md:p-14 h-full flex flex-col">
              <Eyebrow tone="brass" className="!text-brasslight">Sustainability</Eyebrow>
              <h2 className="font-display text-[clamp(1.9rem,3vw,2.6rem)] leading-[1.08] mb-6">
                A plant-centric model, by design.
              </h2>
              <p className="text-[14px] text-paper/60 leading-relaxed mb-10">
                Our pure vegetarian core inherently carries a lower carbon and water footprint than
                conventional hospitality groups — sustainability is built into operational planning, not a
                separate policy.
              </p>
              <div className="flex flex-col gap-5 mt-auto">
                {sustainability.map(([t, b]) => (
                  <div key={t} className="pt-4 border-t border-paper/15">
                    <h4 className="text-[13.5px] font-semibold text-brasslight mb-1">{t}</h4>
                    <p className="text-[12.5px] text-paper/55 leading-relaxed">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
