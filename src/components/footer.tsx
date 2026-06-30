import Link from "next/link";
import { site } from "@/constants/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted">
          {`© ${year} ${site.name}`}
        </p>
        <div className="flex items-center gap-5 text-sm">
          <Link href={site.links.github} className="text-muted transition-colors hover:text-foreground" target="_blank" rel="noreferrer">
            GitHub
          </Link>
          <Link href={site.links.linkedin} className="text-muted transition-colors hover:text-foreground" target="_blank" rel="noreferrer">
            LinkedIn
          </Link>
          <Link href={`mailto:${site.email}`} className="text-muted transition-colors hover:text-foreground">
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
