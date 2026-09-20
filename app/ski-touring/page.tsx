import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export default function SkiTouringPage() {
    return (
        <>
            <SiteHeader />

            <main className="bg-black text-white">

                {/* HERO */}

                <section className="relative min-h-screen overflow-hidden">

                    <div className="absolute inset-0">

                        <Image
                            src="/images/ski/radouane-ski-descent-tizi-mazik.jpeg"
                            alt="Ski touring descent in the Moroccan High Atlas"
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
                            Ride The Atlas · By Ski
                        </p>

                    </div>

                    {/* MAIN TITLE */}

                    <div className="absolute left-6 top-1/2 z-20 -translate-y-1/2 md:left-10 lg:left-14">

                        <div className="flex items-start gap-5 md:gap-7">

                            <span className="mt-2 h-28 w-px shrink-0 bg-[#F3EBDD] md:h-36" />

                            <div>

                                <h1 className="text-[3.2rem] font-semibold uppercase leading-[0.88] tracking-[-0.055em] text-white sm:text-[4rem] md:text-[5rem] lg:text-[6rem]">
                                    Ski
                                    <br />
                                    Touring
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
                            href="#ski-touring"
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
                    id="ski-touring"
                    className="px-6 py-24 md:px-10 md:py-32 lg:px-14"
                >

                    <div className="mx-auto max-w-7xl">

                        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">

                            <div className="pt-2">

                                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                    Ski Touring The Atlas
                                </p>

                            </div>

                            <div>

                                <h2 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-[5.8rem]">
                                    Mountains made
                                    <br />
                                    for winter.
                                </h2>

                                <p className="mt-8 max-w-2xl text-sm leading-7 text-white/55 md:text-base md:leading-8">
                                    In winter, the Atlas becomes a different landscape.
                                    High summits, remote valleys, long approaches and
                                    couloirs come together to create a unique setting
                                    for ski touring in Morocco.
                                </p>

                                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 md:text-base md:leading-8">
                                    From the Tachedirt and Toubkal region to the M&apos;Goun
                                    Massif, Ride The Atlas explores the mountains on skis,
                                    combining demanding ascents with the reward of long
                                    descents through the High Atlas.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>
                {/* SKI TOURING JOURNEYS */}

                <section className="px-6 py-24 md:px-10 md:py-32 lg:px-14">

                    <div className="mx-auto max-w-7xl">

                        <div className="mb-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">

                            <div>

                                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                    Ski Touring
                                </p>

                            </div>

                            <div>

                                <h2 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-[5.5rem]">
                                    Choose your
                                    <br />
                                    line into winter.
                                </h2>

                            </div>

                        </div>

                        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

                            {/* TACHEDIRT & TOUBKAL */}

                            <Link
                                href="/ski-touring/tachedirt-toubkal"
                                className="group relative overflow-hidden"
                            >

                                <div className="relative aspect-[4/5] overflow-hidden">

                                    <Image
                                        src="/images/ski/radouane-on-skis.jpeg"
                                        alt="Ski touring in the Tachedirt and Toubkal region of Morocco"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                                                    Tachedirt
                                                    <br />
                                                    &amp; Toubkal
                                                </h3>

                                            </div>

                                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/35 text-lg text-[#F3EBDD] transition-all duration-300 group-hover:border-[#F3EBDD] group-hover:bg-[#F3EBDD] group-hover:text-black">
                                                ↗
                                            </span>

                                        </div>

                                        <div className="mt-7 border-t border-white/20 pt-5">

                                            <p className="max-w-md text-xs leading-6 text-white/60">
                                                An 8-day ski touring journey through the
                                                Tachedirt and Toubkal region of the Eastern
                                                High Atlas.
                                            </p>

                                            <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/45 transition-colors duration-300 group-hover:text-[#F3EBDD]">
                                                Explore journey
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </Link>

                            {/* HIGH ROUTE & COULOIRS */}

                            <Link
                                href="/ski-touring/high-route-couloirs"
                                className="group relative overflow-hidden"
                            >

                                <div className="relative aspect-[4/5] overflow-hidden">

                                    <Image
                                        src="/images/ski/radouane-couloir-skis-on-pack.jpeg"
                                        alt="Advanced ski touring and couloir skiing in the Moroccan High Atlas"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                    <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">

                                        <div className="flex items-end justify-between gap-6">

                                            <div>

                                                <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                                    02 · 6 DAYS
                                                </p>

                                                <h3 className="mt-4 text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white md:text-5xl">
                                                    High Route
                                                    <br />
                                                    &amp; Couloirs
                                                </h3>

                                            </div>

                                            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/35 text-lg text-[#F3EBDD] transition-all duration-300 group-hover:border-[#F3EBDD] group-hover:bg-[#F3EBDD] group-hover:text-black">
                                                ↗
                                            </span>

                                        </div>

                                        <div className="mt-7 border-t border-white/20 pt-5">

                                            <p className="max-w-md text-xs leading-6 text-white/60">
                                                A 6-day ski high route combining demanding
                                                mountain terrain and couloir descents for
                                                advanced skiers.
                                            </p>

                                            <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/45 transition-colors duration-300 group-hover:text-[#F3EBDD]">
                                                Advanced skiers
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </Link>

                            {/* M'GOUN */}

                            <Link
                                href="/ski-touring/mgoun"
                                className="group relative overflow-hidden"
                            >

                                <div className="relative aspect-[4/5] overflow-hidden">

                                    <Image
                                        src="/images/ski/ski-descent-bouignouane.jpeg"
                                        alt="Ski touring in the M'Goun Massif of the Central High Atlas"
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                    <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">

                                        <div className="flex items-end justify-between gap-6">

                                            <div>

                                                <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                                    03 · 6 DAYS
                                                </p>

                                                <h3 className="mt-4 text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white md:text-5xl">
                                                    M&apos;Goun
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
                                                A 6-day ski touring journey through the
                                                M&apos;Goun Massif in the Central High Atlas.
                                            </p>

                                            <p className="mt-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/45 transition-colors duration-300 group-hover:text-[#F3EBDD]">
                                                Explore journey
                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </Link>

                        </div>

                    </div>

                </section>

                {/* THE ATLAS BY SKI */}

                <section className="px-6 py-24 md:px-10 md:py-32 lg:px-14">

                    <div className="mx-auto max-w-7xl">

                        <div className="relative overflow-hidden">

                            <div className="relative aspect-[16/9] min-h-[520px]">

                                <Image
                                    src="/images/ski/skiers-close-to-bouignouane-summit.jpeg"
                                    alt="Skiers approaching a summit in the Moroccan High Atlas"
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
                                                The Atlas By Ski
                                            </p>

                                            <h2 className="mt-5 text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                                                Follow the
                                                <br />
                                                winter lines.
                                            </h2>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            <div className="grid border-x border-b border-white/10 md:grid-cols-[1fr_1fr]">

                                <div className="p-7 md:p-10">

                                    <p className="max-w-xl text-sm leading-7 text-white/55 md:text-base md:leading-8">
                                        Winter transforms the High Atlas into a vast mountain
                                        landscape of snow-covered valleys, high passes,
                                        summits and steep lines.
                                    </p>

                                </div>

                                <div className="border-t border-white/10 p-7 md:border-l md:border-t-0 md:p-10">

                                    <p className="max-w-xl text-sm leading-7 text-white/55 md:text-base md:leading-8">
                                        From the Tachedirt and Toubkal region to the M&apos;Goun
                                        Massif, each journey follows a different expression
                                        of the Moroccan mountains.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>
                {/* THE WINTER APPROACH */}

                <section className="px-6 py-24 md:px-10 md:py-32 lg:px-14">

                    <div className="mx-auto max-w-7xl">

                        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">

                            <div className="pt-2">

                                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                    The Winter Approach
                                </p>

                            </div>

                            <div>

                                <h2 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-[5.5rem]">
                                    Beyond
                                    <br />
                                    the summit.
                                </h2>

                                <p className="mt-8 max-w-2xl text-sm leading-7 text-white/55 md:text-base md:leading-8">
                                    Ski touring in the Atlas is about more than reaching
                                    a summit. The experience comes from moving through
                                    the mountains, reading the terrain and following
                                    the conditions of the day.
                                </p>

                                <div className="mt-14 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-3 md:gap-6">

                                    <div>

                                        <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                            01
                                        </p>

                                        <h3 className="mt-4 text-xl font-semibold uppercase tracking-[-0.02em] text-white">
                                            Terrain
                                        </h3>

                                        <p className="mt-3 text-xs leading-6 text-white/45">
                                            High passes, open slopes, narrow couloirs
                                            and changing mountain terrain.
                                        </p>

                                    </div>

                                    <div>

                                        <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                            02
                                        </p>

                                        <h3 className="mt-4 text-xl font-semibold uppercase tracking-[-0.02em] text-white">
                                            Conditions
                                        </h3>

                                        <p className="mt-3 text-xs leading-6 text-white/45">
                                            Routes shaped by snow, weather and the
                                            conditions of the mountains.
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
                                            Long approaches, high summits and the reward
                                            of descending through winter landscapes.
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
                                    src="/images/ski/radouane-ski-descent-tizi-mazik.jpeg"
                                    alt="Ski touring descent in the Moroccan High Atlas"
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
                                                    through winter.
                                                </h2>

                                            </div>

                                            <p className="max-w-xs text-[10px] uppercase leading-6 tracking-[0.25em] text-white/55 lg:pb-2">
                                                Ski touring.
                                                <br />
                                                High routes &amp; couloirs.
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
                                        Interested in a ski touring journey in the Moroccan
                                        Atlas? Get in touch and let&apos;s talk mountains.
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
                {/* FINAL CTA */}

                <section className="px-6 pb-24 md:px-10 md:pb-32 lg:px-14">

                    <div className="mx-auto max-w-7xl">

                        <div className="relative overflow-hidden">

                            <div className="relative aspect-[16/9] min-h-[500px] md:min-h-[580px]">

                                <Image
                                    src="/images/ski/skiers-on-toubkal-summit.jpeg"
                                    alt="Skiers on a summit in the Moroccan High Atlas"
                                    fill
                                    sizes="100vw"
                                    className="object-cover object-center transition-transform duration-1000 hover:scale-[1.02]"
                                />

                                <div className="absolute inset-0 bg-black/20" />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                                <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />

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
                                                    through winter.
                                                </h2>

                                            </div>

                                            <p className="max-w-xs text-[10px] uppercase leading-6 tracking-[0.25em] text-white/60 lg:pb-2">
                                                Ski touring.
                                                <br />
                                                High routes &amp; couloirs.
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
                                        Planning a ski touring adventure in the Moroccan
                                        Atlas? Get in touch and let&apos;s talk mountains.
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