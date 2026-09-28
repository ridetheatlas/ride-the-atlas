import type { Metadata } from "next";
import Image from "next/image";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
    title: "6-Day Mountain Biking Eastern High Atlas | Ride The Atlas",
    description:
        "A six-day mountain biking journey through Morocco's High Atlas, riding the Imnane and Azzaden valleys, Kik Plateau and trails around Amezmiz.",
};

export default function SixDayEasternHighAtlasPage() {
    return (
        <>
            <SiteHeader />

            <main>
                {/* HERO */}

                <section className="relative min-h-[82vh] overflow-hidden bg-black">

                    <Image
                        src="/images/mtb/easter-high-atlas-mtb-6-days/amezmiz-region-group-bikers.jpeg"
                        alt="Mountain bikers riding together in the Amezmiz region of Morocco"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />

                    {/* IMAGE OVERLAYS */}

                    <div className="absolute inset-0 bg-black/15" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    {/* HERO CONTENT */}

                    <div className="relative z-10 flex min-h-[82vh] items-end px-6 pb-12 pt-32 md:px-10 md:pb-16 lg:px-14 lg:pb-20">
                        <div className="mx-auto w-full max-w-7xl">
                            <div className="max-w-3xl">

                                {/* TRIP LABEL */}

                                <div className="flex items-center gap-4">
                                    <span className="h-px w-8 bg-[#F3EBDD]" />

                                    <p className="text-[9px] font-semibold uppercase tracking-[0.38em] text-[#F3EBDD] md:text-[10px]">
                                        6 Days · Mountain Biking
                                    </p>
                                </div>

                                {/* TITLE */}

                                <h1 className="mt-6 text-[2.8rem] font-semibold uppercase leading-[0.9] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]">
                                    Eastern High Atlas
                                    <br />
                                    <span className="text-white/85">
                                        Valleys, Trails
                                    </span>
                                    <br />
                                    <span className="text-white/85">
                                        &amp; Mountain Life
                                    </span>
                                </h1>

                                {/* LOCATION */}

                                <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.3em] text-white/65 md:text-xs">
                                    Morocco · High Atlas Mountains
                                </p>

                                {/* TRIP TYPE */}

                                <div className="mt-7 flex flex-wrap gap-3">
                                    <span className="border border-white/35 px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-white">
                                        MTB
                                    </span>

                                    <span className="border border-white/35 px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.28em] text-white">
                                        eMTB
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                {/* STICKY TRIP NAVIGATION */}
                <nav
                    aria-label="Trip sections"
                    className="sticky top-0 z-40 border-b border-black/10 bg-[#F3EBDD]/95 text-[#20231F] backdrop-blur-md"
                >
                    <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
                        <div className="flex gap-8 overflow-x-auto whitespace-nowrap py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            <a
                                href="#overview"
                                className="text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors hover:text-black/50"
                            >
                                Overview
                            </a>

                            <a
                                href="#itinerary"
                                className="text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors hover:text-black/50"
                            >
                                Itinerary
                            </a>

                            <a
                                href="#riding"
                                className="text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors hover:text-black/50"
                            >
                                Riding
                            </a>

                            <a
                                href="#accommodation"
                                className="text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors hover:text-black/50"
                            >
                                Accommodation
                            </a>

                            <a
                                href="#included"
                                className="text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors hover:text-black/50"
                            >
                                Included
                            </a>

                            <a
                                href="#bike-equipment"
                                className="text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors hover:text-black/50"
                            >
                                Bike & Equipment
                            </a>

                            <a
                                href="#practical"
                                className="text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors hover:text-black/50"
                            >
                                Practical
                            </a>

                            <a
                                href="#related-trips"
                                className="text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors hover:text-black/50"
                            >
                                Related Trips
                            </a>

                            <a
                                href="#faq"
                                className="text-[9px] font-semibold uppercase tracking-[0.2em] transition-colors hover:text-black/50"
                            >
                                FAQ
                            </a>

                            <a
                                href="/contact"
                                className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/60 transition-colors hover:text-black"
                            >
                                Contact ↗
                            </a>
                        </div>
                    </div>
                </nav>
                {/* OVERVIEW */}

                <section
                    id="overview"
                    className="bg-[#F3EBDD] px-6 py-20 text-black md:px-10 md:py-28 lg:px-14 lg:py-36"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-24">

                            {/* LOCATION */}

                            <div>
                                <div className="flex items-center gap-4">
                                    <span className="h-px w-8 bg-black/30" />

                                    <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-black/45">
                                        Eastern High Atlas
                                    </p>
                                </div>

                                <p className="mt-8 max-w-xs text-[10px] font-medium uppercase leading-6 tracking-[0.25em] text-black/40">
                                    Morocco
                                    <br />
                                    High Atlas Mountains
                                    <br />
                                    Imlil · Azzaden · Ouirgane
                                    <br />
                                    Kik Plateau · Ourika
                                </p>
                            </div>

                            {/* MAIN INTRODUCTION */}

                            <div>
                                <h2 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.88] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
                                    Six days.
                                    <br />
                                    A different
                                    <br />
                                    side of the
                                    <br />
                                    Atlas.
                                </h2>

                                <p className="mt-10 max-w-2xl text-base leading-8 text-black/65 md:text-lg md:leading-9">
                                    Leave Marrakech behind and follow the mountain trails
                                    through the valleys and highlands of Morocco&apos;s
                                    High Atlas.
                                </p>

                                <p className="mt-5 max-w-2xl text-sm leading-7 text-black/50 md:text-base md:leading-8">
                                    From the village trails around Imlil to the red
                                    landscapes of Azzaden, the open Kik Plateau and the
                                    green Ourika Valley, this journey connects a changing
                                    series of mountain environments by bike. Along the way,
                                    ride through traditional villages, cross remote tracks
                                    and experience the landscapes beyond the city.
                                </p>
                            </div>
                        </div>

                        {/* TRIP AT A GLANCE */}

                        <div className="mt-20 border-y border-black/15 md:mt-28">
                            <div className="grid md:grid-cols-2 lg:grid-cols-4">

                                <div className="border-b border-black/15 px-0 py-7 md:border-r md:px-8 md:py-9 lg:border-b-0">
                                    <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-black/35">
                                        Duration
                                    </p>

                                    <p className="mt-4 text-xl font-semibold uppercase tracking-[-0.02em]">
                                        6 Days
                                    </p>

                                    <p className="mt-3 text-xs uppercase tracking-[0.15em] text-black/45">
                                        5 Nights
                                    </p>
                                </div>

                                <div className="border-b border-black/15 px-0 py-7 md:border-r md:px-8 md:py-9 lg:border-b-0">
                                    <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-black/35">
                                        Start
                                    </p>

                                    <p className="mt-4 text-xl font-semibold uppercase tracking-[-0.02em]">
                                        Marrakech
                                    </p>

                                    <p className="mt-3 text-xs uppercase tracking-[0.15em] text-black/45">
                                        Airport arrival
                                    </p>
                                </div>

                                <div className="border-b border-black/15 px-0 py-7 md:border-r md:px-8 md:py-9 lg:border-b-0">
                                    <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-black/35">
                                        Riding
                                    </p>

                                    <p className="mt-4 text-xl font-semibold uppercase tracking-[-0.02em]">
                                        MTB · eMTB
                                    </p>

                                    <p className="mt-3 text-xs uppercase tracking-[0.15em] text-black/45">
                                        Mountain biking
                                    </p>
                                </div>

                                <div className="px-0 py-7 md:px-8 md:py-9">
                                    <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-black/35">
                                        Finish
                                    </p>

                                    <p className="mt-4 text-xl font-semibold uppercase tracking-[-0.02em]">
                                        Marrakech
                                    </p>

                                    <p className="mt-3 text-xs uppercase tracking-[0.15em] text-black/45">
                                        Airport departure
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* ROUTE INFORMATION */}

                        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">

                            <div>
                                <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-black/35">
                                    The journey
                                </p>

                                <div className="mt-6 flex flex-wrap gap-x-10 gap-y-5">

                                    <div>
                                        <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                            Route
                                        </p>

                                        <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-black/70">
                                            Marrakech · Imlil · Ouirgane · Tagoum
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                            Terrain
                                        </p>

                                        <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-black/70">
                                            Mountain trails · Dirt roads
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                            Riding level
                                        </p>

                                        <p className="mt-2 text-xs font-medium uppercase tracking-[0.12em] text-black/70">
                                            To be confirmed
                                        </p>
                                    </div>

                                </div>
                            </div>

                            <div className="lg:text-right">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-black/35">
                                    Ride The Atlas
                                </p>

                                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em]">
                                    By bike. By ski.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* PHOTO STORY */}
                <section id="gallery" className="bg-[#171715] px-6 py-20 text-[#F3EBDD] scroll-mt-20">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-10 max-w-2xl">
                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#F3EBDD]/60">
                                The journey
                            </p>
                            <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
                                A closer look at the Atlas.
                            </h2>
                            <p className="mt-5 max-w-xl text-sm leading-7 text-[#F3EBDD]/70">
                                From high mountain tracks to village paths and open ridgelines, each
                                day brings a new perspective on riding in the High Atlas.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
                            <div className="relative min-h-[320px] overflow-hidden md:col-span-7 md:min-h-[520px]">
                                <Image
                                    src="/images/mtb/easter-high-atlas-mtb-6-days/amezmiz-region-ridge.jpeg"
                                    alt="Mountain biking across a ridge in the Amezmiz region"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 58vw"
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 md:col-span-5">
                                <div className="relative min-h-[240px] overflow-hidden">
                                    <Image
                                        src="/images/mtb/easter-high-atlas-mtb-6-days/ait-zitoune-village.jpeg"
                                        alt="Village landscape in the High Atlas"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 42vw"
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>

                                <div className="relative min-h-[240px] overflow-hidden">
                                    <Image
                                        src="/images/mtb/easter-high-atlas-mtb-6-days/assif-zegzawen-singletrack-two-riders.jpeg"
                                        alt="Two mountain bikers riding a singletrack"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 42vw"
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div className="relative min-h-[260px] overflow-hidden">
                                <Image
                                    src="/images/mtb/easter-high-atlas-mtb-6-days/above-taskourt-dam.jpeg"
                                    alt="Mountain landscape above Taskourt Dam"
                                    fill
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>

                            <div className="relative min-h-[260px] overflow-hidden">
                                <Image
                                    src="/images/mtb/easter-high-atlas-mtb-6-days/amezmiz-region-trail-group.jpeg"
                                    alt="Mountain biking group on a trail in the Amezmiz region"
                                    fill
                                    sizes="(max-width: 640px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* ITINERARY */}
                <section id="itinerary" className="bg-[#F3EBDD] px-6 py-24 text-[#20231F] md:px-10 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-14 max-w-2xl">
                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#77766D]">
                                The journey
                            </p>

                            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                                Six days. One journey through the Atlas.
                            </h2>

                            <p className="mt-5 text-base leading-7 text-[#66665D]">
                                From the high mountain villages around Imlil to the trails and valleys
                                of the western Atlas, each day brings a different landscape.
                            </p>
                        </div>

                        <div className="border-t border-black/15">
                            {/* DAY 1 */}
                            <details open className="group border-b border-black/15">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7">
                                    <div className="flex items-center gap-6">
                                        <span className="text-sm font-medium text-[#88877D]">01</span>
                                        <div>
                                            <p className="mb-1 text-xs uppercase tracking-[0.18em] text-[#88877D]">
                                                Marrakech
                                            </p>
                                            <h3 className="text-lg font-semibold md:text-2xl">
                                                Arrival in Marrakech
                                            </h3>
                                        </div>
                                    </div>
                                    <span className="text-2xl font-light transition-transform group-open:rotate-45">+</span>
                                </summary>

                                <div className="grid gap-8 pb-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src="/images/general/overnights/riad-aymane-marrakech.jpg"
                                            alt="Traditional riad in Marrakech"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 35vw"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="max-w-xl">
                                        <p className="text-base leading-8 text-[#55564F]">
                                            Arrival at Marrakech airport and transfer to your riad in the
                                            heart of the old Medina. Take time to settle in and discover the
                                            city at your own pace.
                                        </p>
                                        <p className="mt-5 text-sm font-medium text-[#77766D]">
                                            Overnight in Marrakech
                                        </p>
                                    </div>
                                </div>
                            </details>

                            {/* DAY 2 */}
                            <details className="group border-b border-black/15">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7">
                                    <div className="flex items-center gap-6">
                                        <span className="text-sm font-medium text-[#88877D]">02</span>
                                        <div>
                                            <p className="mb-1 text-xs uppercase tracking-[0.18em] text-[#88877D]">
                                                Marrakech · Imlil
                                            </p>
                                            <h3 className="text-lg font-semibold md:text-2xl">
                                                Into the High Atlas
                                            </h3>
                                        </div>
                                    </div>
                                    <span className="text-2xl font-light transition-transform group-open:rotate-45">+</span>
                                </summary>

                                <div className="grid gap-8 pb-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src="/images/mtb/easter-high-atlas-mtb-6-days/ait-zitoune-village.jpeg"
                                            alt="Mountain village in the High Atlas"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 35vw"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="max-w-xl">
                                        <p className="text-base leading-8 text-[#55564F]">
                                            Leave Marrakech and travel towards Imlil, surrounded by the
                                            mountains of the High Atlas. After settling in, enjoy an
                                            acclimatisation ride through the Imnane Valley, passing orchards,
                                            traditional villages and pine-covered slopes.
                                        </p>
                                        <p className="mt-5 text-sm font-medium text-[#77766D]">
                                            Overnight in Imlil
                                        </p>
                                    </div>
                                </div>
                            </details>

                            {/* DAY 3 */}
                            <details className="group border-b border-black/15">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7">
                                    <div className="flex items-center gap-6">
                                        <span className="text-sm font-medium text-[#88877D]">03</span>
                                        <div>
                                            <p className="mb-1 text-xs uppercase tracking-[0.18em] text-[#88877D]">
                                                Imlil · Azzaden · Ouirgane
                                            </p>
                                            <h3 className="text-lg font-semibold md:text-2xl">
                                                Across the Azzaden Valley
                                            </h3>
                                        </div>
                                    </div>
                                    <span className="text-2xl font-light transition-transform group-open:rotate-45">+</span>
                                </summary>

                                <div className="grid gap-8 pb-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src="/images/mtb/easter-high-atlas-mtb-6-days/assif-zegzawen-singletrack-two-riders.jpeg"
                                            alt="Two mountain bikers riding a singletrack in the Atlas"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 35vw"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="max-w-xl">
                                        <p className="text-base leading-8 text-[#55564F]">
                                            Ride from Imlil towards Ouirgane through the Azzaden Valley,
                                            crossing the mountain landscape around Tizi Oussem and Tamsoult.
                                            A day of changing terrain, remote villages and views across the
                                            High Atlas.
                                        </p>
                                        <p className="mt-5 text-sm font-medium text-[#77766D]">
                                            Overnight in Ouirgane
                                        </p>
                                    </div>
                                </div>
                            </details>

                            {/* DAY 4 */}
                            <details className="group border-b border-black/15">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7">
                                    <div className="flex items-center gap-6">
                                        <span className="text-sm font-medium text-[#88877D]">04</span>
                                        <div>
                                            <p className="mb-1 text-xs uppercase tracking-[0.18em] text-[#88877D]">
                                                Ouirgane · Kik Plateau · Tagoum
                                            </p>
                                            <h3 className="text-lg font-semibold md:text-2xl">
                                                The Kik Plateau
                                            </h3>
                                        </div>
                                    </div>
                                    <span className="text-2xl font-light transition-transform group-open:rotate-45">+</span>
                                </summary>

                                <div className="grid gap-8 pb-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src="/images/mtb/easter-high-atlas-mtb-6-days/above-taskourt-dam.jpeg"
                                            alt="Mountain landscape above Taskourt Dam"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 35vw"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="max-w-xl">
                                        <p className="text-base leading-8 text-[#55564F]">
                                            Continue from Ouirgane towards Tagoum, riding across the Kik
                                            Plateau and through the mountain landscapes around Tizi
                                            n’Ourghars and Lalla Takerkoust.
                                        </p>
                                        <p className="mt-5 text-sm font-medium text-[#77766D]">
                                            Overnight in Tagoum
                                        </p>
                                    </div>
                                </div>
                            </details>

                            {/* DAY 5 */}
                            <details className="group border-b border-black/15">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7">
                                    <div className="flex items-center gap-6">
                                        <span className="text-sm font-medium text-[#88877D]">05</span>
                                        <div>
                                            <p className="mb-1 text-xs uppercase tracking-[0.18em] text-[#88877D]">
                                                Outghal · Ourika Valley
                                            </p>
                                            <h3 className="text-lg font-semibold md:text-2xl">
                                                Towards the Ourika Valley
                                            </h3>
                                        </div>
                                    </div>
                                    <span className="text-2xl font-light transition-transform group-open:rotate-45">+</span>
                                </summary>

                                <div className="grid gap-8 pb-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src="/images/mtb/easter-high-atlas-mtb-6-days/amezmiz-region-group-bikers.jpeg"
                                            alt="Mountain bikers exploring the Atlas"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 35vw"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="max-w-xl">
                                        <p className="text-base leading-8 text-[#55564F]">
                                            Ride from Outghal towards the Ourika Valley, crossing Tizi
                                            n’Tadmamet. Stop for lunch before transferring back to Marrakech
                                            for the evening.
                                        </p>
                                        <p className="mt-5 text-sm font-medium text-[#77766D]">
                                            Overnight in Marrakech
                                        </p>
                                    </div>
                                </div>
                            </details>

                            {/* DAY 6 */}
                            <details className="group border-b border-black/15">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-7">
                                    <div className="flex items-center gap-6">
                                        <span className="text-sm font-medium text-[#88877D]">06</span>
                                        <div>
                                            <p className="mb-1 text-xs uppercase tracking-[0.18em] text-[#88877D]">
                                                Marrakech
                                            </p>
                                            <h3 className="text-lg font-semibold md:text-2xl">
                                                Departure
                                            </h3>
                                        </div>
                                    </div>
                                    <span className="text-2xl font-light transition-transform group-open:rotate-45">+</span>
                                </summary>

                                <div className="grid gap-8 pb-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <Image
                                            src="/images/general/overnights/riad-aymane-marrakech.jpg"
                                            alt="Riad in Marrakech"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 35vw"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="max-w-xl">
                                        <p className="text-base leading-8 text-[#55564F]">
                                            After breakfast, transfer to Marrakech airport for your
                                            departure.
                                        </p>
                                    </div>
                                </div>
                            </details>
                        </div>

                        <div className="mt-12 border border-black/15 px-6 py-8 md:flex md:items-center md:justify-between md:gap-10 md:px-10">
                            <div className="max-w-2xl">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#77766D]">
                                    Plan your ride
                                </p>
                                <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                                    Want more details about the route?
                                </h3>
                                <p className="mt-3 text-base leading-7 text-[#66665D]">
                                    For more details about daily distances and the GPX track, contact us.
                                </p>
                            </div>

                            <a
                                href="/contact"
                                className="mt-7 inline-flex shrink-0 items-center justify-center bg-[#20231F] px-7 py-4 text-sm font-semibold text-[#F3EBDD] transition hover:bg-[#45483F] md:mt-0"
                            >
                                Contact us
                                <span className="ml-3" aria-hidden="true">↗</span>
                            </a>
                        </div>
                    </div>
                </section>
                {/* RIDING EXPERIENCE */}
                <section id="riding" className="bg-[#20231F] px-6 py-24 text-[#F3EBDD] md:px-10 lg:px-16">
                    <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
                        <div>
                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#B9B5A8]">
                                The riding
                            </p>

                            <h2 className="max-w-xl text-3xl font-semibold tracking-tight md:text-5xl">
                                Mountain trails. Remote valleys. The real Atlas.
                            </h2>

                            <p className="mt-6 max-w-xl text-base leading-8 text-[#D0CDC2]">
                                This journey links the mountain villages and valleys of the High Atlas
                                through a mix of trails and dirt roads. Ride through changing
                                landscapes, from the high ground around Imlil to the open terrain of
                                the Kik Plateau and the valleys beyond.
                            </p>

                            <p className="mt-5 max-w-xl text-base leading-8 text-[#D0CDC2]">
                                Each day brings a different part of the Atlas, with time to experience
                                the villages, scenery and mountain life along the way.
                            </p>
                        </div>

                        <div className="relative aspect-[4/5] overflow-hidden md:aspect-[4/3]">
                            <Image
                                src="/images/mtb/easter-high-atlas-mtb-6-days/amezmiz-region-ridge.jpeg"
                                alt="Mountain biking along a ridge in the Atlas"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>
                {/* ACCOMMODATION */}
                <section id="accommodation" className="bg-[#F3EBDD] px-6 py-24 text-[#20231F] md:px-10 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-14 max-w-2xl">
                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#77766D]">
                                Where you stay
                            </p>

                            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                                Rest in the heart of the Atlas.
                            </h2>

                            <p className="mt-5 text-base leading-7 text-[#66665D]">
                                A selection of welcoming stays brings you closer to the places and
                                communities along the journey, from the old Medina of Marrakech to
                                the mountain villages.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {/* MARRAKECH */}
                            <article>
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src="/images/general/overnights/riad-aymane-marrakech.jpg"
                                        alt="Riad Aymane in Marrakech"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="pt-5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#88877D]">
                                        Marrakech
                                    </p>
                                    <h3 className="mt-2 text-xl font-semibold">Riad Aymane</h3>
                                    <p className="mt-3 text-sm leading-6 text-[#66665D]">
                                        A traditional riad in the old Medina, for the nights at the
                                        beginning and end of the journey.
                                    </p>
                                </div>
                            </article>

                            {/* IMLIL */}
                            <article>
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src="/images/general/overnights/riad-atlas-toubkal.jpg"
                                        alt="Riad Atlas Toubkal in Imlil"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="pt-5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#88877D]">
                                        Imlil
                                    </p>
                                    <h3 className="mt-2 text-xl font-semibold">Riad Atlas Toubkal</h3>
                                    <p className="mt-3 text-sm leading-6 text-[#66665D]">
                                        Your stay in the mountain village of Imlil, surrounded by the
                                        High Atlas.
                                    </p>
                                </div>
                            </article>

                            {/* OUIRGANE */}
                            <article>
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src="/images/general/overnights/ouirgane-ecolodge.jpg"
                                        alt="Eco lodge in Ouirgane"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover"
                                    />
                                </div>
                                <div className="pt-5">
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#88877D]">
                                        Ouirgane
                                    </p>
                                    <h3 className="mt-2 text-xl font-semibold">Ouirgane Eco Lodge</h3>
                                    <p className="mt-3 text-sm leading-6 text-[#66665D]">
                                        A peaceful mountain stay in the Ouirgane area.
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
                {/* FOOD & WHAT'S INCLUDED */}
                <section id="included" className="bg-[#20231F] px-6 py-24 text-[#F3EBDD] md:px-10 lg:px-16">
                    <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2">
                        <div>
                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#B9B5A8]">
                                Around the table
                            </p>

                            <h2 className="max-w-lg text-3xl font-semibold tracking-tight md:text-5xl">
                                Good food. Local flavours. Time together.
                            </h2>

                            <p className="mt-6 max-w-xl text-base leading-8 text-[#D0CDC2]">
                                During the riding days, meals and drinks are part of the experience.
                                Local chefs bring you closer to Moroccan food and the flavours of the
                                Atlas, with time to share the day’s ride around the table.
                            </p>
                        </div>

                        <div>
                            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#B9B5A8]">
                                Included in your trip
                            </p>

                            <ul className="border-t border-white/20">
                                {[
                                    "Accommodation throughout the trip",
                                    "Local mountain biking guides",
                                    "Support vehicle",
                                    "Local chefs",
                                    "All meals and drinks during riding days",
                                    "Transfers as part of the itinerary",
                                ].map((item) => (
                                    <li
                                        key={item}
                                        className="flex items-center gap-4 border-b border-white/20 py-5 text-base"
                                    >
                                        <span className="text-[#F3EBDD]" aria-hidden="true">+</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <p className="mt-6 text-sm leading-6 text-[#B9B5A8]">
                                Lunches and dinners in Marrakech are not included. Bikes can be
                                arranged separately on request.
                            </p>
                        </div>
                    </div>
                </section>
                {/* BIKE & EQUIPMENT */}
                <section id="bike-equipment" className="bg-[#F3EBDD] px-6 py-24 text-[#20231F] md:px-10 lg:px-16">
                    <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
                        <div className="relative aspect-[4/3] overflow-hidden">
                            <Image
                                src="/images/mtb/easter-high-atlas-mtb-6-days/amezmiz-region-trail-group.jpeg"
                                alt="Mountain bikers riding a trail in the Atlas"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>

                        <div>
                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#77766D]">
                                Bike & equipment
                            </p>

                            <h2 className="max-w-xl text-3xl font-semibold tracking-tight md:text-5xl">
                                Bring your bike. Or let us arrange one.
                            </h2>

                            <p className="mt-6 max-w-xl text-base leading-8 text-[#66665D]">
                                Ride with your own mountain bike or e-MTB, or contact us if you would
                                like a bike arranged for your trip.
                            </p>

                            <p className="mt-5 max-w-xl text-base leading-8 text-[#66665D]">
                                Bike arrangements are handled separately and can be discussed when
                                planning your journey.
                            </p>

                            <a
                                href="/contact"
                                className="mt-8 inline-flex items-center bg-[#20231F] px-7 py-4 text-sm font-semibold text-[#F3EBDD] transition hover:bg-[#45483F]"
                            >
                                Ask about bike options
                                <span className="ml-3" aria-hidden="true">↗</span>
                            </a>
                        </div>
                    </div>
                </section>
                {/* PRACTICAL INFORMATION */}
                <section
                    id="practical"
                    className="bg-[#F3EBDD] px-6 py-24 text-[#20231F] md:px-10 lg:px-16"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-14 max-w-2xl">
                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#77766D]">
                                Before you ride
                            </p>

                            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                                The details for your Atlas journey.
                            </h2>

                            <p className="mt-5 text-base leading-7 text-[#66665D]">
                                Every rider and every journey is different. Get in touch with us to
                                discuss the route, your equipment and the practical details before
                                your trip.
                            </p>
                        </div>

                        <div className="grid gap-10 border-t border-black/15 pt-8 md:grid-cols-2">
                            <div>
                                <h3 className="text-lg font-semibold">Trip essentials</h3>

                                <dl className="mt-5">
                                    {[
                                        ["Duration", "6 days / 5 nights"],
                                        ["Starting point", "Marrakech"],
                                        ["Finishing point", "Marrakech"],
                                        ["Ride style", "Mountain biking / e-MTB"],
                                        ["Bike arrangement", "Available on request"],
                                    ].map(([label, value]) => (
                                        <div
                                            key={label}
                                            className="flex justify-between gap-6 border-b border-black/10 py-4 text-sm"
                                        >
                                            <dt className="text-[#77766D]">{label}</dt>
                                            <dd className="text-right font-medium">{value}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold">Route information</h3>

                                <p className="mt-5 text-base leading-8 text-[#66665D]">
                                    Daily distances, elevation profiles, riding times and GPX tracks can
                                    be discussed with us when planning your trip. We can help you
                                    understand the route and its riding requirements before you set off.
                                </p>

                                <a
                                    href="/contact"
                                    className="mt-7 inline-flex items-center bg-[#20231F] px-7 py-4 text-sm font-semibold text-[#F3EBDD] transition hover:bg-[#45483F]"
                                >
                                    Ask for route details
                                    <span className="ml-3" aria-hidden="true">↗</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* RELATED TRIPS */}
                <section
                    id="related-trips"
                    className="bg-[#20231F] px-6 py-24 text-[#F3EBDD] md:px-10 lg:px-16"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 max-w-2xl">
                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#B9B5A8]">
                                Keep exploring
                            </p>

                            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                                Find your way into the Atlas.
                            </h2>

                            <p className="mt-5 text-base leading-7 text-[#D0CDC2]">
                                Two ways to experience the trails, valleys and mountain landscapes
                                of the Eastern High Atlas.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2">
                            {/* 8-DAY TRIP */}
                            <article className="group">
                                <a
                                    href="/mountain-biking/8-day-mountain-biking-eastern-high-atlas-morocco"
                                    className="block"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image
                                            src="/images/mtb/bikers-riding-on-ridge.jpeg"
                                            alt="Mountain bikers riding along a ridge in the Moroccan Atlas"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition duration-700 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="pt-5">
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B9B5A8]">
                                            8 days · Mountain biking
                                        </p>

                                        <h3 className="mt-3 text-2xl font-semibold">
                                            Eastern High Atlas & Toubkal
                                        </h3>

                                        <p className="mt-3 max-w-lg text-sm leading-6 text-[#D0CDC2]">
                                            A longer journey through mountain trails, valleys and villages
                                            across the High Atlas.
                                        </p>

                                        <span className="mt-6 inline-flex items-center border-b border-[#F3EBDD] pb-2 text-sm font-semibold">
                                            Explore trip <span className="ml-3">↗</span>
                                        </span>
                                    </div>
                                </a>
                            </article>

                            {/* 4-DAY TRIP */}
                            <article className="group">
                                <a
                                    href="/mountain-biking/4-day-mountain-biking-eastern-high-atlas-morocco"
                                    className="block"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image
                                            src="/images/mtb/easter-high-atlas-mtb-6-days/amezmiz-region-group-bikers.jpeg"
                                            alt="A group of mountain bikers riding through the Atlas"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition duration-700 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="pt-5">
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B9B5A8]">
                                            4 days · Mountain biking
                                        </p>

                                        <h3 className="mt-3 text-2xl font-semibold">
                                            Eastern High Atlas
                                        </h3>

                                        <p className="mt-3 max-w-lg text-sm leading-6 text-[#D0CDC2]">
                                            A shorter journey to discover the mountain trails and landscapes
                                            of the Eastern High Atlas.
                                        </p>

                                        <span className="mt-6 inline-flex items-center border-b border-[#F3EBDD] pb-2 text-sm font-semibold">
                                            Explore trip <span className="ml-3">↗</span>
                                        </span>
                                    </div>
                                </a>
                            </article>
                        </div>
                    </div>
                </section>
                {/* FAQ */}
                <section
                    id="faq"
                    className="bg-[#F3EBDD] px-6 py-24 text-[#20231F] md:px-10 lg:px-16"
                >
                    <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.8fr_1.2fr]">
                        <div>
                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#77766D]">
                                Good to know
                            </p>

                            <h2 className="max-w-md text-3xl font-semibold tracking-tight md:text-5xl">
                                Before you ride.
                            </h2>

                            <p className="mt-5 max-w-md text-base leading-7 text-[#66665D]">
                                A few answers to help you prepare for your mountain biking journey
                                through the Atlas.
                            </p>
                        </div>

                        <div className="border-t border-black/15">
                            <details className="group border-b border-black/15">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6">
                                    <h3 className="text-base font-semibold md:text-lg">
                                        Can I bring my own bike?
                                    </h3>
                                    <span className="text-2xl font-light transition-transform group-open:rotate-45">+</span>
                                </summary>
                                <p className="max-w-2xl pb-6 text-sm leading-7 text-[#66665D]">
                                    Yes. You can ride with your own mountain bike or e-MTB. Bike
                                    arrangements are also available separately on request.
                                </p>
                            </details>

                            <details className="group border-b border-black/15">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6">
                                    <h3 className="text-base font-semibold md:text-lg">
                                        Can I get the daily distances and GPX track?
                                    </h3>
                                    <span className="text-2xl font-light transition-transform group-open:rotate-45">+</span>
                                </summary>
                                <p className="max-w-2xl pb-6 text-sm leading-7 text-[#66665D]">
                                    Contact us for more details about daily distances, elevation profiles
                                    and the GPX track for the route.
                                </p>
                            </details>

                            <details className="group border-b border-black/15">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6">
                                    <h3 className="text-base font-semibold md:text-lg">
                                        Are meals included?
                                    </h3>
                                    <span className="text-2xl font-light transition-transform group-open:rotate-45">+</span>
                                </summary>
                                <p className="max-w-2xl pb-6 text-sm leading-7 text-[#66665D]">
                                    All meals and drinks are included during riding days. Lunches and
                                    dinners in Marrakech are not included.
                                </p>
                            </details>

                            <details className="group border-b border-black/15">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6">
                                    <h3 className="text-base font-semibold md:text-lg">
                                        Where does the trip start and finish?
                                    </h3>
                                    <span className="text-2xl font-light transition-transform group-open:rotate-45">+</span>
                                </summary>
                                <p className="max-w-2xl pb-6 text-sm leading-7 text-[#66665D]">
                                    The trip starts and finishes in Marrakech, with airport transfers
                                    included as part of the itinerary.
                                </p>
                            </details>

                            <details className="group border-b border-black/15">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6">
                                    <h3 className="text-base font-semibold md:text-lg">
                                        Is this trip suitable for my riding level?
                                    </h3>
                                    <span className="text-2xl font-light transition-transform group-open:rotate-45">+</span>
                                </summary>
                                <p className="max-w-2xl pb-6 text-sm leading-7 text-[#66665D]">
                                    Get in touch with us to discuss your riding experience and the
                                    route before booking.
                                </p>
                            </details>
                        </div>
                    </div>
                </section>
                {/* FINAL ENQUIRY */}
                <section className="relative isolate overflow-hidden bg-[#20231F] px-6 py-28 text-[#F3EBDD] md:px-10 md:py-36 lg:px-16">
                    <Image
                        src="/images/mtb/easter-high-atlas-mtb-6-days/amezmiz-region-group-bikers.jpeg"
                        alt="Mountain bikers exploring the Moroccan Atlas"
                        fill
                        sizes="100vw"
                        className="absolute inset-0 -z-20 object-cover"
                    />

                    <div className="absolute inset-0 -z-10 bg-black/60" />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/70 via-black/35 to-black/20" />

                    <div className="relative mx-auto max-w-7xl">
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-white/75">
                            Your Atlas journey starts here
                        </p>

                        <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
                            Ready to ride the Atlas?
                        </h2>

                        <p className="mt-6 max-w-xl text-base leading-8 text-white/85 md:text-lg">
                            Tell us about your plans, your riding experience and what you’re
                            looking for. We’ll help you prepare your journey through the mountains
                            of Morocco.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-4">
                            <a
                                href="/contact"
                                className="inline-flex items-center bg-[#F3EBDD] px-7 py-4 text-sm font-semibold text-[#20231F] transition hover:bg-white"
                            >
                                Get in touch
                                <span className="ml-3" aria-hidden="true">↗</span>
                            </a>

                            <a
                                href="https://wa.me/212771245210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center border border-white/70 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                            >
                                WhatsApp us
                                <span className="ml-3" aria-hidden="true">↗</span>
                            </a>
                        </div>
                    </div>
                </section>

            </main>

            <SiteFooter />
        </>
    );
}