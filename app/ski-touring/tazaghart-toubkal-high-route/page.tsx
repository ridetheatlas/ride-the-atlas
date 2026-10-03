import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata = {
    title: "Tazaghart & Toubkal High Route | 8-Day Ski Touring Expedition",
    description:
        "An eight-day ski touring expedition from Tazaghart Refuge to the Toubkal Massif, linking high couloirs, mountain refuges and the summit of Toubkal.",
};

const imagePath = "/images/ski/tazaghart-toubkal";

const navigation = [
    ["Overview", "#overview"],
    ["Highlights", "#highlights"],
    ["Itinerary", "#itinerary"],
    ["Objectives", "#objectives"],
    ["Trip details", "#trip-details"],
    ["Gallery", "#gallery"],
    ["FAQs", "#faqs"],
    ["Enquire", "#enquire"],
];

const facts = [
    ["Duration", "8 days"],
    ["Highest summit", "Toubkal · 4,167 m"],
    ["Mountain refuges", "Tazaghart & Toubkal"],
    ["Discipline", "Ski touring"],
];

const highlights = [
    {
        number: "01",
        title: "Tazaghart Refuge",
        description:
            "Reach the Jacques de Lépiney Refuge at approximately 3,000 m, in the upper Azzadene basin beneath the Tazaghart plateau.",
    },
    {
        number: "02",
        title: "Tsoukkine Couloir",
        description:
            "Climb towards the couloir from the refuge, booting the upper section with skis carried on your pack, then ski back to the refuge.",
    },
    {
        number: "03",
        title: "The central couloir",
        description:
            "Explore another line on the north-east face of the Tazaghart plateau, with terrain described in the source as exposed in places.",
    },
    {
        number: "04",
        title: "Traverse to Toubkal Refuge",
        description:
            "Cross the high terrain via Tizi n’Tadat, a route described in the source as the quickest traverse between the two refuges.",
    },
    {
        number: "05",
        title: "Ras n’Ouanoukrim",
        description:
            "Approach the 4,083 m summit area and its north-east couloir, described as approximately 350 m vertical with an average angle around 35°.",
    },
    {
        number: "06",
        title: "The summit of Toubkal",
        description:
            "Reach the 4,167 m summit of Morocco and North Africa, with the descent route towards Imouzzer and Sidi Chamharouch chosen according to conditions.",
    },
];

type ItineraryDay = {
    day: string;
    title: string;
    subtitle: string;
    altitude: string;
    description: string[];
    ascent?: string;
    descent?: string;
    overnight?: string;
    image?: string;
    imageAlt?: string;
    note?: string;
};

