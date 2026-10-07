import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export const metadata = {
    title: "Ski Touring on Toubkal | Ride The Atlas",
    description:
        "A winter journey into the High Atlas on skis. Discover what ski touring Mount Toubkal feels like, from the first climb above the valleys to the summit and the descent.",
    keywords: [
        "Toubkal ski touring",
        "ski touring Toubkal",
        "ski touring Morocco",
        "ski touring High Atlas",
        "ski touring Atlas Mountains",
        "Toubkal winter",
        "ski mountaineering Morocco",
        "skiing Toubkal",
        "winter High Atlas",
        "Morocco ski touring",
    ],
    alternates: {
        canonical: "/journal/ski-touring-toubkal",
    },
};

export default function SkiTouringToubkalPage() {
    return (
        <>
            <main className="bg-[#101310] text-[#F3EBDD]">
                {/* HERO */}
                <section className="relative min-h-screen overflow-hidden">
                    <SiteHeader />

                    <Image
                        src="/images/ski/skiers-on-toubkal-summit.jpeg"
                        alt="Skiers on the summit of Mount Toubkal in the Moroccan High Atlas"
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
                                    on
                                    <br />
                                    <span className="text-[#E56A2E]">
                                        Toubkal.
                                    </span>
                                </h1>

                                <p className="mt-10 max-w-2xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
                                    A winter journey into Morocco&apos;s High
                                    Atlas, following snow-covered valleys,
                                    high mountain terrain and the long way
                                    towards the summit of Toubkal.
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
                                Toubkal, Morocco
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
                                    Winter in the Atlas
                                </p>
                            </div>

                            <div className="space-y-7 text-base leading-8 text-white/65 md:text-lg md:leading-9">
                                <p className="font-serif text-3xl leading-tight tracking-[-0.025em] text-[#F3EBDD] md:text-4xl">
                                    Toubkal looks different when the mountains
                                    are covered in snow.
                                </p>

                                <p>
                                    In summer, the route towards Morocco&apos;s
                                    highest summit follows a landscape of dry
                                    trails, rock and wide open valleys. Winter
                                    changes that landscape completely.
                                </p>

                                <p>
                                    Snow smooths the edges of the mountains.
                                    Valleys become quieter. Familiar paths
                                    disappear beneath the winter surface and
                                    the upper massif takes on a more alpine
                                    character.
                                </p>

                                <p>
                                    This is where ski touring becomes more than
                                    a way of moving through the mountains. The
                                    climb, the snow, the changing terrain and
                                    the descent all become part of the same
                                    journey.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* FULL WIDTH IMAGE */}
                    <section className="px-6 md:px-10 lg:px-16">
                        <div className="relative mx-auto aspect-[16/9] max-w-7xl overflow-hidden">
                            <Image
                                src="/images/ski/skiers-on-toubkal-summit.jpeg"
                                alt="Skiers moving through the winter landscape of the High Atlas"
                                fill
                                sizes="(max-width: 1280px) 100vw, 1280px"
                                className="object-cover"
                            />
                        </div>
                    </section>

                    {/* LEAVING THE VALLEYS */}
                    <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
                        <div className="mx-auto max-w-5xl">
                            <div className="max-w-3xl">
                                <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">
                                    Leaving the valleys
                                </p>

                                <h2 className="mt-7 font-serif text-5xl leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-7xl">
                                    The mountain
                                    <br />
                                    begins slowly.
                                </h2>
                            </div>

                            <div className="mt-14 grid gap-10 md:grid-cols-2">
                                <div className="space-y-6 text-sm leading-8 text-white/60 md:text-base">
                                    <p>
                                        A Toubkal journey does not begin on a
                                        summit ridge. It begins much lower,
                                        moving away from the villages and into
                                        the valleys of the High Atlas.
                                    </p>

                                    <p>
                                        The first part of the journey has a
                                        rhythm of its own. The landscape is
                                        still open, the mountains rise around
                                        you and the winter air becomes
                                        noticeably sharper as the route gains
                                        height.
                                    </p>
                                </div>

                                <div className="space-y-6 text-sm leading-8 text-white/60 md:text-base">
                                    <p>
                                        Gradually the signs of everyday life
                                        become fewer. The valley narrows. Snow
                                        becomes more continuous. The mountains
                                        begin to feel less like a backdrop and
                                        more like the reason you are here.
                                    </p>

                                    <p>
                                        By the time the upper valleys come into
                                        view, the character of the journey has
                                        changed.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* THE APPROACH */}
                    <section className="border-y border-white/10 bg-[#151815] px-6 py-24 md:px-10 md:py-32 lg:px-16">
                        <div className="mx-auto max-w-7xl">
                            <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">
                                        Into the High Atlas
                                    </p>

                                    <h2 className="mt-7 font-serif text-5xl leading-[0.92] tracking-[-0.045em] sm:text-6xl">
                                        Following
                                        <br />
                                        the snow.
                                    </h2>
                                </div>

                                <div className="space-y-7 text-sm leading-8 text-white/60 md:text-base">
                                    <p>
                                        The winter approach towards Toubkal is
                                        as much about reading the landscape as
                                        it is about reaching a destination.
                                    </p>

                                    <p>
                                        Snow changes the way the mountain is
                                        travelled. A summer path may no longer
                                        be the obvious line. Slopes connect in
                                        different ways and the terrain begins
                                        to open into a much larger winter
                                        landscape.
                                    </p>

                                    <p>
                                        The pace becomes slower and more
                                        deliberate. Skins move quietly across
                                        the snow. Transitions become part of
                                        the rhythm. Every so often the route
                                        pauses, giving another view into the
                                        mountains above.
                                    </p>

                                    <p>
                                        This is one of the things that makes
                                        ski touring in the Atlas so rewarding:
                                        the journey is constantly changing with
                                        the mountain.
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

                    {/* SECOND IMAGE */}
                    <section className="px-6 py-10 md:px-10 lg:px-16 lg:py-16">
                        <div className="relative mx-auto min-h-[520px] max-w-7xl overflow-hidden md:min-h-[700px]">
                            <Image
                                src="/images/ski/ski-descent-bouignouane.jpeg"
                                alt="Ski descent through the high mountains of Morocco"
                                fill
                                sizes="(max-width: 1280px) 100vw, 1280px"
                                className="object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                            <div className="absolute bottom-8 left-7 md:bottom-12 md:left-12">
                                <p className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                                    Winter · High Atlas
                                </p>

                                <p className="mt-3 font-serif text-3xl tracking-[-0.03em] md:text-4xl">
                                    Above the valleys.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* THE REFUGE */}
                    <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
                        <div className="mx-auto max-w-5xl">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">
                                The high mountain
                            </p>

                            <h2 className="mt-7 max-w-4xl font-serif text-5xl leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-7xl">
                                Where the landscape
                                <br />
                                starts to feel alpine.
                            </h2>

                            <div className="mt-14 grid gap-10 md:grid-cols-2">
                                <div className="space-y-6 text-sm leading-8 text-white/60 md:text-base">
                                    <p>
                                        Above the valleys, the scale of the
                                        Toubkal massif becomes much clearer.
                                        The surrounding peaks rise sharply
                                        from the snow and the horizon opens in
                                        every direction.
                                    </p>

                                    <p>
                                        The refuge marks an important change in
                                        the rhythm of the journey. It becomes a
                                        place to rest, prepare and wait for the
                                        mountain day ahead.
                                    </p>
                                </div>

                                <div className="space-y-6 text-sm leading-8 text-white/60 md:text-base">
                                    <p>
                                        Winter mornings at altitude are
                                        different. The cold is immediate.
                                        Movement begins early, often before
                                        the surrounding mountains are fully
                                        illuminated.
                                    </p>

                                    <p>
                                        Above the refuge, there is little
                                        distraction. The mountain becomes the
                                        entire focus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SUMMIT DAY */}
                    <section className="bg-[#F3EBDD] px-6 py-24 text-[#20231F] md:px-10 md:py-32 lg:px-16">
                        <div className="mx-auto max-w-5xl">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#C65A2C]">
                                Summit day
                            </p>

                            <h2 className="mt-7 max-w-4xl font-serif text-5xl leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-7xl">
                                Higher, colder,
                                <br />
                                quieter.
                            </h2>

                            <div className="mt-14 grid gap-10 md:grid-cols-2">
                                <div className="space-y-6 text-sm leading-8 text-[#20231F]/65 md:text-base">
                                    <p>
                                        The summit day begins with a different
                                        kind of concentration. There is no
                                        rushing the mountain. Every movement
                                        has a purpose.
                                    </p>

                                    <p>
                                        Skins provide traction on the climb,
                                        while the terrain gradually becomes
                                        steeper and more exposed. Snow
                                        conditions dictate the line and the
                                        pace.
                                    </p>
                                </div>

                                <div className="space-y-6 text-sm leading-8 text-[#20231F]/65 md:text-base">
                                    <p>
                                        At 4,167 metres, Toubkal is the highest
                                        summit in Morocco and North Africa. But
                                        the number alone does not describe what
                                        it feels like to stand there in winter.
                                    </p>

                                    <p>
                                        The air is thin. The landscape is vast.
                                        On a clear day, the High Atlas stretches
                                        away beneath the summit ridge.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-16 border-t border-[#20231F]/15 pt-8">
                                <p className="font-serif text-2xl leading-tight tracking-[-0.02em] md:text-3xl">
                                    “The summit is only one moment of the
                                    journey. The mountain begins long before
                                    you reach it.”
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* DESCENT */}
                    <section className="px-6 py-24 md:px-10 md:py-32 lg:px-16">
                        <div className="mx-auto max-w-7xl">
                            <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                                <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/6]">
                                    <Image
                                        src="/images/ski/radouane-ski-descent-tizi-mazik.jpeg"
                                        alt="Skier descending a snow-covered slope in the Moroccan Atlas"
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 55vw"
                                        className="object-cover"
                                    />
                                </div>

                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">
                                        The descent
                                    </p>

                                    <h2 className="mt-7 font-serif text-5xl leading-[0.92] tracking-[-0.045em] sm:text-6xl">
                                        Then the
                                        <br />
                                        mountain opens.
                                    </h2>

                                    <div className="mt-9 space-y-6 text-sm leading-8 text-white/60 md:text-base">
                                        <p>
                                            After the effort of the climb, the
                                            descent changes everything.
                                        </p>

                                        <p>
                                            The same slopes that demanded
                                            patience on the way up now become
                                            terrain to move through on skis.
                                            The mountain begins to flow.
                                        </p>

                                        <p>
                                            But winter skiing in the Atlas is
                                            never simply about pointing
                                            downhill. Snow conditions can
                                            change from one slope to the next.
                                            The best descent is the one that
                                            matches the mountain on that day.
                                        </p>

                                        <p>
                                            Sometimes that means finding
                                            perfect snow. Sometimes it means
                                            adapting. Either way, the descent
                                            becomes the final chapter of the
                                            summit day.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* REFLECTION */}
                    <section className="border-y border-white/10 bg-[#151815] px-6 py-24 md:px-10 md:py-32 lg:px-16">
                        <div className="mx-auto max-w-4xl text-center">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">
                                A winter perspective
                            </p>

                            <h2 className="mt-7 font-serif text-5xl leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-7xl">
                                A different way
                                <br />
                                to know Toubkal.
                            </h2>

                            <div className="mx-auto mt-12 max-w-3xl space-y-7 text-sm leading-8 text-white/60 md:text-base">
                                <p>
                                    Ski touring gives Toubkal a different
                                    rhythm. The mountain is no longer something
                                    you simply walk towards. You move through
                                    it, read it and respond to it.
                                </p>

                                <p>
                                    Winter also strips the landscape back.
                                    There are fewer people, fewer distractions
                                    and a greater sense of space.
                                </p>

                                <p>
                                    That is what stays with you. Not only the
                                    summit, but the quiet of the morning, the
                                    texture of the snow, the changing light
                                    and the feeling of moving through one of
                                    Morocco&apos;s great mountain landscapes.
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
                                        Toubkal is one expression of winter in
                                        the High Atlas. Beyond the summit, the
                                        mountains open into high passes,
                                        remote valleys, natural couloirs and
                                        longer ski journeys.
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
                                {/* MGOUN STORY */}
                                <Link
                                    href="/journal/ski-touring-mgoun"
                                    className="group relative min-h-[500px] overflow-hidden"
                                >
                                    <Image
                                        src="/images/ski/ski-descent-bouignouane.jpeg"
                                        alt="Ski descent in the High Atlas"
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
                                            A Descent in the
                                            <br />
                                            High Mountains of Mgoun
                                        </h3>

                                        <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/70">
                                            Read story →
                                        </p>
                                    </div>
                                </Link>

                                {/* SKI TOURING HUB */}
                                <Link
                                    href="/ski-touring"
                                    className="group relative min-h-[500px] overflow-hidden border border-white/10 bg-[#151815]"
                                >
                                    <Image
                                        src="/images/ski/radouane-couloir-skis-on-pack.jpeg"
                                        alt="Skis prepared for ski mountaineering in the Moroccan High Atlas"
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
                                href="/journal"
                                className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/50 transition hover:text-[#E56A2E]"
                            >
                                ← Journal index
                            </Link>

                            <Link
                                href="/journal"
                                className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#E56A2E] transition hover:text-white"
                            >
                                The Atlas Journal
                            </Link>

                            <Link
                                href="/journal/ski-touring-mgoun"
                                className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/50 transition hover:text-[#E56A2E]"
                            >
                                Next story →
                            </Link>
                        </div>
                    </section>
                </article>
            </main>

            <SiteFooter />
        </>
    );
}