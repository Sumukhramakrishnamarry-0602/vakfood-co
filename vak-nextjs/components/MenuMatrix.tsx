import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';

const rows = [
  ['Traditional Indian Cuisine', 'Slow-simmered gravies, heritage tandoori breads, basmati rice, authentic dal', 'Dine-in, Premium Catering, Cloud Kitchen'],
  ['Pure Vegetarian Specialties', 'House-made paneer, bespoke plant-based alternatives, seasonal proteins', 'Dine-in, Corporate Packages, Events'],
  ['Regional Thali Platters', 'Rotating subcontinental specialties, chutneys, classic breads', 'Bhoji Flagship, Dedicated Catering Pods'],
  ['Street Food & Chaat', 'Crisp multi-textured snacks, savory pastries, signature wraps', 'Al Nida Cafeteria, Live Event Stations'],
  ['Wholesome Comfort Food', 'Functional grain configurations, low-GI lentils, wellness porridge', 'KHICHI Digital / Express Formats'],
  ['Artisanal Beverage Program', 'Slow-brewed Karak tea, cold-pressed juices, lassi, botanical mocktails', 'Cross-Brand, High-Velocity Retail'],
];

export default function MenuMatrix() {
  return (
    <section className="bg-paper py-28 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14">
          <div className="lg:col-span-5 reveal">
            <Eyebrow>Core Menu Architecture</Eyebrow>
            <h2 className="font-display text-[clamp(1.9rem,3.2vw,2.8rem)] leading-[1.08] text-pine">
              One culinary matrix, four brands.
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end reveal">
            <p className="text-[15px] text-ink/65 leading-relaxed">
              Every item is broken into ingredient specifications, yield charts, and assembly maps by a
              centralized R&amp;D team — ensuring exact portion stability, flavor consistency, and tight cost
              control across every brand location.
            </p>
          </div>
        </div>

        <div className="reveal overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse">
            <thead>
              <tr className="text-left border-b-2 border-pine">
                <th className="py-4 pr-6 text-[11px] uppercase tracking-widest2 text-ink/50 font-medium">Category</th>
                <th className="py-4 pr-6 text-[11px] uppercase tracking-widest2 text-ink/50 font-medium">Specialization</th>
                <th className="py-4 text-[11px] uppercase tracking-widest2 text-ink/50 font-medium">Channels</th>
              </tr>
            </thead>
            <tbody>
              {rows.map(([cat, spec, chan]) => (
                <tr key={cat} className="border-b border-line align-top">
                  <td className="py-6 pr-6 font-display text-[17px] text-pine w-[26%]">{cat}</td>
                  <td className="py-6 pr-6 text-[14px] text-ink/65 leading-relaxed w-[46%]">{spec}</td>
                  <td className="py-6 text-[13.5px] text-ink/55">{chan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}
