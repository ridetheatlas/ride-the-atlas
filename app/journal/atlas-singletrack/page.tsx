import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import type { ReactNode } from "react";

export const metadata = {
    title: "Finding the Singletrack of the Atlas | Ride The Atlas",
    description:
        "Discover mountain biking in the Atlas Mountains of Morocco, from technical singletrack and remote valleys to ancient paths connecting villages across the High Atlas.",
    keywords: [
        "Atlas Mountains mountain biking",
        "mountain biking in the Atlas Mountains",
        "mountain biking Morocco",
        "Atlas Mountains MTB",
        "Morocco mountain bike trails",
        "High Atlas mountain biking",
        "Atlas Mountains singletrack",
        "MTB Morocco",
        "mountain biking in Morocco",
        "High Atlas MTB trails",
        "Moroccan Atlas cycling",
    ],
    alternates: {
        canonical: "/journal/atlas-singletrack",
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
            className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] ${dark ? "text-[#292D28]/55" : "text-[#F3EBDD]/55"
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
                className={`mt-6 max-w-4xl font-serif text-4xl leading-[0.98] tracking-[-0.045em] md:text-6xl lg:text-7xl ${dark ? "text-[#292D28]" : "text-[#F3EBDD]"
                    }`}
            >
                {children}
            </h2>
        </div>
    );
}

