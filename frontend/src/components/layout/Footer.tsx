import { Mail, Phone } from "lucide-react";

function YoutubeIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}
import { Logo } from "./Logo";
import { Container } from "@/components/ui/Container";
import { FOOTER_LINKS, SITE_CONFIG } from "@/constants/site";

const currentYear = new Date().getFullYear();

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="py-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Logo />
            <p className="max-w-xs text-[13px] leading-relaxed text-white/40">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-2">
            <p className="mb-1 text-[11px] font-bold tracking-[0.12em] text-white/25 uppercase">
              Contact
            </p>
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="flex items-center gap-2 text-[13px] text-white/40 transition-colors hover:text-white/75"
            >
              <Mail size={13} />
              {SITE_CONFIG.contact.email}
            </a>
            {SITE_CONFIG.contact.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone}`}
                className="flex items-center gap-2 text-[13px] text-white/40 transition-colors hover:text-white/75"
              >
                <Phone size={13} />
                {phone}
              </a>
            ))}
          </div>

          {/* Links + Social */}
          <div className="flex flex-col gap-4">
            <div>
              <p className="mb-2 text-[11px] font-bold tracking-[0.12em] text-white/25 uppercase">
                Navigate
              </p>
              <nav aria-label="Footer">
                <ul className="flex flex-col gap-2">
                  {FOOTER_LINKS.map((link) => (
                    <li key={link.id}>
                      <a
                        href={link.href}
                        className="text-[13px] text-white/40 transition-colors hover:text-white/75"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div>
              <p className="mb-2 text-[11px] font-bold tracking-[0.12em] text-white/25 uppercase">
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={SITE_CONFIG.contact.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-white/40 transition-all duration-200 hover:border-[#ff0000]/40 hover:bg-[#ff0000]/10 hover:text-white"
                >
                  <YoutubeIcon size={16} />
                </a>
                <a
                  href={SITE_CONFIG.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-white/40 transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                >
                  <InstagramIcon size={16} />
                </a>
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  aria-label="Email"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-card text-white/40 transition-all duration-200 hover:border-primary/40 hover:bg-primary/10 hover:text-white"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
          <p className="text-[11px] text-white/20">
            © {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-[11px] text-white/20">
            Crafted with passion. Built to last.
          </p>
        </div>
      </Container>
    </footer>
  );
}
