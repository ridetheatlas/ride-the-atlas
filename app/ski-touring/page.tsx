import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

const sectionLinks = [
    { label: "Atlas in winter", href: "#atlas-in-winter" },
    { label: "Where we ski", href: "#where-we-ski" },
    { label: "Winter tradition", href: "#winter-tradition" },
    { label: "My story", href: "#my-story" },
    { label: "Terrain", href: "#terrain" },
    { label: "Expeditions", href: "#expeditions" },
    { label: "FAQ", href: "#faq" },
];

const mountainAreas = [
    {
        number: "01",
        category: "High Atlas · Ski mountaineering",
        title: "Toubkal Massif",
        description:
            "High-altitude objectives around Morocco's highest summit, with approaches through the Toubkal massif and terrain shaped by the conditions of the day.",
        tags: ["4,167 m", "Summits", "High passes"],
        image: "/images/ski/skiers-on-toubkal-summit.jpeg",
        alt: "Skiers on a summit in the Moroccan High Atlas",
    },
    {
        number: "02",
        category: "High Atlas · Remote touring",
        title: "Tachedirt & Likemt",
        description:
            "Quieter valleys, high passes and demanding winter objectives around Tachedirt, Likemt and Bouignouane.",
        tags: ["Tizi Likemt", "Bouignouane", "Couloirs"],
        image: "/images/ski/ski-descent-bouignouane.jpeg",
        alt: "Ski descent in the Bouignouane area of the High Atlas",
    },
    {
        number: "03",
        category: "High Atlas · Technical terrain",
        title: "Tazaghart",
        description:
            "Steeper terrain, natural couloirs and challenging ski-mountaineering objectives for experienced teams when conditions allow.",
        tags: ["Couloirs", "Steep slopes", "Advanced"],
        image: "/images/ski/radouane-couloir-skis-on-pack.jpeg",
        alt: "Ski equipment carried for a couloir objective in the High Atlas",
    },
    {
        number: "04",
        category: "Central High Atlas · Expedition",
        title: "M'Goun Massif",
        description:
            "Remote valleys, broad winter landscapes and high ridges suited to longer ski journeys away from the busiest routes.",
        tags: ["Remote valleys", "High ridges", "Multi-day"],
        image: "/images/ski/ski-descent-bouignouane.jpeg",
        alt: "Winter mountain terrain in the Moroccan Atlas",
    },
    {
        number: "05",
        category: "Middle Atlas · Winter exploration",
        title: "Bouiblane",
        description:
            "A lesser-known winter mountain area offering quieter terrain when snow coverage and mountain conditions align.",
        tags: ["Winter exploration", "Quiet terrain", "Conditions-led"],
        image: "/images/ski/skiers-close-to-bouignouane-summit.jpeg",
        alt: "Skiers approaching a summit in the Atlas Mountains",
    },
    {
        number: "06",
        category: "Atlas Mountains · Traverse",
        title: "Erdouz Traverse",
        description:
            "A longer ski journey linking changing terrain, high passes and remote Atlas landscapes.",
        tags: ["Traverse", "High passes", "Exploration"],
        image: "/images/ski/radouane-ski-descent-tizi-mazik.jpeg",
        alt: "Ski touring descent in the Moroccan High Atlas",
    },
];

const terrainCards = [
    {
        number: "01",
        title: "High passes",
        label: "Ascent",
        description:
            "Long climbs through winter valleys toward high passes and mountain crossings.",
        tags: ["Skinning", "Navigation", "Endurance"],
        image: "/images/ski/skiers-close-to-bouignouane-summit.jpeg",
        alt: "Skiers approaching a high mountain summit",
    },
    {
        number: "02",
        title: "Summit objectives",
        label: "Objective",
        description:
            "High summits such as Toubkal and other Atlas objectives, where ascent and descent become one continuous mountain journey.",
        tags: ["Altitude", "Exposure", "Descent"],
        image: "/images/ski/skiers-on-toubkal-summit.jpeg",
        alt: "Skiers on a summit in the High Atlas",
    },
    {
        number: "03",
        title: "Natural couloirs",
        label: "Technical",
        description:
            "Steeper lines and natural couloirs for experienced skiers when snow stability and conditions allow.",
        tags: ["Steep", "Technical", "Advanced"],
        image: "/images/ski/radouane-couloir-skis-on-pack.jpeg",
        alt: "Ski touring equipment prepared for technical mountain terrain",
    },
    {
        number: "04",
        title: "Long descents",
        label: "The reward",
        description:
            "When conditions align, the reward is a continuous descent through changing snow, terrain and altitude.",
        tags: ["Flow", "Terrain", "Earned"],
        image: "/images/ski/radouane-ski-descent-tizi-mazik.jpeg",
        alt: "Ski descent in the Moroccan High Atlas",
    },
];

