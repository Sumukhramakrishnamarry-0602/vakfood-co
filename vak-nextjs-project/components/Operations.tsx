import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';

const capabilities = [
  ['Centralized Quality Control', 'Standard ingredient inputs, synchronized batch production, and blast-chilling technology preserve consistency without raw variation.'],
  ['Food Safety & Compliance', 'Municipal health mandates, internal HACCP protocols, cold-chain logging, and daily microbial testing.'],
  ['Supply Chain Efficiency', 'Direct wholesale farming contracts and centralized distribution hubs insulate outlets from pricing volatility.'],
  ['Logistical Systems', 'Integrated API connections between delivery platforms and kitchen management screens for low fulfillment times.'],
];

const kpis = [
  ['20,000+', 'Revenue growth'],
  ['1000+', 'Monthly orders'],
  ['4.5+', 'Customer satisfaction'],
  ['10', 'Cloud kitchens live'],
];

export default function Operations() {
  return (
    <section className="bg-ink text-paper py-28 md:py-36 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 right-[-10%] w-[500px] h-[500px] rounded-full bg-pine3/30 blur-[110px]" />
      <Container className="relative">
        <div className="max-w-2xl mb-16 reveal">
          <Eyebrow tone="paper">Operations &amp; Infrastructure</Eyebrow>
          <h2 className="font-display text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.05] mb-6">
            Ten cloud kitchens. One standard.
          </h2>
          <p className="text-[15.5px] text-paper/60 leading-relaxed">
            A high-yield grid of delivery-optimized digital kitchens positioned across key population
            corridors in the UAE for maximum geographic coverage.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-paper/10 border border-paper/10 mb-24 reveal">
          {capabilities.map(([title, body]) => (
            <div key={title} className="bg-ink p-8">
              <h4 className="font-display text-[17px] mb-3">{title}</h4>
              <p className="text-[13.5px] text-paper/55 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="reveal">
          <Eyebrow tone="brass">Performance Dashboard</Eyebrow>
          <h3 className="font-display text-[clamp(1.4rem,2.2vw,1.8rem)] max-w-xl mb-10">
            Live KPI tracking, built for institutional visibility.
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-paper/10 border border-paper/10">
            {kpis.map(([v, l]) => (
              <div key={l} className="bg-pine/40 p-8">
                <p className="font-display text-4xl text-brasslight">{v}</p>
                <p className="text-[12px] uppercase tracking-widest2 text-paper/50 mt-3">{l}</p>
              </div>
            ))}
          </div>
          <p className="text-[13px] text-paper/40 italic mt-6 max-w-lg">
            Figures reflect the current data-integration phase; full KPI reporting activates as cloud-connected
            POS and ERP feeds come online.
          </p>
        </div>
      </Container>
    </section>
  );
}
