import Container from '@/components/ui/Container';

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/70 pt-20 pb-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between gap-14 pb-12 border-b border-paper/10">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 text-paper font-display text-xl mb-4">
              <span className="relative w-4 h-4 border-[2px] border-brass rounded-[3px]">
                <span className="absolute inset-[3px] rounded-full bg-brass" />
              </span>
              VAK Food &amp; Beverage Co.
            </div>
            <p className="text-[13.5px] leading-relaxed text-paper/50">
              Premium hospitality and culinary infrastructure, headquartered in Sharjah, United Arab Emirates.
            </p>
          </div>

          <div className="flex gap-16 flex-wrap">
            <div>
              <h5 className="text-[11px] uppercase tracking-widest2 text-brasslight mb-5">Navigate</h5>
              <ul className="space-y-3 text-[13.5px]">
                {[
                  ['Home', '#home'],
                  ['About Us', '#about'],
                  ['Divisions', '#divisions'],
                  ['Careers', '#careers'],
                  ['Contact', '#contact'],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a href={href} className="hover:text-paper transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-[11px] uppercase tracking-widest2 text-brasslight mb-5">Connect</h5>
              <ul className="space-y-3 text-[13.5px]">
                <li><a href="tel:+97165631954" className="hover:text-paper transition-colors">+971 6 563 1954</a></li>
                <li><a href="tel:+971505518726" className="hover:text-paper transition-colors">+971 50 551 8726</a></li>
                <li><a href="#contact" className="hover:text-paper transition-colors">Corporate Enquiries</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-3 pt-8 text-[12px] text-paper/40">
          <span>© 2026 VAK Food &amp; Beverage Company. All cultural and commercial brand equities reserved.</span>
          <span>Al Nahda, Sharjah, United Arab Emirates</span>
        </div>
      </Container>
    </footer>
  );
}
