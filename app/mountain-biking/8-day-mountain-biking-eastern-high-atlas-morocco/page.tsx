import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
    title:
        "8-Day Mountain Biking Eastern High Atlas & Toubkal | Ride The Atlas",
    description:
        "An 8-day mountain biking journey through Morocco's Eastern High Atlas and Toubkal Massif, riding mountain passes, Berber villages, remote valleys and Atlas singletrack.",
};

export default function EasternHighAtlasPage() {
    return (
        <main className="bg-black text-white">

            {/* HEADER */}

            <SiteHeader />

            {/* HERO */}

            <section className="relative min-h-[82vh] overflow-hidden bg-black">

                <Image
                    src="/images/mtb/bikers-riding-on-ridge.jpeg"
                    alt="Mountain bikers riding through the Eastern High Atlas of Morocco"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />

                {/* IMAGE OVERLAYS */}

                <div className="absolute inset-0 bg-black/10" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* HERO CONTENT */}

                <div className="relative z-10 flex min-h-[82vh] items-end px-6 pb-12 pt-32 md:px-10 md:pb-16 lg:px-14 lg:pb-20">

                    <div className="mx-auto w-full max-w-7xl">

                        <div className="max-w-3xl">

                            {/* TRIP LABEL */}

                            <div className="flex items-center gap-4">

                                <span className="h-px w-8 bg-[#F3EBDD]" />

                                <p className="text-[9px] font-semibold uppercase tracking-[0.38em] text-[#F3EBDD] md:text-[10px]">
                                    8 Days · Mountain Biking
                                </p>

                            </div>

                            {/* TITLE */}

                            <h1 className="mt-6 text-[2.8rem] font-semibold uppercase leading-[0.9] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]">
                                Eastern High Atlas
                                <br />
                                <span className="text-white/85">
                                    Mountains, Passes &amp;
                                </span>
                                <br />
                                <span className="text-white/85">
                                    Berber Villages
                                </span>
                            </h1>

                            {/* LOCATION */}

                            <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.3em] text-white/65 md:text-xs">
                                Morocco · Toubkal Massif
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

            <div className="sticky top-0 z-40 border-b border-white/10 bg-black/95 backdrop-blur-md">

                <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">

                    <div className="flex min-h-[78px] items-center justify-between gap-6">

                        {/* NAVIGATION */}

                        <nav className="min-w-0 flex-1 overflow-x-auto">

                            <div className="flex w-max items-center gap-7 md:gap-9">

                                <a
                                    href="#overview"
                                    className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55 transition-colors duration-300 hover:text-[#F3EBDD]"
                                >
                                    Overview
                                </a>

                                <a
                                    href="#itinerary"
                                    className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55 transition-colors duration-300 hover:text-[#F3EBDD]"
                                >
                                    Itinerary
                                </a>

                                <a
                                    href="#riding"
                                    className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55 transition-colors duration-300 hover:text-[#F3EBDD]"
                                >
                                    Riding
                                </a>

                                <a
                                    href="#accommodation"
                                    className="hidden shrink-0 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55 transition-colors duration-300 hover:text-[#F3EBDD] md:block"
                                >
                                    Accommodation
                                </a>

                                <a
                                    href="#practical"
                                    className="hidden shrink-0 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55 transition-colors duration-300 hover:text-[#F3EBDD] lg:block"
                                >
                                    Practical
                                </a>
                                <a
                                    href="#related-trips"
                                    className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55 transition-colors duration-300 hover:text-[#F3EBDD]"
                                >
                                    Other Trips
                                </a>

                                <a
                                    href="#faq"
                                    className="shrink-0 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55 transition-colors duration-300 hover:text-[#F3EBDD]"
                                >
                                    FAQ
                                </a>

                            </div>

                        </nav>

                        {/* PRICE + BOOK NOW */}

                        <div className="flex shrink-0 items-center gap-4 md:gap-7">

                            <div className="hidden text-right sm:block">

                                <p className="text-[8px] font-semibold uppercase tracking-[0.28em] text-white/35">
                                    From
                                </p>

                                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                                    €2000 / Person
                                </p>

                            </div>

                            <Link
                                href="/contact"
                                className="group inline-flex items-center gap-4 bg-[#F3EBDD] px-5 py-3.5 text-[9px] font-semibold uppercase tracking-[0.28em] text-black transition-all duration-300 hover:bg-white md:px-7 md:py-4"
                            >
                                <span>
                                    Book Now
                                </span>

                                <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>

                            </Link>

                        </div>

                    </div>

                </div>

            </div>
            {/* TRIP OVERVIEW */}

            <section
                id="overview"
                className="bg-[#F3EBDD] px-6 py-20 text-black md:px-10 md:py-28 lg:px-14 lg:py-32"
            >
                <div className="mx-auto max-w-7xl">

                    {/* INTRO */}

                    <div className="max-w-4xl">

                        <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-black/45">
                            Eastern High Atlas · Morocco
                        </p>

                        <h2 className="mt-6 text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.045em] sm:text-5xl md:text-6xl">
                            Eight days.
                            <br />
                            One unforgettable
                            <br />
                            Atlas journey.
                        </h2>

                        <p className="mt-8 max-w-3xl text-base leading-7 text-black/65 md:text-lg md:leading-8">
                            From the high mountains above Marrakech to the trails around
                            Ouirgane and Amezmiz, this is an eight-day mountain-bike
                            journey through Morocco&apos;s High Atlas.
                        </p>

                        <p className="mt-5 max-w-3xl text-sm leading-7 text-black/50 md:text-base md:leading-8">
                            Ride from Oukaimden towards Tizi N&apos;Addi, descend through
                            Tachedirt and the Imnane Valley, cross Tizi Tamatert into
                            Imlil, then continue over Tizi Mazik into the Azzaden Valley.
                            From Ouirgane, the route continues towards Amezmiz for the
                            final days of riding before returning to Marrakech.
                        </p>

                    </div>

                    {/* TRIP DETAILS */}

                    <div className="mt-16 border-t border-black/15 md:mt-20">

                        <div className="grid sm:grid-cols-2 lg:grid-cols-4">

                            {/* JOINING IN */}

                            <div className="border-b border-black/15 py-7 sm:border-r lg:px-6 lg:pl-0">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-black/40">
                                    Joining In
                                </p>

                                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.06em]">
                                    Marrakech, Morocco
                                </p>
                            </div>

                            {/* SKILL LEVEL */}

                            <div className="border-b border-black/15 py-7 sm:px-6 lg:border-r">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-black/40">
                                    Skill Level
                                </p>

                                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.06em]">
                                    To Be Confirmed
                                </p>
                            </div>

                            {/* GROUP SIZE */}

                            <div className="border-b border-black/15 py-7 sm:pr-6 lg:pl-6 lg:border-r">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-black/40">
                                    Group Size
                                </p>

                                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.06em]">
                                    To Be Confirmed
                                </p>
                            </div>

                            {/* DURATION */}

                            <div className="border-b border-black/15 py-7 sm:pl-6 lg:pl-6">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-black/40">
                                    Duration
                                </p>

                                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.06em]">
                                    8 Days / 7 Nights
                                </p>
                            </div>

                            {/* PRICE */}

                            <div className="border-b border-black/15 py-7 sm:border-r sm:px-6 lg:pl-0">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-black/40">
                                    Per Person From
                                </p>

                                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.06em]">
                                    €XXXX
                                </p>
                            </div>

                            {/* SINGLE SUPPLEMENT */}

                            <div className="border-b border-black/15 py-7 sm:px-6 lg:border-r">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-black/40">
                                    Single Supplement
                                </p>

                                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.06em]">
                                    To Be Confirmed
                                </p>
                            </div>

                            {/* ACTIVITY */}

                            <div className="border-b border-black/15 py-7 sm:pr-6 lg:pl-6 lg:border-r">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-black/40">
                                    Activity
                                </p>

                                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.06em]">
                                    Mountain Biking
                                </p>
                            </div>

                            {/* REGION */}

                            <div className="border-b border-black/15 py-7 sm:pl-6 lg:pl-6">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-black/40">
                                    Region
                                </p>

                                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.06em]">
                                    High Atlas, Morocco
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
            {/* PHOTO STORY */}

            <section
                id="gallery"
                className="bg-black px-6 py-20 text-white md:px-10 md:py-28 lg:px-14 lg:py-32"
            >
                <div className="mx-auto max-w-7xl">

                    {/* SECTION INTRO */}

                    <div className="max-w-2xl">

                        <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#F3EBDD]">
                            The Atlas by bike
                        </p>

                        <h2 className="mt-6 text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.045em] md:text-5xl lg:text-6xl">
                            High passes.
                            <br />
                            Deep valleys.
                            <br />
                            Real singletrack.
                        </h2>

                        <p className="mt-7 max-w-xl text-sm leading-7 text-white/50 md:text-base md:leading-8">
                            From the high slopes of Oukaimden to the valleys around
                            Ouirgane and Amezmiz, the route moves through some of the
                            most varied landscapes of Morocco&apos;s High Atlas.
                        </p>

                    </div>

                    {/* PHOTO STORY */}

                    <div className="mt-16 grid gap-5 md:mt-20 md:grid-cols-[1.35fr_0.65fr]">

                        {/* LARGE IMAGE */}

                        <div className="relative aspect-[4/3] overflow-hidden bg-white/5 md:aspect-[4/3]">

                            <Image
                                src="/images/mtb/bikers-riding-on-ridge.jpeg"
                                alt="Mountain bikers riding a ridge in Morocco's High Atlas"
                                fill
                                sizes="(max-width: 768px) 100vw, 65vw"
                                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/65">
                                    High Atlas
                                </p>
                            </div>

                        </div>

                        {/* SIDE IMAGE */}

                        <div className="relative aspect-[4/3] overflow-hidden bg-white/5 md:aspect-auto">

                            <Image
                                src="/images/mtb/eastern-high-atlas/kik-plateau-bikers-picture.jpeg"
                                alt="Mountain bikers crossing the Atlas landscape"
                                fill
                                sizes="(max-width: 768px) 100vw, 35vw"
                                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/65">
                                    Atlas trails
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* SECOND ROW */}

                    <div className="mt-5 grid gap-5 md:grid-cols-[0.65fr_1.35fr]">

                        <div className="relative aspect-[4/3] overflow-hidden bg-white/5">

                            <Image
                                src="/images/mtb/eastern-high-atlas/ouirgane-amezmiz-singletrack.jpeg"
                                alt="Singletrack between Ouirgane and Amezmiz in Morocco"
                                fill
                                sizes="(max-width: 768px) 100vw, 35vw"
                                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/65">
                                    Ouirgane · Amezmiz
                                </p>
                            </div>

                        </div>

                        <div className="relative aspect-[4/3] overflow-hidden bg-white/5">

                            <Image
                                src="/images/mtb/eastern-high-atlas/LhajAli-local-mountain-bike-guide.jpeg"
                                alt="Mountain bike guide in Morocco's High Atlas"
                                fill
                                sizes="(max-width: 768px) 100vw, 65vw"
                                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/65">
                                    Ride with us
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
            {/* ITINERARY */}

            <section
                id="itinerary"
                className="bg-[#F3EBDD] px-6 py-20 text-black md:px-10 md:py-28 lg:px-14 lg:py-36"
            >
                <div className="mx-auto max-w-6xl">

                    {/* HEADER */}

                    <div className="max-w-3xl">
                        <div className="flex items-center gap-4">
                            <span className="h-px w-8 bg-black/30" />

                            <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-black/45">
                                The Journey
                            </p>
                        </div>

                        <h2 className="mt-6 text-4xl font-semibold uppercase leading-[0.88] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                            Eight days.
                            <br />
                            One journey
                            <br />
                            through the Atlas.
                        </h2>

                        <p className="mt-7 max-w-2xl text-sm leading-7 text-black/55 md:text-base md:leading-8">
                            From the high slopes of Oukaimden to the trails around
                            Ouirgane and Amezmiz, each day brings a different
                            landscape, route and way of experiencing the mountains.
                        </p>
                    </div>

                    {/* DAYS */}

                    <div className="mt-16 border-t border-black/15 md:mt-24">

                        {/* DAY 01 */}

                        <details open className="group border-b border-black/15">
                            <summary className="flex cursor-pointer list-none items-center gap-5 py-7 md:gap-8 md:py-8">
                                <span className="w-10 shrink-0 text-[11px] font-semibold tracking-[0.15em] text-black/35 md:w-14 md:text-xs">
                                    01
                                </span>

                                <span className="min-w-0 flex-1">
                                    <span className="block text-[8px] font-semibold uppercase tracking-[0.3em] text-black/40 md:text-[9px]">
                                        Marrakech
                                    </span>

                                    <span className="mt-2 block text-xl font-semibold uppercase leading-none tracking-[-0.02em] md:text-2xl">
                                        Arrival in Marrakech
                                    </span>
                                </span>

                                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center border border-black/20">
                                    <span className="absolute h-px w-3 bg-black/60" />
                                    <span className="absolute h-3 w-px bg-black/60 transition-transform duration-300 group-open:rotate-90" />
                                </span>
                            </summary>

                            <div className="grid gap-8 pb-10 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:pb-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

                                <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                                    <Image
                                        src="/images/mtb/eastern-high-atlas/marrakech-medina.jpeg"
                                        alt="Marrakech Medina in Morocco"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 35vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-col justify-center">

                                    <p className="max-w-2xl text-sm leading-7 text-black/65 md:text-base md:leading-8">
                                        Arrive in Marrakech and transfer from the airport
                                        into the old Medina. Settle into a traditional riad
                                        and take the time to arrive before the journey into
                                        the Atlas begins.
                                    </p>

                                    <div className="mt-8 border-t border-black/15">

                                        <div className="grid grid-cols-[100px_1fr] gap-5 border-b border-black/10 py-4 md:grid-cols-[120px_1fr]">
                                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                                Route
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-black/75">
                                                Marrakech
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-[100px_1fr] gap-5 border-b border-black/10 py-4 md:grid-cols-[120px_1fr]">
                                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                                Activity
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-black/75">
                                                Arrival &amp; transfer
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-[100px_1fr] gap-5 border-b border-black/10 py-4 md:grid-cols-[120px_1fr]">
                                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                                Overnight
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-black/75">
                                                Marrakech Medina
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </details>

                        {/* DAY 02 */}

                        <details className="group border-b border-black/15">
                            <summary className="flex cursor-pointer list-none items-center gap-5 py-7 md:gap-8 md:py-8">
                                <span className="w-10 shrink-0 text-[11px] font-semibold tracking-[0.15em] text-black/35 md:w-14 md:text-xs">
                                    02
                                </span>

                                <span className="min-w-0 flex-1">
                                    <span className="block text-[8px] font-semibold uppercase tracking-[0.3em] text-black/40 md:text-[9px]">
                                        Oukaimden → Tachedirt → Imlil
                                    </span>

                                    <span className="mt-2 block text-xl font-semibold uppercase leading-none tracking-[-0.02em] md:text-2xl">
                                        Into the High Atlas
                                    </span>
                                </span>

                                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center border border-black/20">
                                    <span className="absolute h-px w-3 bg-black/60" />
                                    <span className="absolute h-3 w-px bg-black/60 transition-transform duration-300 group-open:rotate-90" />
                                </span>
                            </summary>

                            <div className="grid gap-8 pb-10 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:pb-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src="/images/mtb/eastern-high-atlas/bikers-riding-on-ridge.jpeg"
                                        alt="Mountain bikers riding through the High Atlas"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 35vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-col justify-center">

                                    <p className="max-w-2xl text-sm leading-7 text-black/65 md:text-base md:leading-8">
                                        Transfer to Oukaimden ski resort and begin riding
                                        from the high mountains. A dirt road climb leads
                                        towards Tizi N&apos;Addi before a long descent
                                        towards Tachedirt and the Imnane Valley. Follow the
                                        river through the valley, stop for lunch, then
                                        continue towards Tizi Tamatert before descending by
                                        singletrack into Imlil.
                                    </p>

                                    <div className="mt-8 border-t border-black/15">

                                        <div className="grid grid-cols-[100px_1fr] gap-5 border-b border-black/10 py-4 md:grid-cols-[120px_1fr]">
                                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                                Route
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-black/75">
                                                Oukaimden → Tachedirt → Imlil
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-[100px_1fr] gap-5 border-b border-black/10 py-4 md:grid-cols-[120px_1fr]">
                                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                                Riding
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-black/75">
                                                Dirt road climb · Pass · Singletrack
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-[100px_1fr] gap-5 border-b border-black/10 py-4 md:grid-cols-[120px_1fr]">
                                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                                Overnight
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-black/75">
                                                Imlil
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </details>

                        {/* DAY 03 */}

                        <details className="group border-b border-black/15">
                            <summary className="flex cursor-pointer list-none items-center gap-5 py-7 md:gap-8 md:py-8">
                                <span className="w-10 shrink-0 text-[11px] font-semibold tracking-[0.15em] text-black/35 md:w-14 md:text-xs">
                                    03
                                </span>

                                <span className="min-w-0 flex-1">
                                    <span className="block text-[8px] font-semibold uppercase tracking-[0.3em] text-black/40 md:text-[9px]">
                                        Imlil → Tizi Mazik → Ouirgane
                                    </span>

                                    <span className="mt-2 block text-xl font-semibold uppercase leading-none tracking-[-0.02em] md:text-2xl">
                                        Over Tizi Mazik
                                    </span>
                                </span>

                                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center border border-black/20">
                                    <span className="absolute h-px w-3 bg-black/60" />
                                    <span className="absolute h-3 w-px bg-black/60 transition-transform duration-300 group-open:rotate-90" />
                                </span>
                            </summary>

                            <div className="grid gap-8 pb-10 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:pb-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src="/images/mtb/eastern-high-atlas/kik-plateau-bikers-picture.jpeg"
                                        alt="Mountain bikers in the High Atlas"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 35vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-col justify-center">

                                    <p className="max-w-2xl text-sm leading-7 text-black/65 md:text-base md:leading-8">
                                        From Imlil, the bikes are carried towards Tizi Mazik
                                        by mule. After around two hours of hiking to the
                                        pass, the riding begins with a beautiful singletrack
                                        descent into Azzaden Valley, also known as the Red
                                        Valley. Continue down the valley before climbing an
                                        old dirt road towards Tizi N&apos;Tacht, then descend
                                        by trail to Tagadirt and continue towards Ouirgane.
                                    </p>

                                    <div className="mt-8 border-t border-black/15">

                                        <div className="grid grid-cols-[100px_1fr] gap-5 border-b border-black/10 py-4 md:grid-cols-[120px_1fr]">
                                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                                Route
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-black/75">
                                                Imlil → Tizi Mazik → Azzaden → Ouirgane
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-[100px_1fr] gap-5 border-b border-black/10 py-4 md:grid-cols-[120px_1fr]">
                                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                                Riding
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-black/75">
                                                Hike-a-bike · Singletrack · Dirt road
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-[100px_1fr] gap-5 border-b border-black/10 py-4 md:grid-cols-[120px_1fr]">
                                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                                Overnight
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-black/75">
                                                Ouirgane
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </details>

                        {/* DAY 04 */}

                        <details className="group border-b border-black/15">
                            <summary className="flex cursor-pointer list-none items-center gap-5 py-7 md:gap-8 md:py-8">
                                <span className="w-10 shrink-0 text-[11px] font-semibold tracking-[0.15em] text-black/35 md:w-14 md:text-xs">
                                    04
                                </span>

                                <span className="min-w-0 flex-1">
                                    <span className="block text-[8px] font-semibold uppercase tracking-[0.3em] text-black/40 md:text-[9px]">
                                        Assif Zegzawen → Ouirgane
                                    </span>

                                    <span className="mt-2 block text-xl font-semibold uppercase leading-none tracking-[-0.02em] md:text-2xl">
                                        Assif Zegzawen Singletrack
                                    </span>
                                </span>

                                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center border border-black/20">
                                    <span className="absolute h-px w-3 bg-black/60" />
                                    <span className="absolute h-3 w-px bg-black/60 transition-transform duration-300 group-open:rotate-90" />
                                </span>
                            </summary>

                            <div className="grid gap-8 pb-10 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:pb-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src="/images/mtb/eastern-high-atlas/LhajAli-local-mountain-bike-guide.jpeg"
                                        alt="Mountain bike guide in the Moroccan High Atlas"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 35vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-col justify-center">

                                    <p className="max-w-2xl text-sm leading-7 text-black/65 md:text-base md:leading-8">
                                        From Ouirgane, the bikes are transported by car to
                                        Assif Zegzawen. From there, the route turns back
                                        towards Ouirgane on an amazing singletrack descent
                                        through the Atlas landscape.
                                    </p>

                                    <div className="mt-8 border-t border-black/15">

                                        <div className="grid grid-cols-[100px_1fr] gap-5 border-b border-black/10 py-4 md:grid-cols-[120px_1fr]">
                                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                                Route
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-black/75">
                                                Assif Zegzawen → Ouirgane
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-[100px_1fr] gap-5 border-b border-black/10 py-4 md:grid-cols-[120px_1fr]">
                                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                                Riding
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-black/75">
                                                Singletrack descent
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-[100px_1fr] gap-5 border-b border-black/10 py-4 md:grid-cols-[120px_1fr]">
                                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                                Overnight
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-black/75">
                                                Ouirgane
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </details>

                        {/* DAY 05 */}

                        <details className="group border-b border-black/15">
                            <summary className="flex cursor-pointer list-none items-center gap-5 py-7 md:gap-8 md:py-8">
                                <span className="w-10 shrink-0 text-[11px] font-semibold tracking-[0.15em] text-black/35 md:w-14 md:text-xs">
                                    05
                                </span>

                                <span className="min-w-0 flex-1">
                                    <span className="block text-[8px] font-semibold uppercase tracking-[0.3em] text-black/40 md:text-[9px]">
                                        Ouirgane → Amezmiz
                                    </span>

                                    <span className="mt-2 block text-xl font-semibold uppercase leading-none tracking-[-0.02em] md:text-2xl">
                                        Across the Atlas to Amezmiz
                                    </span>
                                </span>

                                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center border border-black/20">
                                    <span className="absolute h-px w-3 bg-black/60" />
                                    <span className="absolute h-3 w-px bg-black/60 transition-transform duration-300 group-open:rotate-90" />
                                </span>
                            </summary>

                            <div className="grid gap-8 pb-10 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:pb-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src="/images/mtb/eastern-high-atlas/ouirgane-amezmiz-singletrack.jpeg"
                                        alt="Singletrack between Ouirgane and Amezmiz"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 35vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-col justify-center">

                                    <p className="max-w-2xl text-sm leading-7 text-black/65 md:text-base md:leading-8">
                                        Leave Ouirgane and ride towards Amezmiz on a
                                        beautiful trail through the mountains. The route
                                        continues deeper into the landscape before arriving
                                        in Amezmiz for the night.
                                    </p>

                                    <div className="mt-8 border-t border-black/15">

                                        <div className="grid grid-cols-[100px_1fr] gap-5 border-b border-black/10 py-4 md:grid-cols-[120px_1fr]">
                                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                                Route
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-black/75">
                                                Ouirgane → Amezmiz
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-[100px_1fr] gap-5 border-b border-black/10 py-4 md:grid-cols-[120px_1fr]">
                                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                                Riding
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-black/75">
                                                Mountain trail
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-[100px_1fr] gap-5 border-b border-black/10 py-4 md:grid-cols-[120px_1fr]">
                                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                                Overnight
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-black/75">
                                                Amezmiz
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </details>

                        {/* DAY 06 */}

                        <details className="group border-b border-black/15">
                            <summary className="flex cursor-pointer list-none items-center gap-5 py-7 md:gap-8 md:py-8">
                                <span className="w-10 shrink-0 text-[11px] font-semibold tracking-[0.15em] text-black/35 md:w-14 md:text-xs">
                                    06
                                </span>

                                <span className="min-w-0 flex-1">
                                    <span className="block text-[8px] font-semibold uppercase tracking-[0.3em] text-black/40 md:text-[9px]">
                                        Amezmiz
                                    </span>

                                    <span className="mt-2 block text-xl font-semibold uppercase leading-none tracking-[-0.02em] md:text-2xl">
                                        Amezmiz Trails
                                    </span>
                                </span>

                                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center border border-black/20">
                                    <span className="absolute h-px w-3 bg-black/60" />
                                    <span className="absolute h-3 w-px bg-black/60 transition-transform duration-300 group-open:rotate-90" />
                                </span>
                            </summary>

                            <div className="grid gap-8 pb-10 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:pb-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src="/images/mtb/eastern-high-atlas/bikers-riding-on-ridge.jpeg"
                                        alt="Mountain bikers riding in the Moroccan Atlas"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 35vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-col justify-center">

                                    <p className="max-w-2xl text-sm leading-7 text-black/65 md:text-base md:leading-8">
                                        A full day exploring the trails around Amezmiz.
                                        Ride through the surrounding mountain landscape and
                                        discover the singletrack that makes this final
                                        riding area such an important part of the journey.
                                    </p>

                                    <div className="mt-8 border-t border-black/15">

                                        <div className="grid grid-cols-[100px_1fr] gap-5 border-b border-black/10 py-4 md:grid-cols-[120px_1fr]">
                                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                                Route
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-black/75">
                                                Amezmiz area
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-[100px_1fr] gap-5 border-b border-black/10 py-4 md:grid-cols-[120px_1fr]">
                                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                                Riding
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-black/75">
                                                Mountain trails &amp; singletrack
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-[100px_1fr] gap-5 border-b border-black/10 py-4 md:grid-cols-[120px_1fr]">
                                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                                Overnight
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-black/75">
                                                Amezmiz
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </details>

                        {/* DAY 07 */}

                        <details className="group border-b border-black/15">
                            <summary className="flex cursor-pointer list-none items-center gap-5 py-7 md:gap-8 md:py-8">
                                <span className="w-10 shrink-0 text-[11px] font-semibold tracking-[0.15em] text-black/35 md:w-14 md:text-xs">
                                    07
                                </span>

                                <span className="min-w-0 flex-1">
                                    <span className="block text-[8px] font-semibold uppercase tracking-[0.3em] text-black/40 md:text-[9px]">
                                        Amezmiz → Marrakech
                                    </span>

                                    <span className="mt-2 block text-xl font-semibold uppercase leading-none tracking-[-0.02em] md:text-2xl">
                                        Back to Marrakech
                                    </span>
                                </span>

                                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center border border-black/20">
                                    <span className="absolute h-px w-3 bg-black/60" />
                                    <span className="absolute h-3 w-px bg-black/60 transition-transform duration-300 group-open:rotate-90" />
                                </span>
                            </summary>

                            <div className="grid gap-8 pb-10 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:pb-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src="/images/mtb/eastern-high-atlas/marrakech-medina.jpeg"
                                        alt="Marrakech Medina in Morocco"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 35vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-col justify-center">

                                    <p className="max-w-2xl text-sm leading-7 text-black/65 md:text-base md:leading-8">
                                        After breakfast, transfer from Amezmiz back to
                                        Marrakech. The afternoon is free to relax, explore
                                        the city or simply enjoy the final evening in the
                                        Medina.
                                    </p>

                                    <div className="mt-8 border-t border-black/15">

                                        <div className="grid grid-cols-[100px_1fr] gap-5 border-b border-black/10 py-4 md:grid-cols-[120px_1fr]">
                                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                                Route
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-black/75">
                                                Amezmiz → Marrakech
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-[100px_1fr] gap-5 border-b border-black/10 py-4 md:grid-cols-[120px_1fr]">
                                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                                Activity
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-black/75">
                                                Transfer &amp; free time
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-[100px_1fr] gap-5 border-b border-black/10 py-4 md:grid-cols-[120px_1fr]">
                                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                                Overnight
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-black/75">
                                                Marrakech Medina
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </details>

                        {/* DAY 08 */}

                        <details className="group border-b border-black/15">
                            <summary className="flex cursor-pointer list-none items-center gap-5 py-7 md:gap-8 md:py-8">
                                <span className="w-10 shrink-0 text-[11px] font-semibold tracking-[0.15em] text-black/35 md:w-14 md:text-xs">
                                    08
                                </span>

                                <span className="min-w-0 flex-1">
                                    <span className="block text-[8px] font-semibold uppercase tracking-[0.3em] text-black/40 md:text-[9px]">
                                        Marrakech → Airport
                                    </span>

                                    <span className="mt-2 block text-xl font-semibold uppercase leading-none tracking-[-0.02em] md:text-2xl">
                                        Departure
                                    </span>
                                </span>

                                <span className="relative flex h-9 w-9 shrink-0 items-center justify-center border border-black/20">
                                    <span className="absolute h-px w-3 bg-black/60" />
                                    <span className="absolute h-3 w-px bg-black/60 transition-transform duration-300 group-open:rotate-90" />
                                </span>
                            </summary>

                            <div className="grid gap-8 pb-10 md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:pb-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">

                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src="/images/mtb/eastern-high-atlas/marrakech-medina.jpeg"
                                        alt="Marrakech Medina in Morocco"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 35vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex flex-col justify-center">

                                    <p className="max-w-2xl text-sm leading-7 text-black/65 md:text-base md:leading-8">
                                        Breakfast in Marrakech followed by your transfer
                                        to the airport and the end of the journey.
                                    </p>

                                    <div className="mt-8 border-t border-black/15">

                                        <div className="grid grid-cols-[100px_1fr] gap-5 border-b border-black/10 py-4 md:grid-cols-[120px_1fr]">
                                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                                Route
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-black/75">
                                                Marrakech → Airport
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-[100px_1fr] gap-5 border-b border-black/10 py-4 md:grid-cols-[120px_1fr]">
                                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                                Activity
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-black/75">
                                                Breakfast &amp; airport transfer
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-[100px_1fr] gap-5 border-b border-black/10 py-4 md:grid-cols-[120px_1fr]">
                                            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/35">
                                                Journey
                                            </span>

                                            <span className="text-[9px] font-semibold uppercase tracking-[0.08em] text-black/75">
                                                End of trip
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </details>

                    </div>
                </div>
            </section>
            {/* THE RIDING */}

            <section
                id="riding"
                className="bg-black px-6 py-20 text-white md:px-10 md:py-28 lg:px-14 lg:py-36"
            >
                <div className="mx-auto max-w-7xl">

                    {/* INTRO */}

                    <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-24">

                        <div>
                            <div className="flex items-center gap-4">
                                <span className="h-px w-8 bg-[#F3EBDD]" />

                                <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#F3EBDD]">
                                    The Riding
                                </p>
                            </div>

                            <p className="mt-8 max-w-xs text-[10px] font-medium uppercase leading-6 tracking-[0.25em] text-white/35">
                                High Atlas
                                <br />
                                Mountain biking
                                <br />
                                MTB · eMTB
                            </p>
                        </div>

                        <div>
                            <h2 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.88] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
                                Ride the
                                <br />
                                mountain,
                                <br />
                                not just the road.
                            </h2>

                            <p className="mt-9 max-w-2xl text-base leading-8 text-white/60 md:text-lg md:leading-9">
                                This journey is built around mountain trails, old dirt
                                roads, high passes and long singletrack descents through
                                the Moroccan High Atlas.
                            </p>

                            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/40 md:text-base md:leading-8">
                                The route changes character throughout the week. Some
                                sections are reached by transfer or hike-a-bike, while
                                others open into long flowing descents and remote valley
                                trails.
                            </p>
                        </div>

                    </div>

                    {/* RIDING IMAGE */}

                    <div className="mt-16 md:mt-24">
                        <div className="relative aspect-[16/8] overflow-hidden bg-white/5">
                            <Image
                                src="/images/mtb/eastern-high-atlas/ouirgane-amezmiz-singletrack.jpeg"
                                alt="Mountain bike singletrack between Ouirgane and Amezmiz"
                                fill
                                sizes="(max-width: 768px) 100vw, 100vw"
                                className="object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/55">
                                    Ouirgane · Amezmiz
                                </p>

                                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-white">
                                    High Atlas singletrack
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIDING CHARACTER */}

                    <div className="mt-5 grid border-t border-white/10 md:grid-cols-2 lg:grid-cols-4">

                        <div className="border-b border-white/10 py-8 md:border-r md:pr-8 lg:border-b-0">
                            <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/30">
                                Terrain
                            </p>

                            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.06em] text-white">
                                Mountain trails
                            </p>

                            <p className="mt-2 max-w-xs text-xs leading-6 text-white/40">
                                High mountain terrain, old roads, valley trails and
                                singletrack.
                            </p>
                        </div>

                        <div className="border-b border-white/10 py-8 md:pl-8 lg:border-b-0 lg:border-r lg:pr-8">
                            <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/30">
                                Descents
                            </p>

                            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.06em] text-white">
                                Singletrack focused
                            </p>

                            <p className="mt-2 max-w-xs text-xs leading-6 text-white/40">
                                Long trail descents form a major part of the riding
                                experience.
                            </p>
                        </div>

                        <div className="border-b border-white/10 py-8 md:border-r md:pl-8 lg:border-b-0 lg:pr-8">
                            <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/30">
                                Mountain access
                            </p>

                            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.06em] text-white">
                                Transfers &amp; hike-a-bike
                            </p>

                            <p className="mt-2 max-w-xs text-xs leading-6 text-white/40">
                                Some sections use vehicle or mule support to reach the
                                riding.
                            </p>
                        </div>

                        <div className="py-8 md:pl-8">
                            <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/30">
                                Bikes
                            </p>

                            <p className="mt-4 text-sm font-semibold uppercase tracking-[0.06em] text-white">
                                MTB · eMTB
                            </p>

                            <p className="mt-2 max-w-xs text-xs leading-6 text-white/40">
                                The journey can be ridden on a mountain bike or eMTB.
                            </p>
                        </div>

                    </div>

                    {/* RIDING EXPERIENCE */}

                    <div className="mt-20 grid gap-12 border-t border-white/10 pt-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

                        <div>
                            <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                What the week feels like
                            </p>
                        </div>

                        <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">

                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.05em]">
                                    High passes
                                </p>

                                <p className="mt-3 text-sm leading-7 text-white/45">
                                    Ride towards Tizi N&apos;Addi, Tizi Tamatert, Tizi
                                    Mazik and Tizi N&apos;Tacht as the route crosses the
                                    Atlas.
                                </p>
                            </div>

                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.05em]">
                                    Valley riding
                                </p>

                                <p className="mt-3 text-sm leading-7 text-white/45">
                                    Follow the Imnane and Azzaden valleys before continuing
                                    towards Ouirgane and Amezmiz.
                                </p>
                            </div>

                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.05em]">
                                    Singletrack
                                </p>

                                <p className="mt-3 text-sm leading-7 text-white/45">
                                    The route is built around discovering mountain
                                    singletrack rather than simply connecting destinations
                                    by road.
                                </p>
                            </div>

                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.05em]">
                                    Support
                                </p>

                                <p className="mt-3 text-sm leading-7 text-white/45">
                                    Local MTB guides, assistant vehicles and local support
                                    keep the journey moving through the mountains.
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
            {/* ACCOMMODATION */}
            <section
                id="accommodation"
                className="bg-[#F3EBDD] px-6 py-20 text-black md:px-10 md:py-28 lg:px-14 lg:py-36"
            >
                <div className="mx-auto max-w-7xl">

                    {/* INTRO */}

                    <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-24">
                        <div>
                            <div className="flex items-center gap-4">
                                <span className="h-px w-8 bg-black/30" />

                                <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-black/45">
                                    Accommodation
                                </p>
                            </div>

                            <p className="mt-8 max-w-xs text-[10px] font-medium uppercase leading-6 tracking-[0.25em] text-black/35">
                                Marrakech
                                <br />
                                Imlil
                                <br />
                                Ouirgane
                                <br />
                                Amezmiz
                            </p>
                        </div>

                        <div>
                            <h2 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.88] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
                                Sleep close
                                <br />
                                to the
                                <br />
                                mountains.
                            </h2>

                            <p className="mt-9 max-w-2xl text-base leading-8 text-black/60 md:text-lg md:leading-9">
                                The journey moves through Marrakech and the mountain
                                villages of the High Atlas, with accommodation following
                                the route from Imlil to Ouirgane and Amezmiz.
                            </p>

                            <p className="mt-5 max-w-2xl text-sm leading-7 text-black/45 md:text-base md:leading-8">
                                Across the seven nights, the stays are part of the
                                journey itself — from a riad in the old Medina of
                                Marrakech to mountain accommodation deeper in the Atlas.
                            </p>
                        </div>
                    </div>

                    {/* ACCOMMODATION STAYS */}

                    <div className="mt-16 border-t border-black/15 md:mt-24">

                        {/* NIGHT 01 — MARRAKECH */}

                        <div className="grid gap-8 border-b border-black/15 py-10 md:grid-cols-[0.25fr_0.75fr] md:gap-12 md:py-14">
                            <div>
                                <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-black/35">
                                    Night 01
                                </p>

                                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-black">
                                    Marrakech
                                </p>
                            </div>

                            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
                                <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                                    <Image
                                        src="/images/general/overnights/riad-aymane-marrakech.jpg"
                                        alt="Riad Aymane in Marrakech"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 30vw"
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>

                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-black/35">
                                        Marrakech
                                    </p>

                                    <h3 className="mt-4 text-2xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] md:text-3xl">
                                        Riad Aymane
                                    </h3>

                                    <p className="mt-6 max-w-xl text-sm leading-7 text-black/55 md:text-base md:leading-8">
                                        After arriving in Marrakech, settle into Riad
                                        Aymane in the old Medina before the journey moves
                                        into the mountains the following morning.
                                    </p>

                                    <p className="mt-6 text-[8px] font-semibold uppercase tracking-[0.3em] text-black/35">
                                        Overnight · Marrakech Medina
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* NIGHT 02 — IMLIL */}

                        <div className="grid gap-8 border-b border-black/15 py-10 md:grid-cols-[0.25fr_0.75fr] md:gap-12 md:py-14">
                            <div>
                                <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-black/35">
                                    Night 02
                                </p>

                                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-black">
                                    Imlil
                                </p>
                            </div>

                            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
                                <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                                    <Image
                                        src="/images/general/overnights/riad-atlas-toubkal.jpg"
                                        alt="Riad Atlas Toubkal in Imlil"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 30vw"
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>

                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-black/35">
                                        Imlil
                                    </p>

                                    <h3 className="mt-4 text-2xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] md:text-3xl">
                                        Riad Atlas Toubkal
                                    </h3>

                                    <p className="mt-6 max-w-xl text-sm leading-7 text-black/55 md:text-base md:leading-8">
                                        After the first full day of riding from Oukaimden
                                        through the Imnane Valley and down to Imlil, spend
                                        the night in the mountain village before continuing
                                        deeper into the Atlas.
                                    </p>

                                    <p className="mt-6 text-[8px] font-semibold uppercase tracking-[0.3em] text-black/35">
                                        Overnight · Imlil
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* NIGHTS 03–04 — OUIRGANE */}

                        <div className="grid gap-8 border-b border-black/15 py-10 md:grid-cols-[0.25fr_0.75fr] md:gap-12 md:py-14">
                            <div>
                                <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-black/35">
                                    Nights 03–04
                                </p>

                                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-black">
                                    Ouirgane
                                </p>
                            </div>

                            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
                                <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                                    <Image
                                        src="/images/general/overnights/ouirgane-ecolodge.jpg"
                                        alt="Ouirgane Eco Lodge in Morocco"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 30vw"
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>

                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-black/35">
                                        Ouirgane
                                    </p>

                                    <h3 className="mt-4 text-2xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] md:text-3xl">
                                        Ouirgane Eco Lodge
                                    </h3>

                                    <p className="mt-6 max-w-xl text-sm leading-7 text-black/55 md:text-base md:leading-8">
                                        Ouirgane becomes the base for two nights. After
                                        descending from Tizi Mazik through the Azzaden
                                        Valley and continuing towards Ouirgane, the route
                                        returns to the area for another day of riding
                                        around Assif Zegzawen.
                                    </p>

                                    <p className="mt-6 text-[8px] font-semibold uppercase tracking-[0.3em] text-black/35">
                                        2 nights · Ouirgane
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* NIGHTS 05–06 — AMEZMIZ */}

                        <div className="grid gap-8 border-b border-black/15 py-10 md:grid-cols-[0.25fr_0.75fr] md:gap-12 md:py-14">
                            <div>
                                <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-black/35">
                                    Nights 05–06
                                </p>

                                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-black">
                                    Amezmiz
                                </p>
                            </div>

                            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
                                <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                                    <Image
                                        src="/images/general/overnights/rimaliz-house-amezmiz.jpg"
                                        alt="Rimaliz House in Amezmiz"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 30vw"
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>

                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-black/35">
                                        Amezmiz
                                    </p>

                                    <h3 className="mt-4 text-2xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] md:text-3xl">
                                        Rimaliz House
                                    </h3>

                                    <p className="mt-6 max-w-xl text-sm leading-7 text-black/55 md:text-base md:leading-8">
                                        The riding continues from Ouirgane towards
                                        Amezmiz, where the journey stays for two nights.
                                        Day six is dedicated to exploring the surrounding
                                        trails before the return to Marrakech.
                                    </p>

                                    <p className="mt-6 text-[8px] font-semibold uppercase tracking-[0.3em] text-black/35">
                                        2 nights · Amezmiz
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* NIGHT 07 — MARRAKECH */}

                        <div className="grid gap-8 py-10 md:grid-cols-[0.25fr_0.75fr] md:gap-12 md:py-14">
                            <div>
                                <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-black/35">
                                    Night 07
                                </p>

                                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-black">
                                    Marrakech
                                </p>
                            </div>

                            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
                                <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                                    <Image
                                        src="/images/general/overnights/riad-aymane-marrakech.jpg"
                                        alt="Riad Aymane in Marrakech"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 30vw"
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                </div>

                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-black/35">
                                        Marrakech
                                    </p>

                                    <h3 className="mt-4 text-2xl font-semibold uppercase leading-[0.95] tracking-[-0.04em] md:text-3xl">
                                        Riad Aymane
                                    </h3>

                                    <p className="mt-6 max-w-xl text-sm leading-7 text-black/55 md:text-base md:leading-8">
                                        After breakfast in Amezmiz, transfer back to
                                        Marrakech for a free day before spending the final
                                        night in the Medina.
                                    </p>

                                    <p className="mt-6 text-[8px] font-semibold uppercase tracking-[0.3em] text-black/35">
                                        Overnight · Marrakech Medina
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ROUTE SUMMARY */}

                    <div className="mt-16 border-t border-black/15 pt-10 md:mt-20 md:pt-12">
                        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                            <div>
                                <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-black/35">
                                    Seven nights
                                </p>

                                <p className="mt-4 max-w-2xl text-sm leading-7 text-black/55 md:text-base md:leading-8">
                                    Marrakech → Imlil → Ouirgane → Amezmiz → Marrakech
                                </p>
                            </div>

                            <p className="max-w-xs text-[9px] font-semibold uppercase leading-6 tracking-[0.25em] text-black/35 md:text-right">
                                Accommodation follows the route through the High Atlas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* INCLUS, FOOD */}
            <section
                id="food"
                className="bg-black px-6 py-20 text-white md:px-10 md:py-28 lg:px-14 lg:py-36"
            >
                <div className="mx-auto max-w-7xl">

                    {/* INTRO */}

                    <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-24">
                        <div>
                            <div className="flex items-center gap-4">
                                <span className="h-px w-8 bg-[#F3EBDD]" />

                                <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#F3EBDD]">
                                    Food & Included
                                </p>
                            </div>

                            <p className="mt-8 max-w-xs text-[10px] font-medium uppercase leading-6 tracking-[0.25em] text-white/35">
                                Riding days
                                <br />
                                Local chefs
                                <br />
                                Mountain support
                                <br />
                                Marrakech
                            </p>
                        </div>

                        <div>
                            <h2 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.88] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
                                Ride hard.
                                <br />
                                Eat well.
                                <br />
                                Stay local.
                            </h2>

                            <p className="mt-9 max-w-2xl text-base leading-8 text-white/60 md:text-lg md:leading-9">
                                During the riding days, everything is organised around
                                the journey. Local chefs, mountain guides, support
                                vehicles and accommodation move with the route through
                                the Atlas.
                            </p>

                            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45 md:text-base md:leading-8">
                                All meals and drinks are included during the riding
                                days. In Marrakech, lunches and dinners are left open so
                                you can choose where and what you want to eat.
                            </p>
                        </div>
                    </div>

                    {/* RIDING DAYS */}

                    <div className="mt-16 border-y border-white/10 md:mt-24">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4">

                            <div className="border-b border-white/10 px-0 py-8 md:border-r md:px-8 md:py-10 lg:border-b-0">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-white/30">
                                    Meals
                                </p>

                                <h3 className="mt-4 text-xl font-semibold uppercase tracking-[-0.02em]">
                                    All included
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-white/45">
                                    Breakfast, lunch and dinner are included during the
                                    riding days.
                                </p>
                            </div>

                            <div className="border-b border-white/10 px-0 py-8 md:border-r md:px-8 md:py-10 lg:border-b-0">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-white/30">
                                    Drinks
                                </p>

                                <h3 className="mt-4 text-xl font-semibold uppercase tracking-[-0.02em]">
                                    Included
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-white/45">
                                    Drinks are included throughout the riding days.
                                </p>
                            </div>

                            <div className="border-b border-white/10 px-0 py-8 md:border-r md:px-8 md:py-10 lg:border-b-0">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-white/30">
                                    Kitchen
                                </p>

                                <h3 className="mt-4 text-xl font-semibold uppercase tracking-[-0.02em]">
                                    Local chefs
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-white/45">
                                    Local chefs are part of the support team during the
                                    mountain journey.
                                </p>
                            </div>

                            <div className="px-0 py-8 md:px-8 md:py-10">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-white/30">
                                    Marrakech
                                </p>

                                <h3 className="mt-4 text-xl font-semibold uppercase tracking-[-0.02em]">
                                    Your choice
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-white/45">
                                    Lunches and dinners in Marrakech are not included,
                                    giving you freedom to choose your own restaurants.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* INCLUDED / NOT INCLUDED */}

                    <div className="mt-20 grid gap-12 border-t border-white/10 pt-16 lg:grid-cols-2 lg:gap-20">

                        {/* INCLUDED */}

                        <div>
                            <div className="flex items-center gap-4">
                                <span className="h-px w-6 bg-[#F3EBDD]" />

                                <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#F3EBDD]">
                                    Included
                                </p>
                            </div>

                            <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">

                                <li className="flex gap-5 py-5">
                                    <span className="text-[#F3EBDD]">+</span>
                                    <span className="text-sm leading-7 text-white/65">
                                        Accommodation for 7 nights
                                    </span>
                                </li>

                                <li className="flex gap-5 py-5">
                                    <span className="text-[#F3EBDD]">+</span>
                                    <span className="text-sm leading-7 text-white/65">
                                        All meals during the riding days
                                    </span>
                                </li>

                                <li className="flex gap-5 py-5">
                                    <span className="text-[#F3EBDD]">+</span>
                                    <span className="text-sm leading-7 text-white/65">
                                        Drinks during the riding days
                                    </span>
                                </li>

                                <li className="flex gap-5 py-5">
                                    <span className="text-[#F3EBDD]">+</span>
                                    <span className="text-sm leading-7 text-white/65">
                                        Local MTB guides
                                    </span>
                                </li>

                                <li className="flex gap-5 py-5">
                                    <span className="text-[#F3EBDD]">+</span>
                                    <span className="text-sm leading-7 text-white/65">
                                        Support vehicles and assistance
                                    </span>
                                </li>

                                <li className="flex gap-5 py-5">
                                    <span className="text-[#F3EBDD]">+</span>
                                    <span className="text-sm leading-7 text-white/65">
                                        Local chefs during the riding days
                                    </span>
                                </li>

                                <li className="flex gap-5 py-5">
                                    <span className="text-[#F3EBDD]">+</span>
                                    <span className="text-sm leading-7 text-white/65">
                                        Transfers between Marrakech and the riding areas
                                    </span>
                                </li>

                                <li className="flex gap-5 py-5">
                                    <span className="text-[#F3EBDD]">+</span>
                                    <span className="text-sm leading-7 text-white/65">
                                        Airport transfers
                                    </span>
                                </li>

                            </ul>
                        </div>

                        {/* NOT INCLUDED */}

                        <div>
                            <div className="flex items-center gap-4">
                                <span className="h-px w-6 bg-white/30" />

                                <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-white/40">
                                    Not included
                                </p>
                            </div>

                            <ul className="mt-8 divide-y divide-white/10 border-y border-white/10">

                                <li className="flex gap-5 py-5">
                                    <span className="text-white/30">−</span>
                                    <span className="text-sm leading-7 text-white/65">
                                        Lunches in Marrakech
                                    </span>
                                </li>

                                <li className="flex gap-5 py-5">
                                    <span className="text-white/30">−</span>
                                    <span className="text-sm leading-7 text-white/65">
                                        Dinners in Marrakech
                                    </span>
                                </li>

                                <li className="flex gap-5 py-5">
                                    <span className="text-white/30">−</span>
                                    <span className="text-sm leading-7 text-white/65">
                                        Travel insurance
                                    </span>
                                </li>

                                <li className="flex gap-5 py-5">
                                    <span className="text-white/30">−</span>
                                    <span className="text-sm leading-7 text-white/65">
                                        Personal expenses
                                    </span>
                                </li>

                                <li className="flex gap-5 py-5">
                                    <span className="text-white/30">−</span>
                                    <span className="text-sm leading-7 text-white/65">
                                        Bike and helmet rental, unless arranged separately
                                    </span>
                                </li>

                                <li className="flex gap-5 py-5">
                                    <span className="text-white/30">−</span>
                                    <span className="text-sm leading-7 text-white/65">
                                        Tips
                                    </span>
                                </li>

                            </ul>
                        </div>

                    </div>

                    {/* NOTE */}

                    <div className="mt-16 border-t border-white/10 pt-8">
                        <p className="max-w-3xl text-[9px] font-medium uppercase leading-6 tracking-[0.25em] text-white/30">
                            The riding days are fully supported, allowing you to focus on
                            the trails, the mountains and the journey.
                        </p>
                    </div>

                </div>
            </section>
            {/* EQUIPMENTS */}
            <section
                id="equipment"
                className="bg-[#F3EBDD] px-6 py-20 text-black md:px-10 md:py-28 lg:px-14 lg:py-36"
            >
                <div className="mx-auto max-w-7xl">

                    {/* INTRO */}

                    <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-24">
                        <div>
                            <div className="flex items-center gap-4">
                                <span className="h-px w-8 bg-black/30" />

                                <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-black/45">
                                    Bike & Equipment
                                </p>
                            </div>

                            <p className="mt-8 max-w-xs text-[10px] font-medium uppercase leading-6 tracking-[0.25em] text-black/35">
                                Mountain bikes
                                <br />
                                eMTB
                                <br />
                                Bike rental
                                <br />
                                Personal equipment
                            </p>
                        </div>

                        <div>
                            <h2 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.88] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
                                Bring your
                                <br />
                                bike.
                                <br />
                                Or ride ours.
                            </h2>

                            <p className="mt-9 max-w-2xl text-base leading-8 text-black/60 md:text-lg md:leading-9">
                                The route is designed for mountain bikes and can also be
                                ridden on an eMTB. If you are travelling without your own
                                bike, bikes are available on request.
                            </p>

                            <p className="mt-5 max-w-2xl text-sm leading-7 text-black/45 md:text-base md:leading-8">
                                We can arrange the bike separately for your trip. Let us
                                know what you need when you enquire and we can organise
                                the appropriate option for your journey.
                            </p>
                        </div>
                    </div>

                    {/* EQUIPMENT GRID */}

                    <div className="mt-16 border-y border-black/15 md:mt-24">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4">

                            <div className="border-b border-black/15 px-0 py-8 md:border-r md:px-8 md:py-10 lg:border-b-0">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-black/35">
                                    Bike
                                </p>

                                <h3 className="mt-4 text-xl font-semibold uppercase tracking-[-0.02em]">
                                    MTB
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-black/50">
                                    A mountain bike is the primary bike for this journey
                                    and its varied mountain terrain.
                                </p>
                            </div>

                            <div className="border-b border-black/15 px-0 py-8 md:border-r md:px-8 md:py-10 lg:border-b-0">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-black/35">
                                    Alternative
                                </p>

                                <h3 className="mt-4 text-xl font-semibold uppercase tracking-[-0.02em]">
                                    eMTB
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-black/50">
                                    An eMTB is also possible for riders who prefer electric
                                    assistance on the mountain climbs.
                                </p>
                            </div>

                            <div className="border-b border-black/15 px-0 py-8 md:border-r md:px-8 md:py-10 lg:border-b-0">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-black/35">
                                    Rental
                                </p>

                                <h3 className="mt-4 text-xl font-semibold uppercase tracking-[-0.02em]">
                                    On request
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-black/50">
                                    Bikes are available on request. Please mention your
                                    requirements when making your enquiry.
                                </p>
                            </div>

                            <div className="px-0 py-8 md:px-8 md:py-10">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-black/35">
                                    Personal kit
                                </p>

                                <h3 className="mt-4 text-xl font-semibold uppercase tracking-[-0.02em]">
                                    Come prepared
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-black/50">
                                    Bring your normal mountain-bike riding clothing,
                                    footwear and personal riding equipment.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* RIDER NOTE */}

                    <div className="mt-16 grid gap-10 border-t border-black/15 pt-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                        <div>
                            <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-black/35">
                                Before you ride
                            </p>
                        </div>

                        <div>
                            <p className="max-w-3xl text-base leading-8 text-black/60 md:text-lg md:leading-9">
                                Because the route includes mountain passes, long
                                singletrack descents, old roads and sections of
                                hike-a-bike, choosing the right bike and preparing your
                                personal equipment is an important part of the journey.
                            </p>

                            <p className="mt-6 max-w-3xl text-sm leading-7 text-black/45 md:text-base md:leading-8">
                                If you are unsure what bike or equipment you need, mention
                                it in your enquiry and we can discuss the options before
                                your trip.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            {/* PRACTICAL INFORMATIONS */}
            <section
                id="practical"
                className="bg-black px-6 py-20 text-white md:px-10 md:py-28 lg:px-14 lg:py-36"
            >
                <div className="mx-auto max-w-7xl">

                    {/* INTRO */}

                    <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-24">
                        <div>
                            <div className="flex items-center gap-4">
                                <span className="h-px w-8 bg-[#F3EBDD]" />

                                <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#F3EBDD]">
                                    Practical Information
                                </p>
                            </div>

                            <p className="mt-8 max-w-xs text-[10px] font-medium uppercase leading-6 tracking-[0.25em] text-white/35">
                                Before the journey
                                <br />
                                Marrakech
                                <br />
                                High Atlas
                                <br />
                                8 days · 7 nights
                            </p>
                        </div>

                        <div>
                            <h2 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.88] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
                                Know the
                                <br />
                                journey
                                <br />
                                before you go.
                            </h2>

                            <p className="mt-9 max-w-2xl text-base leading-8 text-white/60 md:text-lg md:leading-9">
                                The journey starts and finishes in Marrakech, with seven
                                nights of accommodation and five main mountain locations
                                along the route.
                            </p>

                            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45 md:text-base md:leading-8">
                                Once you are in the mountains, the trip is fully
                                supported, allowing you to focus on riding and experiencing
                                the Atlas.
                            </p>
                        </div>
                    </div>

                    {/* KEY INFORMATION */}

                    <div className="mt-16 border-y border-white/10 md:mt-24">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4">

                            <div className="border-b border-white/10 px-0 py-8 md:border-r md:px-8 md:py-10 lg:border-b-0">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-white/30">
                                    Duration
                                </p>

                                <h3 className="mt-4 text-xl font-semibold uppercase tracking-[-0.02em]">
                                    8 days
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-white/45">
                                    Seven nights, from arrival in Marrakech through the
                                    final airport transfer.
                                </p>
                            </div>

                            <div className="border-b border-white/10 px-0 py-8 md:border-r md:px-8 md:py-10 lg:border-b-0">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-white/30">
                                    Start
                                </p>

                                <h3 className="mt-4 text-xl font-semibold uppercase tracking-[-0.02em]">
                                    Marrakech
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-white/45">
                                    Arrival, airport transfer and first night in the old
                                    Medina.
                                </p>
                            </div>

                            <div className="border-b border-white/10 px-0 py-8 md:border-r md:px-8 md:py-10 lg:border-b-0">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-white/30">
                                    Riding
                                </p>

                                <h3 className="mt-4 text-xl font-semibold uppercase tracking-[-0.02em]">
                                    MTB · eMTB
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-white/45">
                                    Mountain biking through passes, valleys, old roads and
                                    singletrack.
                                </p>
                            </div>

                            <div className="px-0 py-8 md:px-8 md:py-10">
                                <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-white/30">
                                    Finish
                                </p>

                                <h3 className="mt-4 text-xl font-semibold uppercase tracking-[-0.02em]">
                                    Marrakech
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-white/45">
                                    Return to Marrakech on Day 7, with airport transfer on
                                    Day 8.
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* JOURNEY FLOW */}

                    <div className="mt-20 border-t border-white/10 pt-16 md:mt-24">
                        <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-24">

                            <div>
                                <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-white/30">
                                    The route
                                </p>

                                <p className="mt-6 text-sm leading-7 text-white/45">
                                    Seven nights across the High Atlas before returning to
                                    Marrakech.
                                </p>
                            </div>

                            <div className="border-t border-white/10">

                                <div className="flex items-center justify-between border-b border-white/10 py-5">
                                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">
                                        Day 01
                                    </span>

                                    <span className="text-sm uppercase tracking-[0.12em]">
                                        Marrakech
                                    </span>
                                </div>

                                <div className="flex items-center justify-between border-b border-white/10 py-5">
                                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">
                                        Day 02
                                    </span>

                                    <span className="text-sm uppercase tracking-[0.12em]">
                                        Oukaimden → Imlil
                                    </span>
                                </div>

                                <div className="flex items-center justify-between border-b border-white/10 py-5">
                                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">
                                        Day 03
                                    </span>

                                    <span className="text-sm uppercase tracking-[0.12em]">
                                        Imlil → Ouirgane
                                    </span>
                                </div>

                                <div className="flex items-center justify-between border-b border-white/10 py-5">
                                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">
                                        Day 04
                                    </span>

                                    <span className="text-sm uppercase tracking-[0.12em]">
                                        Assif Zegzawen
                                    </span>
                                </div>

                                <div className="flex items-center justify-between border-b border-white/10 py-5">
                                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">
                                        Day 05
                                    </span>

                                    <span className="text-sm uppercase tracking-[0.12em]">
                                        Ouirgane → Amezmiz
                                    </span>
                                </div>

                                <div className="flex items-center justify-between border-b border-white/10 py-5">
                                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">
                                        Day 06
                                    </span>

                                    <span className="text-sm uppercase tracking-[0.12em]">
                                        Amezmiz
                                    </span>
                                </div>

                                <div className="flex items-center justify-between border-b border-white/10 py-5">
                                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">
                                        Day 07
                                    </span>

                                    <span className="text-sm uppercase tracking-[0.12em]">
                                        Amezmiz → Marrakech
                                    </span>
                                </div>

                                <div className="flex items-center justify-between border-b border-white/10 py-5">
                                    <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/35">
                                        Day 08
                                    </span>

                                    <span className="text-sm uppercase tracking-[0.12em]">
                                        Airport transfer
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* BOOKING NOTE */}

                    <div className="mt-20 border-t border-white/10 pt-10 md:mt-24">
                        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">

                            <div>
                                <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                    Planning your trip
                                </p>

                                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/45 md:text-base md:leading-8">
                                    Exact departure dates, availability, pricing and
                                    booking details can be discussed when you enquire.
                                </p>
                            </div>

                            <Link
                                href="/contact"
                                className="group inline-flex w-fit items-center gap-5 border border-white/30 px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:border-[#F3EBDD] hover:bg-[#F3EBDD] hover:text-black"
                            >
                                <span>Ask about the trip</span>

                                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>

                        </div>
                    </div>

                </div>
            </section>
            {/* RELATED EXPERIENCES */}
            <section
                id="related-trips"
                className="bg-[#F3EBDD] px-6 py-20 text-black md:px-10 md:py-28 lg:px-14 lg:py-36"
            >
                <div className="mx-auto max-w-7xl">

                    {/* INTRO */}

                    <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                        <div className="max-w-3xl">
                            <div className="flex items-center gap-4">
                                <span className="h-px w-8 bg-black/30" />

                                <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-black/45">
                                    More from the Atlas
                                </p>
                            </div>

                            <h2 className="mt-6 text-4xl font-semibold uppercase leading-[0.88] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
                                More ways
                                <br />
                                into the
                                <br />
                                mountains.
                            </h2>
                        </div>

                        <p className="max-w-sm text-sm leading-7 text-black/50 md:text-right md:text-base md:leading-8">
                            Different routes. Different lengths. The same Atlas,
                            experienced from the saddle.
                        </p>
                    </div>

                    {/* RELATED TRIPS */}

                    <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2 lg:grid-cols-3">

                        {/* 6 DAY */}

                        <Link
                            href="/mountain-biking/6-day-mountain-biking-eastern-high-atlas-morocco"
                            className="group block"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-black">
                                <Image
                                    src="/images/mtb/eastern-high-atlas/kik-plateau-bikers-picture.jpeg"
                                    alt="Mountain bikers riding in the Eastern High Atlas"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                                    <div className="flex items-center gap-3">
                                        <span className="h-px w-6 bg-[#F3EBDD]" />

                                        <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                            6 Days · MTB
                                        </p>
                                    </div>

                                    <h3 className="mt-4 text-2xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white md:text-3xl">
                                        Eastern High Atlas
                                    </h3>

                                    <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-4">
                                        <span className="text-[8px] font-medium uppercase tracking-[0.25em] text-white/55">
                                            Morocco
                                        </span>

                                        <span className="text-xl text-white transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* 4 DAY */}

                        <Link
                            href="/mountain-biking/4-day-mountain-biking-eastern-high-atlas-morocco"
                            className="group block"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-black">
                                <Image
                                    src="/images/mtb/eastern-high-atlas/ouirgane-amezmiz-singletrack.jpeg"
                                    alt="Mountain bike singletrack in the Moroccan High Atlas"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                                    <div className="flex items-center gap-3">
                                        <span className="h-px w-6 bg-[#F3EBDD]" />

                                        <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                            4 Days · MTB
                                        </p>
                                    </div>

                                    <h3 className="mt-4 text-2xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white md:text-3xl">
                                        Eastern High Atlas
                                    </h3>

                                    <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-4">
                                        <span className="text-[8px] font-medium uppercase tracking-[0.25em] text-white/55">
                                            Morocco
                                        </span>

                                        <span className="text-xl text-white transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* SAGHRO */}

                        <Link
                            href="/mountain-biking/8-day-mountain-biking-saghro-mountains-morocco"
                            className="group block md:col-span-2 lg:col-span-1"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-black">
                                <Image
                                    src="/images/mtb/rider-singletrack-atlas.jpeg"
                                    alt="Mountain biker riding singletrack in the Moroccan Atlas"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                                    <div className="flex items-center gap-3">
                                        <span className="h-px w-6 bg-[#F3EBDD]" />

                                        <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                            8 Days · MTB
                                        </p>
                                    </div>

                                    <h3 className="mt-4 text-2xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white md:text-3xl">
                                        Saghro Mountains
                                    </h3>

                                    <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-4">
                                        <span className="text-[8px] font-medium uppercase tracking-[0.25em] text-white/55">
                                            Morocco
                                        </span>

                                        <span className="text-xl text-white transition-transform duration-300 group-hover:translate-x-1">
                                            →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    </div>

                    {/* BOTTOM LINK */}

                    <div className="mt-12 border-t border-black/15 pt-7">
                        <Link
                            href="/mountain-biking"
                            className="group inline-flex items-center gap-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-black transition-colors duration-300 hover:text-black/50"
                        >
                            <span>Explore all mountain bike journeys</span>

                            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                                →
                            </span>
                        </Link>
                    </div>

                </div>
            </section>
            {/* FAQS */}
            <section
                id="faq"
                className="bg-black px-6 py-20 text-white md:px-10 md:py-28 lg:px-14 lg:py-36"
            >
                <div className="mx-auto max-w-7xl">

                    {/* INTRO */}

                    <div className="grid gap-12 lg:grid-cols-[0.42fr_0.58fr] lg:gap-24">
                        <div>
                            <div className="flex items-center gap-4">
                                <span className="h-px w-8 bg-[#F3EBDD]" />

                                <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#F3EBDD]">
                                    FAQ
                                </p>
                            </div>

                            <p className="mt-8 max-w-xs text-[10px] font-medium uppercase leading-6 tracking-[0.25em] text-white/35">
                                Before you book
                                <br />
                                The journey
                                <br />
                                Bikes
                                <br />
                                Practical
                            </p>
                        </div>

                        <div>
                            <h2 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.88] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-[4.5rem]">
                                Questions
                                <br />
                                before the
                                <br />
                                mountains?
                            </h2>

                            <p className="mt-9 max-w-2xl text-base leading-8 text-white/60 md:text-lg md:leading-9">
                                A few practical answers before you start planning your
                                journey through the High Atlas.
                            </p>
                        </div>
                    </div>

                    {/* QUESTIONS */}

                    <div className="mt-16 border-t border-white/10 md:mt-24">

                        <details className="group border-b border-white/10">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7 md:py-8">
                                <span className="text-sm font-semibold uppercase tracking-[0.08em] md:text-base">
                                    How long is the trip?
                                </span>

                                <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/20 text-lg font-light text-white/60 transition-transform duration-300 group-open:rotate-45">
                                    +
                                </span>
                            </summary>

                            <div className="pb-8 pr-12 md:pb-10 md:pr-20">
                                <p className="max-w-3xl text-sm leading-7 text-white/50 md:text-base md:leading-8">
                                    The journey is 8 days and 7 nights, starting with
                                    arrival in Marrakech and ending with an airport
                                    transfer on Day 8.
                                </p>
                            </div>
                        </details>

                        <details className="group border-b border-white/10">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7 md:py-8">
                                <span className="text-sm font-semibold uppercase tracking-[0.08em] md:text-base">
                                    Where does the trip start?
                                </span>

                                <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/20 text-lg font-light text-white/60 transition-transform duration-300 group-open:rotate-45">
                                    +
                                </span>
                            </summary>

                            <div className="pb-8 pr-12 md:pb-10 md:pr-20">
                                <p className="max-w-3xl text-sm leading-7 text-white/50 md:text-base md:leading-8">
                                    The journey starts in Marrakech. Airport transfer and
                                    the first night in the old Medina are included before
                                    heading into the Atlas.
                                </p>
                            </div>
                        </details>

                        <details className="group border-b border-white/10">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7 md:py-8">
                                <span className="text-sm font-semibold uppercase tracking-[0.08em] md:text-base">
                                    Can I ride an eMTB?
                                </span>

                                <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/20 text-lg font-light text-white/60 transition-transform duration-300 group-open:rotate-45">
                                    +
                                </span>
                            </summary>

                            <div className="pb-8 pr-12 md:pb-10 md:pr-20">
                                <p className="max-w-3xl text-sm leading-7 text-white/50 md:text-base md:leading-8">
                                    Yes. The journey can be ridden on a mountain bike or
                                    eMTB. Bikes are also available on request if you are
                                    travelling without your own.
                                </p>
                            </div>
                        </details>

                        <details className="group border-b border-white/10">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7 md:py-8">
                                <span className="text-sm font-semibold uppercase tracking-[0.08em] md:text-base">
                                    Are bikes included?
                                </span>

                                <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/20 text-lg font-light text-white/60 transition-transform duration-300 group-open:rotate-45">
                                    +
                                </span>
                            </summary>

                            <div className="pb-8 pr-12 md:pb-10 md:pr-20">
                                <p className="max-w-3xl text-sm leading-7 text-white/50 md:text-base md:leading-8">
                                    Bikes are available on request and are arranged
                                    separately. Mention your bike requirements when you
                                    enquire about the trip.
                                </p>
                            </div>
                        </details>

                        <details className="group border-b border-white/10">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7 md:py-8">
                                <span className="text-sm font-semibold uppercase tracking-[0.08em] md:text-base">
                                    What is included during the riding days?
                                </span>

                                <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/20 text-lg font-light text-white/60 transition-transform duration-300 group-open:rotate-45">
                                    +
                                </span>
                            </summary>

                            <div className="pb-8 pr-12 md:pb-10 md:pr-20">
                                <p className="max-w-3xl text-sm leading-7 text-white/50 md:text-base md:leading-8">
                                    The riding days are fully supported, including
                                    accommodation, meals, drinks, local MTB guides,
                                    support vehicles, transport and local chefs.
                                </p>
                            </div>
                        </details>

                        <details className="group border-b border-white/10">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7 md:py-8">
                                <span className="text-sm font-semibold uppercase tracking-[0.08em] md:text-base">
                                    Are meals included in Marrakech?
                                </span>

                                <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/20 text-lg font-light text-white/60 transition-transform duration-300 group-open:rotate-45">
                                    +
                                </span>
                            </summary>

                            <div className="pb-8 pr-12 md:pb-10 md:pr-20">
                                <p className="max-w-3xl text-sm leading-7 text-white/50 md:text-base md:leading-8">
                                    Lunches and dinners in Marrakech are not included. This
                                    gives you the freedom to choose your own restaurants
                                    and explore the city at your own pace.
                                </p>
                            </div>
                        </details>

                        <details className="group border-b border-white/10">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7 md:py-8">
                                <span className="text-sm font-semibold uppercase tracking-[0.08em] md:text-base">
                                    Are airport transfers included?
                                </span>

                                <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/20 text-lg font-light text-white/60 transition-transform duration-300 group-open:rotate-45">
                                    +
                                </span>
                            </summary>

                            <div className="pb-8 pr-12 md:pb-10 md:pr-20">
                                <p className="max-w-3xl text-sm leading-7 text-white/50 md:text-base md:leading-8">
                                    Yes. Airport transfers are included at the beginning
                                    and end of the journey.
                                </p>
                            </div>
                        </details>

                        <details className="group border-b border-white/10">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7 md:py-8">
                                <span className="text-sm font-semibold uppercase tracking-[0.08em] md:text-base">
                                    Can I join the trip without my own bike?
                                </span>

                                <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/20 text-lg font-light text-white/60 transition-transform duration-300 group-open:rotate-45">
                                    +
                                </span>
                            </summary>

                            <div className="pb-8 pr-12 md:pb-10 md:pr-20">
                                <p className="max-w-3xl text-sm leading-7 text-white/50 md:text-base md:leading-8">
                                    Yes. Bikes are available on request. Let us know when
                                    you enquire and we can discuss the available options.
                                </p>
                            </div>
                        </details>

                        <details className="group border-b border-white/10">
                            <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-7 md:py-8">
                                <span className="text-sm font-semibold uppercase tracking-[0.08em] md:text-base">
                                    How do I find out the price and availability?
                                </span>

                                <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/20 text-lg font-light text-white/60 transition-transform duration-300 group-open:rotate-45">
                                    +
                                </span>
                            </summary>

                            <div className="pb-8 pr-12 md:pb-10 md:pr-20">
                                <p className="max-w-3xl text-sm leading-7 text-white/50 md:text-base md:leading-8">
                                    Contact Ride The Atlas with your preferred dates and
                                    requirements. We can then discuss availability,
                                    pricing and the details of your journey.
                                </p>
                            </div>
                        </details>

                    </div>

                </div>
            </section>
            {/* CONTACT */}
            <section
                id="contact"
                className="px-6 pb-20 md:px-10 md:pb-28 lg:px-14 lg:pb-36"
            >
                <div className="mx-auto max-w-7xl">
                    <div className="relative overflow-hidden bg-black">

                        {/* BACKGROUND IMAGE */}

                        <div className="relative min-h-[620px] md:min-h-[600px] lg:min-h-[680px]">
                            <Image
                                src="/images/mtb/group-bikers-picture.jpeg"
                                alt="Mountain bikers exploring the Moroccan Atlas"
                                fill
                                sizes="100vw"
                                className="object-cover object-center"
                            />

                            <div className="absolute inset-0 bg-black/25" />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />

                            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />

                            {/* CONTENT */}

                            <div className="absolute inset-0 flex items-end">
                                <div className="w-full p-7 pb-9 md:p-10 lg:p-14">

                                    <div className="max-w-5xl">

                                        <div className="flex items-center gap-4">
                                            <span className="h-px w-8 bg-[#F3EBDD]" />

                                            <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-[#F3EBDD]">
                                                Start your journey
                                            </p>
                                        </div>

                                        <h2 className="mt-6 max-w-4xl text-[2.8rem] font-semibold uppercase leading-[0.88] tracking-[-0.055em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                                            Eight days.
                                            <br />
                                            Deep into
                                            <br />
                                            the Atlas.
                                        </h2>

                                        <p className="mt-7 max-w-xl text-sm leading-7 text-white/60 md:text-base md:leading-8">
                                            Tell us when you want to ride, who you are
                                            travelling with and whether you need a bike.
                                            We&apos;ll help you plan the journey from there.
                                        </p>

                                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                                            <Link
                                                href="/contact"
                                                className="group inline-flex w-fit items-center gap-5 bg-[#F3EBDD] px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.3em] text-black transition-all duration-300 hover:bg-white"
                                            >
                                                <span>Enquire about this trip</span>

                                                <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                                                    →
                                                </span>
                                            </Link>

                                            <a
                                                href="https://wa.me/212771245210?text=Hi%20Ride%20The%20Atlas%2C%20I%27m%20interested%20in%20the%208-day%20Eastern%20High%20Atlas%20mountain%20bike%20trip."
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex w-fit items-center gap-4 border border-white/30 px-7 py-4 text-[9px] font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:border-[#F3EBDD] hover:text-[#F3EBDD]"
                                            >
                                                WhatsApp
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* BOTTOM STRIP */}

                        <div className="border-t border-white/10 px-6 py-7 md:px-8 md:py-8 lg:px-10">
                            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                                <div>
                                    <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-white/30">
                                        8 Days · Eastern High Atlas
                                    </p>

                                    <p className="mt-2 text-xs text-white/45 md:text-sm">
                                        Marrakech · Imlil · Ouirgane · Amezmiz
                                    </p>
                                </div>

                                <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/25">
                                    By bike · By ski
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* FOOTER */}

            <SiteFooter />

        </main>
    );
}