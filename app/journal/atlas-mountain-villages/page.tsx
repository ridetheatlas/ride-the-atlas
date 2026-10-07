import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import type { ReactNode } from "react";

export const metadata = {
    title: "Beyond the Trail: Riding Through Mountain Villages | Ride The Atlas",
    description:
        "Discover mountain biking through the villages and valleys of Morocco's High Atlas, where trails connect mountain landscapes, local communities and generations of mountain life.",
    keywords: [
        "mountain biking Morocco",
        "Atlas Mountains mountain biking",
        "High Atlas mountain biking",
        "mountain biking through Moroccan villages",
        "Morocco MTB",
        "Atlas Mountains MTB",
        "mountain bike Morocco",
        "High Atlas villages",
        "cycling in the Atlas Mountains",
        "Moroccan Atlas cycling",
        "mountain biking in Morocco",
    ],
    alternates: {
        canonical: "/journal/atlas-mountain-villages",
    },
};

function Eyebrow({
    children,
    dark = false,
}: {
    children: ReactNode;
    dark?: boolean;
}) {
    return (
        <div
            className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] ${
                dark ? "text-[#292D28]/55" : "text-[#F3EBDD]/55"
            }`}
        >
            <span className="h-px w-8 bg-[#E56A2E]" />
            {children}
        </div>
    );
}

function SectionTitle({
    eyebrow,
    children,
    dark = true,
}: {
    eyebrow: string;
    children: ReactNode;
    dark?: boolean;
}) {
    return (
        <div>
            <Eyebrow dark={dark}>{eyebrow}</Eyebrow>

            <h2
                className={`mt-6 max-w-4xl font-serif text-4xl leading-[0.98] tracking-[-0.045em] md:text-6xl lg:text-7xl ${
                    dark ? "text-[#292D28]" : "text-[#F3EBDD]"
                }`}
            >
                {children}
            </h2>
        </div>
    );
}

export default function AtlasMountainVillagesPage() {
    return (
        <main className="overflow-hidden bg-[#F3EBDD]">

            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative min-h-screen overflow-hidden bg-[#20241F] text-[#F3EBDD]">

                <SiteHeader />

                <Image
                    src="/images/mtb/two-riders-green-landcape-singletrack.jpeg"
                    alt="Two mountain bikers riding through the green landscapes of the Moroccan High Atlas"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] items-end px-6 pb-16 pt-32 md:px-12 md:pb-24 lg:pb-28">

                    <div className="max-w-5xl">

                        <Eyebrow>
                            Mountain Biking · High Atlas
                        </Eyebrow>

                        <h1 className="mt-6 max-w-5xl font-serif text-[clamp(3.4rem,7.8vw,8.2rem)] leading-[0.84] tracking-[-0.055em]">
                            Beyond the
                            <br />
                            <span className="text-[#E56A2E]">
                                Trail.
                            </span>
                            <br />
                            Into Mountain Life.
                        </h1>

                        <p className="mt-8 max-w-2xl text-base leading-7 text-[#F3EBDD]/75 md:text-lg md:leading-8">
                            Riding through the High Atlas is not simply about following
                            a line on a map. The trail leads into valleys, villages and
                            landscapes shaped by generations of mountain life.
                        </p>

                    </div>

                </div>

                <div className="absolute bottom-6 right-6 z-20 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/55 md:right-12">
                    Morocco · High Atlas
                </div>

            </section>


            {/* =========================================================
                INTRO
            ========================================================= */}

            <section className="bg-[#F3EBDD] px-6 py-24 md:px-12 md:py-32 lg:py-40">

                <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

                    <div>
                        <Eyebrow dark>
                            Beyond The Bike
                        </Eyebrow>
                    </div>

                    <div>

                        <p className="max-w-4xl font-serif text-3xl leading-[1.12] tracking-[-0.035em] text-[#292D28] md:text-5xl lg:text-6xl">
                            The best rides do not simply take you through the mountains.
                            <span className="text-[#E56A2E]">
                                {" "}They take you into them.
                            </span>
                        </p>

                        <div className="mt-10 max-w-2xl space-y-6 text-base leading-8 text-[#292D28]/70 md:text-lg">

                            <p>
                                Across the Moroccan Atlas, mountain paths connect much
                                more than one trail to another. They connect valleys,
                                settlements, agricultural terraces and high passes.
                            </p>

                            <p>
                                A mountain bike makes it possible to experience this
                                landscape at a human pace. You climb gradually, descend
                                through changing terrain and pass through places that
                                would otherwise remain distant from the road.
                            </p>

                            <p>
                                The result is a journey where the riding is only one part
                                of the experience.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                LARGE IMAGE
            ========================================================= */}

            <section className="px-6 pb-24 md:px-12 md:pb-32">

                <div className="relative mx-auto aspect-[16/9] max-w-[1600px] overflow-hidden bg-[#D9D3C8]">

                    <Image
                        src="/images/mtb/two-riders-green-landcape-singletrack.jpeg"
                        alt="Mountain bikers riding a trail through the High Atlas landscape"
                        fill
                        sizes="(max-width: 768px) 100vw, 92vw"
                        className="object-cover object-center"
                    />

                </div>

            </section>


            {/* =========================================================
                VILLAGES
            ========================================================= */}

            <section className="bg-[#292D28] px-6 py-24 text-[#F3EBDD] md:px-12 md:py-32 lg:py-40">

                <div className="mx-auto max-w-[1400px]">

                    <SectionTitle eyebrow="Mountain Communities" dark={false}>
                        The villages are part of the journey.
                    </SectionTitle>

                    <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">

                        <div className="space-y-7 text-base leading-8 text-[#F3EBDD]/70 md:text-lg">

                            <p>
                                Mountain villages across the Atlas are closely connected
                                to the terrain around them. Paths lead between homes,
                                fields, valleys and higher ground, creating a landscape
                                where movement has always been part of daily life.
                            </p>

                            <p>
                                Riding through these areas gives a different perspective
                                on Morocco. The mountains stop feeling like a distant
                                backdrop and become a living environment.
                            </p>

                        </div>

                        <div className="space-y-7 text-base leading-8 text-[#F3EBDD]/70 md:text-lg">

                            <p>
                                The pace of a mountain bike also allows these details to
                                register: changing architecture, cultivated slopes,
                                narrow paths and the contrast between settled valleys
                                and open mountain terrain.
                            </p>

                            <p>
                                It is one of the qualities that makes mountain biking in
                                Morocco so distinctive. The route is not isolated from
                                the landscape around it.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                EDITORIAL IMAGE
            ========================================================= */}

            <section className="relative h-[65svh] min-h-[520px] overflow-hidden bg-[#20241F]">

                <Image
                    src="/images/mtb/bikers-riding-on-ridge.jpeg"
                    alt="Mountain bikers riding along a ridge in the Moroccan Atlas"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-10 left-6 right-6 md:bottom-14 md:left-12">

                    <div className="mx-auto max-w-[1400px]">

                        <p className="max-w-4xl font-serif text-3xl leading-[1.05] tracking-[-0.035em] text-white md:text-5xl lg:text-6xl">
                            A trail can be technical.
                            <br />
                            A journey can be
                            <span className="text-[#E56A2E]">
                                {" "}something more.
                            </span>
                        </p>

                    </div>

                </div>

            </section>


            {/* =========================================================
                LANDSCAPE
            ========================================================= */}

            <section className="bg-[#F3EBDD] px-6 py-24 md:px-12 md:py-32 lg:py-40">

                <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

                    <SectionTitle eyebrow="The Landscape">
                        Valleys, terraces and open mountain slopes.
                    </SectionTitle>

                    <div className="space-y-7 text-base leading-8 text-[#292D28]/70 md:text-lg">

                        <p>
                            One of the great pleasures of riding the Atlas is watching
                            the landscape change around you.
                        </p>

                        <p>
                            Lower valleys can feel enclosed and intimate, with cultivated
                            land and settlements following the contours of the terrain.
                            Higher up, the landscape opens out and the scale of the
                            mountains becomes much more apparent.
                        </p>

                        <p>
                            A single ride can therefore contain several completely
                            different environments. The transition happens gradually,
                            beneath your wheels, rather than from behind a car window.
                        </p>

                    </div>

                </div>

                <div className="mx-auto mt-20 max-w-[1400px]">

                    <div className="grid gap-6 md:grid-cols-2">

                        <div className="relative aspect-[4/3] overflow-hidden bg-[#D9D3C8]">

                            <Image
                                src="/images/mtb/group-bikers-picture.jpeg"
                                alt="Mountain bikers exploring the High Atlas in Morocco"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />

                        </div>

                        <div className="relative flex min-h-[400px] items-end overflow-hidden bg-[#20241F] p-8 md:p-12">

                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                            <div className="relative z-10">

                                <Eyebrow>
                                    High Atlas
                                </Eyebrow>

                                <p className="mt-7 max-w-xl font-serif text-3xl leading-[1.08] tracking-[-0.03em] text-[#F3EBDD] md:text-4xl">
                                    The landscape changes.
                                    <span className="text-[#E56A2E]">
                                        {" "}The connection stays.
                                    </span>
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                RHYTHM OF THE RIDE
            ========================================================= */}

            <section className="bg-[#EAE2D3] px-6 py-24 md:px-12 md:py-32 lg:py-40">

                <div className="mx-auto max-w-[1400px]">

                    <SectionTitle eyebrow="The Rhythm Of A Ride">
                        Slow down. Look around. Keep moving.
                    </SectionTitle>

                    <div className="mt-16 grid gap-8 md:grid-cols-3">

                        <div className="border-t border-[#292D28]/20 pt-7">

                            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#E56A2E]">
                                01
                            </span>

                            <h3 className="mt-6 font-serif text-3xl tracking-[-0.03em] text-[#292D28]">
                                The climb
                            </h3>

                            <p className="mt-5 text-sm leading-7 text-[#292D28]/65">
                                Climbing gives the rider time to settle into the mountain
                                and watch the landscape gradually open around them.
                            </p>

                        </div>

                        <div className="border-t border-[#292D28]/20 pt-7">

                            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#E56A2E]">
                                02
                            </span>

                            <h3 className="mt-6 font-serif text-3xl tracking-[-0.03em] text-[#292D28]">
                                The traverse
                            </h3>

                            <p className="mt-5 text-sm leading-7 text-[#292D28]/65">
                                Narrow trails reveal the scale of the valley, with every
                                turn offering another view into the surrounding mountains.
                            </p>

                        </div>

                        <div className="border-t border-[#292D28]/20 pt-7">

                            <span className="text-[10px] font-semibold tracking-[0.2em] text-[#E56A2E]">
                                03
                            </span>

                            <h3 className="mt-6 font-serif text-3xl tracking-[-0.03em] text-[#292D28]">
                                The descent
                            </h3>

                            <p className="mt-5 text-sm leading-7 text-[#292D28]/65">
                                Then the rhythm changes. The trail becomes faster,
                                terrain comes alive and the landscape begins to move
                                quickly around you.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                CULTURAL CONNECTION
            ========================================================= */}

            <section className="bg-[#F3EBDD] px-6 py-24 md:px-12 md:py-32 lg:py-40">

                <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">

                    <div>

                        <Eyebrow dark>
                            A Different Perspective
                        </Eyebrow>

                        <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[0.98] tracking-[-0.045em] text-[#292D28] md:text-6xl">
                            Travel through the mountains,
                            <span className="text-[#E56A2E]">
                                {" "}not around them.
                            </span>
                        </h2>

                    </div>

                    <div className="space-y-7 text-base leading-8 text-[#292D28]/70 md:text-lg">

                        <p>
                            There is a fundamental difference between seeing a mountain
                            landscape and moving through it under your own effort.
                        </p>

                        <p>
                            By bike, the transition between places becomes part of the
                            experience. You feel the gradient, the surface and the
                            distance. You notice the changes in vegetation and terrain.
                            You see how settlements sit within the landscape rather than
                            simply passing them on a road.
                        </p>

                        <p>
                            That slower connection is one of the reasons we believe
                            mountain biking is such a powerful way to discover the
                            Moroccan Atlas.
                        </p>

                    </div>

                </div>

            </section>


            {/* =========================================================
                RIDE THE ATLAS APPROACH
            ========================================================= */}

            <section className="bg-[#292D28] px-6 py-24 text-[#F3EBDD] md:px-12 md:py-32 lg:py-40">

                <div className="mx-auto max-w-[1400px]">

                    <div className="max-w-4xl">

                        <Eyebrow>
                            Ride The Atlas
                        </Eyebrow>

                        <h2 className="mt-6 font-serif text-4xl leading-[0.98] tracking-[-0.045em] md:text-6xl lg:text-7xl">
                            The mountain is the experience.
                        </h2>

                        <p className="mt-8 max-w-2xl text-base leading-8 text-[#F3EBDD]/65 md:text-lg">
                            We build mountain bike journeys around the character of the
                            Atlas itself — its terrain, its landscapes and the places
                            that make each route feel different.
                        </p>

                    </div>

                    <div className="mt-20 grid gap-6 md:grid-cols-3">

                        <div className="border border-[#F3EBDD]/15 p-8 md:p-10">

                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E56A2E]">
                                Terrain
                            </span>

                            <h3 className="mt-6 font-serif text-3xl">
                                Ride the natural line.
                            </h3>

                            <p className="mt-5 text-sm leading-7 text-[#F3EBDD]/60">
                                Routes are selected around the terrain and the character
                                of the mountain rather than forcing the landscape into a
                                predefined format.
                            </p>

                        </div>

                        <div className="border border-[#F3EBDD]/15 p-8 md:p-10">

                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E56A2E]">
                                Place
                            </span>

                            <h3 className="mt-6 font-serif text-3xl">
                                Experience the Atlas.
                            </h3>

                            <p className="mt-5 text-sm leading-7 text-[#F3EBDD]/60">
                                The route is only one part of the journey. Valleys,
                                villages and mountain landscapes are part of the ride.
                            </p>

                        </div>

                        <div className="border border-[#F3EBDD]/15 p-8 md:p-10">

                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E56A2E]">
                                Adventure
                            </span>

                            <h3 className="mt-6 font-serif text-3xl">
                                Go further.
                            </h3>

                            <p className="mt-5 text-sm leading-7 text-[#F3EBDD]/60">
                                The best days on the bike are often the ones where the
                                route becomes a journey rather than simply a workout.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                RELATED TRIPS
            ========================================================= */}

            <section className="bg-[#EAE2D3] px-6 py-24 md:px-12 md:py-32">

                <div className="mx-auto max-w-[1400px]">

                    <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

                        <div>

                            <Eyebrow dark>
                                Explore The Atlas
                            </Eyebrow>

                            <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[0.98] tracking-[-0.045em] text-[#292D28] md:text-6xl">
                                Ride deeper into Morocco.
                            </h2>

                        </div>

                        <Link
                            href="/mountain-biking"
                            className="inline-flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#292D28]"
                        >
                            All mountain biking
                            <span className="text-lg text-[#E56A2E]">
                                →
                            </span>
                        </Link>

                    </div>

                    <div className="mt-14 grid gap-5 md:grid-cols-3">

                        <Link
                            href="/mountain-biking/4-day-mountain-biking-eastern-high-atlas-morocco"
                            className="group bg-[#F3EBDD] p-7 transition-colors duration-300 hover:bg-[#292D28] md:p-8"
                        >
                            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#C45B2B]">
                                4 Days
                            </span>

                            <h3 className="mt-5 font-serif text-2xl leading-tight tracking-[-0.025em] text-[#292D28] transition-colors group-hover:text-[#F3EBDD]">
                                Eastern High Atlas
                            </h3>

                            <span className="mt-8 inline-flex text-[9px] font-semibold uppercase tracking-[0.2em] text-[#292D28]/55 transition-colors group-hover:text-[#F3EBDD]/55">
                                Explore trip →
                            </span>
                        </Link>

                        <Link
                            href="/mountain-biking/6-day-mountain-biking-eastern-high-atlas-morocco"
                            className="group bg-[#F3EBDD] p-7 transition-colors duration-300 hover:bg-[#292D28] md:p-8"
                        >
                            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#C45B2B]">
                                6 Days
                            </span>

                            <h3 className="mt-5 font-serif text-2xl leading-tight tracking-[-0.025em] text-[#292D28] transition-colors group-hover:text-[#F3EBDD]">
                                Eastern High Atlas
                            </h3>

                            <span className="mt-8 inline-flex text-[9px] font-semibold uppercase tracking-[0.2em] text-[#292D28]/55 transition-colors group-hover:text-[#F3EBDD]/55">
                                Explore trip →
                            </span>
                        </Link>

                        <Link
                            href="/mountain-biking/8-day-mountain-biking-eastern-high-atlas-morocco"
                            className="group bg-[#F3EBDD] p-7 transition-colors duration-300 hover:bg-[#292D28] md:p-8"
                        >
                            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#C45B2B]">
                                8 Days
                            </span>

                            <h3 className="mt-5 font-serif text-2xl leading-tight tracking-[-0.025em] text-[#292D28] transition-colors group-hover:text-[#F3EBDD]">
                                Toubkal & High Atlas
                            </h3>

                            <span className="mt-8 inline-flex text-[9px] font-semibold uppercase tracking-[0.2em] text-[#292D28]/55 transition-colors group-hover:text-[#F3EBDD]/55">
                                Explore trip →
                            </span>
                        </Link>

                    </div>

                </div>

            </section>


            {/* =========================================================
                FINAL CTA
            ========================================================= */}

            <section className="relative overflow-hidden bg-[#20241F] px-6 py-28 text-[#F3EBDD] md:px-12 md:py-40">

                <div className="absolute inset-0 opacity-20">

                    <Image
                        src="/images/mtb/group-bikers-picture.jpeg"
                        alt=""
                        fill
                        sizes="100vw"
                        className="object-cover"
                    />

                </div>

                <div className="absolute inset-0 bg-[#20241F]/80" />

                <div className="relative z-10 mx-auto max-w-[1200px] text-center">

                    <Eyebrow>
                        Your Atlas Journey
                    </Eyebrow>

                    <h2 className="mx-auto mt-7 max-w-5xl font-serif text-5xl leading-[0.92] tracking-[-0.05em] md:text-7xl lg:text-8xl">
                        Ride the trails.
                        <br />
                        Meet the mountains.
                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-[#F3EBDD]/65 md:text-lg">
                        Discover mountain biking journeys through the Moroccan Atlas,
                        built around the terrain, the landscape and the experience.
                    </p>

                    <Link
                        href="/contact"
                        className="mt-10 inline-flex items-center gap-4 bg-[#E56A2E] px-7 py-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-[#C45B2B]"
                    >
                        Start your journey
                        <span className="text-base">
                            →
                        </span>
                    </Link>

                </div>

            </section>


            {/* =========================================================
                JOURNAL NAVIGATION
            ========================================================= */}

            <section className="bg-[#F3EBDD] px-6 py-16 md:px-12 md:py-20">

                <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-6 border-t border-[#292D28]/15 pt-8 md:flex-row md:items-center">

                    <Link
                        href="/journal"
                        className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#292D28]"
                    >
                        ← Back to The Atlas Journal
                    </Link>

                    <div className="flex gap-6">

                        <Link
                            href="/journal/atlas-singletrack"
                            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#292D28]/55 transition-colors hover:text-[#E56A2E]"
                        >
                            Previous story
                        </Link>

                        <Link
                            href="/journal/ski-touring-toubkal"
                            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#292D28]/55 transition-colors hover:text-[#E56A2E]"
                        >
                            Next story →
                        </Link>

                    </div>

                </div>

            </section>


            <SiteFooter />

        </main>
    );
}