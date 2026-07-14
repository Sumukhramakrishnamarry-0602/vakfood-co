const dot: Record<string, string> = {
  brass: 'border-brass after:bg-brass',
  pine: 'border-pine3 after:bg-pine3',
  oxblood: 'border-oxblood after:bg-oxblood',
  rust: 'border-rust after:bg-rust',
  paper: 'border-paper after:bg-paper',
};

export default function Eyebrow({
  children,
  tone = 'pine',
  className = '',
}: {
  children: React.ReactNode;
  tone?: keyof typeof dot;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-3 text-[11px] md:text-xs font-medium uppercase tracking-widest2 mb-5 ${className}`}
    >
      <span
        className={`relative w-[13px] h-[13px] border-[1.5px] rounded-[3px] flex-none ${dot[tone]} after:content-[''] after:absolute after:inset-[3px] after:rounded-full`}
      />
      {children}
    </div>
  );
}