const itinerary: ItineraryDay[] = [
    {
        day: "01",
        title: "Arrival in Marrakech · Transfer to Imlil",
        subtitle: "Airport arrival · Transfer into the High Atlas",
        altitude: "Imlil · approx. 1,700 m",
        description: [
            "Meet on arrival at Marrakech airport and transfer into the High Atlas to Imlil. Settle into the riad, prepare your equipment and get ready for the mountain approach the following day.",
        ],
        overnight: "Imlil",
        image: "tizi-melloul.jpeg",
        imageAlt: "High mountain terrain in the Tazaghart area",
        note: "The transfer time depends on your flight arrival and road conditions.",
    },
    {
        day: "02",
        title: "Imlil to Tazaghart Refuge",
        subtitle: "Approach via Tizi n’Mzic and Azib Tamsoult",
        altitude: "Tazaghart Refuge · approx. 3,000 m",
        description: [
            "Leave Imlil and head towards Tizi n’Mzic and the Tizi Oussem / Azib Tamsoult area before continuing up to Tazaghart Refuge, also known as the Refuge Jacques de Lépiney.",
            "Depending on snow coverage, the approach may be made on foot or with skins. The route crosses steep, exposed terrain below the Irhoulidene waterfalls; the supplied route document recommends removing skis for this section.",
            "Allow approximately five to six hours for the approach, as planned for this itinerary. The exact route and whether skis can be used on the ascent depend on snow and access conditions.",
        ],
        ascent: "Approx. 5–6 hours for the approach",
        overnight: "Tazaghart Refuge",
        image: "amghras-tizi-ntadat.jpeg",
        imageAlt: "High mountain terrain near Tizi n’Tadat",
        note: "The source describes possible mule support to Azib Tamsoult in suitable conditions, with an additional 1½–2 hours for the mule transfer there. This depends on snow and access.",
    },
    {
        day: "03",
        title: "Tsoukkine Couloir",
        subtitle: "Skin towards the couloir · Boot up · Ski back to the refuge",
        altitude: "Tsoukkine Couloir · approx. 400 m vertical",
        description: [
            "From Tazaghart Refuge, climb on skins towards the start of the Tsoukkine Couloir. The upper section is approached on foot, with skis carried on the pack.",
            "Crampons and an ice axe are required for the booting section described in your itinerary. Allow approximately two to three hours to reach the top of the couloir, depending on conditions and the group.",
            "Ski the couloir back down towards Tazaghart Refuge. The supplied route document describes Tsoukkine as a discreet line, partly hidden behind Tsoukkine, with a broad run-out opposite the refuge and a rocky, less snow-covered upper section.",
        ],
        ascent: "Approx. 2–3 hours to the top, as planned",
        descent: "Approx. 400 m vertical",
        overnight: "Tazaghart Refuge",
        image: "radouane-couloir-tsoukkine.jpeg",
        imageAlt: "Ski couloir terrain on Tsoukkine",
        note: "The source gives an approximate couloir angle of 35°. The upper route and snow coverage must be assessed on site.",
    },
    {
        day: "04",
        title: "Tazaghart Central Couloir",
        subtitle: "High couloir day · Return to Tazaghart Refuge",
        altitude: "Tazaghart plateau · approx. 3,800–3,980 m",
        description: [
            "Set out from the refuge towards the central couloir on the north-east face of the Tazaghart plateau. The plateau is described in the supplied document as a high, triangular feature surrounded by steep walls, with several couloirs cut into its north-east face.",
            "The central couloir is described as having two parallel branches, with exposed sections and an approach across a small rocky ridge. The source gives an approximate vertical drop of 600 metres and an angle around 35°.",
            "After the descent, return to Tazaghart Refuge. The exact line and branch will depend on snow coverage, visibility and the assessment of the mountain conditions.",
        ],
        descent: "Approx. 600 m vertical",
        overnight: "Tazaghart Refuge",
        image: "radouane-couloir-diagonal.jpeg",
        imageAlt: "A skier in steep couloir terrain on Tazaghart",
        note: "The supplied route document warns of exposed terrain and possible rockfall in couloir sections. The route should be assessed by a qualified mountain professional.",
    },
    {
        day: "05",
        title: "Tazaghart Refuge to Toubkal Refuge",
        subtitle: "High traverse via Tizi n’Tadat",
        altitude: "Tizi n’Tadat · approx. 3,800 m",
        description: [
            "Leave Tazaghart Refuge and climb towards the Aougdal n’Bouidarene bowl. Continue through the west couloir of Biiguinnoussene to reach the Assif Timellilt cirque, then traverse diagonally uphill towards Tizi n’Tadat.",
            "From the col, descend towards the Assif n’Aït Mizane and continue to Toubkal Refuge for the overnight. The supplied document describes this as the quickest traverse between the two refuges.",
            "The descent is described as steep, beginning towards the left before passing between rock bands and entering the east couloir of Tadat. The couloir is narrow and regular, at approximately 30°.",
        ],
        ascent: "Approx. 800 m",
        descent: "Approx. 600 m",
        overnight: "Toubkal Refuge · approx. 3,200 m",
        image: "radouane-above-couloir-toubkal.jpeg",
        imageAlt: "Ski touring above a couloir in the Toubkal Massif",
        note: "The source gives an approximate duration of four hours for this traverse. The route and descent depend on snow conditions.",
    },
    {
        day: "06",
        title: "Ras n’Ouanoukrim Couloir",
        subtitle: "A high-mountain objective from Toubkal Refuge",
        altitude: "Ras n’Ouanoukrim · 4,083 m",
        description: [
            "From Toubkal Refuge, climb towards Ras n’Ouanoukrim and its north-east couloir. The supplied route document gives approximately 900 metres of ascent and around three and a half hours to climb.",
            "The couloir is described as approximately 350 metres vertical, with an average angle around 35°. It narrows to approximately two metres at its tightest point before widening lower down into the Bou Imrhaz bowl.",
            "Ski the couloir and return to Toubkal Refuge for the overnight. The source suggests April and May for this route, while actual suitability depends on the snowpack and conditions on the day.",
        ],
        ascent: "Approx. 900 m · 3½ hours",
        descent: "Approx. 350 m vertical in the couloir",
        overnight: "Toubkal Refuge",
        image: "ras-ouanoukrim-couloir.jpeg",
        imageAlt: "The Ras n’Ouanoukrim couloir in the Toubkal Massif",
        note: "The source recommends crampons for the ascent when the snow is hard.",
    },
    {
        day: "07",
        title: "Toubkal Summit · Descent to Imlil",
        subtitle: "Summit day · Ski towards Imouzzer and Sidi Chamharouch",
        altitude: "Mount Toubkal · 4,167 m",
        description: [
            "Set out from Toubkal Refuge for the summit of Toubkal, the highest mountain in Morocco and North Africa. The supplied route document describes two main approaches: Ikhibi South, with approximately 900 metres of ascent and around three hours, and Ikhibi North, with approximately 1,000 metres of ascent and around four hours.",
            "For the planned descent towards Imouzzer and Sidi Chamharouch, the Ikhibi North side is relevant to the route description: it reaches a col at approximately 3,950 metres between Toubkal and Imouzzer before the final summit approach via the north ridge. The exact ascent and descent line must be confirmed according to conditions.",
            "After the summit, ski down towards Sidi Chamharouch and continue to Imlil. The source warns that exposed ridges, icy conditions and the terrain above the refuge require particular care.",
        ],
        ascent: "Ikhibi North: approx. 1,000 m · 4 hours, if conditions allow",
        overnight: "Imlil",
        image: "radouane-above-couloir-toubkal.jpeg",
        imageAlt: "High mountain ski terrain in the Toubkal Massif",
        note: "The supplied source does not give a descent elevation or duration from the summit to Imlil. The route may change with wind, snow, visibility and safety conditions.",
    },
    {
        day: "08",
        title: "Imlil to Marrakech",
        subtitle: "Breakfast · Transfer to Marrakech",
        altitude: "Marrakech",
        description: [
            "After breakfast, leave Imlil and transfer back to Marrakech, bringing the eight-day expedition to a close.",
        ],
        image: "tizi-melloul.jpeg",
        imageAlt: "The High Atlas mountains",
        note: "The transfer schedule can be coordinated with your onward travel plans.",
    },
];

