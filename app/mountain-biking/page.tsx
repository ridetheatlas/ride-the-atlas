import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export default function MountainBikingPage() {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#171715] text-white">
                {/* HERO */}
                <section className="relative min-h-screen overflow-hidden bg-black">
                    <div className="absolute inset-0">
                        <Image
                            src="/images/mtb/bikers-riding-on-ridge.jpeg"
                            alt="Mountain bikers riding through the High Atlas Mountains of Morocco"
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/85" />
                    </div>

                    <div className="absolute left-6 top-32 z-20 md:left-10 md:top-36 lg:left-14">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.42em] text-white/80">
                            Ride The Atlas · By Bike
                        </p>
                    </div>

                    <div className="absolute left-6 top-1/2 z-20 -translate-y-1/2 md:left-10 lg:left-14">
                        <div className="flex items-start gap-5 md:gap-7">
                            <span className="mt-2 h-28 w-px shrink-0 bg-[#F3EBDD] md:h-36" />
                            <div>
                                <h1 className="text-[3.2rem] font-semibold uppercase leading-[0.88] tracking-[-0.055em] text-white sm:text-[4rem] md:text-[5rem] lg:text-[6rem]">
                                    Mountain
                                    <br />
                                    Biking
                                </h1>
                                <p className="mt-6 max-w-md text-xs leading-6 text-white/60 md:text-sm md:leading-7">
                                    Mountain biking journeys across Morocco&apos;s High Atlas,
                                    from remote valleys and mountain trails to high-altitude
                                    landscapes.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-8 left-6 right-6 z-20 flex items-end justify-between md:left-10 md:right-10 lg:left-14 lg:right-14">
                        <p className="text-[8px] uppercase tracking-[0.35em] text-white/40">
                            High Atlas · Morocco
                        </p>
                        <Link
                            href="#riding"
                            className="group flex items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.35em] text-white/70 transition-colors duration-300 hover:text-[#F3EBDD]"
                        >
                            Explore
                            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-sm text-[#F3EBDD] transition-all duration-300 group-hover:translate-y-1 group-hover:border-[#F3EBDD]">
                                ↓
                            </span>
                        </Link>
                    </div>
                </section>

                {/* INTRODUCTION — IVORY */}
                <section
                    id="riding"
                    className="scroll-mt-20 bg-[#F3EBDD] px-6 py-24 text-[#171715] md:px-10 md:py-32 lg:px-14"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
                            <div className="pt-2">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#B95A2A]">
                                    Riding The Atlas
                                </p>
                            </div>
                            <div>
                                <h2 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-[5.8rem]">
                                    Mountains made
                                    <br />
                                    for two wheels.
                                </h2>
                                <p className="mt-8 max-w-2xl text-sm leading-7 text-black/60 md:text-base md:leading-8">
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

                {/* RIDING OPTIONS — DARK */}
                <section
                    id="trips"
                    className="scroll-mt-20 bg-[#171715] px-6 py-24 md:px-10 md:py-32 lg:px-14"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-16 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                    Mountain Biking
                                </p>
                            </div>
                            <div>
                                <h2 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl">
                                    Ride The
                                    <br />
                                    Atlas.
                                </h2>
                            </div>
                        </div>

                        {/* EASTERN HIGH ATLAS */}
                        <div>
                            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                        Eastern High Atlas
                                    </p>
                                    <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/35">
                                        Toubkal Massif · Morocco
                                    </p>
                                </div>
                                <p className="hidden text-[8px] font-semibold uppercase tracking-[0.3em] text-white/25 md:block">
                                    Mountain Biking
                                </p>
                            </div>

                            <div className="grid gap-5 md:grid-cols-3">
                                {/* 8 DAYS */}
                                <Link
                                    href="/mountain-biking/8-day-mountain-biking-eastern-high-atlas-morocco"
                                    className="group relative overflow-hidden"
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden">
                                        <Image
                                            src="/images/mtb/bikers-riding-on-ridge.jpeg"
                                            alt="Mountain bikers riding through the Eastern High Atlas and Toubkal Massif in Morocco"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                                        />
                                        <div className="absolute inset-0 bg-black/10" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                                        <div className="absolute inset-x-0 top-0 p-6">
                                            <div className="flex items-center justify-between">
                                                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#F3EBDD]">8 Days</p>
                                                <span className="flex h-9 w-9 items-center justify-center border border-white/30 text-sm text-white transition-all duration-300 group-hover:border-[#F3EBDD] group-hover:bg-[#F3EBDD] group-hover:text-black">↗</span>
                                            </div>
                                        </div>
                                        <div className="absolute inset-x-0 bottom-0 p-6">
                                            <h3 className="text-3xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white">
                                                Eastern High Atlas
                                                <br />
                                                &amp; Toubkal
                                            </h3>
                                            <div className="mt-6 border-t border-white/20 pt-4">
                                                <div className="flex flex-wrap gap-x-5 gap-y-3">
                                                    <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/55">Challenging</p>
                                                    <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#F3EBDD]">MTB / eMTB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                {/* 6 DAYS */}
                                <Link
                                    href="/mountain-biking/6-day-mountain-biking-eastern-high-atlas-morocco"
                                    className="group relative overflow-hidden"
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden">
                                        <Image
                                            src="/images/mtb/group-bikers-picture.jpeg"
                                            alt="Mountain biking journey in the Eastern High Atlas of Morocco"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                                        />
                                        <div className="absolute inset-0 bg-black/10" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                                        <div className="absolute inset-x-0 top-0 p-6">
                                            <div className="flex items-center justify-between">
                                                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#F3EBDD]">6 Days</p>
                                                <span className="flex h-9 w-9 items-center justify-center border border-white/30 text-sm text-white transition-all duration-300 group-hover:border-[#F3EBDD] group-hover:bg-[#F3EBDD] group-hover:text-black">↗</span>
                                            </div>
                                        </div>
                                        <div className="absolute inset-x-0 bottom-0 p-6">
                                            <h3 className="text-3xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white">
                                                Eastern High Atlas
                                                <br />
                                                6-Day Journey
                                            </h3>
                                            <div className="mt-6 border-t border-white/20 pt-4">
                                                <div className="flex flex-wrap gap-x-5 gap-y-3">
                                                    <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/55">Challenging</p>
                                                    <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#F3EBDD]">MTB / eMTB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                {/* 4 DAYS */}
                                <Link
                                    href="/mountain-biking/4-day-mountain-biking-eastern-high-atlas-morocco"
                                    className="group relative overflow-hidden"
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden">
                                        <Image
                                            src="/images/mtb/singletrack-two-riders.jpeg"
                                            alt="Mountain biking singletrack in the Eastern High Atlas of Morocco"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                                        />
                                        <div className="absolute inset-0 bg-black/10" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                                        <div className="absolute inset-x-0 top-0 p-6">
                                            <div className="flex items-center justify-between">
                                                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#F3EBDD]">4 Days</p>
                                                <span className="flex h-9 w-9 items-center justify-center border border-white/30 text-sm text-white transition-all duration-300 group-hover:border-[#F3EBDD] group-hover:bg-[#F3EBDD] group-hover:text-black">↗</span>
                                            </div>
                                        </div>
                                        <div className="absolute inset-x-0 bottom-0 p-6">
                                            <h3 className="text-3xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white">
                                                Eastern High Atlas
                                                <br />
                                                4-Day Journey
                                            </h3>
                                            <div className="mt-6 border-t border-white/20 pt-4">
                                                <div className="flex flex-wrap gap-x-5 gap-y-3">
                                                    <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/55">Moderate</p>
                                                    <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#F3EBDD]">MTB / eMTB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* OTHER REGIONS */}
                        <div className="mt-20">
                            <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">Other Atlas Regions</p>
                                    <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-white/35">Different landscapes · Different rides</p>
                                </div>
                            </div>

                            <div className="grid gap-5 md:grid-cols-2">
                                {/* HAPPY VALLEY */}
                                <Link
                                    href="/mountain-biking/8-day-mountain-biking-happy-valley-morocco"
                                    className="group relative overflow-hidden"
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden">
                                        <Image
                                            src="/images/mtb/two-riders-green-landcape-singletrack.jpeg"
                                            alt="Mountain bikers riding through the Happy Valley in the Central High Atlas of Morocco"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                                        <div className="absolute inset-x-0 top-0 p-6">
                                            <div className="flex items-center justify-between">
                                                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#F3EBDD]">8 Days</p>
                                                <span className="flex h-9 w-9 items-center justify-center border border-white/30 text-sm text-white transition-all duration-300 group-hover:border-[#F3EBDD] group-hover:bg-[#F3EBDD] group-hover:text-black">↗</span>
                                            </div>
                                        </div>
                                        <div className="absolute inset-x-0 bottom-0 p-6">
                                            <h3 className="text-3xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white md:text-4xl">
                                                Happy Valley
                                                <br />
                                                Central High Atlas
                                            </h3>
                                            <div className="mt-6 border-t border-white/20 pt-4">
                                                <div className="flex flex-wrap gap-x-5 gap-y-3">
                                                    <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/55">Challenging</p>
                                                    <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#F3EBDD]">MTB / eMTB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                {/* SAGHRO */}
                                <Link
                                    href="/mountain-biking/8-day-mountain-biking-saghro-mountains-morocco"
                                    className="group relative overflow-hidden"
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden">
                                        <Image
                                            src="/images/mtb/rider-singletrack-atlas.jpeg"
                                            alt="Mountain biker riding through the Saghro Mountains in Morocco"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-1000 group-hover:scale-[1.04]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />
                                        <div className="absolute inset-x-0 top-0 p-6">
                                            <div className="flex items-center justify-between">
                                                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#F3EBDD]">8 Days</p>
                                                <span className="flex h-9 w-9 items-center justify-center border border-white/30 text-sm text-white transition-all duration-300 group-hover:border-[#F3EBDD] group-hover:bg-[#F3EBDD] group-hover:text-black">↗</span>
                                            </div>
                                        </div>
                                        <div className="absolute inset-x-0 bottom-0 p-6">
                                            <h3 className="text-3xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white md:text-4xl">
                                                Saghro
                                                <br />
                                                Mountains
                                            </h3>
                                            <div className="mt-6 border-t border-white/20 pt-4">
                                                <div className="flex flex-wrap gap-x-5 gap-y-3">
                                                    <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-white/55">Challenging</p>
                                                    <p className="text-[8px] font-semibold uppercase tracking-[0.2em] text-[#F3EBDD]">MTB / eMTB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* THE ATLAS BY BIKE — IVORY */}
                <section className="bg-[#F3EBDD] px-6 py-24 text-[#171715] md:px-10 md:py-32 lg:px-14">
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
                                            <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#F3EBDD]">The Atlas By Bike</p>
                                            <h2 className="mt-5 text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                                                Ride beyond
                                                <br />
                                                the obvious.
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid border-x border-b border-black/10 md:grid-cols-[1fr_1fr]">
                                <div className="p-7 md:p-10">
                                    <p className="max-w-xl text-sm leading-7 text-black/60 md:text-base md:leading-8">
                                        The Atlas is not just a backdrop for riding. It is a landscape
                                        of high passes, remote valleys, old trails and mountain villages,
                                        where every route reveals a different side of Morocco.
                                    </p>
                                </div>
                                <div className="border-t border-black/10 p-7 md:border-l md:border-t-0 md:p-10">
                                    <p className="max-w-xl text-sm leading-7 text-black/60 md:text-base md:leading-8">
                                        Ride The Atlas follows routes that connect these landscapes,
                                        combining challenging riding with the slower rhythm of travelling
                                        through the mountains.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HOW WE RIDE — DARK */}
                <section className="bg-[#171715] px-6 py-24 md:px-10 md:py-32 lg:px-14">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">
                            <div className="pt-2">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">How We Ride</p>
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
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">01</p>
                                        <h3 className="mt-4 text-xl font-semibold uppercase tracking-[-0.02em] text-white">Remote</h3>
                                        <p className="mt-3 text-xs leading-6 text-white/45">Routes that take you away from the obvious and deeper into the Atlas.</p>
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">02</p>
                                        <h3 className="mt-4 text-xl font-semibold uppercase tracking-[-0.02em] text-white">Human</h3>
                                        <p className="mt-3 text-xs leading-6 text-white/45">Mountain villages, local landscapes and encounters along the way.</p>
                                    </div>
                                    <div>
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">03</p>
                                        <h3 className="mt-4 text-xl font-semibold uppercase tracking-[-0.02em] text-white">Adventure</h3>
                                        <p className="mt-3 text-xs leading-6 text-white/45">Long days, high passes and constantly changing terrain.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="bg-[#171715] px-6 pb-24 md:px-10 md:pb-32 lg:px-14">
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
                                                    <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#F3EBDD]">Ride The Atlas</p>
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
                                    <span>Start a conversation</span>
                                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
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
