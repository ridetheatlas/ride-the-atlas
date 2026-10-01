import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

const trips = [
    {
        days: "08",
        label: "Eight-day expedition",
        title: <>Eastern High Atlas<br />&amp; Toubkal</>,
        region: "Toubkal Massif",
        level: "Challenging",
        image: "/images/mtb/bikers-riding-on-ridge.jpeg",
        alt: "Mountain bikers riding across a high ridge in Morocco's Atlas Mountains",
        href: "/mountain-biking/8-day-mountain-biking-eastern-high-atlas-morocco",
        featured: true,
    },
    {
        days: "06",
        label: "Six-day journey",
        title: <>Eastern High Atlas<br />in six days</>,
        region: "Eastern High Atlas",
        level: "Challenging",
        image: "/images/mtb/group-bikers-picture.jpeg",
        alt: "A group mountain biking in the Eastern High Atlas of Morocco",
        href: "/mountain-biking/6-day-mountain-biking-eastern-high-atlas-morocco",
    },
    {
        days: "04",
        label: "Four-day journey",
        title: <>Eastern High Atlas<br />short escape</>,
        region: "Eastern High Atlas",
        level: "Moderate",
        image: "/images/mtb/singletrack-two-riders.jpeg",
        alt: "Two riders on a singletrack in the Moroccan Atlas",
        href: "/mountain-biking/4-day-mountain-biking-eastern-high-atlas-morocco",
    },
];

const otherTrips = [
    {
        days: "08",
        title: "Happy Valley",
        subtitle: "Central High Atlas",
        level: "Challenging",
        image: "/images/mtb/two-riders-green-landcape-singletrack.jpeg",
        alt: "Mountain bikers riding a green singletrack in the Happy Valley",
        href: "/mountain-biking/8-day-mountain-biking-happy-valley-morocco",
    },
    {
        days: "08",
        title: "Saghro Mountains",
        subtitle: "Southern Atlas",
        level: "Challenging",
        image: "/images/mtb/rider-singletrack-atlas.jpeg",
        alt: "A mountain biker riding a trail in the Saghro Mountains",
        href: "/mountain-biking/8-day-mountain-biking-saghro-mountains-morocco",
    },
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
    return (
        <p className={`text-[10px] font-semibold uppercase tracking-[0.28em] ${light ? "text-[#E56A2E]" : "text-[#B9572A]"}`}>
            {children}
        </p>
    );
}

