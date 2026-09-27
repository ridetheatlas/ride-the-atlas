import Link from "next/link";
import AtlasLogo from "./atlas-logo";

const accent = "#F3EBDD";

const navigation = [
  { label: "Mountain Biking", href: "/mountain-biking" },
  { label: "Gravel Biking", href: "/gravel-biking-morocco" },
  { label: "Ski Touring", href: "/ski-touring" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="px-6 md:px-10 lg:px-14">

        {/* BRAND STATEMENT */}

        <div className="border-b border-white/10 py-20 md:py-28 lg:py-32">

          <div className="mx-auto max-w-7xl">

            <p
              className="text-[9px] font-semibold uppercase tracking-[0.4em]"
              style={{ color: accent }}
            >
              Ride The Atlas · Morocco
            </p>

            <h2 className="mt-8 max-w-6xl text-5xl font-semibold uppercase leading-[0.86] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-[8rem]">
              Into the
              <br />
              mountains.
            </h2>

          </div>

        </div>

        {/* MAIN FOOTER */}

        <div className="mx-auto max-w-7xl py-16 md:py-20 lg:py-24">

          <div className="grid gap-16 lg:grid-cols-[1.5fr_0.8fr_1fr]">

            {/* BRAND */}

            <div>

              <Link
                href="/"
                aria-label="Ride The Atlas"
                className="inline-flex"
              >
                <AtlasLogo />
              </Link>

              <p className="mt-7 max-w-sm text-sm leading-7 text-white/45">
                Mountain biking, gravel biking and ski
                touring across Morocco&apos;s High Atlas.
              </p>

              <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/30">
                By bike. By ski.
              </p>

            </div>

            {/* EXPLORE */}

            <div>

              <p
                className="text-[9px] font-semibold uppercase tracking-[0.35em]"
                style={{ color: accent }}
              >
                Explore
              </p>

              <nav className="mt-6 flex flex-col gap-4">

                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex w-fit items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-white/55 transition-colors duration-300 hover:text-white"
                  >
                    <span
                      className="h-px w-0 transition-all duration-300 group-hover:w-4"
                      style={{
                        backgroundColor: accent,
                      }}
                    />

                    {item.label}
                  </Link>
                ))}

              </nav>

            </div>

            {/* CONTACT */}

            <div>

              <p
                className="text-[9px] font-semibold uppercase tracking-[0.35em]"
                style={{ color: accent }}
              >
                Start a journey
              </p>

              <h3 className="mt-6 max-w-sm text-3xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] text-white md:text-4xl">
                Ready to explore the Atlas?
              </h3>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-5 border border-white/25 px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:border-[#F3EBDD] hover:bg-[#F3EBDD] hover:text-black"
              >
                <span>Get in touch</span>

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>

          </div>

          {/* FOOTER BASELINE */}

          <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-6 text-[8px] font-medium uppercase tracking-[0.25em] text-white/30 md:flex-row md:items-center md:justify-between">

            <p>
              © {new Date().getFullYear()} Ride The Atlas
            </p>

            <p>
              Moroccan High Atlas
            </p>

            <p>
              By Bike · By Ski
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
}