const objectives = [
    {
        name: "Tsoukkine Couloir",
        value: "400 m",
        detail: "Approximate vertical drop · around 35°",
    },
    {
        name: "Central Couloir",
        value: "600 m",
        detail: "Approximate vertical drop · around 35°",
    },
    {
        name: "Tizi n’Tadat",
        value: "3,800 m",
        detail: "Approximate col altitude · traverse between refuges",
    },
    {
        name: "Ras n’Ouanoukrim",
        value: "4,083 m",
        detail: "Summit altitude · north-east couloir",
    },
    {
        name: "Toubkal",
        value: "4,167 m",
        detail: "Highest summit in Morocco and North Africa",
    },
];

const gallery = [
    ["amghras-tizi-ntadat.jpeg", "High mountain terrain around Tizi n’Tadat"],
    ["booting-up-couloir-diagonal.jpeg", "Booting up a steep couloir"],
    ["radouane-above-couloir-toubkal.jpeg", "Ski touring above a couloir in the Toubkal Massif"],
    ["radouane-couloir-diagonal.jpeg", "The diagonal couloir on Tazaghart"],
    ["radouane-couloir-tsoukkine.jpeg", "Skiing the Tsoukkine couloir"],
    ["ras-ouanoukrim-couloir.jpeg", "The Ras n’Ouanoukrim couloir"],
    ["tizi-melloul.jpeg", "High mountain terrain near Tizi Melloul"],
];

const faqs = [
    {
        question: "How difficult is this expedition?",
        answer:
            "The itinerary includes steep couloirs, exposed mountain terrain, a high traverse between refuges and the summit of Toubkal. The supplied route document describes several of these objectives for very good or well-trained skiers. Your ski ability, touring experience, fitness and alpine experience should be discussed with the Ride The Atlas team before booking.",
    },
    {
        question: "Are the couloirs and summit objectives guaranteed?",
        answer:
            "No. The itinerary is a plan, not a guarantee that every route will be possible. Snow coverage, avalanche conditions, weather, wind, visibility, access and the group all affect the final objectives. The guide may adapt or replace a route, and safety takes priority over completing the planned itinerary.",
    },
    {
        question: "Where do we stay during the expedition?",
        answer:
            "The planned overnights are in a riad in Imlil on Day 1, Tazaghart Refuge on Days 2 to 4, Toubkal Refuge on Days 5 and 6, and Imlil on Day 7. Day 8 is the transfer to Marrakech after breakfast.",
    },
    {
        question: "Can we skin up to Tazaghart Refuge?",
        answer:
            "That depends on snow coverage and access conditions. The supplied route document describes an approach via Tizi n’Mzic and Azib Tamsoult. Depending on conditions, the approach may be on foot or with skins. Some steep, exposed sections below the Irhoulidene waterfalls may require removing skis.",
    },
    {
        question: "What equipment is needed for the couloirs?",
        answer:
            "Your itinerary specifies crampons and an ice axe for the booting section on Day 3, with skis carried on the pack. The supplied route document also describes crampons as useful or necessary on some hard or steep routes. The final equipment list should be confirmed with the guiding team based on the chosen lines and conditions.",
    },
    {
        question: "When are the Tazaghart couloirs in season?",
        answer:
            "The supplied route document suggests March to May for the Tazaghart plateau couloirs and April to May for the Ras n’Ouanoukrim north couloir. These are source recommendations, not guarantees of suitable conditions. The actual season depends on the snowpack and weather.",
    },
    {
        question: "How much climbing is involved?",
        answer:
            "The route source gives approximately 800 metres of ascent for the Tizi n’Tadat traverse, 900 metres for Ras n’Ouanoukrim, and either 900 metres via Ikhibi South or 1,000 metres via Ikhibi North for Toubkal. The source does not provide a total elevation gain for the full eight-day itinerary.",
    },
    {
        question: "What is included in the trip price?",
        answer:
            "The supplied information describes the itinerary and route objectives, but does not specify package inclusions. Guiding, transfers, accommodation, meals, refuge arrangements, mountain staff, luggage support and equipment should be confirmed with Ride The Atlas when you enquire.",
    },
];

