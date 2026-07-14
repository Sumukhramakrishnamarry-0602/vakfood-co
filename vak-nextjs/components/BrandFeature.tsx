type Props = {
  index: string;
  name: string;
  tagline: string;
  format: string;
  locations: string;
  description: string;
  features: string[];
  tone: 'oxblood' | 'brass' | 'pine' | 'rust';
  reverse?: boolean;
};

const toneMap: Record<Props['tone'], { bg: string; text: string; sub: string; ring: string }> = {
  oxblood: { bg: 'from-oxblood via-[#3d1119] to-ink', text: 'text-paper', sub: 'text-paper/60', ring: 'border-paper/15' },
  brass: { bg: 'from-brass via-[#8f6420] to-ink', text: 'text-paper', sub: 'text-paper/65', ring: 'border-paper/15' },
  pine: { bg: 'from-pine3 via-pine to-ink', text: 'text-paper', sub: 'text-paper/60', ring: 'border-paper/15' },
  rust: { bg: 'from-rust via-[#5f2c17] to-ink', text: 'text-paper', sub: 'text-paper/60', ring: 'border-paper/15' },
};

export default function BrandFeature({
  index,
  name,
  tagline,
  format,
  locations,
  description,
  features,
  tone,
  reverse,
}: Props) {
  const t = toneMap[tone];

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-0 border border-line reveal ${reverse ? '' : ''}`}>
      <div
        className={`lg:col-span-5 relative min-h-[340px] bg-gradient-to-br ${t.bg} ${t.text} p-10 md:p-12 flex flex-col justify-between overflow-hidden ${
          reverse ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        <div className="absolute -bottom-16 -right-10 w-56 h-56 rounded-full bg-paper/5 blur-[70px]" />
        <div className="flex items-center justify-between text-[11px] uppercase tracking-widest2 relative">
          <span className={t.sub}>Brand {index}</span>
        </div>
        <div className="relative mt-16">
          <p className="font-display italic text-[clamp(2.2rem,4.4vw,3.4rem)] leading-none mb-3">{name}</p>
          <p className={`text-[13px] ${t.sub} max-w-[28ch]`}>{tagline}</p>
        </div>
        <div className={`relative mt-14 pt-6 border-t ${t.ring} text-[12px] ${t.sub} flex flex-col gap-1.5`}>
          <span>{format}</span>
          <span>{locations}</span>
        </div>
      </div>

      <div className={`lg:col-span-7 bg-paper p-10 md:p-14 flex flex-col justify-center ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
        <p className="text-[15.5px] leading-relaxed text-ink/70 mb-9 max-w-2xl">{description}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-0">
          {features.map((f) => (
            <div key={f} className="flex gap-3 items-start py-4 border-t border-line text-[13.5px] text-ink/75">
              <span className="w-1.5 h-1.5 rounded-full bg-brass mt-2 flex-none" />
              {f}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
