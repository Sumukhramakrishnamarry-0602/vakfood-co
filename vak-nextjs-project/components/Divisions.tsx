import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';
import BrandFeature from '@/components/BrandFeature';

const brands: Array<React.ComponentProps<typeof BrandFeature>> = [
  {
    index: 'I',
    name: 'Vrinda',
    tagline: 'Pure Vegetarian — Premium Traditional Indian Dining',
    format: '1,500–3,000 sq ft · Premium casual dine-in',
    locations: 'Malls, lifestyle centers, high-density residential corridors',
    description:
      'The flagship full-service dining concept of VAK Food & Beverage Company — a sophisticated, family-centric room built for premium, multi-generational experiential dining across metropolitan hubs.',
    features: [
      '100% pure vegetarian integrity, zero cross-contamination',
      'Legacy recipes, stone-ground spice techniques',
      'Elevated multi-generational family ambience',
      'High-margin handcrafted beverage program',
    ],
    tone: 'oxblood',
  },
  {
    index: 'II',
    name: 'Bhoji',
    tagline: 'Pure Vegetarian Thali — Regional Culinary Journeys',
    format: '1,200–2,000 sq ft · High-density service model',
    locations: 'Business districts, office towers, mixed-use retail plazas',
    description:
      'The Indian thali reimagined as a scalable, visually dramatic system — unlimited regional platters that rotate daily across Gujarati, Rajasthani, Punjabi, and South Indian traditions.',
    features: [
      'Preset layout drives immediate table turnover',
      'Balanced grains, lentils, dairy, artisanal sweets',
      'Value-driven pricing, high-frequency repeat visits',
      'Rotating culinary calendar eliminates menu fatigue',
    ],
    tone: 'brass',
    reverse: true,
  },
  {
    index: 'III',
    name: 'Khichi',
    tagline: 'Wholesome Comfort Food',
    format: '400–1,000 sq ft · QSR / cloud kitchen / hybrid',
    locations: 'Delivery catchments, transit terminals, fitness clusters',
    description:
      'Modernized khichdi bowls that meet the convergence of functional nutrition and comfort food — customizable, delivery-optimized, and built for rapid casual formats.',
    features: [
      'Build-your-own grains, proteins, ghee infusions',
      'Engineered thermal stability for delivery',
      'Low-GI, gluten-free, allergen-conscious paths',
      'Streamlined assembly for consistent speed',
    ],
    tone: 'pine',
  },
  {
    index: 'IV',
    name: 'Al Nida Cafeteria',
    tagline: 'Community-Focused Quick Service',
    format: '300–800 sq ft · Quick-service micro-footprint',
    locations: 'Residential blocks, commercial strips, transit portals',
    description:
      'The reliable neighborhood kitchen — street comfort food, savory hot snacks, and a Karak-chai-led beverage program anchoring every daypart, morning through late night.',
    features: [
      'Continuous volume, all-daypart optimization',
      'High-margin, high-velocity beverages',
      'Menu adapts to hyper-local demographics',
      'Low operational friction, fast training',
    ],
    tone: 'rust',
    reverse: true,
  },
];

export default function Divisions() {
  return (
    <section id="divisions" className="bg-panel py-28 md:py-36">
      <Container>
        <div className="max-w-2xl mb-16 reveal">
          <Eyebrow tone="oxblood">Our Divisions</Eyebrow>
          <h2 className="font-display text-[clamp(2rem,3.8vw,3.4rem)] leading-[1.05] text-pine mb-6">
            Four brands, one culinary infrastructure.
          </h2>
          <p className="text-[15.5px] text-ink/65 leading-relaxed">
            Restaurant Operations, Cloud Kitchen Networks, Premium Catering, and Café &amp; Quick Service —
            each channel engineered for a distinct occasion and guest, unified by the same procurement and
            governance standard.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {brands.map((b) => (
            <BrandFeature key={b.name} {...b} />
          ))}
        </div>
      </Container>
    </section>
  );
}
