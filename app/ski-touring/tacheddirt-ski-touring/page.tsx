import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata = {
    title: "Tacheddirt Ski Touring | 6-Day High Atlas Journey",
    description:
        "A six-day ski touring journey through the Tacheddirt Valley and the high mountain terrain of Morocco’s High Atlas.",
};

const imagePath = "/images/ski/tachedirt-skiing";

const navigation = [
    ["Overview", "#overview"],
    ["Highlights", "#highlights"],
    ["Itinerary", "#itinerary"],
    ["Trip details", "#trip-details"],
    ["Gallery", "#gallery"],
    ["FAQs", "#faqs"],
    ["Enquire", "#enquire"],
];

const facts = [
    ["Duration", "6 days"],
    ["Highest objective", "3,882 m"],
    ["Region", "High Atlas, Morocco"],
    ["Discipline", "Ski touring"],
];

const highlights = [
    {
        number: "01",
        title: "Tizi Likemt",
        description:
            "Tour towards the 3,555 m pass, with approximately 1,300 m of ascent and around four hours of effort.",
    },
    {
        number: "02",
        title: "Tizi n’Tigourzatine",
        description:
            "Explore another high mountain objective above the Tacheddirt Valley, with approximately 1,100 m of ascent.",
    },
    {
        number: "03",
        title: "Bouignouane or Iguenouane",
        description:
            "Choose the objective according to conditions, with Iguenouane reaching 3,882 m via Amazer Meggoren.",
    },
    {
        number: "04",
        title: "Aksoual and Amghras n’Temda",
        description:
            "Explore the Aksoual area, with a descent of approximately 1,150 m and slopes averaging around 35°.",
    },
    {
        number: "05",
        title: "A conditions-led journey",
        description:
            "Routes and objectives are adapted to snow coverage, weather, mountain conditions and the group.",
    },
    {
        number: "06",
        title: "From Marrakech to the mountains",
        description:
            "Travel from Marrakech into the High Atlas, with the Tacheddirt Valley as the base for the touring objectives.",
    },
];

type ItineraryDay = {
    day: string;
    title: string;
    subtitle: string;
    altitude: string;
    description: string[];
    overnight?: string;
    image?: string;
    imageAlt?: string;
};

const itinerary: ItineraryDay[] = [
    {
        day: "01",
        title: "Marrakech to Imlil",
        subtitle: "Arrival · Transfer into the High Atlas",
        altitude: "Imlil",
        description: [
            "Leave Marrakech and travel towards the High Atlas. The road leads into the mountains and the village of Imlil, where the journey begins. Settle in and prepare for the days ahead.",
        ],
        overnight: "Imlil",
        image: "tizi-likemt-skin-up.jpeg",
        imageAlt: "Ski touring in the Moroccan High Atlas",
    },
    {
        day: "02",
        title: "Tizi Likemt",
        subtitle: "Imlil to Tacheddirt · First mountain objective",
        altitude: "Tizi Likemt · 3,555 m",
        description: [
            "Travel towards Tacheddirt and begin the ski touring objectives around Tizi Likemt. The route climbs towards the pass at 3,555 metres, with approximately 1,300 metres of ascent and around four hours of effort.",
            "The final section can be steep, reaching around 35°. Crampons may be needed depending on conditions.",
        ],
        overnight: "Tacheddirt",
        image: "tizi-likemt-skin-up.jpeg",
        imageAlt: "Skiers skinning up towards Tizi Likemt",
    },
    {
        day: "03",
        title: "Tizi n’Tigourzatine",
        subtitle: "High mountain touring · Tacheddirt Valley",
        altitude: "Tizi n’Tigourzatine",
        description: [
            "Set out for Tizi n’Tigourzatine, with an ascent of approximately 1,100 metres and around four hours of climbing. The day offers another opportunity to explore the high mountain terrain above the Tacheddirt Valley.",
        ],
        overnight: "Tacheddirt",
        image: "tizi-ntigourzatine.jpeg",
        imageAlt: "Mountain terrain around Tizi n’Tigourzatine",
    },
    {
        day: "04",
        title: "Bouignouane or Iguenouane",
        subtitle: "Summit objective · Route chosen according to conditions",
        altitude: "Iguenouane · 3,882 m",
        description: [
            "Depending on conditions, the day can focus on Bouignouane or Iguenouane. One of the possible objectives is Iguenouane, reaching 3,882 metres via Amazer Meggoren.",
            "The Iguenouane option involves approximately 1,500 metres of ascent and around five hours of climbing. The upper slope can reach around 35°.",
        ],
        overnight: "Tacheddirt",
        image: "bouignouane-summit-skiers.jpeg",
        imageAlt: "Skiers reaching a summit in the Moroccan Atlas",
    },
    {
        day: "05",
        title: "Aksoual and Amghras n’Temda",
        subtitle: "Couloir terrain · High mountain descent",
        altitude: "Arhzane col · 3,600 m",
        description: [
            "Explore the Aksoual area and the terrain around Amghras n’Temda. The route described for this day includes an approach of approximately one hour, followed by a climb from 2,450 metres to the Arhzane col at 3,600 metres.",
            "The climb takes around three and a half hours. The descent includes approximately 1,150 metres of vertical drop, with slopes averaging around 35°. Crampons may be required in the steeper upper section.",
        ],
        overnight: "Tacheddirt",
        image: "aksouale-couloir.jpeg",
        imageAlt: "Aksoual couloir in the High Atlas",
    },
    {
        day: "06",
        title: "Return to Marrakech",
        subtitle: "Leave the mountains · Journey’s end",
        altitude: "Marrakech",
        description: [
            "After the final morning in the mountains, leave the Tacheddirt Valley and travel back to Marrakech, bringing the six-day ski touring journey to a close.",
        ],
        image: "aksouale-couloir-from-below.jpeg",
        imageAlt: "Looking up towards a couloir on Aksoual",
    },
];

