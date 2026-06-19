import Link from "next/link";
import { siteConfig, socialLinks } from "@/lib/data";

const initialsMap: Record<string, string> = {
  LinkedIn: "in",
  Twitter: "X",
  Instagram: "IG",
};

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 md:px-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex size-9 items-center justify-center rounded-full border border-white/10 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {initialsMap[social.label]}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
