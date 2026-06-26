import Link from "next/link";

/**
 * NovionMark - the "n + teal dot" symbol cropped from the Novion logo.
 * Source paths are the same ones used in /public/favicon.svg so the mark
 * here, the favicon, and the full logo all stay visually identical.
 */
export function NovionMark({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="125 225 575 575"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <rect x="125" y="225" width="575" height="575" rx="120" fill="rgb(var(--primary))" />
      <path
        fill="#FAFAF7"
        d="M234.85,504.95 C236.52,491.20 241.45,478.52 248.42,466.73 C278.86,415.31 346.21,396.51 397.76,426.28 C432.82,446.52 451.77,477.72 452.25,518.89 C452.53,543.21 452.30,567.53 452.07,591.86 C452.05,594.21 450.94,597.05 449.38,598.82 C442.01,607.20 434.09,615.09 426.81,623.54 C422.84,628.13 418.64,630.61 411.93,628.60 L411.93,622.68 C411.94,589.69 411.48,556.70 412.08,523.72 C412.62,493.38 395.10,469.14 370.12,458.73 C343.64,447.71 313.11,454.06 292.88,475.14 C280.83,487.69 274.19,502.92 274.15,520.60 C274.07,555.75 274.07,590.91 273.56,626.53 C271.73,627.67 270.36,628.34 269.00,629.00 C264.97,629.06 260.94,629.11 256.23,628.83 C254.37,628.67 253.19,628.83 252.00,628.99 C247.64,629.07 243.27,629.15 238.43,628.74 C237.96,627.20 237.96,626.14 237.97,624.61 C237.99,608.92 238.00,593.71 238.00,578.50 C238.00,564.04 237.89,549.58 238.04,535.12 C238.12,527.52 238.71,519.92 238.96,512.32 C239.07,509.12 239.09,505.80 234.85,504.95 z"
      />
      <circle cx="537" cy="578" r="55" fill="rgb(var(--accent))" className="brand-dot" />
    </svg>
  );
}

interface BrandHeaderProps {
  /** Path Link should point to (defaults to landing) */
  href?: string;
  /** Show a right-side status pill */
  rightSlot?: React.ReactNode;
  /** Add a default "AI powered" pill on the right */
  withAIPill?: boolean;
}

/**
 * BrandHeader - the unified Novion / TopApplicant nav bar.
 * Use at the top of every page so visitors recognize this as a Novion product.
 */
export default function BrandHeader({ href = "/", rightSlot, withAIPill = false }: BrandHeaderProps) {
  return (
    <nav className="border-b border-primary-100 bg-paper/80 backdrop-blur supports-[backdrop-filter]:bg-paper/70 px-6 py-3.5 sticky top-0 z-30">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link href={href} className="flex items-center gap-2.5 group">
          <NovionMark className="w-9 h-9 rounded-xl shadow-sm group-hover:shadow transition-shadow" />
          <div>
            <div className="leading-none mb-0.5">
              <span className="text-sm font-black text-primary tracking-tight">Top</span>
              <span className="text-sm font-black text-gray-900 tracking-tight">Applicant</span>
            </div>
            <p className="text-[9px] text-gray-400 font-medium uppercase tracking-[0.18em] leading-none">
              by Novion
            </p>
          </div>
        </Link>

        {rightSlot ?? (withAIPill ? (
          <div className="flex items-center gap-1.5 bg-white border border-primary-100 rounded-full px-3 py-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs text-gray-600 font-medium">AI powered</span>
          </div>
        ) : null)}
      </div>
    </nav>
  );
}