const objectives = [
    ["Tizi Likemt", "3,555 m", "A high pass above the Tacheddirt Valley."],
    [
        "Tizi n’Tigourzatine",
        "—",
        "A touring objective with approximately 1,100 m of ascent.",
    ],
    [
        "Iguenouane",
        "3,882 m",
        "A possible objective via Amazer Meggoren.",
    ],
    [
        "Aksoual area",
        "Arhzane col · 3,600 m",
        "A route with steep terrain and a descent of approximately 1,150 m.",
    ],
];

const gallery = [
    ["aksouale-couloir-from-below.jpeg", "Aksoual couloir viewed from below"],
    ["aksouale-couloir.jpeg", "Aksoual couloir"],
    ["bouignouane-summit-skiers.jpeg", "Skiers on a summit in the Atlas"],
    ["tizi-likemt-skin-up.jpeg", "Skiers climbing towards Tizi Likemt"],
    ["tizi-ntigourzatine.jpeg", "Mountain terrain around Tizi n’Tigourzatine"],
];

const faqs = [
    {
        question: "Do I need previous ski touring experience?",
        answer:
            "The itinerary involves climbing on touring skis and skiing in natural mountain terrain, including steep sections. Your ski touring experience, fitness and mountain background should be discussed with the Ride The Atlas team before booking so the trip can be assessed for suitability.",
    },
    {
        question: "Are the planned mountain objectives guaranteed?",
        answer:
            "No. The objectives are part of the planned itinerary, but the final choice of route depends on snow coverage, weather, visibility, mountain conditions and the group. Safety takes priority over completing a planned objective.",
    },
    {
        question: "Where do we stay during the trip?",
        answer:
            "The itinerary specifies an overnight in Imlil on Day 1 and overnights in Tacheddirt on Days 2 to 5. The Day 6 itinerary describes the return to Marrakech.",
    },
    {
        question: "Will crampons be needed?",
        answer:
            "Crampons may be needed on steep sections, depending on conditions. The final equipment requirements should be assessed for the actual route and mountain conditions.",
    },
    {
        question: "What is the highest objective?",
        answer:
            "Iguenouane, at 3,882 m, is listed as one possible objective for Day 4. The itinerary may instead focus on Bouignouane, depending on conditions.",
    },
    {
        question: "What is included in the trip price?",
        answer:
            "The itinerary describes the planned route and overnight stops. Specific package inclusions—such as meals, guiding, mountain staff, transfers, luggage support and equipment—should be confirmed with the Ride The Atlas team when you enquire.",
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

export default function TacheddirtSkiTouringPage() {
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
                        src={`${imagePath}/bouignouane-summit-skiers.jpeg`}
                        alt="Skiers on a summit in the Moroccan High Atlas"
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

                            <h1 className="font-serif text-6xl font-normal leading-[0.9] tracking-[-0.045em] sm:text-7xl md:text-8xl lg:text-[108px]">
                                Tacheddirt
                                <br />
                                <span className="italic">Ski Touring</span>
                            </h1>

                            <p className="mt-8 max-w-xl text-base leading-8 text-white/80 md:text-lg">
                                A six-day ski touring journey through the high valleys and
                                mountain slopes of the Moroccan Atlas, based around
                                Tacheddirt.
                            </p>

                            <div className="mt-10 flex flex-wrap items-center gap-6">
                                <Link
                                    href="#itinerary"
                                    className="inline-flex items-center gap-5 bg-[#E56A2E] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#171815] transition hover:bg-[#F3EBDD]"
                                >
                                    View the itinerary <ArrowIcon />
                                </Link>

                                <span className="text-xs uppercase tracking-[0.12em] text-white/65">
                                    6 days{" "}
                                    <span className="mx-2 text-[#E56A2E]">/</span>
                                    High Atlas
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-7 right-6 hidden text-[10px] uppercase tracking-[0.22em] text-white/65 md:block md:right-12">
                        High Atlas · Morocco
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
                            Tacheddirt Ski Touring
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
                        <Eyebrow>The journey</Eyebrow>
                        <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-tight md:text-5xl">
                            Tacheddirt.
                            <br />
                            High Atlas terrain.
                        </h2>
                    </div>

                    <div className="max-w-3xl">
                        <p className="text-lg leading-8 text-[#454239]">
                            Based around the mountain village of Tacheddirt, this
                            six-day journey explores the high terrain of the Moroccan
                            Atlas.
                        </p>

                        <p className="mt-6 text-base leading-8 text-[#625E55]">
                            Starting in Marrakech, the journey moves into the mountains
                            through Imlil and Tacheddirt. The touring objectives include
                            Tizi Likemt, Tizi n’Tigourzatine, Bouignouane and the Aksoual
                            area, with Iguenouane as a possible objective.
                        </p>

                        <p className="mt-6 text-base leading-8 text-[#625E55]">
                            This is ski touring in a natural mountain environment, away
                            from prepared pistes. Routes and objectives are adapted to
                            snow coverage, weather, visibility, mountain conditions and
                            the group.
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
                                What makes
                                <br />
                                this journey.
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
                        src={`${imagePath}/aksouale-couloir-from-below.jpeg`}
                        alt="Looking up towards a couloir on Aksoual"
                        fill
                        sizes="100vw"
                        className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/15 to-transparent" />

                    <div className="relative z-10 flex min-h-[440px] items-end px-6 py-12 md:min-h-[600px] md:px-12 md:py-16">
                        <div className="max-w-xl text-white">
                            <Eyebrow>From valley to summit</Eyebrow>
                            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
                                Earn your turns.
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
                            Six days in the Tacheddirt Valley and surrounding High
                            Atlas terrain. The mountain plan remains flexible and
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

                                    {item.overnight && (
                                        <p className="mt-5 text-xs text-[#454239]">
                                            <span className="font-semibold">Overnight:</span>{" "}
                                            {item.overnight}
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
                <section className="bg-[#242923] py-20 text-[#F3EBDD] md:py-24">
                    <div className="mx-auto max-w-7xl px-6 md:px-12">
                        <Eyebrow>The mountain objectives</Eyebrow>

                        <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight md:text-5xl">
                            A journey through the high country.
                        </h2>

                        <div className="mt-12 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
                            {objectives.map(([name, altitude, detail]) => (
                                <article
                                    key={name}
                                    className="bg-[#242923] px-6 py-8 md:px-7 md:py-10"
                                >
                                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                        {name}
                                    </p>

                                    <p className="mt-5 font-serif text-3xl text-[#F3EBDD]">
                                        {altitude}
                                    </p>

                                    <p className="mt-4 text-sm leading-6 text-white/60">
                                        {detail}
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
                            The journey combines a transfer into the High Atlas,
                            touring objectives around Tacheddirt and a return to
                            Marrakech on the final day. Mountain logistics are adapted
                            to the conditions on the ground.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-12 border-t border-[#24231F]/20 pt-8 md:grid-cols-2">
                        <div>
                            <h3 className="font-serif text-2xl">At a glance</h3>

                            <dl className="mt-6">
                                {[
                                    ["Duration", "6 days"],
                                    ["Start and finish", "Marrakech, Morocco"],
                                    ["Mountain area", "Tacheddirt Valley"],
                                    ["Region", "High Atlas, Morocco"],
                                    ["Highest listed objective", "Iguenouane · 3,882 m"],
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
                                The itinerary specifies an overnight in Imlil on Day 1
                                and overnights in Tacheddirt on Days 2 to 5. Day 6 is
                                the return journey to Marrakech.
                            </p>

                            <p className="mt-5 text-sm leading-7 text-[#625E55]">
                                The journey begins with travel from Marrakech towards
                                Imlil and continues into the Tacheddirt area. The final
                                route and mountain objectives depend on snow coverage,
                                weather and conditions.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 border-t border-[#24231F]/20 pt-10">
                        <Eyebrow>Booking information</Eyebrow>

                        <h3 className="mt-4 font-serif text-3xl">
                            Confirm the trip arrangements
                        </h3>

                        <p className="mt-5 max-w-3xl text-sm leading-7 text-[#625E55]">
                            The itinerary sets out the planned route and overnight
                            stops. Package inclusions—including meals, guiding,
                            mountain staff, transfers, luggage support and
                            equipment—should be confirmed with Ride The Atlas before
                            booking.
                        </p>

                        <Link
                            href="/contact"
                            className="mt-7 inline-flex items-center gap-3 border-b border-[#24231F] pb-3 text-xs font-semibold uppercase tracking-[0.15em] transition hover:border-[#E56A2E] hover:text-[#E56A2E]"
                        >
                            Ask about trip arrangements <ArrowIcon />
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
                                The objectives in this itinerary are subject to
                                conditions. The guide may adapt the route, timing or
                                objectives according to weather, snow coverage,
                                visibility, terrain and the group. Steep terrain may
                                require crampons. Safety takes priority over completing
                                a planned objective.
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
                                The journey in pictures
                            </h2>
                        </div>

                        <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[#777166] sm:block">
                            Tacheddirt · High Atlas
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
                                    Explore other ski touring expeditions from Ride The Atlas.
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
                                        alt="Ski touring group in the Tacheddirt Valley"
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
                                        An eight-day expedition linking Tacheddirt with
                                        the high mountains of the Toubkal Massif.
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
                                href="/ski-touring/tazaghart-toubkal-high-route"
                                className="group"
                            >
                                <div className="relative aspect-[5/3] overflow-hidden bg-[#D6CBB9]">
                                    <Image
                                        src="/images/ski/radouane-couloir-skis-on-pack.jpeg"
                                        alt="High mountain terrain in the Toubkal Massif"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition duration-700 group-hover:scale-[1.04]"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                                    <div className="absolute bottom-5 left-5 text-white">
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/75">
                                            Ski touring
                                        </span>

                                        <h3 className="mt-2 max-w-lg font-serif text-2xl md:text-3xl">
                                            Tazaghart &amp; Toubkal High Route
                                        </h3>
                                    </div>
                                </div>

                                <div className="flex items-start justify-between gap-4 pt-5">
                                    <p className="max-w-md text-sm leading-6 text-[#625E55]">
                                        A high-route expedition through the Toubkal
                                        Massif.
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
                                Useful details about the Tacheddirt ski touring
                                journey. For questions about your dates or experience,
                                get in touch with the Ride The Atlas team.
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
                                High Atlas?
                            </h2>

                            <p className="mt-6 max-w-lg text-sm leading-7 text-white/65">
                                Tell us about your dates, experience and plans for the
                                mountains. We’ll discuss the journey and the conditions
                                relevant to your trip.
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