export default function MountainBikingPage() {
    return (
        <>
            <SiteHeader />
            <main className="overflow-hidden bg-[#171715] text-[#F3EBDD]">
                {/* HERO */}
                <section className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-[#171715] md:min-h-screen">
                    <Image
                        src="/images/mtb/bikers-riding-on-ridge.jpeg"
                        alt="Mountain bikers riding through the High Atlas Mountains of Morocco"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-[54%_center]"
                    />
                    <div className="absolute inset-0 bg-[#11110F]/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#11110F]/80 via-[#11110F]/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#11110F]/90 via-transparent to-[#11110F]/20" />

                    <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 pt-40 md:px-10 md:pb-20 lg:px-16">
                        <div className="mb-12 flex items-center gap-3 md:mb-16">
                            <span className="h-px w-9 bg-[#E56A2E]" />
                            <Eyebrow light>Ride The Atlas / Morocco</Eyebrow>
                        </div>
                        <div className="grid gap-10 lg:grid-cols-[1fr_340px] lg:items-end">
                            <div>
                                <h1 className="max-w-5xl text-[clamp(4rem,11vw,10.5rem)] font-semibold uppercase leading-[0.78] tracking-[-0.075em] text-white">
                                    Mountain<br />Biking<span className="text-[#E56A2E]">.</span>
                                </h1>
                                <p className="mt-8 max-w-xl text-sm leading-7 text-white/75 md:mt-10 md:text-base md:leading-8">
                                    Ride the trails, passes and remote valleys of Morocco&apos;s Atlas.
                                    Multi-day mountain bike journeys shaped by the terrain—and the
                                    people who call these mountains home.
                                </p>
                            </div>
                            <div className="flex items-end justify-between border-t border-white/30 pt-5 lg:block lg:border-l lg:border-t-0 lg:pb-1 lg:pl-7 lg:pt-0">
                                <div>
                                    <p className="text-[9px] uppercase tracking-[0.25em] text-white/50">The riding ground</p>
                                    <p className="mt-2 text-sm uppercase tracking-[0.12em] text-white">High Atlas · Morocco</p>
                                </div>
                                <Link href="#journeys" className="group flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-white">
                                    Discover journeys
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 text-base transition-all group-hover:border-[#E56A2E] group-hover:bg-[#E56A2E]">↓</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] md:block">
                        <span className="text-[8px] uppercase tracking-[0.35em] text-white/50">31° North · Atlas Mountains</span>
                    </div>
                </section>

                {/* INTRO */}
                <section id="journeys" className="scroll-mt-16 bg-[#F3EBDD] px-6 py-24 text-[#171715] md:px-10 md:py-32 lg:px-16">
                    <div className="mx-auto max-w-[1400px]">
                        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
                            <div className="flex items-start gap-4">
                                <span className="mt-1 h-8 w-1 bg-[#E56A2E]" />
                                <div>
                                    <Eyebrow>Made for the mountains</Eyebrow>
                                    <p className="mt-3 max-w-[180px] text-xs leading-6 text-black/45">A different way to travel through the Atlas.</p>
                                </div>
                            </div>
                            <div>
                                <h2 className="max-w-5xl text-[clamp(2.7rem,6.5vw,6.6rem)] font-semibold uppercase leading-[0.86] tracking-[-0.065em]">
                                    Big terrain.<br /><span className="text-[#B9572A]">Small roads.</span><br />Endless lines.
                                </h2>
                                <div className="mt-9 grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-end">
                                    <p className="max-w-2xl text-sm leading-7 text-black/65 md:text-base md:leading-8">
                                        From high mountain passes to remote valleys and old village
                                        trails, the Atlas offers a distinctive kind of riding. Our
                                        journeys connect changing landscapes and rewarding days on
                                        the bike, with time to experience Morocco beyond the trail.
                                    </p>
                                    <div className="flex gap-8 border-t border-black/15 pt-5 md:justify-end">
                                        <div>
                                            <p className="text-3xl font-semibold tracking-[-0.06em]">05</p>
                                            <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-black/45">Journeys</p>
                                        </div>
                                        <div>
                                            <p className="text-3xl font-semibold tracking-[-0.06em]">04–08</p>
                                            <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-black/45">Days on tour</p>
                                        </div>
                                        <div>
                                            <p className="text-3xl font-semibold tracking-[-0.06em]">MTB</p>
                                            <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-black/45"> / eMTB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FEATURED JOURNEYS */}
                <section className="bg-[#171715] px-6 py-24 md:px-10 md:py-32 lg:px-16">
                    <div className="mx-auto max-w-[1400px]">
                        <div className="mb-12 flex flex-col justify-between gap-7 border-b border-white/15 pb-7 md:mb-16 md:flex-row md:items-end">
                            <div>
                                <Eyebrow light>Choose your ride</Eyebrow>
                                <h2 className="mt-5 text-[clamp(2.8rem,6vw,6rem)] font-semibold uppercase leading-[0.85] tracking-[-0.065em] text-white">
                                    The journeys<span className="text-[#E56A2E]">.</span>
                                </h2>
                            </div>
                            <p className="max-w-sm text-xs leading-6 text-white/45 md:text-sm md:leading-7">
                                Start with the Eastern High Atlas, then explore other mountain
                                regions and their own character of riding.
                            </p>
                        </div>

                        <div className="mb-7 flex items-center justify-between">
                            <div>
                                <Eyebrow light>01 / Eastern High Atlas</Eyebrow>
                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/40">Toubkal Massif · Morocco</p>
                            </div>
                            <span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/35 md:block">Three ways into the mountains</span>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                            {trips.map((trip, index) => (
                                <Link
                                    key={trip.href}
                                    href={trip.href}
                                    className={`group relative isolate block overflow-hidden bg-[#292824] ${trip.featured ? "md:col-span-1" : ""}`}
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden">
                                        <Image
                                            src={trip.image}
                                            alt={trip.alt}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-black/5" />
                                        <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 md:p-6">
                                            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/85">{trip.label}</span>
                                            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/55 text-base text-white transition-all duration-300 group-hover:border-[#E56A2E] group-hover:bg-[#E56A2E]">↗</span>
                                        </div>
                                        <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                                            <p className="text-[9px] uppercase tracking-[0.22em] text-[#E56A2E]">{trip.region}</p>
                                            <h3 className="mt-3 text-[clamp(1.8rem,3vw,2.7rem)] font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-white">{trip.title}</h3>
                                            <div className="mt-7 flex items-center justify-between border-t border-white/30 pt-4">
                                                <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/60">{trip.level}</span>
                                                <span className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/80">MTB / eMTB</span>
                                            </div>
                                        </div>
                                        <span className="absolute bottom-[118px] right-6 text-[3.5rem] font-semibold leading-none tracking-[-0.08em] text-white/10">{trip.days}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="mb-7 mt-20 flex items-end justify-between border-b border-white/15 pb-5">
                            <div>
                                <Eyebrow light>02 / Beyond the Toubkal Massif</Eyebrow>
                                <p className="mt-2 text-[9px] uppercase tracking-[0.18em] text-white/40">Other Atlas regions</p>
                            </div>
                            <span className="hidden text-[9px] uppercase tracking-[0.2em] text-white/35 md:block">New landscapes to discover</span>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                            {otherTrips.map((trip, index) => (
                                <Link key={trip.href} href={trip.href} className="group grid overflow-hidden border border-white/10 bg-[#201F1C] md:grid-cols-[1.1fr_0.9fr]">
                                    <div className="relative aspect-[5/4] overflow-hidden md:aspect-auto md:min-h-[340px]">
                                        <Image src={trip.image} alt={trip.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.045]" />
                                        <div className="absolute inset-0 bg-black/10" />
                                    </div>
                                    <div className="flex flex-col justify-between p-6 md:p-8">
                                        <div className="flex items-start justify-between">
                                            <span className="text-[9px] uppercase tracking-[0.22em] text-[#E56A2E]">{trip.days} days</span>
                                            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-sm transition-all group-hover:border-[#E56A2E] group-hover:bg-[#E56A2E]">↗</span>
                                        </div>
                                        <div className="py-10 md:py-0">
                                            <h3 className="text-3xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-white md:text-4xl">{trip.title}</h3>
                                            <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-white/45">{trip.subtitle}</p>
                                        </div>
                                        <div className="border-t border-white/15 pt-4 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/55">{trip.level} <span className="px-2 text-[#E56A2E]">/</span> MTB · eMTB</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* EDITORIAL IMAGE / STORY */}
                <section className="bg-[#F3EBDD] px-6 py-20 text-[#171715] md:px-10 md:py-28 lg:px-16">
                    <div className="mx-auto max-w-[1400px]">
                        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                            <div className="relative min-h-[420px] overflow-hidden md:min-h-[620px]">
                                <Image src="/images/mtb/singletrack-two-riders.jpeg" alt="Riders following a singletrack through the Moroccan Atlas" fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                                <p className="absolute bottom-6 left-6 text-[9px] uppercase tracking-[0.25em] text-white/80 md:bottom-8 md:left-8">On the trail · High Atlas, Morocco</p>
                            </div>
                            <div className="flex flex-col justify-between py-3 lg:py-8 lg:pl-8">
                                <div>
                                    <Eyebrow>The Atlas by bike</Eyebrow>
                                    <h2 className="mt-6 text-[clamp(2.8rem,5.4vw,5.8rem)] font-semibold uppercase leading-[0.84] tracking-[-0.065em]">
                                        Ride beyond<br />the obvious<span className="text-[#B9572A]">.</span>
                                    </h2>
                                </div>
                                <div className="mt-12">
                                    <p className="max-w-lg text-sm leading-7 text-black/65 md:text-base md:leading-8">
                                        The Atlas is more than a backdrop. It is a living mountain
                                        landscape of high passes, remote valleys, old trails and
                                        villages. Each route reveals a different side of Morocco.
                                    </p>
                                    <div className="mt-9 border-t border-black/15 pt-5">
                                        <div className="grid gap-6 sm:grid-cols-2">
                                            <div>
                                                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#B9572A]">01 / The terrain</p>
                                                <p className="mt-2 text-xs leading-6 text-black/55">High passes, flowing singletrack and constantly changing mountain ground.</p>
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#B9572A]">02 / The experience</p>
                                                <p className="mt-2 text-xs leading-6 text-black/55">Ride at the pace of two wheels and connect with the places along the way.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* APPROACH */}
                <section className="bg-[#171715] px-6 py-24 md:px-10 md:py-32 lg:px-16">
                    <div className="mx-auto max-w-[1400px]">
                        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
                            <div>
                                <Eyebrow light>Our approach</Eyebrow>
                                <p className="mt-4 max-w-[190px] text-xs leading-6 text-white/40">The ride is only part of the story.</p>
                            </div>
                            <div>
                                <h2 className="max-w-4xl text-[clamp(2.8rem,6vw,6rem)] font-semibold uppercase leading-[0.85] tracking-[-0.065em] text-white">
                                    More than<br />the kilometres<span className="text-[#E56A2E]">.</span>
                                </h2>
                                <p className="mt-8 max-w-2xl text-sm leading-7 text-white/55 md:text-base md:leading-8">
                                    Mountain biking in the Atlas is about discovering remote
                                    landscapes, riding through mountain communities and
                                    experiencing Morocco at the pace of two wheels.
                                </p>
                                <div className="mt-14 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-3">
                                    {[
                                        ["01", "Remote", "Routes that take you away from the obvious and deeper into the Atlas."],
                                        ["02", "Human", "Mountain villages, local landscapes and encounters along the way."],
                                        ["03", "Adventure", "Long days, high passes and constantly changing terrain."],
                                    ].map(([number, title, copy]) => (
                                        <div key={number}>
                                            <p className="text-[9px] font-semibold tracking-[0.2em] text-[#E56A2E]">{number}</p>
                                            <h3 className="mt-4 text-xl font-semibold uppercase tracking-[-0.03em] text-white">{title}</h3>
                                            <p className="mt-3 max-w-xs text-xs leading-6 text-white/45">{copy}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CONTACT CTA */}
                <section className="bg-[#171715] px-6 pb-24 md:px-10 md:pb-32 lg:px-16">
                    <div className="mx-auto max-w-[1400px]">
                        <div className="relative isolate flex min-h-[520px] items-end overflow-hidden md:min-h-[640px]">
                            <Image src="/images/mtb/group-bikers-picture.jpeg" alt="Mountain biking group exploring the Moroccan Atlas" fill sizes="100vw" className="object-cover" />
                            <div className="absolute inset-0 bg-black/25" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                            <div className="relative z-10 w-full p-7 md:p-12 lg:p-16">
                                <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
                                    <div>
                                        <Eyebrow light>Ride The Atlas</Eyebrow>
                                        <h2 className="mt-5 text-[clamp(2.8rem,7vw,7rem)] font-semibold uppercase leading-[0.82] tracking-[-0.07em] text-white">
                                            Find your line<br />through the Atlas<span className="text-[#E56A2E]">.</span>
                                        </h2>
                                    </div>
                                    <p className="max-w-xs text-xs leading-6 text-white/65">
                                        Have a journey in mind, or want to shape a ride around your
                                        time and experience? Let&apos;s talk about the mountains.
                                    </p>
                                </div>
                                <div className="mt-10 flex flex-col justify-between gap-5 border-t border-white/30 pt-5 sm:flex-row sm:items-center">
                                    <p className="text-[9px] uppercase tracking-[0.22em] text-white/55">Mountain biking · Gravel · Moroccan Atlas</p>
                                    <Link href="/contact" className="group inline-flex items-center justify-between gap-12 bg-[#E56A2E] px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-[#171715]">
                                        Start a conversation <span className="text-base transition-transform group-hover:translate-x-1">→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
