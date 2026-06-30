/** Infinite, hover-pausable marquee. Renders the items twice for a seamless loop. */
export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="marquee-group relative flex overflow-hidden border-y border-border bg-card/40 py-4">
      <div className="marquee">
        {[...items, ...items].map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-5 flex items-center gap-2.5 font-mono text-sm text-muted"
          >
            <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
            {item}
          </span>
        ))}
      </div>
      {/* edge fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent"
      />
    </div>
  );
}