const expeditions = [
    {
        number: "01",
        type: "High Atlas · 8 day expedition",
        title: "Toubkal & Tachedirt",
        level: "Intermediate",
        terrain: "Ski mountaineering",
        description:
            "An eight-day journey linking the Tachedirt and Toubkal areas through high passes, summit objectives and long winter descents.",
        image: "/images/ski/radouane-ski-descent-tizi-mazik.jpeg",
        alt: "Ski touring descent in the Toubkal area",
        href: "/ski-touring/tachedirt-toubkal",
    },
    {
        number: "02",
        type: "Technical · 8 day expedition",
        title: "Tazaghart Traverse",
        level: "Advanced",
        terrain: "Couloirs",
        description:
            "An advanced traverse through Tazaghart and the Toubkal region, combining steep terrain, high passes and technical couloir objectives.",
        image: "/images/ski/radouane-couloir-skis-on-pack.jpeg",
        alt: "Ski equipment prepared for a technical couloir objective",
        href: "/ski-touring/high-route-couloirs",
    },
    {
        number: "03",
        type: "Expedition · 8 day journey",
        title: "M'Goun Ski Expedition",
        level: "Intermediate",
        terrain: "Remote",
        description:
            "An exploratory journey into the M'Goun Massif, linking remote valleys, high ridges and expansive winter terrain away from the busiest routes.",
        image: "/images/ski/ski-descent-bouignouane.jpeg",
        alt: "Ski touring in remote Atlas mountain terrain",
        href: "/ski-touring/mgoun",
    },
];

const faqs = [
    {
        question: "When is the best time for ski touring in Morocco?",
        answer:
            "Ski touring depends on snowfall, snow coverage, temperature and weather. The suitable period and objectives can vary from one winter to another, so the final plan should be discussed in relation to current mountain conditions.",
    },
    {
        question: "Where do you ski tour in Morocco?",
        answer:
            "The main areas described here include the Toubkal Massif, Tachedirt, Likemt, Bouignouane, Tazaghart, M'Goun, Bouiblane and Erdouz. The choice of terrain depends on the objective, the team and the conditions.",
    },
    {
        question: "Do I need previous ski touring experience?",
        answer:
            "The experience required depends on the expedition. The Tazaghart traverse is presented for advanced skiers, while the Toubkal and Tachedirt and M'Goun journeys are described as intermediate. Get in touch to discuss your actual touring and skiing experience before choosing.",
    },
    {
        question: "What level of fitness is required?",
        answer:
            "Ski touring involves climbing under your own power, often at altitude and over demanding mountain terrain. Your fitness should match the length, elevation and technical character of the chosen objective. We can discuss the expedition that best fits your experience.",
    },
    {
        question: "What equipment do I need?",
        answer:
            "The equipment required depends on the route and conditions, including the touring setup and appropriate mountain safety equipment. Contact us before your trip so the equipment list can be matched to the planned objective.",
    },
    {
        question: "Are the routes fixed?",
        answer:
            "No. Ski touring objectives in the Atlas are conditions-dependent. Snow coverage, temperature, avalanche risk, weather, visibility and terrain all influence which routes are suitable. The final objective may change to match the mountain on the day.",
    },
    {
        question: "What happens if conditions are poor?",
        answer:
            "The mountain comes first. If snowpack, weather, visibility or other conditions do not support the planned objective, the route may change. A particular summit or descent is never the priority over choosing appropriate terrain for the conditions and team.",
    },
    {
        question: "How do I choose the right expedition?",
        answer:
            "Start with your ski touring experience, fitness, preferred terrain and the kind of journey you want. The expedition descriptions offer a starting point; contact us to discuss your experience, dates and current mountain conditions.",
    },
];