function ArrowIcon() {
    return <span aria-hidden="true">↗</span>;
}

function Eyebrow({ children }: { children: ReactNode }) {
    return (
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#E56A2E]">
            {children}
        </p>
    );
}

export default function TazaghartToubkalHighRoutePage() {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#F3EBDD] text-[#24231F]">
                {/* HERO */}
                <section
                    id="top"
                    className="relative isolate min-h-[720px] overflow-hidden bg-[#242923] text-[#F3EBDD] lg:min-h-[790px]"
                >
                    <Image
                        src={`${imagePath}/radouane-above-couloir-toubkal.jpeg`}
                        alt="Ski touring above a couloir in the Toubkal Massif"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-gradient-to-r from-[#171A16]/95 via-[#171A16]/65 to-[#171A16]/10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171A16]/55 via-transparent to-[#171A16]/20" />

                    <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-end px-6 pb-16 pt-36 md:px-12 md:pb-20 lg:min-h-[790px] lg:items-center">
                        <div className="max-w-3xl">
                            <div className="mb-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#E56A2E]" />
                                <p className="text-[10px] uppercase tracking-[0.28em] text-white/75">
                                    Ride The Atlas / Ski touring
                                </p>
                            </div>

                            <p className="mb-5 text-xs uppercase tracking-[0.24em] text-[#F08A53]">
                                Morocco · High Atlas
                            </p>

                            <h1 className="font-serif text-6xl font-normal leading-[0.9] tracking-[-0.045em] sm:text-7xl md:text-8xl lg:text-[100px]">
                                Tazaghart
                                <br />
                                <span className="italic">&amp; Toubkal</span>
                            </h1>

                            <p className="mt-8 max-w-xl text-base leading-8 text-white/80 md:text-lg">
                                An eight-day high-route expedition linking the
                                Tazaghart plateau, steep couloirs, Tizi n’Tadat and
                                the summit of Toubkal.
                            </p>

                            <div className="mt-10 flex flex-wrap items-center gap-6">
                                <Link
                                    href="#itinerary"
                                    className="inline-flex items-center gap-5 bg-[#E56A2E] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#171815] transition hover:bg-[#F3EBDD]"
                                >
                                    View the itinerary <ArrowIcon />
                                </Link>

                                <span className="text-xs uppercase tracking-[0.12em] text-white/65">
                                    8 days <span className="mx-2 text-[#E56A2E]">/</span>
                                    High Atlas
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-7 right-6 hidden text-[10px] uppercase tracking-[0.22em] text-white/65 md:block md:right-12">
                        Tazaghart · Toubkal · Morocco
                    </div>
                </section>

                {/* SECTION NAV */}
                <nav
                    aria-label="Trip sections"
                    className="sticky top-0 z-40 border-b border-[#24231F]/15 bg-[#F3EBDD]/95 backdrop-blur-md"
                >
                    <div className="mx-auto flex max-w-7xl items-center gap-8 overflow-x-auto px-6 py-4 md:px-12">
                        <Link
                            href="#top"
                            className="hidden shrink-0 text-[10px] font-bold uppercase tracking-[0.16em] sm:block"
                        >
                            Tazaghart &amp; Toubkal
                        </Link>

                        <div className="flex shrink-0 items-center gap-6 md:gap-8">
                            {navigation.map(([label, href]) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#625E55] transition hover:text-[#E56A2E]"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>

                {/* QUICK FACTS */}
                <section aria-label="Trip facts" className="border-b border-[#24231F]/15">
                    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-7 px-6 py-8 md:grid-cols-4 md:px-12">
                        {facts.map(([label, value], index) => (
                            <div
                                key={label}
                                className={`md:border-l md:border-[#24231F]/15 md:pl-7 ${index === 0 ? "md:border-0 md:pl-0" : ""
                                    }`}
                            >
                                <p className="text-[10px] uppercase tracking-[0.2em] text-[#777166]">
                                    {label}
                                </p>
                                <p className="mt-2 text-sm font-semibold">{value}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* OVERVIEW */}
                <section
                    id="overview"
                    className="scroll-mt-24 mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-12 md:py-28 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24"
                >
                    <div>
                        <Eyebrow>The expedition</Eyebrow>
                        <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-tight md:text-5xl">
                            From Tazaghart
                            <br />
                            to Toubkal.
                        </h2>
                    </div>

                    <div className="max-w-3xl">
                        <p className="text-lg leading-8 text-[#454239]">
                            This eight-day ski touring expedition crosses some of the
                            high mountain terrain of the Moroccan Atlas, beginning
                            beneath the Tazaghart plateau and continuing to the Toubkal
                            Massif.
                        </p>

                        <p className="mt-6 text-base leading-8 text-[#625E55]">
                            After the approach to Tazaghart Refuge, the itinerary
                            focuses on the Tsoukkine and central couloirs before
                            traversing via Tizi n’Tadat to Toubkal Refuge. The final
                            mountain days include Ras n’Ouanoukrim and the summit of
                            Toubkal, followed by a descent towards Sidi Chamharouch
                            and Imlil.
                        </p>

                        <p className="mt-6 text-base leading-8 text-[#625E55]">
                            The route combines skinning, booting with skis carried on
                            the pack, steep couloir terrain and high-mountain
                            traverses. The exact objectives and lines depend on snow
                            coverage, weather, visibility and the assessment of the
                            mountain conditions.
                        </p>
                    </div>
                </section>

                {/* HIGHLIGHTS */}
                <section
                    id="highlights"
                    className="scroll-mt-24 bg-[#E8DECD] px-6 py-20 md:px-12 md:py-24"
                >
                    <div className="mx-auto max-w-7xl">
                        <Eyebrow>The experience</Eyebrow>

                        <div className="mt-5 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                                A high route
                                <br />
                                through the Atlas.
                            </h2>

                            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                                {highlights.map((item) => (
                                    <article
                                        key={item.number}
                                        className="border-t border-[#24231F]/20 pt-5"
                                    >
                                        <span className="text-[10px] tracking-[0.2em] text-[#E56A2E]">
                                            {item.number}
                                        </span>

                                        <h3 className="mt-3 font-serif text-2xl">
                                            {item.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-[#625E55]">
                                            {item.description}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FULL-BLEED IMAGE */}
                <section className="relative min-h-[440px] overflow-hidden md:min-h-[600px]">
                    <Image
                        src={`${imagePath}/booting-up-couloir-diagonal.jpeg`}
                        alt="Booting up a steep couloir in the High Atlas"
                        fill
                        sizes="100vw"
                        className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/15 to-transparent" />

                    <div className="relative z-10 flex min-h-[440px] items-end px-6 py-12 md:min-h-[600px] md:px-12 md:py-16">
                        <div className="max-w-xl text-white">
                            <Eyebrow>Above the refuge</Eyebrow>
                            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
                                Climb into the couloirs.
                            </h2>
                        </div>
                    </div>
                </section>

                {/* ITINERARY */}
                <section
                    id="itinerary"
                    className="scroll-mt-24 mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28"
                >
                    <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                        <div>
                            <Eyebrow>Day by day</Eyebrow>
                            <h2 className="mt-5 font-serif text-5xl leading-none tracking-tight md:text-6xl">
                                The itinerary
                            </h2>
                        </div>

                        <p className="max-w-sm text-sm leading-7 text-[#625E55]">
                            Eight days from Marrakech into the Tazaghart and Toubkal
                            massifs. The mountain plan remains flexible and
                            conditions-led.
                        </p>
                    </div>

                    <div className="border-t border-[#24231F]/20">
                        {itinerary.map((item) => (
                            <article
                                key={item.day}
                                className="grid gap-6 border-b border-[#24231F]/20 py-9 md:grid-cols-[64px_1fr_0.72fr] md:gap-10 md:py-12"
                            >
                                <div>
                                    <span className="font-serif text-4xl text-[#E56A2E]">
                                        {item.day}
                                    </span>
                                    <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#777166]">
                                        Day
                                    </p>
                                </div>

                                <div>
                                    <p className="text-[10px] uppercase tracking-[0.18em] text-[#777166]">
                                        {item.altitude}
                                    </p>

                                    <h3 className="mt-3 max-w-xl font-serif text-2xl leading-snug md:text-3xl">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#E56A2E]">
                                        {item.subtitle}
                                    </p>

                                    {item.description.map((paragraph) => (
                                        <p
                                            key={paragraph}
                                            className="mt-5 max-w-2xl text-sm leading-7 text-[#625E55]"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}

                                    {(item.ascent || item.descent) && (
                                        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#454239]">
                                            {item.ascent && (
                                                <p>
                                                    <span className="font-semibold">Ascent:</span>{" "}
                                                    {item.ascent}
                                                </p>
                                            )}
                                            {item.descent && (
                                                <p>
                                                    <span className="font-semibold">Descent:</span>{" "}
                                                    {item.descent}
                                                </p>
                                            )}
                                        </div>
                                    )}

                                    {item.overnight && (
                                        <p className="mt-5 text-xs text-[#454239]">
                                            <span className="font-semibold">Overnight:</span>{" "}
                                            {item.overnight}
                                        </p>
                                    )}

                                    {item.note && (
                                        <p className="mt-5 max-w-2xl border-l-2 border-[#E56A2E] pl-4 text-xs leading-6 text-[#777166]">
                                            {item.note}
                                        </p>
                                    )}
                                </div>

                                {item.image && (
                                    <div className="relative mt-2 aspect-[4/3] overflow-hidden bg-[#DED5C5] md:mt-0">
                                        <Image
                                            src={`${imagePath}/${item.image}`}
                                            alt={item.imageAlt ?? item.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 30vw"
                                            className="object-cover transition duration-700 hover:scale-[1.03]"
                                        />
                                    </div>
                                )}
                            </article>
                        ))}
                    </div>
                </section>

                {/* OBJECTIVES */}
                <section
                    id="objectives"
                    className="scroll-mt-24 bg-[#242923] py-20 text-[#F3EBDD] md:py-24"
                >
                    <div className="mx-auto max-w-7xl px-6 md:px-12">
                        <Eyebrow>Mountain objectives</Eyebrow>

                        <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
                            Refuges, cols and couloirs.
                        </h2>

                        <p className="mt-5 max-w-2xl text-sm leading-7 text-white/60">
                            Selected route figures from the supplied French route
                            document. These are route descriptions, not guaranteed
                            daily conditions or a substitute for an on-the-ground
                            assessment.
                        </p>

                        <div className="mt-12 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-5">
                            {objectives.map((item) => (
                                <article
                                    key={item.name}
                                    className="bg-[#242923] px-6 py-8 md:px-6 md:py-10"
                                >
                                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                        {item.name}
                                    </p>

                                    <p className="mt-5 font-serif text-3xl text-[#F3EBDD]">
                                        {item.value}
                                    </p>

                                    <p className="mt-4 text-sm leading-6 text-white/60">
                                        {item.detail}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* TRIP DETAILS */}
                <section
                    id="trip-details"
                    className="scroll-mt-24 mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28"
                >
                    <div className="max-w-2xl">
                        <Eyebrow>Plan your journey</Eyebrow>

                        <h2 className="mt-5 font-serif text-4xl md:text-5xl">
                            Trip details
                        </h2>

                        <p className="mt-5 text-sm leading-7 text-[#625E55]">
                            The expedition starts in Marrakech and moves into the
                            mountains through Imlil and Tazaghart Refuge. It then
                            traverses to Toubkal Refuge before the summit day and
                            descent to Imlil.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-12 border-t border-[#24231F]/20 pt-8 md:grid-cols-2">
                        <div>
                            <h3 className="font-serif text-2xl">At a glance</h3>

                            <dl className="mt-6">
                                {[
                                    ["Duration", "8 days"],
                                    ["Start and finish", "Marrakech, Morocco"],
                                    ["First mountain base", "Tazaghart Refuge"],
                                    ["Second mountain base", "Toubkal Refuge"],
                                    ["Highest summit", "Toubkal · 4,167 m"],
                                    ["Main terrain", "High routes and couloirs"],
                                    ["Activity", "Ski touring"],
                                ].map(([label, value]) => (
                                    <div
                                        key={label}
                                        className="grid grid-cols-[minmax(110px,0.7fr)_1.3fr] gap-4 border-b border-[#24231F]/15 py-4"
                                    >
                                        <dt className="text-xs text-[#777166]">{label}</dt>
                                        <dd className="text-sm">{value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>

                        <div>
                            <h3 className="font-serif text-2xl">
                                Accommodation &amp; transfers
                            </h3>

                            <p className="mt-6 text-sm leading-7 text-[#625E55]">
                                The planned overnights are in a riad in Imlil on Day 1,
                                Tazaghart Refuge on Days 2 to 4, Toubkal Refuge on Days
                                5 and 6, and Imlil on Day 7. Day 8 is the transfer to
                                Marrakech after breakfast.
                            </p>

                            <p className="mt-5 text-sm leading-7 text-[#625E55]">
                                The approach to Tazaghart Refuge is via the Tizi
                                n’Mzic and Azib Tamsoult area. Whether the approach is
                                made on foot or with skins, and whether mule support
                                is possible, depends on snow and access conditions.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 border-t border-[#24231F]/20 pt-10">
                        <Eyebrow>Booking information</Eyebrow>

                        <h3 className="mt-4 font-serif text-3xl">
                            Confirm the expedition arrangements
                        </h3>

                        <p className="mt-5 max-w-3xl text-sm leading-7 text-[#625E55]">
                            The supplied information sets out the planned route and
                            overnight stops, but does not specify package inclusions.
                            Guiding, transfers, accommodation, meals, refuge
                            arrangements, mountain staff, luggage support and
                            equipment should be confirmed with Ride The Atlas before
                            booking.
                        </p>

                        <Link
                            href="/contact"
                            className="mt-7 inline-flex items-center gap-3 border-b border-[#24231F] pb-3 text-xs font-semibold uppercase tracking-[0.15em] transition hover:border-[#E56A2E] hover:text-[#E56A2E]"
                        >
                            Ask about expedition arrangements <ArrowIcon />
                        </Link>
                    </div>
                </section>

                {/* CONDITIONS */}
                <section className="border-y border-[#24231F]/15 bg-[#E8DECD]">
                    <div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-[0.5fr_1.5fr] md:px-12 md:py-16">
                        <Eyebrow>Mountain conditions</Eyebrow>

                        <div className="max-w-3xl">
                            <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                                The mountains set the plan.
                            </h2>

                            <p className="mt-5 text-sm leading-7 text-[#625E55]">
                                The route descriptions and figures are drawn from the
                                supplied French document. Snow conditions, access,
                                timings and route safety vary. Couloirs, exposed
                                ridges, steep slopes and refuge approaches must be
                                assessed on the ground by a qualified mountain
                                professional. The guide may adapt the route or
                                objectives according to weather, snow coverage,
                                visibility, terrain and the group. Safety takes
                                priority over completing a planned objective.
                            </p>
                        </div>
                    </div>
                </section>

                {/* GALLERY */}
                <section
                    id="gallery"
                    className="scroll-mt-24 mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28"
                >
                    <div className="mb-10 flex items-end justify-between gap-6">
                        <div>
                            <Eyebrow>In the mountains</Eyebrow>

                            <h2 className="mt-5 font-serif text-4xl md:text-5xl">
                                The expedition in pictures
                            </h2>
                        </div>

                        <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[#777166] sm:block">
                            Tazaghart · Toubkal
                        </span>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {gallery.map(([src, alt], index) => (
                            <div
                                key={src}
                                className={`relative aspect-[4/3] overflow-hidden bg-[#DED5C5] ${index === 1 ? "lg:mt-10" : ""
                                    }`}
                            >
                                <Image
                                    src={`${imagePath}/${src}`}
                                    alt={alt}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition duration-700 hover:scale-[1.03]"
                                />
                            </div>
                        ))}
                    </div>
                </section>

                {/* RELATED TRIPS */}
                <section className="bg-[#E8DECD] px-6 py-20 md:px-12 md:py-24">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
                            <div>
                                <Eyebrow>Keep exploring</Eyebrow>

                                <h2 className="mt-5 font-serif text-4xl md:text-5xl">
                                    More ways into the Atlas.
                                </h2>

                                <p className="mt-4 max-w-xl text-sm leading-7 text-[#625E55]">
                                    Explore other ski touring journeys from Ride The Atlas.
                                </p>
                            </div>

                            <Link
                                href="/ski-touring"
                                className="w-fit border-b border-[#24231F] pb-3 text-xs font-semibold uppercase tracking-[0.15em] transition hover:border-[#E56A2E] hover:text-[#E56A2E]"
                            >
                                Explore all ski trips <ArrowIcon />
                            </Link>
                        </div>

                        <div className="mt-12 grid gap-8 md:grid-cols-2">
                            <Link
                                href="/ski-touring/tachedirt-toubkal"
                                className="group"
                            >
                                <div className="relative aspect-[5/3] overflow-hidden bg-[#D6CBB9]">
                                    <Image
                                        src="/images/ski/skiers-on-toubkal-summit.jpeg"
                                        alt="Skiers on the summit of Toubkal"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition duration-700 group-hover:scale-[1.04]"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                                    <div className="absolute bottom-5 left-5 text-white">
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/75">
                                            8 days · Ski touring
                                        </span>

                                        <h3 className="mt-2 font-serif text-2xl md:text-3xl">
                                            Tacheddirt &amp; Toubkal
                                        </h3>
                                    </div>
                                </div>

                                <div className="flex items-start justify-between gap-4 pt-5">
                                    <p className="max-w-md text-sm leading-6 text-[#625E55]">
                                        An expedition linking Tacheddirt with the high
                                        mountains of the Toubkal Massif.
                                    </p>

                                    <span
                                        aria-hidden="true"
                                        className="pt-1 text-xl transition group-hover:translate-x-1 group-hover:text-[#E56A2E]"
                                    >
                                        →
                                    </span>
                                </div>
                            </Link>

                            <Link
                                href="/ski-touring/tacheddirt-ski-touring"
                                className="group"
                            >
                                <div className="relative aspect-[5/3] overflow-hidden bg-[#D6CBB9]">
                                    <Image
                                        src="/images/ski/tachedirt-skiing/bouignouane-summit-skiers.jpeg"
                                        alt="Skiers on a summit in the Tacheddirt area"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition duration-700 group-hover:scale-[1.04]"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                                    <div className="absolute bottom-5 left-5 text-white">
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/75">
                                            6 days · Ski touring
                                        </span>

                                        <h3 className="mt-2 font-serif text-2xl md:text-3xl">
                                            Tacheddirt Ski Touring
                                        </h3>
                                    </div>
                                </div>

                                <div className="flex items-start justify-between gap-4 pt-5">
                                    <p className="max-w-md text-sm leading-6 text-[#625E55]">
                                        A six-day journey through the cols and high
                                        mountain terrain around Tacheddirt.
                                    </p>

                                    <span
                                        aria-hidden="true"
                                        className="pt-1 text-xl transition group-hover:translate-x-1 group-hover:text-[#E56A2E]"
                                    >
                                        →
                                    </span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQS */}
                <section
                    id="faqs"
                    className="scroll-mt-24 bg-[#F3EBDD] px-6 py-20 md:px-12 md:py-28"
                >
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
                        <div>
                            <Eyebrow>Before you go</Eyebrow>

                            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">
                                Frequently asked
                                <br />
                                questions.
                            </h2>

                            <p className="mt-6 max-w-sm text-sm leading-7 text-[#625E55]">
                                Important details about the Tazaghart and Toubkal
                                expedition. For questions about your dates, experience
                                or equipment, get in touch with the Ride The Atlas team.
                            </p>

                            <Link
                                href="/contact"
                                className="mt-8 inline-flex items-center gap-3 border-b border-[#24231F] pb-3 text-xs font-semibold uppercase tracking-[0.15em] transition hover:border-[#E56A2E] hover:text-[#E56A2E]"
                            >
                                Ask us a question <ArrowIcon />
                            </Link>
                        </div>

                        <div className="border-t border-[#24231F]/20">
                            {faqs.map((item, index) => (
                                <details
                                    key={item.question}
                                    className="group border-b border-[#24231F]/20"
                                >
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                                        <span className="flex items-start gap-5">
                                            <span className="pt-1 text-[10px] tracking-[0.15em] text-[#E56A2E]">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            <span className="font-serif text-xl leading-snug md:text-2xl">
                                                {item.question}
                                            </span>
                                        </span>

                                        <span
                                            aria-hidden="true"
                                            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#24231F]/20 text-lg transition group-open:rotate-45 group-open:border-[#E56A2E] group-open:text-[#E56A2E]"
                                        >
                                            +
                                        </span>
                                    </summary>

                                    <div className="pb-7 pl-10 pr-12">
                                        <p className="max-w-2xl text-sm leading-7 text-[#625E55]">
                                            {item.answer}
                                        </p>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ENQUIRY */}
                <section
                    id="enquire"
                    className="scroll-mt-24 bg-[#242923] px-6 py-20 text-[#F3EBDD] md:px-12 md:py-28"
                >
                    <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">
                        <div className="max-w-2xl">
                            <Eyebrow>Ride The Atlas</Eyebrow>

                            <h2 className="mt-5 font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">
                                Ready for the
                                <br />
                                high route?
                            </h2>

                            <p className="mt-6 max-w-lg text-sm leading-7 text-white/65">
                                Tell us about your dates, ski touring experience and
                                plans for the mountains. We’ll discuss the expedition
                                and the conditions relevant to your trip.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex w-fit items-center gap-5 border-b border-[#F3EBDD]/70 pb-4 text-xs font-semibold uppercase tracking-[0.17em] transition hover:border-[#E56A2E] hover:text-[#E56A2E]"
                        >
                            Enquire about this trip <ArrowIcon />
                        </Link>
                    </div>
                </section>
            </main>

            <SiteFooter />
        </>
    );
}