export default function AtlasSingletrackPage() {
    return (
        <main className="overflow-hidden bg-[#F3EBDD]">

            {/* =========================================================
                HERO
            ========================================================= */}

            <section className="relative min-h-screen overflow-hidden bg-[#20241F] text-[#F3EBDD]">

                <SiteHeader />

                <Image
                    src="/images/mtb/singletrack-two-riders.jpeg"
                    alt="Two mountain bikers riding singletrack through the Atlas Mountains of Morocco"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-black/20" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] items-end px-6 pb-16 pt-32 md:px-12 md:pb-24 lg:pb-28">

                    <div className="max-w-5xl">

                        <Eyebrow>
                            Mountain Biking · Moroccan Atlas
                        </Eyebrow>

                        <h1 className="mt-6 max-w-5xl font-serif text-[clamp(3.6rem,8vw,8.5rem)] leading-[0.84] tracking-[-0.055em]">
                            Finding the
                            <br />
                            <span className="text-[#E56A2E]">
                                Singletrack
                            </span>
                            <br />
                            of the Atlas.
                        </h1>

                        <p className="mt-8 max-w-2xl text-base leading-7 text-[#F3EBDD]/75 md:text-lg md:leading-8">
                            Following narrow mountain trails through the High Atlas,
                            where old paths, dramatic landscapes and changing terrain
                            turn a mountain bike ride into something far beyond the trail.
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
                            The Trail
                        </Eyebrow>
                    </div>

                    <div>
                        <p className="max-w-4xl font-serif text-3xl leading-[1.12] tracking-[-0.035em] text-[#292D28] md:text-5xl lg:text-6xl">
                            In the Atlas, the trail is rarely the destination.
                            <span className="text-[#E56A2E]">
                                {" "}It is the way into the mountains.
                            </span>
                        </p>

                        <div className="mt-10 max-w-2xl space-y-6 text-base leading-8 text-[#292D28]/70 md:text-lg">
                            <p>
                                Mountain biking in Morocco is often described through
                                distance, elevation and difficulty. But riding the Atlas
                                Mountains is about something harder to measure.
                            </p>

                            <p>
                                It is the feeling of leaving the road behind and following
                                a narrow line across a mountainside. A trail disappears
                                around a bend, reappears above a valley, and suddenly
                                opens onto a landscape that feels completely removed from
                                the world below.
                            </p>

                            <p>
                                This is the character of Atlas singletrack: raw, varied,
                                physical and deeply connected to the landscape.
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
                        src="/images/mtb/singletrack-two-riders.jpeg"
                        alt="Mountain bikers following a narrow singletrack trail in the Moroccan Atlas"
                        fill
                        sizes="(max-width: 768px) 100vw, 92vw"
                        className="object-cover object-center"
                    />

                </div>

            </section>


            {/* =========================================================
                WHAT MAKES IT DIFFERENT
            ========================================================= */}

            <section className="bg-[#292D28] px-6 py-24 text-[#F3EBDD] md:px-12 md:py-32 lg:py-40">

                <div className="mx-auto max-w-[1400px]">

                    <SectionTitle eyebrow="The Atlas Difference" dark={false}>
                        What makes Atlas singletrack different?
                    </SectionTitle>

                    <div className="mt-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                        {[
                            {
                                number: "01",
                                title: "Raw terrain",
                                text: "Rock, loose ground, natural lines and constantly changing surfaces make every section of trail feel connected to the mountain.",
                            },
                            {
                                number: "02",
                                title: "Mountain scale",
                                text: "The landscape can shift from narrow valleys to enormous open slopes, with the High Atlas rising around you.",
                            },
                            {
                                number: "03",
                                title: "Ancient paths",
                                text: "Many routes follow paths shaped by generations of movement between villages, valleys and mountain passes.",
                            },
                            {
                                number: "04",
                                title: "No two rides alike",
                                text: "Altitude, weather, season and route choice constantly change the character of a ride in the Atlas.",
                            },
                        ].map((item) => (
                            <div
                                key={item.number}
                                className="border-t border-[#F3EBDD]/15 pt-6"
                            >
                                <span className="text-[10px] font-semibold tracking-[0.2em] text-[#E56A2E]">
                                    {item.number}
                                </span>

                                <h3 className="mt-6 font-serif text-2xl tracking-[-0.025em] md:text-3xl">
                                    {item.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-[#F3EBDD]/60">
                                    {item.text}
                                </p>
                            </div>
                        ))}

                    </div>

                </div>

            </section>


            {/* =========================================================
                RIDING EXPERIENCE
            ========================================================= */}

            <section className="bg-[#F3EBDD] px-6 py-24 md:px-12 md:py-32 lg:py-40">

                <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-24">

                    <SectionTitle eyebrow="On The Bike">
                        Riding through the High Atlas
                    </SectionTitle>

                    <div className="space-y-7 text-base leading-8 text-[#292D28]/70 md:text-lg">

                        <p>
                            A day on an Atlas mountain bike trail rarely follows a
                            predictable rhythm. A long climb can lead into a fast,
                            exposed traverse. A rocky section can suddenly give way to
                            smoother ground before the trail narrows again.
                        </p>

                        <p>
                            That variety is part of what makes mountain biking in the
                            High Atlas so rewarding. The terrain asks you to stay
                            present — reading the surface, choosing your line and
                            adapting to the mountain rather than expecting the mountain
                            to behave like a prepared trail.
                        </p>

                        <p>
                            Some sections are physical. Others are technical. Some are
                            simply about holding a steady rhythm while the landscape
                            unfolds around you.
                        </p>

                    </div>

                </div>

            </section>


            {/* =========================================================
                EDITORIAL IMAGE BREAK
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

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                <div className="absolute bottom-10 left-6 right-6 md:bottom-14 md:left-12">

                    <div className="mx-auto max-w-[1400px]">

                        <p className="max-w-3xl font-serif text-3xl leading-[1.05] tracking-[-0.035em] text-white md:text-5xl lg:text-6xl">
                            The reward is not only the descent.
                            <span className="text-[#E56A2E]">
                                {" "}It is everything between the climbs.
                            </span>
                        </p>

                    </div>

                </div>

            </section>


            {/* =========================================================
                BEYOND THE TRAIL
            ========================================================= */}

            <section className="bg-[#F3EBDD] px-6 py-24 md:px-12 md:py-32 lg:py-40">

                <div className="mx-auto max-w-[1400px]">

                    <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

                        <SectionTitle eyebrow="Beyond The Trail">
                            More than a mountain bike route
                        </SectionTitle>

                        <div className="space-y-7 text-base leading-8 text-[#292D28]/70 md:text-lg">

                            <p>
                                The Atlas is not an empty backdrop for mountain biking.
                                Trails pass through landscapes where mountain communities
                                have lived and travelled for generations.
                            </p>

                            <p>
                                Villages sit within valleys, agricultural terraces climb
                                the slopes and old paths connect places that can feel
                                remarkably distant from the modern road network.
                            </p>

                            <p>
                                This is one of the reasons riding in Morocco feels
                                different from riding in a conventional trail destination.
                                The bike becomes a way of moving through a living
                                landscape rather than simply moving from one trailhead
                                to another.
                            </p>

                        </div>

                    </div>

                    <div className="mt-20 grid gap-6 md:grid-cols-2">

                        <div className="relative aspect-[4/3] overflow-hidden bg-[#D9D3C8]">
                            <Image
                                src="/images/mtb/two-riders-green-landcape-singletrack.jpeg"
                                alt="Mountain bikers riding through a green landscape in the High Atlas"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>

                        <div className="flex items-end bg-[#292D28] p-8 md:p-12">

                            <div>

                                <Eyebrow>
                                    Ride The Atlas
                                </Eyebrow>

                                <p className="mt-7 max-w-xl font-serif text-3xl leading-[1.1] tracking-[-0.03em] text-[#F3EBDD] md:text-4xl">
                                    We ride to experience the mountains,
                                    <span className="text-[#E56A2E]">
                                        {" "}not simply to cross them.
                                    </span>
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                WHEN TO RIDE
            ========================================================= */}

            <section className="border-t border-[#292D28]/10 bg-[#EAE2D3] px-6 py-24 md:px-12 md:py-32">

                <div className="mx-auto max-w-[1400px]">

                    <SectionTitle eyebrow="Planning The Ride">
                        When to ride in the Atlas
                    </SectionTitle>

                    <div className="mt-16 grid gap-8 md:grid-cols-3">

                        <div className="bg-[#F3EBDD] p-8 md:p-10">

                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C45B2B]">
                                Spring
                            </span>

                            <h3 className="mt-5 font-serif text-3xl tracking-[-0.03em] text-[#292D28]">
                                Fresh landscapes
                            </h3>

                            <p className="mt-5 text-sm leading-7 text-[#292D28]/65">
                                Lower and mid-elevation landscapes can take on a
                                particularly vibrant character as the season develops.
                            </p>

                        </div>

                        <div className="bg-[#F3EBDD] p-8 md:p-10">

                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C45B2B]">
                                Autumn
                            </span>

                            <h3 className="mt-5 font-serif text-3xl tracking-[-0.03em] text-[#292D28]">
                                Clear mountain days
                            </h3>

                            <p className="mt-5 text-sm leading-7 text-[#292D28]/65">
                                Cooler temperatures and changing mountain light create
                                excellent conditions for exploring the trails.
                            </p>

                        </div>

                        <div className="bg-[#F3EBDD] p-8 md:p-10">

                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C45B2B]">
                                Higher terrain
                            </span>

                            <h3 className="mt-5 font-serif text-3xl tracking-[-0.03em] text-[#292D28]">
                                Conditions matter
                            </h3>

                            <p className="mt-5 text-sm leading-7 text-[#292D28]/65">
                                Higher routes can be affected by altitude, weather and
                                seasonal conditions, making local knowledge especially
                                important.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                WHO IS IT FOR
            ========================================================= */}

            <section className="bg-[#292D28] px-6 py-24 text-[#F3EBDD] md:px-12 md:py-32 lg:py-40">

                <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

                    <SectionTitle eyebrow="The Right Rider" dark={false}>
                        For riders looking beyond ordinary trails.
                    </SectionTitle>

                    <div>

                        <p className="max-w-3xl text-lg leading-8 text-[#F3EBDD]/70">
                            Atlas singletrack is best suited to riders who enjoy natural
                            terrain, long mountain days and the uncertainty that comes
                            with exploring a real mountain environment.
                        </p>

                        <div className="mt-12 grid gap-4 sm:grid-cols-2">

                            {[
                                "Experienced mountain bikers",
                                "Riders comfortable with technical terrain",
                                "Adventure-focused riders",
                                "Riders who enjoy long climbs",
                                "Riders looking for remote landscapes",
                                "Anyone wanting to experience Morocco by bike",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="border-t border-[#F3EBDD]/15 py-5"
                                >
                                    <span className="mr-3 text-[#E56A2E]">+</span>
                                    <span className="text-sm text-[#F3EBDD]/75">
                                        {item}
                                    </span>
                                </div>
                            ))}

                        </div>

                    </div>

                </div>

            </section>


            {/* =========================================================
                RIDE THE ATLAS APPROACH
            ========================================================= */}

            <section className="bg-[#F3EBDD] px-6 py-24 md:px-12 md:py-32 lg:py-40">

                <div className="mx-auto max-w-[1400px]">

                    <div className="max-w-3xl">

                        <Eyebrow dark>
                            Our Approach
                        </Eyebrow>

                        <h2 className="mt-6 font-serif text-4xl leading-[0.98] tracking-[-0.045em] text-[#292D28] md:text-6xl">
                            Local knowledge changes
                            <span className="text-[#E56A2E]">
                                {" "}the ride.
                            </span>
                        </h2>

                    </div>

                    <div className="mt-16 grid gap-12 border-t border-[#292D28]/15 pt-12 md:grid-cols-3">

                        <div>
                            <h3 className="font-serif text-2xl text-[#292D28]">
                                Route selection
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-[#292D28]/65">
                                Routes are chosen around terrain, conditions, season and
                                the character of the group rather than simply following
                                a fixed trail list.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-serif text-2xl text-[#292D28]">
                                Mountain knowledge
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-[#292D28]/65">
                                Understanding the landscape, access, weather and local
                                conditions is part of what makes an Atlas ride work.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-serif text-2xl text-[#292D28]">
                                The complete experience
                            </h3>

                            <p className="mt-4 text-sm leading-7 text-[#292D28]/65">
                                The objective is not simply to collect kilometres. It is
                                to experience the mountains, the trails and the places
                                between them.
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
                                Ride The Atlas
                            </Eyebrow>

                            <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[0.98] tracking-[-0.045em] text-[#292D28] md:text-6xl">
                                Ready to ride the Atlas?
                            </h2>
                        </div>

                        <Link
                            href="/mountain-biking"
                            className="inline-flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#292D28]"
                        >
                            Explore mountain biking
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
                        The Atlas Is Waiting
                    </Eyebrow>

                    <h2 className="mx-auto mt-7 max-w-5xl font-serif text-5xl leading-[0.92] tracking-[-0.05em] md:text-7xl lg:text-8xl">
                        Find your line
                        <br />
                        in the mountains.
                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-[#F3EBDD]/65 md:text-lg">
                        Explore mountain biking adventures across the Moroccan Atlas
                        and discover a different way to experience the mountains.
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
                            href="/journal/high-atlas"
                            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#292D28]/55 transition-colors hover:text-[#E56A2E]"
                        >
                            Previous story
                        </Link>

                        <Link
                            href="/journal/atlas-mountain-villages"
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