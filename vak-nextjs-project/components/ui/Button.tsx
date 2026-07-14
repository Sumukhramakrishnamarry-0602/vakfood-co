import { ReactNode } from 'react';

type Variant = 'solid' | 'outline' | 'outline-light';

export default function Button({
  children,
  href,
  variant = 'solid',
  className = '',
  type,
  onClick,
}: {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
}) {
  const base =
    'group relative inline-flex items-center gap-3 text-[12px] font-medium uppercase tracking-[0.14em] px-8 py-4 transition-all duration-500 ease-out';

  const variants: Record<Variant, string> = {
    solid: 'bg-pine text-paper hover:bg-pine2 shadow-card',
    outline: 'border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-paper',
    'outline-light': 'border border-paper/40 text-paper hover:border-paper hover:bg-paper hover:text-oxblood',
  };

  const content = (
    <>
      <span>{children}</span>
      <span className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-1">
        &rarr;
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button type={type ?? 'button'} onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
}
