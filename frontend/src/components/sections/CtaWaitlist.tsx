import { Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/shared/Reveal";
import { ContactForm } from "@/components/shared/ContactForm";
import { SITE_CONFIG, CONTACT_CONTENT } from "@/constants/site";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem, viewportOnce } from "@/lib/motion";

function InstagramIcon({ size = 20 }: { size?: number }) {
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

const CONTACT_ITEMS = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.contact.email,
    href: `mailto:${SITE_CONFIG.contact.email}`,
    external: false,
  },
  {
    id: "phone1",
    icon: Phone,
    label: "Phone",
    value: SITE_CONFIG.contact.phones[0],
    href: `tel:${SITE_CONFIG.contact.phones[0]}`,
    external: false,
  },
  {
    id: "phone2",
    icon: Phone,
    label: "Phone",
    value: SITE_CONFIG.contact.phones[1],
    href: `tel:${SITE_CONFIG.contact.phones[1]}`,
    external: false,
  },
] as const;

export function CtaWaitlist() {
  return (
    <section id="contact" className="px-5 py-20 sm:px-6 sm:py-28">
      <Container className="max-w-5xl px-0">
        <Reveal>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mb-12 text-center"
          >
            <p className="mb-3 text-[11px] font-bold tracking-[0.15em] text-primary uppercase">
              {CONTACT_CONTENT.tag}
            </p>
            <h2 className="font-cinzel text-[clamp(28px,4vw,52px)] font-black tracking-[-0.02em] text-balance">
              {CONTACT_CONTENT.title}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted">
              {CONTACT_CONTENT.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-16">
            {/* Left — contact info */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col gap-4 lg:col-span-2"
            >
              <p className="text-[11px] font-bold tracking-[0.12em] text-white/30 uppercase">
                Reach Us Directly
              </p>

              {CONTACT_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.id}
                    variants={staggerItem}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-white/[0.03] px-5 py-4 transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/12 text-primary transition-colors duration-300 group-hover:bg-primary/22">
                      <Icon size={18} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold tracking-[0.1em] text-muted uppercase">
                        {item.label}
                      </p>
                      <p className="mt-0.5 truncate text-[14px] font-semibold text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}

              {/* Instagram */}
              <motion.a
                variants={staggerItem}
                href={SITE_CONFIG.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-white/[0.03] px-5 py-4 transition-all duration-300 hover:border-primary/40 hover:bg-primary/5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/12 text-primary transition-colors duration-300 group-hover:bg-primary/22">
                  <InstagramIcon size={18} />
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold tracking-[0.1em] text-muted uppercase">
                    Instagram
                  </p>
                  <p className="mt-0.5 truncate text-[14px] font-semibold text-foreground">
                    @{SITE_CONFIG.contact.instagram}
                  </p>
                </div>
              </motion.a>

              <p className="mt-2 text-[12px] leading-relaxed text-white/30">
                We typically respond within 24 hours.
              </p>
            </motion.div>

            {/* Right — contact form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="lg:col-span-3"
            >
              <div className="relative overflow-hidden rounded-[22px] border border-border bg-white/[0.03] p-6 sm:p-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-primary/[0.06] blur-[60px]"
                />
                <p className="mb-5 text-[11px] font-bold tracking-[0.12em] text-white/30 uppercase">
                  Send Us a Message
                </p>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
