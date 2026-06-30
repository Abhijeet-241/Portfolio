import { cn } from "@/utils/cn";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

/** Monospace eyebrow used to annotate each section, like a spec-sheet label. */
export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted",
        className
      )}
    >
      <span aria-hidden className="h-px w-6 bg-border" />
      {children}
    </span>
  );
}
