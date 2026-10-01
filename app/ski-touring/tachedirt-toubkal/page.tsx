import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata = {
    title: "Tacheddirt & Toubkal Ski Touring | 8-Day High Atlas Expedition",
    description:
        "An 8-day ski touring expedition in Morocco’s High Atlas, linking Tizi Likemt and Bouignouane with Mount Toubkal and Akioud.",
};

const imagePath = "/images/ski/tachedirt-toubkal";

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
    ["Duration", "8 days · 7 nights"],
    ["Highest objective", "4,167 m"],
    ["Region", "High Atlas, Morocco"],
    ["Discipline", "Ski touring"],
];

const highlights = [
    {
        number: "01",
        title: "Four mountain objectives",
        description:
            "Explore the Tacheddirt Valley and Toubkal Massif, with objectives including Tizi Likemt, Bouignouane, Toubkal and Akioud.",
    },
    {
        number: "02",
        title: "Into the 4,000-metre mountains",
        description:
            "Aim for Mount Toubkal at 4,167 m and Akioud at 4,030 m in Morocco’s high mountain terrain.",
    },
    {
        number: "03",
        title: "Two sides of the Atlas",
        description:
            "Begin among the villages and open slopes around Tacheddirt before continuing into the Toubkal Massif.",
    },
    {
        number: "04",
        title: "Earn your turns",
        description:
            "Climb on touring skins and descend through natural mountain terrain, away from prepared ski pistes.",
    },
    {
        number: "05",
        title: "From mountains to Marrakech",
        description:
            "Finish the expedition in Marrakech, with time to discover the medina and the city at your own pace.",
    },
    {
        number: "06",
        title: "A conditions-led itinerary",
        description:
            "Routes and objectives are adapted to snow coverage, weather, visibility and the group’s condition.",
    },
];

const itinerary = [
    {
        day: "01",
        title: "Marrakech to Imlil",
        subtitle: "Arrival · Transfer into the High Atlas",
        altitude: "Imlil · approx. 1,740 m",
        description:
            "Meet your team at Marrakech Menara Airport and transfer into the High Atlas. The road leads to Imlil, the mountain village that serves as the gateway to the Toubkal Massif. Settle into your riad, meet the team and prepare your equipment for the days ahead.",
        overnight: "Riad in Imlil",
    },
    {
        day: "02",
        title: "Tizi Likemt ski tour",
        subtitle: "Tacheddirt Valley · First mountain objective",
        altitude: "Tizi Likemt · approx. 3,555 m",
        description:
            "After breakfast, drive for around 30 minutes towards Tacheddirt. From the village, put on your touring skis and climb on skins towards Tizi Likemt. From the pass, enjoy a ski descent towards Tacheddirt, choosing the most suitable line for the snow and conditions.",
        overnight: "Tacheddirt",
        image: "tizi-likemt-picture-group-toubkal-tachedirt-trip.jpeg",
        imageAlt: "Ski touring group near Tizi Likemt in Morocco’s High Atlas",
    },
    {
        day: "03",
        title: "Bouignouane summit",
        subtitle: "Ski descent · Return to Imlil",
        altitude: "Bouignouane · approx. 3,882 m",
        description:
            "Today’s objective is Bouignouane, also known as Bou Iguenouane. Climb towards the summit and take in the views across the surrounding High Atlas before beginning your ski descent. The descent continues towards the road, depending on snow coverage. After lunch, transfer back to Imlil.",
        overnight: "Riad in Imlil",
        image: "bouignouane-skiers-skinning-up.jpeg",
        imageAlt: "Skiers climbing towards Bouignouane in the Moroccan High Atlas",
    },
    {
        day: "04",
        title: "Into the Toubkal high mountains",
        subtitle: "Approach to the refuge area",
        altitude: "Toubkal Refuge · 3,207 m",
        description:
            "Leave Imlil and begin the approach towards the Toubkal Refuge. The route adapts to the snowline: some sections may be completed on foot before continuing on touring skis when conditions allow. Continue towards a suitable overnight location near the base of the Toubkal objectives. The exact location depends on snow coverage and mountain conditions.",
        overnight: "High-mountain area; final location depends on conditions",
        image: "tizi-ouagan-toubkal-tachedirt-trip.jpeg",
        imageAlt: "High-mountain terrain in the Toubkal Massif",
    },
    {
        day: "05",
        title: "Mount Toubkal · 4,167 m",
        subtitle: "Ski touring on Morocco’s highest mountain",
        altitude: "Mount Toubkal · 4,167 m",
        description:
            "Set out on touring skis towards Mount Toubkal, the highest summit in Morocco and North Africa. The ascent and descent route will be selected according to snow conditions, visibility and the group’s pace. Ski back to the refuge for lunch and enjoy a relaxed afternoon in the mountains.",
        overnight: "Toubkal Refuge",
        image: "toubkal-summit-group-skiers.jpeg",
        imageAlt: "Ski touring group on the summit of Mount Toubkal",
    },
    {
        day: "06",
        title: "Akioud · 4,030 m",
        subtitle: "Ski descent · Return to Imlil",
        altitude: "Akioud · 4,030 m",
        description:
            "Today’s objective is Akioud, a 4,030 m summit in the Toubkal Massif. Climb on skins towards the mountain, following the most appropriate line for the prevailing conditions. After the summit and ski descent, return to the refuge for lunch, then descend through the valley to Imlil.",
        overnight: "Riad in Imlil",
        image: "akioud-summit-tachedirt-toubkal-trip.jpeg",
        imageAlt: "Ski touring on Akioud in the Toubkal Massif",
    },
    {
        day: "07",
        title: "Imlil to Marrakech",
        subtitle: "Return to the city · Free time",
        altitude: "Marrakech",
        description:
            "After breakfast, transfer from Imlil to Marrakech. Once checked in at your riad, the rest of the day is free to explore the city at your own pace. Wander through the medina and souks, visit a historic site or enjoy a relaxed afternoon in one of the city’s cafés.",
        overnight: "Riad in Marrakech",
    },
    {
        day: "08",
        title: "Departure from Marrakech",
        subtitle: "Airport transfer",
        altitude: "Marrakech Menara Airport",
        description:
            "After breakfast, transfer to Marrakech Menara Airport for your departure. Your ski touring expedition through the High Atlas comes to an end.",
        overnight: "Departure",
    },
];

