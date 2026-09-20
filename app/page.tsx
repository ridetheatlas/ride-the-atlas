import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";


export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="bg-black text-white">

        {/* Hero */}

        <section className="relative h-screen min-h-[680px] overflow-hidden bg-black">

          {/*Image*/}

          <div className="absolute inset-0">

            <Image
              src="/images/general/atlas-mountains.jpeg"
              alt="Atlas mountain range in Morocco"
              fill
              priority
              sizes="100vw"
              className="scale-[1.03] object-cover object-center"
            />

            {/* Cinematic contrast */}

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/85" />

            {/* Very subtle film grain */}
            <div
              className="absolute inset-0 opacity-[0.045]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.8'/%3E%3C/svg%3E\")",
              }}
            />

          </div>


          {/* =================================================
      SMALL TOP LABEL
  ================================================= */}

          <div className="absolute left-6 top-32 z-20 md:left-10 md:top-36 lg:left-14">

            <p className="text-[9px] font-semibold uppercase tracking-[0.42em] text-white/75">
              Moroccan Atlas
            </p>

          </div>


          {/* =================================================
      MAIN BRAND
  ================================================= */}

          <div className="absolute left-6 top-1/2 z-20 -translate-y-[38%] md:left-10 lg:left-14">

            <div className="flex items-stretch gap-5 md:gap-7">

              {/* Vertical accent */}
              <span className="w-px shrink-0 bg-[#F3EBDD]" />

              <div>

                <p className="mb-5 text-[9px] font-semibold uppercase tracking-[0.42em] text-[#F3EBDD]">
                  Ride The Atlas | Mountain Biking & Ski Touring in Morocco
                </p>

                <h1 className="max-w-4xl text-[3.6rem] font-semibold uppercase leading-[0.86] tracking-[-0.065em] text-white sm:text-[4.8rem] md:text-[6.2rem] lg:text-[7.2rem]">
                  Ride The
                  <br />
                  Atlas
                </h1>

                <p className="mt-7 max-w-md text-[10px] font-medium uppercase leading-6 tracking-[0.3em] text-white/55">
                  Mountain adventures
                  <br />
                  across Morocco's High Atlas
                </p>

              </div>

            </div>

          </div>


          {/* =================================================
      BOTTOM INFORMATION
  ================================================= */}

          <div className="absolute bottom-8 left-6 right-6 z-20 flex items-end justify-between md:left-10 md:right-10 lg:left-14 lg:right-14">

            <p className="text-[8px] uppercase tracking-[0.35em] text-white/40">
              High Atlas · Morocco
            </p>


            <Link
              href="#journeys"
              className="group flex items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.35em] text-white/70 transition-colors duration-300 hover:text-[#F3EBDD]"
            >
              Explore

              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-sm text-[#F3EBDD] transition-all duration-300 group-hover:border-[#F3EBDD] group-hover:translate-y-1">
                ↓
              </span>
            </Link>

          </div>

        </section>


        {/* ABOUT RIDE THE ATLAS */}

        <section className="px-6 py-24 md:px-10 md:py-32 lg:px-14">

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">

              <div className="pt-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                  About Ride The Atlas
                </p>
              </div>

              <div>

                <h2 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-[5.8rem]">
                  One mountain range.
                  <br />
                  Two ways to explore it.
                </h2>

                <div className="mt-8 max-w-2xl">
                  <p className="text-sm leading-7 text-white/55 md:text-base md:leading-8">
                    Ride The Atlas is about experiencing Morocco through its
                    mountains — moving across them by bike in the dry seasons
                    and by ski when winter transforms the high peaks.
                  </p>
                </div>

              </div>

            </div>


            <div className="mt-16 grid gap-5 md:mt-20 md:grid-cols-2">

              <div className="group relative overflow-hidden">

                <div className="relative aspect-[4/5] overflow-hidden">

                  <Image
                    src="/images/mtb/bikers-riding-on-ridge.jpeg"
                    alt="Mountain bikers riding a ridge in the Moroccan Atlas"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">

                    <div className="mb-6 flex h-11 w-11 items-center justify-center border border-white/30">

                      <svg
                        viewBox="0 0 48 48"
                        fill="none"
                        aria-hidden="true"
                        className="h-6 w-6"
                      >
                        <circle cx="12" cy="35" r="7" stroke="#F3EBDD" strokeWidth="2" />
                        <circle cx="36" cy="35" r="7" stroke="#F3EBDD" strokeWidth="2" />
                        <path
                          d="M12 35L20 20L27 35L36 35L26 21H20"
                          stroke="#F3EBDD"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M20 20L24 16H29"
                          stroke="#F3EBDD"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>

                    </div>

                    <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                      Mountain Biking
                    </p>

                    <h3 className="mt-2 text-3xl font-semibold uppercase tracking-[-0.03em] text-white md:text-4xl">
                      Ride the dry mountains.
                    </h3>

                  </div>

                </div>

              </div>


              <div className="group relative overflow-hidden">

                <div className="relative aspect-[4/5] overflow-hidden">

                  <Image
                    src="/images/ski/ski-descent-bouignouane.jpeg"
                    alt="Ski tourer descending a mountain in the Moroccan Atlas"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">

                    <div className="mb-6 flex h-11 w-11 items-center justify-center border border-white/30">

                      <svg
                        viewBox="0 0 48 48"
                        fill="none"
                        aria-hidden="true"
                        className="h-6 w-6"
                      >
                        <path
                          d="M15 9V39"
                          stroke="#F3EBDD"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M33 9V39"
                          stroke="#F3EBDD"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M10 34L38 40"
                          stroke="#F3EBDD"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M17 27L29 22L34 13"
                          stroke="#F3EBDD"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                    </div>

                    <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                      Ski Touring
                    </p>

                    <h3 className="mt-2 text-3xl font-semibold uppercase tracking-[-0.03em] text-white md:text-4xl">
                      Follow the winter lines.
                    </h3>

                  </div>

                </div>

              </div>

            </div>


            <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">

              <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-white/30">
                By Bike · By Ski
              </p>

              <p className="text-[9px] uppercase tracking-[0.28em] text-white/30">
                Moroccan Atlas · Morocco
              </p>

            </div>

          </div>

        </section>


        {/* EXPLORE THE ATLAS */}

        <section
          id="journeys"
          className="px-6 py-24 md:px-10 md:py-32 lg:px-14"
        >

          <div className="mx-auto max-w-7xl">

            <div className="mb-12 flex items-end justify-between">

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                  Explore The Atlas
                </p>

                <h2 className="mt-4 max-w-3xl text-4xl font-semibold uppercase leading-[0.92] tracking-[-0.045em] text-white md:text-6xl">
                  Choose your way
                  <br />
                  into the mountains.
                </h2>
              </div>

              <p className="hidden max-w-xs text-right text-[10px] uppercase leading-6 tracking-[0.25em] text-white/30 md:block">
                Two seasons.
                <br />
                One mountain range.
              </p>

            </div>


            <div className="grid gap-5 md:grid-cols-2">

              <Link
                href="/mountain-biking"
                className="group relative overflow-hidden"
              >

                <div className="relative aspect-[4/5] overflow-hidden">

                  <Image
                    src="/images/mtb/rider-singletrack-atlas.jpeg"
                    alt="Mountain biker riding singletrack in the Moroccan Atlas"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">

                    <div className="flex items-end justify-between">

                      <div>

                        <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                          01
                        </p>

                        <h3 className="mt-3 text-4xl font-semibold uppercase tracking-[-0.04em] text-white md:text-5xl">
                          Mountain
                          <br />
                          Biking
                        </h3>

                      </div>

                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 text-xl text-[#F3EBDD] transition-all duration-300 group-hover:border-[#F3EBDD] group-hover:bg-[#F3EBDD] group-hover:text-black">
                        ↗
                      </span>

                    </div>

                  </div>

                </div>

              </Link>


              <Link
                href="/ski-touring"
                className="group relative overflow-hidden"
              >

                <div className="relative aspect-[4/5] overflow-hidden">

                  <Image
                    src="/images/ski/skiers-on-toubkal-summit.jpeg"
                    alt="Ski tourers on a summit in the Moroccan Atlas"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">

                    <div className="flex items-end justify-between">

                      <div>

                        <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                          02
                        </p>

                        <h3 className="mt-3 text-4xl font-semibold uppercase tracking-[-0.04em] text-white md:text-5xl">
                          Ski
                          <br />
                          Touring
                        </h3>

                      </div>

                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/40 text-xl text-[#F3EBDD] transition-all duration-300 group-hover:border-[#F3EBDD] group-hover:bg-[#F3EBDD] group-hover:text-black">
                        ↗
                      </span>

                    </div>

                  </div>

                </div>

              </Link>

            </div>

          </div>

        </section>
        {/* THE FOUNDER */}

        <section className="px-6 py-24 md:px-10 md:py-32 lg:px-14">

          <div className="mx-auto max-w-7xl">

            <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">

              <div className="pt-2">

                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                  The Founder
                </p>

              </div>


              <div>

                <h2 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-white md:text-6xl lg:text-[5.5rem]">
                  Built from a
                  <br />
                  love of mountains.
                </h2>

                <p className="mt-8 max-w-2xl text-sm leading-7 text-white/55 md:text-base md:leading-8">
                  Ride The Atlas was created by Radouane to share a different
                  way of experiencing Morocco — through movement, exploration
                  and time spent in the mountains.
                </p>


                <div className="mt-12 grid gap-5 md:grid-cols-2">

                  {/* BIKE */}

                  <div className="group">

                    <div className="relative aspect-[4/5] overflow-hidden">

                      <Image
                        src="/images/mtb/radouane-bike.jpeg"
                        alt="Radouane riding a mountain bike in the Moroccan Atlas"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                      <div className="absolute bottom-0 left-0 p-6">

                        <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                          By Bike
                        </p>

                        <p className="mt-2 text-xl font-semibold uppercase tracking-[-0.02em] text-white">
                          Radouane
                        </p>

                      </div>

                    </div>

                  </div>


                  {/* SKI */}

                  <div className="group">

                    <div className="relative aspect-[4/5] overflow-hidden">

                      <Image
                        src="/images/ski/radouane-on-skis.jpeg"
                        alt="Radouane ski touring in the Moroccan Atlas"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

                      <div className="absolute bottom-0 left-0 p-6">

                        <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                          By Ski
                        </p>

                        <p className="mt-2 text-xl font-semibold uppercase tracking-[-0.02em] text-white">
                          Radouane
                        </p>

                      </div>

                    </div>

                  </div>

                </div>


                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">

                  <p className="text-[9px] uppercase tracking-[0.3em] text-white/30">
                    Radouane · Founder
                  </p>

                  <Link
                    href="/about"
                    className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/50 transition-colors duration-300 hover:text-[#F3EBDD]"
                  >
                    More about the project →
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </section>
        {/* STORIES */}

        <section className="px-6 py-24 md:px-10 md:py-32 lg:px-14">

          <div className="mx-auto max-w-7xl">

            {/* HEADER */}

            <div className="mb-14 grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:items-end">

              <div>

                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                  From The Atlas
                </p>

              </div>

              <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

                <h2 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-[5.5rem]">
                  Stories from
                  <br />
                  the mountains.
                </h2>

                <Link
                  href="/journal"
                  className="hidden shrink-0 pb-1 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/45 transition-colors duration-300 hover:text-[#F3EBDD] md:block"
                >
                  Explore the journal →
                </Link>

              </div>

            </div>


            {/* STORIES */}

            <div className="grid gap-6 lg:grid-cols-2">

              {/* MOUNTAIN BIKING STORY */}

              <Link
                href="/journal"
                className="group"
              >

                <article>

                  <div className="relative aspect-[4/3] overflow-hidden">

                    <Image
                      src="/images/mtb/singletrack-two-riders.jpeg"
                      alt="Mountain bikers riding through the Moroccan Atlas"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/10" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                    <div className="absolute left-6 top-6 md:left-8 md:top-8">

                      <span className="border border-white/30 bg-black/20 px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-sm">
                        Mountain Biking
                      </span>

                    </div>

                    <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">

                      <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                        Atlas · Morocco
                      </p>

                      <h3 className="mt-3 max-w-xl text-3xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                        Mountain Biking
                        <br />
                        Adventures in Morocco
                      </h3>

                    </div>

                  </div>


                  <div className="border-x border-b border-white/10 p-6 md:p-8">

                    <p className="max-w-2xl text-sm leading-7 text-white/55 md:text-base md:leading-8">
                      From remote Amazigh villages and green valleys to oasis and
                      desert landscapes, discover the Moroccan Atlas by mountain bike.
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

                      <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/35">
                        Singletrack · Villages · High Atlas
                      </p>

                      <span className="text-lg text-[#F3EBDD] transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>

                    </div>

                  </div>

                </article>

              </Link>


              {/* SKI TOURING STORY */}

              <Link
                href="/journal"
                className="group"
              >

                <article>

                  <div className="relative aspect-[4/3] overflow-hidden">

                    <Image
                      src="/images/ski/radouane-ski-descent-tizi-mazik.jpeg"
                      alt="Ski touring descent in the high mountains of Morocco"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/10" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                    <div className="absolute left-6 top-6 md:left-8 md:top-8">

                      <span className="border border-white/30 bg-black/20 px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-sm">
                        Ski Touring
                      </span>

                    </div>

                    <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">

                      <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                        Winter · High Atlas
                      </p>

                      <h3 className="mt-3 max-w-xl text-3xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                        Ski Touring Through
                        <br />
                        Morocco&apos;s High Mountains
                      </h3>

                    </div>

                  </div>


                  <div className="border-x border-b border-white/10 p-6 md:p-8">

                    <p className="max-w-2xl text-sm leading-7 text-white/55 md:text-base md:leading-8">
                      Couloirs, high summits and winter lines across the Toubkal and
                      M&apos;Goun massifs, exploring a different side of the Atlas on skis.
                    </p>

                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

                      <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/35">
                        Toubkal · M&apos;Goun · Couloirs
                      </p>

                      <span className="text-lg text-[#F3EBDD] transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>

                    </div>

                  </div>

                </article>

              </Link>

            </div>


            {/* MOBILE JOURNAL LINK */}

            <div className="mt-8 md:hidden">

              <Link
                href="/journal"
                className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/45 transition-colors duration-300 hover:text-[#F3EBDD]"
              >
                Explore the journal →
              </Link>

            </div>

          </div>

        </section>
        {/* FINAL CTA */}

        <section className="px-6 pb-24 md:px-10 md:pb-32 lg:px-14">

          <div className="mx-auto max-w-7xl">

            <div className="relative overflow-hidden">

              <div className="relative aspect-[16/9] min-h-[500px] md:min-h-[580px]">

                <Image
                  src="/images/mtb/group-bikers-picture.jpeg"
                  alt="Mountain bikers exploring the Moroccan Atlas"
                  fill
                  sizes="100vw"
                  className="object-cover object-center transition-transform duration-1000 hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-black/25" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute inset-0 flex items-end">

                  <div className="w-full p-7 md:p-10 lg:p-14">

                    <div className="flex max-w-5xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

                      <div>

                        <div className="flex items-center gap-4">

                          <span className="h-px w-8 bg-[#F3EBDD]" />

                          <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#F3EBDD]">
                            Ride The Atlas
                          </p>

                        </div>

                        <h2 className="mt-5 max-w-4xl text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                          The mountains
                          <br />
                          are yours to explore.
                        </h2>

                      </div>

                      <p className="max-w-xs text-[10px] uppercase leading-6 tracking-[0.25em] text-white/55 lg:pb-2">
                        Mountain biking.
                        <br />
                        Ski touring.
                        <br />
                        Moroccan Atlas.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              <div className="grid border-x border-b border-white/10 md:grid-cols-[1fr_auto]">

                <div className="flex items-center px-6 py-7 md:px-8">

                  <p className="max-w-xl text-xs leading-6 text-white/45 md:text-sm md:leading-7">
                    Planning a ride, a ski traverse, or simply looking for the
                    next line through the Atlas?
                  </p>

                </div>

                <Link
                  href="/contact"
                  className="group flex items-center justify-between gap-10 border-t border-white/10 px-6 py-6 text-[9px] font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-[#F3EBDD] hover:text-black md:border-l md:border-t-0 md:px-8"
                >
                  <span>
                    Start a conversation
                  </span>

                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </Link>

              </div>

            </div>

          </div>

        </section>



      </main>

      <SiteFooter />
    </>
  );
}