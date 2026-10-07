import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
    title: "A Journey Into the High Atlas | Ride The Atlas",
    description:
        "Discover mountain biking in Morocco's High Atlas — dramatic landscapes, remote trails, mountain villages and the rhythm of riding through the Atlas.",
    keywords: [
        "High Atlas mountain biking",
        "mountain biking Morocco",
        "Morocco mountain bike",
        "Atlas Mountains MTB",
        "High Atlas MTB",
        "mountain biking Marrakech",
        "Ride The Atlas",
    ],
    openGraph: {
        title: "A Journey Into the High Atlas | Ride The Atlas",
        description:
            "Discover the landscapes, trails and mountain character behind mountain biking in Morocco's High Atlas.",
        images: [
            {
                url: "/images/mtb/group-bikers-picture.jpeg",
                width: 1600,
                height: 1000,
                alt: "Mountain bikers exploring the High Atlas",
            },
        ],
    },
};

function Eyebrow({
    children,
    dark = false,
}: {
    children: React.ReactNode;
    dark?: boolean;
}) {
    return (
        <div
            className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] ${dark ? "text-[#F3EBDD]/60" : "text-[#292D28]/55"
                }`}
        >
            <span className="h-px w-8 bg-[#E56A2E]" />
            <span>{children}</span>
        </div>
    );
}

export default function HighAtlasJournalPage() {
    return (
        <main className="bg-[#F3EBDD] text-[#292D28]">
            {/* =========================================================
                HERO
            ========================================================= */}
            <section className="relative min-h-screen overflow-hidden bg-[#292D28]">

                {/* Header overlays the hero */}
                <SiteHeader />

                <Image
                    src="/images/mtb/group-bikers-picture.jpeg"
                    alt="Mountain bikers exploring the High Atlas"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />

                {/* Overall image treatment */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Darker left side for typography */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

                {/* Bottom depth */}
                <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Hero content */}
                <div className="relative z-10 flex min-h-screen items-end">
                    <div className="mx-auto w-full max-w-7xl px-6 pb-16 pt-32 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
                        <div className="max-w-5xl">

                            <div className="mb-7 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/65">
                                <span className="h-px w-10 bg-[#E56A2E]" />
                                <span>
                                    Mountain biking · The Atlas Journal
                                </span>
                            </div>

                            <h1 className="font-serif text-5xl leading-[0.88] tracking-[-0.045em] text-[#F3EBDD] sm:text-6xl md:text-7xl lg:text-[8rem]">
                                A Journey
                                <br />
                                Into The
                                <br />
                                High Atlas
                            </h1>

                            <p className="mt-8 max-w-2xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
                                A closer look at the landscapes, trails and mountain
                                communities that make riding in the Atlas an experience
                                beyond the ordinary.
                            </p>

                            <div className="mt-10 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/55">
                                <span className="h-px w-12 bg-white/30" />
                                <span>Morocco · High Atlas</span>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* =========================================================
                INTRO
            ========================================================= */}
            <section className="border-b border-[#292D28]/10 bg-[#F3EBDD]">
                <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-16 lg:py-28">

                    <div>
                        <Eyebrow>01 / The mountains</Eyebrow>

                        <p className="mt-7 max-w-sm font-serif text-3xl leading-tight tracking-[-0.02em] sm:text-4xl">
                            The High Atlas is not simply somewhere to ride. It is a world
                            that has to be travelled through.
                        </p>
                    </div>

                    <div className="max-w-3xl space-y-6 text-base leading-8 text-[#292D28]/75 sm:text-lg sm:leading-9">
                        <p>
                            There are places where mountain biking is primarily about the
                            trail. The High Atlas is different.
                        </p>

                        <p>
                            Here, the trail is part of something much larger: a landscape
                            of immense mountain faces, open slopes, narrow valleys and
                            remote communities connected by routes that have existed long
                            before the mountain bike arrived.
                        </p>

                        <p>
                            Riding through this landscape changes the rhythm of a journey.
                            The mountains dictate the pace. The terrain demands attention.
                            And the further you travel, the more the experience becomes
                            about being present in the landscape rather than simply moving
                            through it.
                        </p>

                        <p>
                            This is what draws us back to the Atlas — the possibility of
                            combining genuine mountain riding with the feeling of discovery
                            that comes from travelling through a landscape that still feels
                            remarkably wild.
                        </p>
                    </div>

                </div>
            </section>

            {/* =========================================================
                LARGE IMAGE
            ========================================================= */}
            <section className="bg-[#292D28] px-4 py-4 sm:px-6 lg:px-8">
                <div className="relative mx-auto aspect-[16/9] max-w-[1800px] overflow-hidden">

                    <Image
                        src="/images/mtb/bikers-riding-on-ridge.jpeg"
                        alt="Mountain bikers riding across a ridge in the Moroccan Atlas"
                        fill
                        sizes="100vw"
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />

                    <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">
                            Ride The Atlas
                        </p>
                    </div>

                </div>
            </section>

            {/* =========================================================
                LANDSCAPE
            ========================================================= */}
            <section className="bg-[#F3EBDD]">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-32">

                    <div className="grid gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-28">

                        <div>
                            <Eyebrow>02 / The landscape</Eyebrow>

                            <h2 className="mt-7 max-w-lg font-serif text-4xl leading-[0.98] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                                Mountains with many different faces.
                            </h2>
                        </div>

                        <div className="max-w-3xl space-y-7 text-base leading-8 text-[#292D28]/75 sm:text-lg sm:leading-9">

                            <p>
                                The Atlas is not a single landscape. Its character changes
                                constantly as the road and trail climb deeper into the
                                mountains.
                            </p>

                            <p>
                                Dry mountain slopes give way to greener valleys. Open
                                high-altitude terrain contrasts with narrow passages and
                                settled valleys. Above everything, the larger mountain
                                architecture creates an ever-changing backdrop to the ride.
                            </p>

                            <p>
                                For a mountain biker, that variety is part of the attraction.
                                A day in the High Atlas can feel less like following a
                                predetermined route and more like moving through a sequence
                                of different mountain environments.
                            </p>

                            <p>
                                It is also why the Atlas rewards exploration. The most
                                memorable moments are not always the obvious ones. Sometimes
                                they come from a turn in the trail, a change in the light, a
                                distant village or a sudden view across an entire valley.
                            </p>

                        </div>

                    </div>
                </div>
            </section>

            {/* =========================================================
                SINGLETRACK
            ========================================================= */}
            <section className="bg-[#292D28] text-[#F3EBDD]">
                <div className="mx-auto grid max-w-7xl lg:grid-cols-2">

                    <div className="relative min-h-[500px] lg:min-h-[720px]">
                        <Image
                            src="/images/mtb/singletrack-two-riders.jpeg"
                            alt="Two mountain bikers riding singletrack in the Atlas Mountains"
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover"
                        />
                    </div>

                    <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                        <div className="max-w-xl">

                            <Eyebrow dark>
                                03 / On two wheels
                            </Eyebrow>

                            <h2 className="mt-7 font-serif text-4xl leading-[0.98] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                                The trail is only part of the story.
                            </h2>

                            <div className="mt-9 space-y-6 text-base leading-8 text-[#F3EBDD]/70 sm:text-lg sm:leading-9">

                                <p>
                                    Mountain biking in the Atlas is about more than technical
                                    sections or the satisfaction of a descent.
                                </p>

                                <p>
                                    The strongest rides have a sense of movement through the
                                    mountains. You climb, traverse, descend and reconnect with
                                    the landscape again and again.
                                </p>

                                <p>
                                    The bike becomes a way of accessing places that would take
                                    considerably longer to experience on foot. It creates a
                                    different relationship with distance and allows the
                                    landscape to unfold at a natural pace.
                                </p>

                            </div>

                            <div className="mt-10 border-l border-[#E56A2E] pl-6">
                                <p className="font-serif text-2xl leading-tight text-[#F3EBDD] sm:text-3xl">
                                    “The best rides are the ones where the landscape becomes
                                    part of the experience.”
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>

            {/* =========================================================
                BEYOND THE TRAIL
            ========================================================= */}
            <section className="bg-[#F3EBDD]">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-32">

                    <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">

                        <div className="relative aspect-[4/5] overflow-hidden">
                            <Image
                                src="/images/mtb/two-riders-green-landcape-singletrack.jpeg"
                                alt="Mountain bikers travelling through the Atlas landscape"
                                fill
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="object-cover"
                            />
                        </div>

                        <div>

                            <Eyebrow>
                                04 / Beyond the trail
                            </Eyebrow>

                            <h2 className="mt-7 max-w-xl font-serif text-4xl leading-[0.98] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                                Riding through a living landscape.
                            </h2>

                            <div className="mt-9 max-w-xl space-y-6 text-base leading-8 text-[#292D28]/75 sm:text-lg sm:leading-9">

                                <p>
                                    One of the things that makes the Atlas different is that
                                    mountain travel does not happen in isolation from local
                                    life.
                                </p>

                                <p>
                                    Trails and tracks connect valleys, villages and mountain
                                    communities. As you move through the landscape, the ride
                                    naturally becomes part of a broader journey.
                                </p>

                                <p>
                                    That connection is important to the way we approach
                                    mountain biking. We are not interested in simply dropping
                                    riders onto a trail and ticking off kilometres.
                                </p>

                                <p>
                                    The objective is to experience the mountains properly —
                                    riding through them, stopping when there is a reason to
                                    stop, taking in the landscape and allowing the journey to
                                    have its own rhythm.
                                </p>

                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* =========================================================
                QUOTE
            ========================================================= */}
            <section className="bg-[#E56A2E] text-[#292D28]">
                <div className="mx-auto max-w-6xl px-6 py-24 text-center sm:px-10 lg:py-32">

                    <p className="mx-auto max-w-5xl font-serif text-4xl leading-[0.98] tracking-[-0.03em] sm:text-5xl lg:text-7xl">
                        “Come for the riding. Stay for the mountains.”
                    </p>

                    <div className="mx-auto mt-8 h-px w-12 bg-[#292D28]/40" />

                    <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#292D28]/60">
                        Ride The Atlas
                    </p>

                </div>
            </section>

            {/* =========================================================
                FINDING YOUR ROUTE
            ========================================================= */}
            <section className="bg-[#F3EBDD]">
                <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-32">

                    <div className="max-w-3xl">

                        <Eyebrow>
                            05 / Finding your route
                        </Eyebrow>

                        <h2 className="mt-7 font-serif text-4xl leading-[0.98] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                            Different journeys. The same mountains.
                        </h2>

                        <p className="mt-8 text-base leading-8 text-[#292D28]/70 sm:text-lg sm:leading-9">
                            There is no single way to experience the High Atlas by bike.
                            The length and rhythm of a journey can change the character of
                            the experience completely. That is why Ride The Atlas offers
                            different ways to explore the mountains — from shorter
                            adventures to longer journeys deeper into the High Atlas.
                        </p>

                    </div>

                    <div className="mt-16 grid gap-5 md:grid-cols-3">

                        {[
                            {
                                title: "4-Day Eastern High Atlas",
                                description:
                                    "A shorter High Atlas adventure for riders looking to experience the character of the mountains without committing to a longer expedition.",
                                href: "/mountain-biking/4-day-mountain-biking-eastern-high-atlas-morocco",
                            },
                            {
                                title: "6-Day Eastern High Atlas",
                                description:
                                    "More time in the mountains means more opportunity to settle into the rhythm of the terrain and experience the journey at depth.",
                                href: "/mountain-biking/6-day-mountain-biking-eastern-high-atlas-morocco",
                            },
                            {
                                title: "8-Day Eastern High Atlas",
                                description:
                                    "A deeper immersion into the High Atlas for riders who want more time to explore the landscape and let the journey unfold.",
                                href: "/mountain-biking/8-day-mountain-biking-eastern-high-atlas-morocco",
                            },
                        ].map((trip) => (
                            <Link
                                key={trip.title}
                                href={trip.href}
                                className="group border border-[#292D28]/15 bg-[#F3EBDD] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#E56A2E] hover:bg-white sm:p-8"
                            >
                                <div className="flex items-center justify-between">

                                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#292D28]/50">
                                        Mountain biking
                                    </span>

                                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#292D28]/15 text-lg transition-all duration-300 group-hover:border-[#E56A2E] group-hover:bg-[#E56A2E]">
                                        ↗
                                    </span>

                                </div>

                                <h3 className="mt-12 font-serif text-3xl leading-tight tracking-[-0.02em]">
                                    {trip.title}
                                </h3>

                                <p className="mt-5 text-sm leading-7 text-[#292D28]/65">
                                    {trip.description}
                                </p>

                                <div className="mt-8 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E56A2E]">
                                    Explore trip
                                </div>
                            </Link>
                        ))}

                    </div>
                </div>
            </section>

            {/* =========================================================
                FULL WIDTH IMAGE
            ========================================================= */}
            <section className="relative min-h-[65vh] overflow-hidden bg-[#292D28]">

                <Image
                    src="/images/mtb/group-bikers-picture.jpeg"
                    alt="Mountain biking journey in the High Atlas"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-black/35" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                <div className="relative z-10 flex min-h-[65vh] items-end">
                    <div className="mx-auto w-full max-w-7xl px-6 pb-14 sm:px-10 lg:px-16 lg:pb-20">

                        <p className="max-w-4xl font-serif text-4xl leading-[0.98] tracking-[-0.03em] text-[#F3EBDD] sm:text-5xl lg:text-7xl">
                            The Atlas rewards those who take the time to look beyond the
                            trail.
                        </p>

                    </div>
                </div>
            </section>

            {/* =========================================================
                FINAL
            ========================================================= */}
            <section className="bg-[#F3EBDD]">
                <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-10 lg:py-32">

                    <Eyebrow>
                        06 / The journey
                    </Eyebrow>

                    <h2 className="mt-7 font-serif text-4xl leading-[0.98] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                        This is why we ride the Atlas.
                    </h2>

                    <div className="mx-auto mt-9 max-w-2xl space-y-6 text-base leading-8 text-[#292D28]/70 sm:text-lg sm:leading-9">

                        <p>
                            Not simply for the descent. Not simply for the trail.
                        </p>

                        <p>
                            We ride for the feeling of moving through a great mountain
                            landscape under our own power — and for everything that happens
                            along the way.
                        </p>

                        <p>
                            The High Atlas has a character that is difficult to describe
                            from a distance. The best way to understand it is to travel
                            through it.
                        </p>

                    </div>

                    <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

                        <Link
                            href="/mountain-biking"
                            className="inline-flex items-center justify-center bg-[#292D28] px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#F3EBDD] transition-colors hover:bg-[#E56A2E] hover:text-[#292D28]"
                        >
                            Explore mountain biking
                        </Link>

                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center border border-[#292D28]/20 px-8 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#292D28] transition-colors hover:border-[#E56A2E] hover:bg-[#E56A2E]"
                        >
                            Plan your journey
                        </Link>

                    </div>

                </div>
            </section>

            {/* =========================================================
                JOURNAL NAVIGATION
            ========================================================= */}
            <section className="border-t border-[#292D28]/10 bg-white/30">
                <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-6 py-10 sm:px-10 md:flex-row md:items-center lg:px-16">

                    <Link
                        href="/journal"
                        className="group flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.18em]"
                    >
                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#292D28]/15 transition-colors group-hover:border-[#E56A2E] group-hover:bg-[#E56A2E]">
                            ←
                        </span>

                        <span className="text-[#292D28]/65 group-hover:text-[#292D28]">
                            Back to The Atlas Journal
                        </span>
                    </Link>

                    <Link
                        href="/journal/atlas-singletrack"
                        className="group flex items-center gap-4 text-right text-[10px] font-semibold uppercase tracking-[0.18em]"
                    >
                        <span className="text-[#292D28]/65 group-hover:text-[#292D28]">
                            Next story
                        </span>

                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#292D28]/15 transition-colors group-hover:border-[#E56A2E] group-hover:bg-[#E56A2E]">
                            →
                        </span>
                    </Link>

                </div>
            </section>

            <SiteFooter />
        </main>
    );
}