const objectives = [
    ["Tizi Likemt", "3,555 m", "A high pass above the Tacheddirt Valley."],
    ["Bouignouane", "Approx. 3,882 m", "A summit objective in the High Atlas."],
    ["Mount Toubkal", "4,167 m", "The highest summit in Morocco and North Africa."],
    ["Akioud", "4,030 m", "A high summit in the Toubkal Massif."],
];

const gallery = [
    ["bouignouane-group-skiers.jpeg", "Ski touring group on the Bouignouane route"],
    ["bouignouane-skiers-skinning-up.jpeg", "Skiers climbing towards Bouignouane"],
    ["tizi-likemt-picture-group-toubkal-tachedirt-trip.jpeg", "Ski touring group in the Tizi Likemt area"],
    ["tizi-ouagan-toubkal-tachedirt-trip.jpeg", "Mountain terrain in the Toubkal Massif"],
    ["akioud-summit-tachedirt-toubkal-trip.jpeg", "Ski touring on Akioud"],
    ["toubkal-summit-group-skiers.jpeg", "Ski touring group on Mount Toubkal summit"],
];

const faqs = [
    {
        question: "Do I need previous ski touring experience?",
        answer:
            "The itinerary involves climbing on touring skins and skiing in natural mountain terrain, including high-altitude objectives. Your ski touring experience, fitness and mountain background should be discussed with the Ride The Atlas team before booking so the trip can be assessed for suitability.",
    },
    {
        question: "Is reaching the summit of Toubkal guaranteed?",
        answer:
            "No. Mount Toubkal at 4,167 m is a planned objective, not a guaranteed summit. The guide may adapt the route or change the objective according to weather, snow conditions, visibility, terrain and the group’s ability. Safety takes priority over completing the planned itinerary.",
    },
    {
        question: "Where do we stay during the expedition?",
        answer:
            "The itinerary includes riad accommodation in Imlil, an overnight in Tacheddirt, high-mountain accommodation in the Toubkal area and a final night in Marrakech. The exact overnight location on Day 4 depends on the snowline and mountain conditions.",
    },
    {
        question: "When is the best time for this trip?",
        answer:
            "Ski touring conditions in the High Atlas depend on the season, snowfall and changing mountain weather. Contact us with your preferred dates so we can discuss conditions and the feasibility of the planned objectives.",
    },
    {
        question: "What equipment should I bring?",
        answer:
            "You will need suitable ski touring equipment and mountain clothing for changing winter conditions. The exact equipment list, including safety equipment and any items that may be available locally, should be confirmed with the Ride The Atlas team before your trip.",
    },
    {
        question: "What is included in the trip price?",
        answer:
            "The itinerary describes the planned route, transfers and overnight stops. Specific package inclusions—such as meals, guiding, mountain staff, luggage support and equipment—should be confirmed with us when you enquire.",
    },
];

