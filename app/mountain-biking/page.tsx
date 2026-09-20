import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export default function MountainBikingPage() {
    return (
        <>
            <SiteHeader />

            <main className="bg-black text-white">

                {/* HERO */}

                <section className="relative min-h-screen overflow-hidden">

                    <div className="absolute inset-0">

                        <Image
                            src="/images/mtb/bikers-riding-on-ridge.jpeg"
                            alt="Mountain biker riding singletrack in the Moroccan Atlas"
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover object-center"
                        />

                        <div className="absolute inset-0 bg-black/20" />

                        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent" />

                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/85" />

                    </div>

                    {/* TOP LABEL */}

                    <div className="absolute left-6 top-32 z-20 md:left-10 md:top-36 lg:left-14">

                        <p className="text-[9px] font-semibold uppercase tracking-[0.42em] text-white/80">
                            Ride The Atlas · By Bike
                        </p>

                    </div>

                    {/* MAIN TITLE */}

                    <div className="absolute left-6 top-1/2 z-20 -translate-y-1/2 md:left-10 lg:left-14">

                        <div className="flex items-start gap-5 md:gap-7">

                            <span className="mt-2 h-28 w-px shrink-0 bg-[#F3EBDD] md:h-36" />

                            <div>

                                <h1 className="text-[3.2rem] font-semibold uppercase leading-[0.88] tracking-[-0.055em] text-white sm:text-[4rem] md:text-[5rem] lg:text-[6rem]">
                                    Mountain
                                    <br />
                                    Biking
                                </h1>

                            </div>

                        </div>

                    </div>

                    {/* BOTTOM */}

                    <div className="absolute bottom-8 left-6 right-6 z-20 flex items-end justify-between md:left-10 md:right-10 lg:left-14 lg:right-14">

                        <p className="text-[8px] uppercase tracking-[0.35em] text-white/40">
                            High Atlas · Morocco
                        </p>

                        <Link
                            href="#riding"
                            className="group flex items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.35em] text-white/70 transition-colors duration-300 hover:text-[#F3EBDD]"
                        >
                            Explore

                            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-sm text-[#F3EBDD] transition-all duration-300 group-hover:border-[#F3EBDD] group-hover:translate-y-1">
                                ↓
                            </span>
                        </Link>

                    </div>

                </section>

                {/* INTRODUCTION */}

                <section
                    id="riding"
                    className="px-6 py-24 md:px-10 md:py-32 lg:px-14"
                >

                    <div className="mx-auto max-w-7xl">

                        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">

                            <div className="pt-2">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                    Riding The Atlas
                                </p>
                            </div>

                            <div>

                                <h2 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-[5.8rem]">
                                    Mountains made
                                    <br />
                                    for two wheels.
                                </h2>

                                <p className="mt-8 max-w-2xl text-sm leading-7 text-white/55 md:text-base md:leading-8">
                                    From high mountain passes to remote valleys and forgotten
                                    trails, the Atlas offers a different kind of riding.
                                    Ride The Atlas explores Morocco by bike, following routes
                                    shaped by the mountains, the landscape and the people who
                                    live there.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>
                {/* RIDING OPTIONS */}

                <section className="px-6 py-24 md:px-10 md:py-32 lg:px-14">

                    <div className="mx-auto max-w-7xl">

                        <div className="mb-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">

                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                    Mountain Biking
                                </p>
                            </div>

                            <div>
                                <h2 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-[5.5rem]">
                                    Choose your
                                    <br />
                                    way into the Atlas.
                                </h2>
                            </div>

                        </div>

                        <div className="grid gap-5 md:grid-cols-2">

                            {/* EASTERN HIGH ATLAS */}

                            <Link
                                href="/mountain-biking/eastern-high-atlas"
                                className="group relative overflow-hidden"
                            >

                                <div className="relative aspect-[4/5] overflow-hidden">

                                    <Image
                                        src="/images/mtb/bikers-riding-on-ridge.jpeg"
                                        alt="Mountain bikers riding through the Eastern High Atlas in Morocco"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                    <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">

                                        <div className="flex items-end justify-between gap-6">

                                            <div>

                                                <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                                    01 · 8 DAYS
                                                </p>

                                                <h3 className="mt-4 text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white md:text-5xl">
                                                    Eastern
                                                    <br />
                                                    High Atlas
                                                </h3>

                                            </div>

                                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/35 text-lg text-[#F3EBDD] transition-all duration-300 group-hover:border-[#F3EBDD] group-hover:bg-[#F3EBDD] group-hover:text-black">
                                                ↗
                                            </span>

                                        </div>

                                        <div className="mt-7 border-t border-white/20 pt-5">

                                            <p className="max-w-md text-xs leading-6 text-white/60">
                                                An 8-day mountain biking journey through the Eastern High
                                                Atlas.
                                            </p>

                                            <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/45 transition-colors duration-300 group-hover:text-[#F3EBDD]">
                                                View tour
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </Link>

                            {/* TOUBKAL MASSIF */}

                            <Link
                                href="/mountain-biking/toubkal-massif"
                                className="group relative overflow-hidden"
                            >

                                <div className="relative aspect-[4/5] overflow-hidden">

                                    <Image
                                        src="/images/mtb/rider-singletrack-atlas.jpeg"
                                        alt="Mountain biker riding singletrack in the Toubkal Massif of Morocco"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                    <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">

                                        <div className="flex items-end justify-between gap-6">

                                            <div>

                                                <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                                    02 · SINGLETRACK
                                                </p>

                                                <h3 className="mt-4 text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white md:text-5xl">
                                                    Toubkal
                                                    <br />
                                                    Massif
                                                </h3>

                                            </div>

                                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/35 text-lg text-[#F3EBDD] transition-all duration-300 group-hover:border-[#F3EBDD] group-hover:bg-[#F3EBDD] group-hover:text-black">
                                                ↗
                                            </span>

                                        </div>

                                        <div className="mt-7 border-t border-white/20 pt-5">

                                            <p className="max-w-md text-xs leading-6 text-white/60">
                                                Singletracks, high passes and mountain riding around the
                                                Toubkal Massif.
                                            </p>

                                            <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/45 transition-colors duration-300 group-hover:text-[#F3EBDD]">
                                                View tour
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </Link>

                            {/* SAGHRO */}

                            <Link
                                href="/mountain-biking/saghro"
                                className="group relative overflow-hidden"
                            >

                                <div className="relative aspect-[4/5] overflow-hidden">

                                    <Image
                                        src="/images/mtb/two-riders-green-landcape-singletrack.jpeg"
                                        alt="Mountain bikers riding through the Saghro Mountains in Morocco"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                    <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">

                                        <div className="flex items-end justify-between gap-6">

                                            <div>

                                                <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                                    03 · 8 DAYS
                                                </p>

                                                <h3 className="mt-4 text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white md:text-5xl">
                                                    Saghro
                                                    <br />
                                                    Mountains
                                                </h3>

                                            </div>

                                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/35 text-lg text-[#F3EBDD] transition-all duration-300 group-hover:border-[#F3EBDD] group-hover:bg-[#F3EBDD] group-hover:text-black">
                                                ↗
                                            </span>

                                        </div>

                                        <div className="mt-7 border-t border-white/20 pt-5">

                                            <p className="max-w-md text-xs leading-6 text-white/60">
                                                An 8-day mountain biking journey through the volcanic
                                                landscapes of the Saghro.
                                            </p>

                                            <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/45 transition-colors duration-300 group-hover:text-[#F3EBDD]">
                                                View tour
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </Link>

                            {/* GRAVEL */}

                            <Link
                                href="/gravel"
                                className="group relative overflow-hidden"
                            >

                                <div className="relative aspect-[4/5] overflow-hidden">

                                    <Image
                                        src="/images/mtb/gravel-bike-morocco-atlas-mountains.jpeg"
                                        alt="Gravel cyclist riding through the Atlas Mountains in Morocco"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                    <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">

                                        <div className="flex items-end justify-between gap-6">

                                            <div>

                                                <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                                    04 · GRAVEL
                                                </p>

                                                <h3 className="mt-4 text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white md:text-5xl">
                                                    Gravel
                                                    <br />
                                                    Bike Trips
                                                </h3>

                                            </div>

                                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/35 text-lg text-[#F3EBDD] transition-all duration-300 group-hover:border-[#F3EBDD] group-hover:bg-[#F3EBDD] group-hover:text-black">
                                                ↗
                                            </span>

                                        </div>

                                        <div className="mt-7 border-t border-white/20 pt-5">

                                            <p className="max-w-md text-xs leading-6 text-white/60">
                                                Remote roads, high passes and long days through the Moroccan
                                                Atlas.
                                            </p>

                                            <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/45 transition-colors duration-300 group-hover:text-[#F3EBDD]">
                                                Explore gravel trips
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </Link>

                        </div>

                    </div>

                </section>
                {/* THE ATLAS BY BIKE */}

                <section className="px-6 py-24 md:px-10 md:py-32 lg:px-14">

                    <div className="mx-auto max-w-7xl">

                        <div className="relative overflow-hidden">

                            <div className="relative aspect-[16/9] min-h-[520px]">

                                <Image
                                    src="/images/mtb/singletrack-two-riders.jpeg"
                                    alt="Mountain bikers riding through the Moroccan Atlas"
                                    fill
                                    sizes="100vw"
                                    className="object-cover object-center transition-transform duration-1000 hover:scale-[1.02]"
                                />

                                <div className="absolute inset-0 bg-black/20" />

                                <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                <div className="absolute inset-0 flex items-end">

                                    <div className="w-full p-7 md:p-10 lg:p-14">

                                        <div className="max-w-3xl">

                                            <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#F3EBDD]">
                                                The Atlas By Bike
                                            </p>

                                            <h2 className="mt-5 text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                                                Ride beyond
                                                <br />
                                                the obvious.
                                            </h2>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="grid border-x border-b border-white/10 md:grid-cols-[1fr_1fr]">

                                <div className="p-7 md:p-10">

                                    <p className="max-w-xl text-sm leading-7 text-white/55 md:text-base md:leading-8">
                                        The Atlas is not just a backdrop for riding. It is a landscape
                                        of high passes, remote valleys, old trails and mountain villages,
                                        where every route reveals a different side of Morocco.
                                    </p>

                                </div>

                                <div className="border-t border-white/10 p-7 md:border-l md:border-t-0 md:p-10">

                                    <p className="max-w-xl text-sm leading-7 text-white/55 md:text-base md:leading-8">
                                        Ride The Atlas follows routes that connect these landscapes,
                                        combining challenging riding with the slower rhythm of travelling
                                        through the mountains.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>
                {/* HOW WE RIDE */}

                <section className="px-6 py-24 md:px-10 md:py-32 lg:px-14">

                    <div className="mx-auto max-w-7xl">

                        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">

                            <div className="pt-2">

                                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                    How We Ride
                                </p>

                            </div>

                            <div>

                                <h2 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-[5.5rem]">
                                    Beyond
                                    <br />
                                    the route.
                                </h2>

                                <p className="mt-8 max-w-2xl text-sm leading-7 text-white/55 md:text-base md:leading-8">
                                    Mountain biking in the Atlas is about more than covering kilometres.
                                    It is about discovering remote landscapes, riding through mountain
                                    communities and experiencing Morocco at the pace of two wheels.
                                </p>

                                <div className="mt-14 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-3 md:gap-6">

                                    <div>

                                        <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                            01
                                        </p>

                                        <h3 className="mt-4 text-xl font-semibold uppercase tracking-[-0.02em] text-white">
                                            Remote
                                        </h3>

                                        <p className="mt-3 text-xs leading-6 text-white/45">
                                            Routes that take you away from the obvious and deeper into the
                                            Atlas.
                                        </p>

                                    </div>

                                    <div>

                                        <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                            02
                                        </p>

                                        <h3 className="mt-4 text-xl font-semibold uppercase tracking-[-0.02em] text-white">
                                            Human
                                        </h3>

                                        <p className="mt-3 text-xs leading-6 text-white/45">
                                            Mountain villages, local landscapes and encounters along the
                                            way.
                                        </p>

                                    </div>

                                    <div>

                                        <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                            03
                                        </p>

                                        <h3 className="mt-4 text-xl font-semibold uppercase tracking-[-0.02em] text-white">
                                            Adventure
                                        </h3>

                                        <p className="mt-3 text-xs leading-6 text-white/45">
                                            Long days, high passes and constantly changing terrain.
                                        </p>

                                    </div>

                                </div>

                            </div>

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

                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

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
                                                    Find your line
                                                    <br />
                                                    through the Atlas.
                                                </h2>

                                            </div>

                                            <p className="max-w-xs text-[10px] uppercase leading-6 tracking-[0.25em] text-white/55 lg:pb-2">
                                                Mountain biking.
                                                <br />
                                                Gravel bike trips.
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
                                        Planning a mountain bike adventure or interested in one of our
                                        gravel trips?
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