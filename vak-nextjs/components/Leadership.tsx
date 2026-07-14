import Container from '@/components/ui/Container';
import Eyebrow from '@/components/ui/Eyebrow';

const leaders = [
  {
    name: 'Vivek Shukla',
    role: 'Founder & CEO',
    photo: '/images/vivek-shukla.jpg',
    bio: 'A seasoned F&B operations leader with over 20 years of experience across the UAE, Oman, and India, Vivek has launched and managed 70+ outlets across key markets, with deep expertise in profitability, cost optimization, and team leadership. Prior to founding VAK, he spent 12+ years with India Palace, Golden Dragon, and Sthan, driving expansion and sustained business performance. He holds an MBA in Operations Management along with advanced hospitality qualifications.',
    tags: ['SKEA Silver Award', 'Dubai Quality Award', 'BBC Good Food Middle East Award'],
  },
  {
    name: 'Kuldeep Singh',
    role: 'Co-Founder & COO',
    photo: '/images/kuldeep-singh.png',
    bio: 'With 18+ years of international hospitality leadership across the UAE and India, Kuldeep brings expertise spanning luxury hotels, multi-outlet restaurants, corporate catering, banquets, and digital food delivery operations. He has led large teams, managed departmental P&L, and implemented service excellence programs that combine operational discipline with strategic brand positioning to maximize revenue and guest experience.',
    tags: ['P&L Management', 'Menu Engineering', 'Revenue Growth & Profitability'],
  },
];

export default function Leadership() {
  return (
    <section className="bg-panel py-28 md:py-36">
      <Container>
        <div className="max-w-2xl mb-16 reveal">
          <Eyebrow tone="oxblood">Leadership</Eyebrow>
          <h2 className="font-display text-[clamp(2rem,3.6vw,3.2rem)] leading-[1.05] text-pine mb-6">
            Guided by decades of Gulf hospitality experience.
          </h2>
          <p className="text-[15px] text-ink/65 leading-relaxed">
            VAK Food &amp; Beverage Company is led by two operators who have built and scaled hospitality
            businesses across the UAE, Oman, and India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leaders.map((l) => (
            <div key={l.name} className="bg-paper border border-line reveal">
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-ink/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.photo} alt={l.name} className="w-full h-full object-cover object-top" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/40 to-transparent" />
              </div>
              <div className="p-8 md:p-10">
                <p className="font-display text-[26px] text-pine leading-tight">{l.name}</p>
                <p className="text-[11px] uppercase tracking-widest2 text-brass font-medium mt-2 mb-6">{l.role}</p>
                <p className="text-[14px] text-ink/65 leading-relaxed mb-6">{l.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {l.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] uppercase tracking-wide text-pine border border-pine/25 px-3 py-1.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