function ArrowIcon() {
    return <span aria-hidden="true">↗</span>;
}

function Eyebrow({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#E56A2E]">
            {children}
        </p>
    );
}

export default function TacheddirtToubkalPage() {
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
                        src={`${imagePath}/tizi-likemt-picture-group-toubkal-tachedirt-trip.jpeg`}
                        alt="Ski touring group in the Tizi Likemt area of Morocco’s High Atlas"
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
                                <span className="italic">&amp; Toubkal</span>
                            </h1>
                            <p className="mt-8 max-w-xl text-base leading-8 text-white/80 md:text-lg">
                                An eight-day ski touring expedition from the Tacheddirt Valley
                                to the high mountains of the Toubkal Massif.
                            </p>
                            <div className="mt-10 flex flex-wrap items-center gap-6">
                                <Link
                                    href="#itinerary"
                                    className="inline-flex items-center gap-5 bg-[#E56A2E] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#171815] transition hover:bg-[#F3EBDD]"
                                >
                                    View the itinerary <ArrowIcon />
                                </Link>
                                <span className="text-xs uppercase tracking-[0.12em] text-white/65">
                                    8 days <span className="mx-2 text-[#E56A2E]">/</span> 7 nights
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
                            Tacheddirt &amp; Toubkal
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
                            Two valleys.
                            <br />
                            High Atlas summits.
                        </h2>
                    </div>
                    <div className="max-w-3xl">
                        <p className="text-lg leading-8 text-[#454239]">
                            This eight-day ski touring expedition links the quieter valleys
                            around Tacheddirt with the high alpine terrain of the Toubkal
                            Massif.
                        </p>
                        <p className="mt-6 text-base leading-8 text-[#625E55]">
                            Starting in Marrakech, the journey moves into the mountains
                            through Imlil and Tacheddirt. The first days take you towards Tizi
                            Likemt and Bouignouane, with ski descents through open mountain
                            terrain. The expedition then continues into the Toubkal area,
                            with objectives including Mount Toubkal at 4,167 m and Akioud at
                            4,030 m.
                        </p>
                        <p className="mt-6 text-base leading-8 text-[#625E55]">
                            This is ski mountaineering in a natural mountain environment,
                            away from prepared pistes. Routes and objectives are adapted to
                            snow coverage, weather, visibility, snow stability and the
                            group’s condition.
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
                                        <h3 className="mt-3 font-serif text-2xl">{item.title}</h3>
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
                        src={`${imagePath}/bouignouane-group-skiers.jpeg`}
                        alt="Ski touring group in the High Atlas near Bouignouane"
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
                            Eight days through the Tacheddirt Valley and the Toubkal Massif.
                            The mountain plan remains flexible and conditions-led.
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
                                    <p className="mt-5 max-w-2xl text-sm leading-7 text-[#625E55]">
                                        {item.description}
                                    </p>
                                    <p className="mt-5 text-xs text-[#454239]">
                                        <span className="font-semibold">Overnight:</span>{" "}
                                        {item.overnight}
                                    </p>
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
                                    <p className="mt-4 text-sm leading-6 text-white/60">{detail}</p>
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
                        <Eyebrow>Plan your expedition</Eyebrow>
                        <h2 className="mt-5 font-serif text-4xl md:text-5xl">
                            Trip details
                        </h2>
                        <p className="mt-5 text-sm leading-7 text-[#625E55]">
                            The journey combines village accommodation, a high-mountain
                            approach and ski touring objectives in the Toubkal Massif.
                            Mountain logistics are adapted to the conditions on the ground.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-12 border-t border-[#24231F]/20 pt-8 md:grid-cols-2">
                        <div>
                            <h3 className="font-serif text-2xl">At a glance</h3>
                            <dl className="mt-6">
                                {[
                                    ["Duration", "8 days / 7 nights"],
                                    ["Start and finish", "Marrakech, Morocco"],
                                    ["Mountain base", "Imlil"],
                                    ["Mountain region", "Tacheddirt Valley and Toubkal Massif"],
                                    ["Highest objective", "Mount Toubkal · 4,167 m"],
                                    ["Activity", "Ski touring and ski mountaineering"],
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
                            <h3 className="font-serif text-2xl">Accommodation &amp; transfers</h3>
                            <p className="mt-6 text-sm leading-7 text-[#625E55]">
                                The itinerary plans riad stays in Imlil and Marrakech, an
                                overnight in Tacheddirt, and nights in the Toubkal
                                high-mountain area. The precise Day 4 overnight location
                                depends on snow conditions and the final mountain plan.
                            </p>
                            <p className="mt-5 text-sm leading-7 text-[#625E55]">
                                Transfers described in the itinerary connect Marrakech, Imlil
                                and Tacheddirt. The approach and descent in the Toubkal area
                                are completed on foot and on touring skis as conditions allow.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 border-t border-[#24231F]/20 pt-10">
                        <Eyebrow>Booking information</Eyebrow>
                        <h3 className="mt-4 font-serif text-3xl">
                            Confirm the trip arrangements
                        </h3>
                        <p className="mt-5 max-w-3xl text-sm leading-7 text-[#625E55]">
                            The itinerary sets out the planned route, transfers and overnight
                            stops. Package inclusions—including meals, guiding, mountain
                            staff, luggage support and equipment—are confirmed with Ride The
                            Atlas before booking.
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
                                Summit attempts and ski descents are objectives, not
                                guarantees. The guide may adapt the route, timing or objectives
                                according to weather, snow conditions, visibility, terrain and
                                the group’s ability. Safety takes priority over completing a
                                planned summit.
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
                            Tacheddirt · Toubkal
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
                                    Explore the other ski touring expeditions from Ride The Atlas.
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
                                href="/ski-touring/tacheddirt-ski-touring"
                                className="group"
                            >
                                <div className="relative aspect-[5/3] overflow-hidden bg-[#D6CBB9]">
                                    <Image
                                        src="/images/ski/tachedirt-toubkal/tizi-likemt-picture-group-toubkal-tachedirt-trip.jpeg"
                                        alt="Ski touring in the Tacheddirt Valley"
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
                                        A six-day ski touring journey through the Tacheddirt area
                                        of the High Atlas.
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
                                        src="/images/ski/tachedirt-toubkal/tizi-ouagan-toubkal-tachedirt-trip.jpeg"
                                        alt="High mountain terrain in the Toubkal Massif"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition duration-700 group-hover:scale-[1.04]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                    <div className="absolute bottom-5 left-5 text-white">
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/75">
                                            6 days · Ski touring
                                        </span>
                                        <h3 className="mt-2 max-w-lg font-serif text-2xl md:text-3xl">
                                            Tazaghart &amp; Toubkal High Route Expedition
                                        </h3>
                                    </div>
                                </div>
                                <div className="flex items-start justify-between gap-4 pt-5">
                                    <p className="max-w-md text-sm leading-6 text-[#625E55]">
                                        A six-day high-route expedition linking Tazaghart and the
                                        Toubkal Massif.
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
                                Useful details about the Tacheddirt &amp; Toubkal ski touring
                                expedition. For questions about your dates or experience, get
                                in touch with the Ride The Atlas team.
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
                                mountains. We’ll discuss the expedition and the conditions
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