export default function SkiTouringPage() {
    return (
        <>
            <SiteHeader />

            <main className="bg-black text-white">
                {/* SKI TOURING HERO */}
                <section className="relative isolate min-h-[760px] overflow-hidden bg-[#17212A] text-[#F3EBDD] lg:min-h-[850px]">
                    <Image
                        src="/images/ski/radouane-ski-descent-tizi-mazik.jpeg"
                        alt="Radouane skiing in the High Atlas Mountains"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />

                    {/* Subtle overlays */}
                    <div className="absolute inset-0 bg-[#101820]/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#101820]/80 via-[#101820]/35 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/45 via-transparent to-[#101820]/15" />

                    {/* Top line */}
                    <div className="absolute left-6 right-6 top-28 z-10 flex items-center justify-between md:left-12 md:right-12">
                        <div className="flex items-center gap-5">
                            <span className="text-[10px] uppercase tracking-[0.35em] text-white/90">
                                Ride The Atlas
                            </span>
                            <span className="h-px w-12 bg-[#E56A2E]" />
                        </div>

                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/80">
                            Morocco / High Atlas
                        </span>
                    </div>

                    {/* Main content */}
                    <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1600px] items-center px-6 pb-16 pt-44 md:px-12 lg:min-h-[850px]">
                        <div className="max-w-2xl">
                            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#E56A2E]">
                                01 / Winter in Morocco
                            </p>

                            <h1 className="font-serif text-7xl font-normal leading-[0.82] tracking-[-0.055em] sm:text-8xl md:text-9xl lg:text-[10rem]">
                                Ski
                                <br />
                                Touring
                            </h1>

                            <p className="mt-10 max-w-md text-sm leading-6 text-white/85 md:text-base">
                                High-altitude journeys across the Atlas Mountains.
                            </p>

                            <Link
                                href="#expeditions"
                                className="group mt-10 inline-flex items-center gap-6"
                            >
                                <span className="grid h-12 w-12 place-items-center rounded-full border border-[#E56A2E] text-xl transition-colors group-hover:bg-[#E56A2E] group-hover:text-[#17212A]">
                                    →
                                </span>
                                <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-white">
                                    Explore expeditions
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* SECTION NAVIGATION */}
                <nav className="sticky top-0 z-40 border-y border-white/10 bg-black/95 backdrop-blur-md">
                    <div className="mx-auto flex max-w-7xl items-center gap-7 overflow-x-auto px-6 py-4 md:px-10 lg:px-14">
                        <span className="shrink-0 text-[8px] font-semibold uppercase tracking-[0.3em] text-[#E56A2E]">
                            Ski / 01
                        </span>
                        {sectionLinks.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="shrink-0 text-[8px] font-semibold uppercase tracking-[0.22em] text-white/50 transition-colors hover:text-white"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </nav>

                {/* ATLAS IN WINTER */}
                <section
                    id="atlas-in-winter"
                    className="scroll-mt-20 px-6 py-24 md:px-10 md:py-32 lg:px-14"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
                            <div className="pt-2">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">
                                    02 / Mountain environment
                                </p>
                                <p className="mt-5 max-w-[180px] text-[9px] uppercase leading-6 tracking-[0.2em] text-white/35">
                                    High Atlas Mountains
                                    <br />
                                    Winter ski terrain
                                </p>
                            </div>

                            <div>
                                <h2 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.88] tracking-[-0.055em] text-white sm:text-5xl md:text-6xl lg:text-[5.8rem]">
                                    The Atlas
                                    <br />
                                    in winter.
                                </h2>
                                <p className="mt-8 max-w-3xl text-sm leading-7 text-white/60 md:text-base md:leading-8">
                                    In winter, the Atlas becomes a completely different
                                    mountain environment — shaped by altitude, snowfall,
                                    temperature and terrain.
                                </p>
                                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/60 md:text-base md:leading-8">
                                    Ski touring in Morocco means climbing the mountain under
                                    your own power and choosing the descent according to the
                                    conditions. There are no prepared pistes guiding the experience.
                                </p>
                                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/60 md:text-base md:leading-8">
                                    From the high terrain of the Toubkal Massif to the valleys
                                    around Tachedirt, Likemt and Bouignouane, the Atlas offers
                                    a wide range of winter objectives. Further into the range,
                                    Tazaghart, M&apos;Goun, Bouiblane and Erdouz open the door
                                    to longer, quieter and more exploratory ski journeys.
                                </p>

                                <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/15 pt-7 sm:grid-cols-3">
                                    <div>
                                        <p className="text-[8px] uppercase tracking-[0.3em] text-white/40">
                                            Highest point
                                        </p>
                                        <p className="mt-3 text-3xl font-semibold tracking-tight">
                                            4,167 <span className="text-sm text-white/45">m</span>
                                        </p>
                                        <p className="mt-1 text-[8px] uppercase tracking-[0.25em] text-white/40">
                                            Toubkal
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-[8px] uppercase tracking-[0.3em] text-white/40">
                                            Region
                                        </p>
                                        <p className="mt-3 text-2xl font-semibold tracking-tight">
                                            High Atlas
                                        </p>
                                        <p className="mt-1 text-[8px] uppercase tracking-[0.25em] text-white/40">
                                            Morocco
                                        </p>
                                    </div>
                                    <div className="col-span-2 sm:col-span-1">
                                        <p className="text-[8px] uppercase tracking-[0.3em] text-white/40">
                                            Terrain
                                        </p>
                                        <p className="mt-3 text-2xl font-semibold tracking-tight">
                                            Alpine
                                        </p>
                                        <p className="mt-1 text-[8px] uppercase tracking-[0.25em] text-white/40">
                                            Conditions-led
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-20 grid gap-px bg-white/10 md:grid-cols-3">
                            {[
                                {
                                    number: "01",
                                    title: "Earn your turns",
                                    description:
                                        "Touring skis take us beyond conventional ski areas, allowing long approaches toward high passes, ridges and summit objectives.",
                                    tags: "Skin · Climb · Transition",
                                },
                                {
                                    number: "02",
                                    title: "Read the snow",
                                    description:
                                        "Open slopes, high passes, ridges and natural couloirs create different objectives as snow coverage, stability and weather change.",
                                    tags: "Snow · Aspect · Stability",
                                },
                                {
                                    number: "03",
                                    title: "Beyond the resort",
                                    description:
                                        "Much of the Atlas experience lies away from ski infrastructure, in quiet valleys and remote mountain terrain.",
                                    tags: "Remote · Wild · Alpine",
                                },
                            ].map((item) => (
                                <div key={item.number} className="bg-black p-7 md:p-9">
                                    <p className="text-[9px] font-semibold tracking-[0.3em] text-[#E56A2E]">
                                        {item.number}
                                    </p>
                                    <h3 className="mt-8 text-2xl font-semibold uppercase tracking-[-0.04em]">
                                        {item.title}
                                    </h3>
                                    <p className="mt-5 min-h-[96px] text-xs leading-6 text-white/50">
                                        {item.description}
                                    </p>
                                    <p className="mt-7 border-t border-white/10 pt-5 text-[8px] uppercase tracking-[0.22em] text-white/35">
                                        {item.tags}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHERE WE SKI */}
                <section
                    id="where-we-ski"
                    className="scroll-mt-20 bg-[#F3EBDD] px-6 py-24 text-[#20231F] md:px-10 md:py-32 lg:px-14"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#C65A2C]">
                                    03 / The mountains
                                </p>
                                <p className="mt-5 max-w-[180px] text-[9px] uppercase leading-6 tracking-[0.2em] text-[#20231F]/45">
                                    Six landscapes
                                    <br />
                                    One winter range
                                </p>
                            </div>
                            <div>
                                <h2 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.88] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-[5.5rem]">
                                    Where
                                    <br />
                                    we ski.
                                </h2>
                                <p className="mt-7 max-w-2xl text-sm leading-7 text-[#20231F]/65 md:text-base md:leading-8">
                                    The Atlas is not one mountain. It is a network of ranges,
                                    valleys, passes and summits — each revealing a different
                                    side of winter.
                                </p>
                                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#20231F]/65 md:text-base md:leading-8">
                                    We choose the terrain according to the objective, snow
                                    conditions, experience of the team and the type of ski
                                    journey you are looking for.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {mountainAreas.map((area) => (
                                <article
                                    key={area.number}
                                    className="group border border-[#20231F]/15"
                                >
                                    <div className="relative aspect-[4/3] overflow-hidden bg-[#20231F]/10">
                                        <Image
                                            src={area.image}
                                            alt={area.alt}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                                        <span className="absolute left-5 top-5 text-[9px] font-semibold tracking-[0.3em] text-white">
                                            {area.number}
                                        </span>
                                    </div>
                                    <div className="p-6 md:p-7">
                                        <p className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#C65A2C]">
                                            {area.category}
                                        </p>
                                        <h3 className="mt-4 text-2xl font-semibold uppercase leading-[0.95] tracking-[-0.04em]">
                                            {area.title}
                                        </h3>
                                        <p className="mt-4 min-h-[96px] text-xs leading-6 text-[#20231F]/65">
                                            {area.description}
                                        </p>
                                        <div className="mt-6 flex flex-wrap gap-2 border-t border-[#20231F]/15 pt-5">
                                            {area.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="border border-[#20231F]/20 px-3 py-2 text-[7px] font-semibold uppercase tracking-[0.18em] text-[#20231F]/65"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="mt-14 grid gap-6 border-t border-[#20231F]/20 pt-8 md:grid-cols-[0.7fr_1.3fr]">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C65A2C]">
                                Field note / Conditions
                            </p>
                            <div>
                                <h3 className="text-2xl font-semibold uppercase tracking-[-0.04em]">
                                    Mountain first.
                                    <br />
                                    Route second.
                                </h3>
                                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#20231F]/65">
                                    Ski touring objectives in Morocco are conditions-dependent.
                                    Snow coverage, temperature, avalanche risk, weather,
                                    visibility and terrain determine which routes are suitable.
                                    The final objective may change to match the mountain on the day.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* WINTER TRADITION */}
                <section
                    id="winter-tradition"
                    className="scroll-mt-20 px-6 py-24 md:px-10 md:py-32 lg:px-14"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">
                                    04 / A winter tradition
                                </p>
                                <p className="mt-5 max-w-[180px] text-[9px] uppercase leading-6 tracking-[0.2em] text-white/35">
                                    Oukaïmeden
                                    <br />
                                    High Atlas
                                </p>
                            </div>
                            <div>
                                <h2 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.88] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-[5.5rem]">
                                    Skiing
                                    <br />
                                    has history.
                                </h2>
                                <p className="mt-8 max-w-3xl text-sm leading-7 text-white/60 md:text-base md:leading-8">
                                    Long before modern ski touring became a niche mountain
                                    sport, winter mountaineers were already exploring the
                                    snow-covered Atlas.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
                            <div className="relative min-h-[360px] overflow-hidden md:min-h-[520px]">
                                <Image
                                    src="/images/ski/radouane-on-skis.jpeg"
                                    alt="Skier in the Moroccan High Atlas"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6">
                                    <p className="text-[8px] uppercase tracking-[0.3em] text-white/60">
                                        Atlas winter / Ski heritage
                                    </p>
                                    <p className="mt-2 text-lg font-semibold uppercase tracking-[-0.02em]">
                                        A mountain before us.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between border border-white/15 p-7 md:p-10">
                                <div>
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#E56A2E]">
                                        The Atlas winter archive
                                    </p>
                                    <h3 className="mt-6 text-3xl font-semibold uppercase leading-[0.95] tracking-[-0.045em] md:text-4xl">
                                        The mountains
                                        <br />
                                        were already
                                        <br />
                                        being skied.
                                    </h3>
                                    <p className="mt-7 text-sm leading-7 text-white/55">
                                        Skiing in the Atlas has a history that reaches back
                                        generations. European alpinists, particularly from
                                        France, began exploring the High Atlas in the early
                                        twentieth century, bringing alpine techniques and
                                        winter exploration into the mountains.
                                    </p>
                                    <p className="mt-5 text-sm leading-7 text-white/55">
                                        The Toubkal Refuge became an important base for
                                        mountaineers moving through the massif, and skiing
                                        gradually became part of the winter mountain culture
                                        around Toubkal and Oukaïmeden.
                                    </p>
                                    <p className="mt-5 text-sm leading-7 text-white/55">
                                        Moroccan mountain guides were part of this story too.
                                        Knowledge, techniques and experience were passed from
                                        one generation to another, through local experience,
                                        contact with visiting alpinists and opportunities for
                                        mountain training abroad.
                                    </p>
                                </div>

                                <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/15 pt-6">
                                    <div>
                                        <p className="text-xl font-semibold text-[#E56A2E]">1930s</p>
                                        <p className="mt-2 text-[8px] uppercase leading-5 tracking-[0.15em] text-white/45">
                                            Early alpine exploration
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-semibold text-[#E56A2E]">1966</p>
                                        <p className="mt-2 text-[8px] uppercase leading-5 tracking-[0.15em] text-white/45">
                                            Winter archive
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xl font-semibold text-[#E56A2E]">Today</p>
                                        <p className="mt-2 text-[8px] uppercase leading-5 tracking-[0.15em] text-white/45">
                                            A new generation
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-14 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-[0.7fr_1.3fr]">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#E56A2E]">
                                The mountain community
                            </p>
                            <div>
                                <h3 className="text-2xl font-semibold uppercase tracking-[-0.04em]">
                                    Passed on.
                                </h3>
                                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/55">
                                    The history of skiing in the Atlas is not only a story of
                                    visiting alpinists. Moroccan mountain guides, muleteers
                                    and local communities have supported access to the high
                                    mountains for generations, while some guides developed
                                    their own alpine and ski skills through contact with
                                    international mountaineering communities and training
                                    opportunities.
                                </p>
                                <div className="mt-7 flex flex-wrap gap-3">
                                    {["Mountain guides", "Local knowledge", "Alpine exchange", "Next generation"].map(
                                        (tag) => (
                                            <span
                                                key={tag}
                                                className="border border-white/20 px-4 py-3 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/55"
                                            >
                                                {tag}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* MY STORY */}
                <section
                    id="my-story"
                    className="scroll-mt-20 bg-[#20231F] px-6 py-24 md:px-10 md:py-32 lg:px-14"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">
                                    05 / The story
                                </p>
                                <p className="mt-5 max-w-[180px] text-[9px] uppercase leading-6 tracking-[0.2em] text-white/40">
                                    Ski with Radouane
                                    <br />
                                    Atlas / Winter
                                </p>
                            </div>
                            <div>
                                <h2 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.88] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-[5.5rem]">
                                    Before the
                                    <br />
                                    touring skis.
                                </h2>
                                <p className="mt-8 max-w-3xl text-lg leading-8 text-white/75 md:text-xl md:leading-9">
                                    “I didn&apos;t grow up with ski touring equipment. I grew
                                    up watching people ski the mountains — and wanting to try.”
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                            <div className="relative min-h-[440px] overflow-hidden">
                                <Image
                                    src="/images/ski/radouane-on-skis.jpeg"
                                    alt="Radouane on skis in the Moroccan Atlas"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 45vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                                <div className="absolute bottom-6 left-6">
                                    <p className="text-[8px] uppercase tracking-[0.3em] text-white/65">
                                        A personal journey
                                    </p>
                                    <p className="mt-2 text-xl font-semibold uppercase">
                                        Carry the skis.
                                        <br />
                                        Climb the mountain.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center">
                                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#E56A2E]">
                                    From carrying skis to skiing the Atlas
                                </p>
                                <h3 className="mt-5 text-3xl font-semibold uppercase leading-[0.95] tracking-[-0.045em] md:text-4xl">
                                    First came
                                    <br />
                                    the curiosity.
                                </h3>
                                <p className="mt-7 text-sm leading-7 text-white/60">
                                    I learned and practised skiing on my own, little by little.
                                    Before I had proper ski touring equipment, I would
                                    sometimes carry skis uphill for hours just to get a chance
                                    to ski back down.
                                </p>
                                <p className="mt-5 text-sm leading-7 text-white/60">
                                    I also spent time skiing at Oukaïmeden — around fifteen
                                    times before the resort eventually closed. But I became
                                    especially fascinated by something beyond the pistes.
                                </p>
                                <p className="mt-5 text-sm leading-7 text-white/60">
                                    I would see ski tourers from Europe arriving in the Atlas,
                                    climbing with their skis and heading into the mountains.
                                    I watched them, asked questions, and sometimes asked for
                                    a chance to try.
                                </p>
                                <p className="mt-5 text-sm leading-7 text-white/60">
                                    With time, I got access to touring skis and equipment and
                                    was able to practise more. The climbs became longer, the
                                    terrain more interesting, and skiing in the mountains
                                    became something I wanted to keep learning.
                                </p>

                                <div className="mt-10 grid grid-cols-2 gap-5 border-t border-white/15 pt-7 sm:grid-cols-4">
                                    {[
                                        ["01", "Watch"],
                                        ["02", "Carry"],
                                        ["03", "Practise"],
                                        ["04", "Explore"],
                                    ].map(([number, title]) => (
                                        <div key={number}>
                                            <p className="text-[9px] font-semibold tracking-[0.3em] text-[#E56A2E]">
                                                {number}
                                            </p>
                                            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.05em]">
                                                {title}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="mt-20 grid gap-10 border-t border-white/15 pt-10 lg:grid-cols-[0.8fr_1.2fr]">
                            <div>
                                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#E56A2E]">
                                    A dream
                                </p>
                                <h3 className="mt-5 text-3xl font-semibold uppercase leading-[0.95] tracking-[-0.045em] md:text-4xl">
                                    One day,
                                    <br />
                                    Switzerland.
                                </h3>
                            </div>
                            <div>
                                <p className="text-sm leading-7 text-white/60">
                                    Becoming a ski instructor in Switzerland has always been
                                    a dream of mine. I have never been there, and I have never
                                    worked as a ski instructor. It is simply a dream that has
                                    stayed with me.
                                </p>
                                <p className="mt-5 text-sm leading-7 text-white/60">
                                    For now, my mountains are here. I continue to learn,
                                    practise and explore in Morocco — and to share the Atlas
                                    with people who want to discover it on skis.
                                </p>
                                <p className="mt-8 border-l border-[#E56A2E] pl-5 text-sm font-medium leading-7 text-white/80">
                                    No perfect beginning.
                                    <br />
                                    No fixed path.
                                    <br />
                                    Just a love for the mountains.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TERRAIN & TECHNIQUE */}
                <section
                    id="terrain"
                    className="scroll-mt-20 px-6 py-24 md:px-10 md:py-32 lg:px-14"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">
                                    06 / Terrain & technique
                                </p>
                            </div>
                            <div>
                                <h2 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.88] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-[5.5rem]">
                                    Earn
                                    <br />
                                    the descent.
                                </h2>
                                <p className="mt-8 max-w-3xl text-sm leading-7 text-white/60 md:text-base md:leading-8">
                                    Ski touring in the Atlas is about moving through mountain
                                    terrain — climbing first, reading the snow, then choosing
                                    the descent.
                                </p>
                                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/60 md:text-base md:leading-8">
                                    The terrain changes constantly with altitude, aspect,
                                    snowfall and weather. A single day can move from a gentle
                                    approach to a high pass, summit ridge or technical couloir.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 grid gap-5 md:grid-cols-2">
                            {terrainCards.map((card) => (
                                <article
                                    key={card.number}
                                    className="group grid overflow-hidden border border-white/15 sm:grid-cols-[0.9fr_1.1fr]"
                                >
                                    <div className="relative min-h-[260px] overflow-hidden">
                                        <Image
                                            src={card.image}
                                            alt={card.alt}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-between p-6 md:p-7">
                                        <div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#E56A2E]">
                                                    {card.number} / {card.label}
                                                </p>
                                                <span className="text-xs text-white/35">↗</span>
                                            </div>
                                            <h3 className="mt-6 text-2xl font-semibold uppercase leading-[0.95] tracking-[-0.04em]">
                                                {card.title}
                                            </h3>
                                            <p className="mt-4 text-xs leading-6 text-white/50">
                                                {card.description}
                                            </p>
                                        </div>
                                        <div className="mt-7 flex flex-wrap gap-2 border-t border-white/15 pt-5">
                                            {card.tags.map((tag) => (
                                                <span
                                                    key={tag}
                                                    className="text-[7px] font-semibold uppercase tracking-[0.2em] text-white/40"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="mt-14 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-[0.7fr_1.3fr]">
                            <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#E56A2E]">
                                Ski philosophy / No fixed line
                            </p>
                            <div>
                                <h3 className="text-2xl font-semibold uppercase tracking-[-0.04em]">
                                    Choose the line.
                                    <br />
                                    Read the mountain.
                                </h3>
                                <p className="mt-5 max-w-3xl text-sm leading-7 text-white/55">
                                    We do not approach the Atlas with a predetermined descent
                                    at all costs. The mountain decides. Snowpack, aspect, wind,
                                    temperature, visibility and the ability of the team
                                    determine which terrain is appropriate on the day.
                                </p>
                                <div className="mt-7 flex flex-wrap gap-3">
                                    {["Snowpack", "Exposure", "Weather", "Mountain judgment"].map(
                                        (tag) => (
                                            <span
                                                key={tag}
                                                className="border border-white/20 px-4 py-3 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/50"
                                            >
                                                {tag}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* EXPEDITIONS */}
                <section
                    id="expeditions"
                    className="scroll-mt-20 bg-[#F3EBDD] px-6 py-24 text-[#20231F] md:px-10 md:py-32 lg:px-14"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#C65A2C]">
                                    07 / Ski expeditions
                                </p>
                                <p className="mt-5 max-w-[180px] text-[9px] uppercase leading-6 tracking-[0.2em] text-[#20231F]/45">
                                    High Atlas
                                    <br />
                                    Morocco
                                </p>
                            </div>
                            <div>
                                <h2 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.88] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-[5.5rem]">
                                    Choose your
                                    <br />
                                    expedition.
                                </h2>
                                <p className="mt-7 max-w-2xl text-sm leading-7 text-[#20231F]/65 md:text-base md:leading-8">
                                    Three different ways to experience the winter Atlas —
                                    from classic high-altitude objectives to technical
                                    couloirs and remote ski expeditions.
                                </p>
                                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#20231F]/65 md:text-base md:leading-8">
                                    Each itinerary is shaped by terrain, snow conditions,
                                    weather and the experience of the team. Routes may evolve
                                    with the mountain.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 grid gap-5 lg:grid-cols-3">
                            {expeditions.map((trip) => (
                                <Link
                                    key={trip.number}
                                    href={trip.href}
                                    className="group block border border-[#20231F]/20"
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden">
                                        <Image
                                            src={trip.image}
                                            alt={trip.alt}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                                        <p className="absolute left-6 top-6 text-[8px] font-semibold uppercase tracking-[0.3em] text-white">
                                            {trip.number} / {trip.type}
                                        </p>
                                        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                                            <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-[#F3EBDD]">
                                                {trip.level}
                                            </p>
                                            <h3 className="mt-4 text-3xl font-semibold uppercase leading-[0.9] tracking-[-0.045em] text-white md:text-4xl">
                                                {trip.title}
                                            </h3>
                                            <div className="mt-6 flex items-center justify-between border-t border-white/25 pt-5">
                                                <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-white/60">
                                                    {trip.terrain}
                                                </span>
                                                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/45 text-lg text-white transition-all group-hover:border-[#E56A2E] group-hover:bg-[#E56A2E] group-hover:text-black">
                                                    ↗
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 md:p-7">
                                        <p className="min-h-[96px] text-xs leading-6 text-[#20231F]/65">
                                            {trip.description}
                                        </p>
                                        <p className="mt-5 border-t border-[#20231F]/15 pt-5 text-[8px] font-semibold uppercase tracking-[0.25em] text-[#C65A2C] transition-colors group-hover:text-[#20231F]">
                                            View expedition <span className="ml-2">→</span>
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        <div className="mt-16 grid gap-8 border-t border-[#20231F]/20 pt-9 md:grid-cols-[1fr_auto] md:items-end">
                            <div>
                                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#C65A2C]">
                                    Private & custom
                                </p>
                                <h3 className="mt-5 text-3xl font-semibold uppercase leading-[0.95] tracking-[-0.045em] md:text-4xl">
                                    Your mountain.
                                    <br />
                                    Your route.
                                </h3>
                                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#20231F]/65">
                                    Looking for another summit, a longer traverse or a private
                                    ski-mountaineering objective? We can discuss an expedition
                                    around your experience, dates, objectives and current
                                    mountain conditions.
                                </p>
                            </div>
                            <Link
                                href="/contact"
                                className="group inline-flex items-center justify-between gap-12 bg-[#20231F] px-7 py-5 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#F3EBDD] transition-colors hover:bg-[#E56A2E] hover:text-black"
                            >
                                Contact us
                                <span className="text-lg transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section
                    id="faq"
                    className="scroll-mt-20 px-6 py-24 md:px-10 md:py-32 lg:px-14"
                >
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">
                                08 / Ski touring Morocco
                            </p>
                            <h2 className="mt-7 text-4xl font-semibold uppercase leading-[0.88] tracking-[-0.055em] sm:text-5xl md:text-6xl">
                                Frequently
                                <br />
                                asked
                                <br />
                                questions.
                            </h2>
                            <p className="mt-7 max-w-sm text-sm leading-7 text-white/50">
                                Planning a ski touring expedition in the High Atlas? Here
                                are answers to some of the questions we receive most often.
                            </p>
                            <Link
                                href="/contact"
                                className="mt-9 inline-flex items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-[#E56A2E] transition-colors hover:text-white"
                            >
                                Ask us a question
                                <span className="text-base">→</span>
                            </Link>
                        </div>

                        <div className="border-t border-white/20">
                            {faqs.map((faq, index) => (
                                <details
                                    key={faq.question}
                                    className="group border-b border-white/20"
                                >
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 marker:hidden">
                                        <span className="flex items-start gap-5">
                                            <span className="pt-1 text-[8px] font-semibold tracking-[0.25em] text-[#E56A2E]">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <span className="text-sm font-medium leading-6 text-white/85 md:text-base">
                                                {faq.question}
                                            </span>
                                        </span>
                                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/25 text-sm text-white/70 transition-all group-open:rotate-45 group-open:border-[#E56A2E] group-open:bg-[#E56A2E] group-open:text-black">
                                            +
                                        </span>
                                    </summary>
                                    <div className="pb-7 pl-10 pr-12">
                                        <p className="max-w-2xl text-xs leading-7 text-white/50 md:text-sm">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="px-6 pb-24 md:px-10 md:pb-32 lg:px-14">
                    <div className="mx-auto max-w-7xl">
                        <div className="relative min-h-[520px] overflow-hidden md:min-h-[620px]">
                            <Image
                                src="/images/ski/skiers-on-toubkal-summit.jpeg"
                                alt="Skiers on a summit in the Moroccan High Atlas"
                                fill
                                sizes="100vw"
                                className="object-cover object-center"
                            />
                            <div className="absolute inset-0 bg-black/25" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

                            <div className="absolute inset-x-0 bottom-0 p-7 md:p-12 lg:p-16">
                                <div className="flex max-w-5xl flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
                                    <div>
                                        <div className="flex items-center gap-4">
                                            <span className="h-px w-8 bg-[#E56A2E]" />
                                            <p className="text-[9px] font-semibold uppercase tracking-[0.4em] text-white/75">
                                                Ride The Atlas / Ski touring Morocco
                                            </p>
                                        </div>
                                        <h2 className="mt-6 text-4xl font-semibold uppercase leading-[0.88] tracking-[-0.055em] sm:text-5xl md:text-6xl lg:text-7xl">
                                            Find your line
                                            <br />
                                            through winter.
                                        </h2>
                                    </div>
                                    <p className="max-w-xs text-[9px] uppercase leading-6 tracking-[0.25em] text-white/55 lg:pb-2">
                                        Ski touring.
                                        <br />
                                        High routes &amp; couloirs.
                                        <br />
                                        Moroccan Atlas.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid border-x border-b border-white/15 md:grid-cols-[1fr_auto]">
                            <div className="flex items-center px-6 py-7 md:px-9">
                                <p className="max-w-xl text-xs leading-6 text-white/50 md:text-sm md:leading-7">
                                    Interested in a ski touring journey in the Moroccan
                                    Atlas? Get in touch and let&apos;s talk mountains.
                                </p>
                            </div>
                            <Link
                                href="/contact"
                                className="group flex items-center justify-between gap-10 border-t border-white/15 px-6 py-6 text-[9px] font-semibold uppercase tracking-[0.3em] text-white transition-all duration-300 hover:bg-[#E56A2E] hover:text-black md:border-l md:border-t-0 md:px-9"
                            >
                                <span>Start a conversation</span>
                                <span className="text-lg transition-transform group-hover:translate-x-1">
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <SiteFooter />
        </>
    );
}