import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export const metadata = {
    title: "Ski Touring in Mgoun | Ride The Atlas",
    description:
        "A winter journey into the Mgoun massif of Morocco's High Atlas, following remote valleys, high snowfields and long mountain descents in the eastern Atlas.",
    keywords: [
        "ski touring Mgoun",
        "Mgoun ski touring",
        "ski touring Morocco",
        "ski touring High Atlas",
        "ski touring Atlas Mountains",
        "Mount Mgoun winter",
        "Mgoun winter",
        "ski mountaineering Morocco",
        "skiing Mgoun",
        "Morocco ski touring",
    ],
    alternates: {
        canonical: "/journal/ski-touring-mgoun",
    },
};

export default function SkiTouringMgounPage() {
    return (
        <>
            <main className="bg-[#101310] text-[#F3EBDD]">
                {/* HERO */}
                <section className="relative min-h-screen overflow-hidden">
                    <SiteHeader />

                    <Image
                        src="/images/ski/ski-descent-bouignouane.jpeg"
                        alt="Skier descending through the winter mountains of the Mgoun massif in Morocco"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-black/25" />

                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    <div className="relative z-10 flex min-h-screen items-end px-6 pb-20 pt-40 md:px-12 md:pb-24 lg:px-16">
                        <div className="mx-auto w-full max-w-7xl">
                            <div className="max-w-5xl">
                                <div className="mb-8 flex items-center gap-4">
                                    <span className="h-px w-12 bg-[#E56A2E]" />

                                    <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">
                                        Ski Touring · Journal
                                    </p>
                                </div>

                                <h1 className="font-serif text-6xl font-normal leading-[0.84] tracking-[-0.055em] sm:text-7xl md:text-8xl lg:text-[9rem]">
                                    Ski Touring
                                    <br />
                                    in
                                    <br />
                                    <span className="text-[#E56A2E]">
                                        Mgoun.
                                    </span>
                                </h1>

                                <p className="mt-10 max-w-2xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
                                    A winter journey into one of the wilder
                                    corners of Morocco&apos;s High Atlas, where
                                    long valleys, high snowfields and open
                                    mountain terrain create a different kind of
                                    ski experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ARTICLE HEADER */}
                <section className="border-b border-white/10 px-6 py-14 md:px-10 lg:px-16">
                    <div className="mx-auto flex max-w-5xl flex-col justify-between gap-8 md:flex-row md:items-end">
                        <div>
                            <p className="text-[9px] uppercase tracking-[0.3em] text-white/35">
                                Journal · Winter · High Atlas
                            </p>

                            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-white/55">
                                Mgoun, Morocco
                            </p>
                        </div>

                        <Link
                            href="/journal"
                            className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#E56A2E] transition hover:text-white"
                        >
                            ← Back to the Journal
                        </Link>
                    </div>
                </section>

                {/* INTRODUCTION */}
                <article>
                    <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
                        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.65fr_1.35fr]">
                            <div>
                                <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">
                                    The eastern High Atlas
                                </p>
                            </div>

                            <div className="space-y-7 text-base leading-8 text-white/65 md:text-lg md:leading-9">
                                <p className="font-serif text-3xl leading-tight tracking-[-0.025em] text-[#F3EBDD] md:text-4xl">
                                    Mgoun feels different from the moment you
                                    enter its valleys.
                                </p>

                                <p>
                                    Farther from the familiar routes around
                                    Toubkal, the landscape opens into a quieter
                                    and more expansive part of the High Atlas.
                                    Villages give way to long valleys, broad
                                    mountain faces and a horizon that seems to
                                    keep moving away.
                                </p>

                                <p>
                                    In winter, snow changes the character of
                                    this landscape again. Dry ridges become
                                    white lines against the sky. High valleys
                                    hold the cold and the mountains take on a
                                    stripped-back, almost northern appearance.
                                </p>

                                <p>
                                    For ski touring, this combination of scale,
                                    remoteness and varied terrain is what makes
                                    Mgoun so compelling.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* FULL WIDTH IMAGE */}
                    <section className="px-6 md:px-10 lg:px-16">
                        <div className="relative mx-auto aspect-[16/9] max-w-7xl overflow-hidden">
                            <Image
                                src="/images/ski/bouignouane-skiers-skinning-up.jpeg"
                                alt="Skiers climbing through snow in the High Atlas near Mgoun"
                                fill
                                sizes="(max-width: 1280px) 100vw, 1280px"
                                className="object-cover"
                            />
                        </div>
                    </section>

                    {/* INTO THE VALLEYS */}
                    <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
                        <div className="mx-auto max-w-5xl">
                            <div className="max-w-3xl">
                                <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">
                                    Into the massif
                                </p>

                                <h2 className="mt-7 font-serif text-5xl leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-7xl">
                                    The long way
                                    <br />
                                    into Mgoun.
                                </h2>
                            </div>

                            <div className="mt-14 grid gap-10 md:grid-cols-2">
                                <div className="space-y-6 text-sm leading-8 text-white/60 md:text-base">
                                    <p>
                                        The approach is part of the experience.
                                        There is no instant transition from
                                        road to high mountain. The landscape
                                        unfolds gradually, giving the journey
                                        time to settle into its rhythm.
                                    </p>

                                    <p>
                                        Lower valleys retain traces of daily
                                        life. Fields, villages and old paths
                                        sit beneath the larger mountain
                                        landscape, while the upper slopes
                                        remain distant.
                                    </p>
                                </div>

                                <div className="space-y-6 text-sm leading-8 text-white/60 md:text-base">
                                    <p>
                                        As the altitude increases, the
                                        proportions change. The valley becomes
                                        smaller behind you and the surrounding
                                        ridges begin to dominate the view.
                                    </p>

                                    <p>
                                        Winter makes this transition even more
                                        pronounced. Snow gradually connects the
                                        landscape into one continuous mountain
                                        environment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* THE WINTER LANDSCAPE */}
                    <section className="border-y border-white/10 bg-[#151815] px-6 py-24 md:px-10 md:py-32 lg:px-16">
                        <div className="mx-auto max-w-7xl">
                            <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">
                                        Winter terrain
                                    </p>

                                    <h2 className="mt-7 font-serif text-5xl leading-[0.92] tracking-[-0.045em] sm:text-6xl">
                                        A mountain
                                        <br />
                                        without edges.
                                    </h2>
                                </div>

                                <div className="space-y-7 text-sm leading-8 text-white/60 md:text-base">
                                    <p>
                                        Mgoun does not feel like a single
                                        mountain line. It is a landscape of
                                        ridges, bowls, valleys and broad slopes
                                        that change character as the winter
                                        develops.
                                    </p>

                                    <p>
                                        Snow can transform familiar rock
                                        formations into smooth, connected
                                        terrain. Lines appear where there were
                                        none before, while wind and exposure
                                        constantly reshape the surface.
                                    </p>

                                    <p>
                                        Ski touring here becomes an exercise in
                                        observation. The best route is rarely
                                        simply the most obvious one. It is the
                                        line that fits the conditions, the
                                        terrain and the day.
                                    </p>

                                    <p>
                                        That sense of discovery is part of what
                                        makes the eastern Atlas so rewarding.
                                    </p>

                                    <Link
                                        href="/ski-touring"
                                        className="inline-flex items-center gap-4 border-b border-[#E56A2E]/50 pb-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#E56A2E] transition hover:border-[#E56A2E] hover:text-white"
                                    >
                                        Explore ski touring in the High Atlas
                                        <span>→</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* IMAGE BREAK */}
                    <section className="px-6 py-10 md:px-10 lg:px-16 lg:py-16">
                        <div className="relative mx-auto min-h-[520px] max-w-7xl overflow-hidden md:min-h-[700px]">
                            <Image
                                src="/images/ski/radouane-couloir-skis-on-pack.jpeg"
                                alt="Skis carried through steep winter terrain in the Moroccan High Atlas"
                                fill
                                sizes="(max-width: 1280px) 100vw, 1280px"
                                className="object-cover object-center"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                            <div className="absolute bottom-8 left-7 md:bottom-12 md:left-12">
                                <p className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                                    Winter · Mgoun
                                </p>

                                <p className="mt-3 font-serif text-3xl tracking-[-0.03em] md:text-4xl">
                                    Into the high country.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* HIGHER TERRAIN */}
                    <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
                        <div className="mx-auto max-w-5xl">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">
                                Higher terrain
                            </p>

                            <h2 className="mt-7 max-w-4xl font-serif text-5xl leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-7xl">
                                Where the Atlas
                                <br />
                                opens wide.
                            </h2>

                            <div className="mt-14 grid gap-10 md:grid-cols-2">
                                <div className="space-y-6 text-sm leading-8 text-white/60 md:text-base">
                                    <p>
                                        Higher in the massif, the feeling of
                                        space becomes difficult to ignore.
                                        Ridges stretch across the horizon and
                                        the valley floor disappears far below.
                                    </p>

                                    <p>
                                        The terrain becomes increasingly
                                        dependent on conditions. Wind,
                                        temperature, aspect and recent snowfall
                                        all influence how the mountain can be
                                        travelled.
                                    </p>
                                </div>

                                <div className="space-y-6 text-sm leading-8 text-white/60 md:text-base">
                                    <p>
                                        This is where the slower rhythm of ski
                                        touring becomes valuable. The climb is
                                        not just a way to reach the top. It
                                        gives time to understand the mountain
                                        before committing to a descent.
                                    </p>

                                    <p>
                                        There is something deeply satisfying
                                        about that process: moving quietly,
                                        watching the snow and gradually
                                        building a picture of the terrain.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* THE DESCENT */}
                    <section className="bg-[#F3EBDD] px-6 py-24 text-[#20231F] md:px-10 md:py-32 lg:px-16">
                        <div className="mx-auto max-w-7xl">
                            <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                                <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
                                    <Image
                                        src="/images/ski/ski-descent-bouignouane.jpeg"
                                        alt="Skier descending a snow-covered slope in the High Atlas"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 55vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#C65A2C]">
                                        The descent
                                    </p>

                                    <h2 className="mt-7 font-serif text-5xl leading-[0.92] tracking-[-0.045em] sm:text-6xl">
                                        The mountain
                                        <br />
                                        gives it back.
                                    </h2>

                                    <div className="mt-9 space-y-6 text-sm leading-8 text-[#20231F]/65 md:text-base">
                                        <p>
                                            After hours of climbing, the
                                            perspective changes.
                                        </p>

                                        <p>
                                            The terrain that took time to cross
                                            becomes a line downhill. Broad
                                            slopes, gullies and changing snow
                                            create a completely different
                                            relationship with the mountain.
                                        </p>

                                        <p>
                                            Good ski terrain is never simply
                                            about steepness. It is about the
                                            quality of the snow, the shape of
                                            the slope and the way everything
                                            connects.
                                        </p>

                                        <p>
                                            In Mgoun, that connection can feel
                                            particularly rewarding. The
                                            descent becomes a continuation of
                                            the journey rather than an ending.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* REMOTE ATLAS */}
                    <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
                        <div className="mx-auto max-w-5xl">
                            <div className="grid gap-12 lg:grid-cols-[0.65fr_1.35fr]">
                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">
                                        A quieter Atlas
                                    </p>
                                </div>

                                <div className="space-y-7 text-base leading-8 text-white/65 md:text-lg md:leading-9">
                                    <p className="font-serif text-3xl leading-tight tracking-[-0.025em] text-[#F3EBDD] md:text-4xl">
                                        The attraction of Mgoun is not only the
                                        skiing.
                                    </p>

                                    <p>
                                        It is the feeling of being further
                                        away. The mountains seem larger because
                                        there is less around them. The journey
                                        takes longer to unfold and the landscape
                                        has more room to breathe.
                                    </p>

                                    <p>
                                        Days in the mountains settle into a
                                        simple rhythm: climb, observe, adapt,
                                        descend. Between those moments there is
                                        time to notice the details that are
                                        easily missed when the objective becomes
                                        the only focus.
                                    </p>

                                    <p>
                                        That is perhaps the strongest memory
                                        Mgoun leaves behind. Not a single
                                        viewpoint or one perfect turn, but the
                                        feeling of travelling through a vast
                                        winter landscape.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* REFLECTION */}
                    <section className="border-y border-white/10 bg-[#151815] px-6 py-24 md:px-10 md:py-32 lg:px-16">
                        <div className="mx-auto max-w-4xl text-center">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">
                                A different side of winter
                            </p>

                            <h2 className="mt-7 font-serif text-5xl leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-7xl">
                                Further from the
                                <br />
                                familiar routes.
                            </h2>

                            <div className="mx-auto mt-12 max-w-3xl space-y-7 text-sm leading-8 text-white/60 md:text-base">
                                <p>
                                    Toubkal may be the most recognisable summit
                                    in Morocco, but the High Atlas does not end
                                    there.
                                </p>

                                <p>
                                    Mgoun reveals another side of winter in the
                                    range: longer approaches, open terrain,
                                    quieter valleys and a stronger sense of
                                    distance.
                                </p>

                                <p>
                                    For anyone drawn to ski touring because of
                                    the journey as much as the descent, that is
                                    exactly what makes the Mgoun massif worth
                                    discovering.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* CONTINUE THE JOURNEY */}
                    <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
                        <div className="mx-auto max-w-7xl">
                            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">
                                        Continue the journey
                                    </p>

                                    <h2 className="mt-7 max-w-lg font-serif text-5xl leading-[0.92] tracking-[-0.045em] sm:text-6xl">
                                        Explore the
                                        <br />
                                        winter Atlas.
                                    </h2>
                                </div>

                                <div className="max-w-2xl">
                                    <p className="text-sm leading-8 text-white/60 md:text-base">
                                        Mgoun is one part of a much wider
                                        winter landscape. From Tacheddirt and
                                        Toubkal to Tazaghart and the high
                                        passes of the Atlas, each journey has
                                        its own character.
                                    </p>

                                    <Link
                                        href="/ski-touring"
                                        className="mt-7 inline-flex items-center gap-4 border-b border-[#E56A2E]/50 pb-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#E56A2E] transition hover:border-[#E56A2E] hover:text-white"
                                    >
                                        Explore Ski Touring
                                        <span>→</span>
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-16 grid gap-5 md:grid-cols-3">
                                {/* EXPEDITION 01 */}
                                <Link
                                    href="/ski-touring/tachedirt-toubkal"
                                    className="group border border-white/10 bg-[#151815] p-7 transition-colors duration-500 hover:border-[#E56A2E]/50"
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#E56A2E]">
                                            01
                                        </p>

                                        <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                                            8 Days
                                        </p>
                                    </div>

                                    <h3 className="mt-12 font-serif text-3xl leading-[0.95] tracking-[-0.03em] transition-colors group-hover:text-[#E56A2E]">
                                        Tacheddirt
                                        <br />
                                        &amp; Toubkal
                                    </h3>

                                    <p className="mt-6 text-sm leading-7 text-white/50">
                                        A multi-day ski journey through the
                                        Tacheddirt and Toubkal areas, linking
                                        high mountain terrain and winter
                                        objectives.
                                    </p>

                                    <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
                                        <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/45">
                                            Expedition
                                        </span>

                                        <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#E56A2E]">
                                            View trip →
                                        </span>
                                    </div>
                                </Link>

                                {/* EXPEDITION 02 */}
                                <Link
                                    href="/ski-touring/tacheddirt-ski-touring"
                                    className="group border border-white/10 bg-[#151815] p-7 transition-colors duration-500 hover:border-[#E56A2E]/50"
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#E56A2E]">
                                            02
                                        </p>

                                        <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                                            6 Days
                                        </p>
                                    </div>

                                    <h3 className="mt-12 font-serif text-3xl leading-[0.95] tracking-[-0.03em] transition-colors group-hover:text-[#E56A2E]">
                                        Tacheddirt
                                        <br />
                                        Ski Touring
                                    </h3>

                                    <p className="mt-6 text-sm leading-7 text-white/50">
                                        A focused ski-touring journey into the
                                        Tacheddirt and Imenane Valley, with
                                        high passes and changing winter
                                        terrain.
                                    </p>

                                    <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
                                        <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/45">
                                            Expedition
                                        </span>

                                        <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#E56A2E]">
                                            View trip →
                                        </span>
                                    </div>
                                </Link>

                                {/* EXPEDITION 03 */}
                                <Link
                                    href="/ski-touring/tazaghart-toubkal-high-route"
                                    className="group border border-white/10 bg-[#151815] p-7 transition-colors duration-500 hover:border-[#E56A2E]/50"
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#E56A2E]">
                                            03
                                        </p>

                                        <p className="text-[9px] uppercase tracking-[0.25em] text-white/35">
                                            6 Days
                                        </p>
                                    </div>

                                    <h3 className="mt-12 font-serif text-3xl leading-[0.95] tracking-[-0.03em] transition-colors group-hover:text-[#E56A2E]">
                                        Tazaghart &amp;
                                        <br />
                                        Toubkal High Route
                                    </h3>

                                    <p className="mt-6 text-sm leading-7 text-white/50">
                                        A high-route expedition connecting
                                        Tazaghart and Toubkal through demanding
                                        winter terrain, passes and mountain
                                        lines.
                                    </p>

                                    <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-5">
                                        <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/45">
                                            Expedition
                                        </span>

                                        <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#E56A2E]">
                                            View trip →
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* RELATED STORIES */}
                    <section className="border-t border-white/10 px-6 py-24 md:px-10 md:py-32 lg:px-16">
                        <div className="mx-auto max-w-7xl">
                            <div className="mb-12">
                                <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">
                                    From the Journal
                                </p>

                                <h2 className="mt-6 font-serif text-5xl leading-[0.92] tracking-[-0.045em] sm:text-6xl">
                                    More stories
                                    <br />
                                    from winter.
                                </h2>
                            </div>

                            <div className="grid gap-6 md:grid-cols-2">
                                {/* TOUBKAL STORY */}
                                <Link
                                    href="/journal/ski-touring-toubkal"
                                    className="group relative min-h-[500px] overflow-hidden"
                                >
                                    <Image
                                        src="/images/ski/skiers-on-toubkal-summit.jpeg"
                                        alt="Skiers on the summit of Mount Toubkal in winter"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                                    <div className="absolute bottom-8 left-8 right-8">
                                        <p className="text-[9px] uppercase tracking-[0.3em] text-[#E56A2E]">
                                            Ski Touring
                                        </p>

                                        <h3 className="mt-4 font-serif text-4xl leading-[0.95] tracking-[-0.03em]">
                                            Ski Touring
                                            <br />
                                            on Toubkal
                                        </h3>

                                        <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/70">
                                            Read story →
                                        </p>
                                    </div>
                                </Link>

                                {/* SKI TOURING HUB */}
                                <Link
                                    href="/ski-touring"
                                    className="group relative min-h-[500px] overflow-hidden"
                                >
                                    <Image
                                        src="/images/ski/radouane-couloir-skis-on-pack.jpeg"
                                        alt="Skis prepared for ski touring in the Moroccan High Atlas"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />

                                    <div className="absolute bottom-8 left-8 right-8">
                                        <p className="text-[9px] uppercase tracking-[0.3em] text-[#E56A2E]">
                                            Ski Touring
                                        </p>

                                        <h3 className="mt-4 font-serif text-4xl leading-[0.95] tracking-[-0.03em]">
                                            Explore the
                                            <br />
                                            Winter Atlas
                                        </h3>

                                        <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/70">
                                            Explore ski touring →
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </section>

                    {/* FINAL JOURNAL NAVIGATION */}
                    <section className="border-t border-white/10 px-6 py-12 md:px-10 lg:px-16">
                        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-7 md:flex-row">
                            <Link
                                href="/journal/ski-touring-toubkal"
                                className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/50 transition hover:text-[#E56A2E]"
                            >
                                ← Previous story
                            </Link>

                            <Link
                                href="/journal"
                                className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#E56A2E] transition hover:text-white"
                            >
                                The Atlas Journal
                            </Link>

                            <Link
                                href="/journal"
                                className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/50 transition hover:text-[#E56A2E]"
                            >
                                Journal index →
                            </Link>
                        </div>
                    </section>
                </article>
            </main>

            <SiteFooter />
        </>
    );
}