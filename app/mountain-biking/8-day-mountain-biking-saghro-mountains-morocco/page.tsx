import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata = {
    title: "8-Day Saghro Mountains Mountain Biking Tour | Morocco",
    description:
        "Ride an 8-day mountain biking route through Morocco’s Saghro Mountains, Draa Valley and southern Atlas, with volcanic landscapes, Berber villages and short or long ride options.",
};

const imagePath = "/images/mtb/saghro-mountains";

const navigation = [
    ["Overview", "#overview"],
    ["Highlights", "#highlights"],
    ["Itinerary", "#itinerary"],
    ["Trip details", "#trip-details"],
    ["Gallery", "#gallery"],
    ["FAQs", "#faqs"],
    ["Enquire", "#enquire"],
] as const;

const facts = [
    ["Duration", "8 days · 7 nights"],
    ["Ride format", "Short or long options"],
    ["Region", "Saghro Mountains · Southern Morocco"],
    ["Terrain", "Mostly unpaved roads and trails"],
] as const;

const highlights = [
    {
        number: "01",
        title: "Ride the volcanic Saghro",
        description:
            "Explore the rugged volcanic landscapes of the Djbel Saghro, from high passes to the dramatic rock formations around Bab n’Ali.",
    },
    {
        number: "02",
        title: "Choose your day’s distance",
        description:
            "On most stages, choose between a shorter ride and a longer option, with distances and climbing that vary by day.",
    },
    {
        number: "03",
        title: "From the High Atlas to the oases",
        description:
            "Link mountain valleys, desert plateaus and palm-filled oases on a journey through the southern part of Morocco’s Atlas region.",
    },
    {
        number: "04",
        title: "Traditional villages and kasbahs",
        description:
            "Pass through remote Berber villages and cultivated valleys, with overnight stays in local guesthouses and a traditional kasbah.",
    },
    {
        number: "05",
        title: "Long descents and varied terrain",
        description:
            "Ride unpaved tracks, challenging climbs and single-track sections, with a route designed around off-road riding.",
    },
    {
        number: "06",
        title: "Finish through the Draa Valley",
        description:
            "Close the riding with a final stage through a green oasis corridor lined with traditional villages before returning to Marrakech.",
    },
];

const itinerary = [
    {
        day: "01",
        title: "Arrive in Marrakech",
        subtitle: "Airport welcome · Settle into the city",
        altitude: "Marrakech",
        description:
            "Arrive at Marrakech airport, meet the team and transfer to your hotel. Settle in and enjoy the first evening in the city before the journey south. Dinner and breakfast are included in the hotel stay described for this day.",
        overnight: "3-star hotel in Marrakech",
    },
    {
        day: "02",
        title: "Telouet to Aït Benhaddou",
        subtitle: "The first ride · High Atlas foothills",
        altitude: "Tizi n’Tichka · Telouet · Aït Benhaddou",
        description:
            "Leave Marrakech early by minibus or Land Rover and cross the Tizi n’Tichka Pass. Turn towards Telouet, where the mountain-bike journey begins. Follow a track through a changing landscape of colours, traditional villages and green oases, finishing at the famous ksar of Aït Benhaddou. Load the bikes for the transfer to Ouarzazate.",
        overnight: "Not specified in the supplied itinerary",
        image: "biker-through-saghro-dirt-road.jpg",
        imageAlt: "Mountain biker riding an unpaved track in southern Morocco",
        options: [
            ["Long tour", "80 km · +853 m"],
            ["Short tour", "35 km"],
        ],
    },
    {
        day: "03",
        title: "The Rose Valley to Talouite Valley",
        subtitle: "Desert plateau · Talouite Pass · Valley of the Birds",
        altitude: "Kelaa Mgouna · Talouite Pass",
        description:
            "Transfer to Kelaa Mgouna, known for its annual rose festival, then set out across a desert plateau towards the first pass of the High Atlas. A sustained climb leads to Talouite Pass and views over the Valley of the Birds, where red earth contrasts with the green oasis below. Descend into the quiet Talouite Valley for lunch beside the river. In the afternoon, cross the river and follow the El Hot Valley, passing traditional kasbahs.",
        overnight: "Lodging with local residents",
        image: "saghro-berber-village.jpg",
        imageAlt: "Traditional Berber village in the Saghro region of Morocco",
        options: [
            ["Short tour", "35 km · +600 m"],
            ["Long tour", "42 km · +922 m"],
        ],
    },
    {
        day: "04",
        title: "Dades Gorge to the Saghro Mountains",
        subtitle: "Oases · Open plateau · First views of Saghro",
        altitude: "Dades Gorge · Boumalne Dades",
        description:
            "Follow the Dades Gorge towards Boumalne Dades. The longer route crosses the M’Goun River and climbs several passes, with views across the oases after the ascent from Boumalne Dades. Continue over a broad desert plateau, where nomadic herders and their animals may be encountered, before reaching a small village at the foot of the Saghro Mountains.",
        overnight: "Lodging with a local resident",
        image: "berber-village-stop-saghro.jpg",
        imageAlt: "A stop in a Berber village during a mountain bike journey in Saghro",
        options: [
            ["Short tour", "40 km · +400 m"],
            ["Long tour", "55 km · +1,000 m"],
        ],
    },
    {
        day: "05",
        title: "Across Tazazarte to the Afourar Canyons",
        subtitle: "Volcanic mountains · High pass · Big descent",
        altitude: "Tazazarte Pass · 2,500 m",
        description:
            "Ride into the volcanic Saghro Mountains and climb towards Tazazarte Pass at approximately 2,500 m. Stop for lunch with wide views across the surrounding peaks, then enjoy a long descent towards the area of Bab n’Ali, known for its striking rock formations. There may also be time for an optional one-hour walk to the cascades of Iminougoulize.",
        overnight: "Local guesthouse near Bab n’Ali",
        image: "saghro-volcanic-mountains.jpg",
        imageAlt: "Volcanic mountain landscape in Morocco’s Saghro range",
        options: [
            ["Short tour", "40 km · +800 m"],
            ["Long tour", "59 km · +1,375 m"],
        ],
    },
    {
        day: "06",
        title: "Bab n’Ali to Nkob",
        subtitle: "Mule path single-track · Amguis Valley",
        altitude: "Bab n’Ali · Amguis Valley · Nkob",
        description:
            "Leave the unpaved road and follow a single-track mule path through a scenic and increasingly challenging landscape. The support vehicle does not accompany riders on this section. Continue past the impressive rock formation of Bab n’Ali and into the arid Amguis Valley, arriving in Nkob for lunch. An additional ride of approximately 45 km is possible in the afternoon, climbing two passes.",
        overnight: "Traditional kasbah in Nkob",
        image: "dirt-road-biker-saghro-mountains.jpg",
        imageAlt: "Mountain biker on a remote dirt route in the Saghro Mountains",
        options: [
            ["Short tour", "35 km · +600 m"],
            ["Long tour", "80 km · +1,068 m"],
        ],
    },
    {
        day: "07",
        title: "The Draa Valley and return to Marrakech",
        subtitle: "Final ride · Transfer north",
        altitude: "Draa Valley · Tizi n’Tichka",
        description:
            "After breakfast, load the bikes and drive to the Draa Valley. Unload for a final, shorter ride through one of Morocco’s most beautiful valley landscapes, following green oases and traditional villages. After lunch, continue by road to Marrakech via the Tizi n’Tichka Pass and check into your hotel.",
        overnight: "3-star hotel in Marrakech",
        image: "saghro-mtb-biker.jpg",
        imageAlt: "Mountain biker riding through the landscapes of southern Morocco",
        options: [["Final ride", "Approx. 30 km"]],
    },
    {
        day: "08",
        title: "Departure from Marrakech",
        subtitle: "Airport transfer",
        altitude: "Marrakech Menara Airport",
        description:
            "Transfer from your hotel to Marrakech airport according to your departure schedule. Your eight-day mountain biking journey through the southern Atlas, Saghro Mountains and oases comes to an end.",
        overnight: "Departure",
    },
];

const gallery = [
    ["saghro-volcanic-mountains.jpg", "Volcanic peaks and rugged terrain in the Saghro Mountains"],
    ["saghro-mtb-biker.jpg", "Mountain biking through the Saghro region"],
    ["berber-village-stop-saghro.jpg", "A village stop on the Saghro mountain bike route"],
    ["biker-through-saghro-dirt-road.jpg", "Riding a dirt road through southern Morocco"],
    ["dirt-road-biker-saghro-mountains.jpg", "A mountain biker on a remote Saghro track"],
    ["saghro-berber-village.jpg", "A traditional village in the Saghro Mountains"],
];

const faqs = [
    {
        question: "How many days of riding are included?",
        answer:
            "The trip is an eight-day itinerary. The supplied programme includes riding on Days 2 to 7, with the final Day 7 stage described as approximately 30 km. Confirm the exact riding schedule and any transfer-only sections with the Ride The Atlas team before booking.",
    },
    {
        question: "Can I choose between a short and a long ride?",
        answer:
            "The source itinerary offers a short and a long option on most riding days. The distances and climbing differ by stage. Day 7 is described as a final ride of approximately 30 km, and Day 6 includes an optional additional ride after lunch.",
    },
    {
        question: "What kind of terrain should I expect?",
        answer:
            "The route is described as mostly unpaved, with dirt roads, mountain tracks and a challenging single-track mule path on the way to Nkob. The itinerary also includes sustained climbs and long descents.",
    },
    {
        question: "Is the support vehicle available throughout the ride?",
        answer:
            "The itinerary specifically states that the support vehicle is not present during the single-track section on Day 6. Ask the Ride The Atlas team for the detailed support plan for each stage.",
    },
    {
        question: "Where do we stay during the trip?",
        answer:
            "The programme mentions a 3-star hotel in Marrakech, lodging with local residents, a local guesthouse near Bab n’Ali and a traditional kasbah in Nkob. The exact accommodation arrangements for every night should be confirmed before booking.",
    },
    {
        question: "What is included in the price?",
        answer:
            "The supplied itinerary does not provide a complete inclusions list. Contact Ride The Atlas to confirm accommodation, meals, guiding, transfers, vehicle support, bike arrangements and any other services included in the package.",
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

export default function SaghroMountainsPage() {
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
                        src={`${imagePath}/saghro-volcanic-mountains.jpg`}
                        alt="Volcanic peaks of Morocco’s Saghro Mountains"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#171A16]/95 via-[#171A16]/60 to-[#171A16]/10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#171A16]/60 via-transparent to-[#171A16]/20" />
                    <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-end px-6 pb-16 pt-36 md:px-12 md:pb-20 lg:min-h-[790px] lg:items-center">
                        <div className="max-w-3xl">
                            <div className="mb-8 flex items-center gap-3">
                                <span className="h-px w-10 bg-[#E56A2E]" />
                                <p className="text-[10px] uppercase tracking-[0.28em] text-white/75">
                                    Ride The Atlas / Mountain biking
                                </p>
                            </div>
                            <p className="mb-5 text-xs uppercase tracking-[0.24em] text-[#F08A53]">
                                Southern Morocco · Saghro Mountains
                            </p>
                            <h1 className="font-serif text-6xl font-normal leading-[0.9] tracking-[-0.045em] sm:text-7xl md:text-8xl lg:text-[108px]">
                                Saghro
                                <br />
                                <span className="italic">Mountain Biking</span>
                            </h1>
                            <p className="mt-8 max-w-xl text-base leading-8 text-white/80 md:text-lg">
                                An eight-day off-road journey through volcanic mountains,
                                remote Berber villages and the green oases of southern Morocco.
                            </p>
                            <div className="mt-10 flex flex-wrap items-center gap-6">
                                <Link
                                    href="#itinerary"
                                    className="inline-flex items-center gap-5 bg-[#E56A2E] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#171815] transition hover:bg-[#F3EBDD]"
                                >
                                    Explore the itinerary <ArrowIcon />
                                </Link>
                                <span className="text-xs uppercase tracking-[0.12em] text-white/65">
                                    8 days <span className="mx-2 text-[#E56A2E]">/</span> Short &amp; long rides
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-7 right-6 hidden text-[10px] uppercase tracking-[0.22em] text-white/65 md:block md:right-12">
                        Morocco · Ride beyond the roads
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
                            Saghro Mountain Biking
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
                            Wild terrain.
                            <br />
                            A different Morocco.
                        </h2>
                    </div>
                    <div className="max-w-3xl">
                        <p className="text-lg leading-8 text-[#454239]">
                            This eight-day Saghro Mountains mountain biking tour travels
                            through the southern Atlas and its surrounding valleys, linking
                            high passes, volcanic scenery, remote settlements and palm-filled
                            oases.
                        </p>
                        <p className="mt-6 text-base leading-8 text-[#625E55]">
                            Starting with a ride from Telouet towards Aït Benhaddou, the route
                            moves through the Rose Valley and Talouite Valley before reaching
                            the Dades Gorge and the rugged Djbel Saghro. Along the way, expect
                            unpaved tracks, demanding climbs, long descents and a challenging
                            single-track section on the approach to Nkob.
                        </p>
                        <p className="mt-6 text-base leading-8 text-[#625E55]">
                            Most riding days offer a choice between a shorter and a longer
                            route. That flexibility lets you shape each day around the
                            distance and climbing you want to take on, while still sharing
                            the journey through the landscapes and villages of southern
                            Morocco.
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
                                What defines
                                <br />
                                the ride.
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
                        src={`${imagePath}/saghro-mtb-biker.jpg`}
                        alt="Mountain biker riding through the rugged Saghro landscape"
                        fill
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/15 to-transparent" />
                    <div className="relative z-10 flex min-h-[440px] items-end px-6 py-12 md:min-h-[600px] md:px-12 md:py-16">
                        <div className="max-w-xl text-white">
                            <Eyebrow>Beyond the paved road</Eyebrow>
                            <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">
                                Find your line in Saghro.
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
                            Eight days from Marrakech into the southern Atlas, with short and
                            long ride options on most stages.
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
                                    {item.options && (
                                        <div className="mt-6 flex flex-wrap gap-3">
                                            {item.options.map(([label, detail]) => (
                                                <div
                                                    key={label}
                                                    className="border border-[#24231F]/20 px-4 py-3"
                                                >
                                                    <p className="text-[9px] font-semibold uppercase tracking-[0.16em] text-[#E56A2E]">
                                                        {label}
                                                    </p>
                                                    <p className="mt-1 text-xs text-[#454239]">
                                                        {detail}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
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

                {/* RIDE PROFILE */}
                <section className="bg-[#242923] py-20 text-[#F3EBDD] md:py-24">
                    <div className="mx-auto max-w-7xl px-6 md:px-12">
                        <Eyebrow>Ride character</Eyebrow>
                        <div className="mt-5 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                            <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                                A route built
                                <br />
                                for variety.
                            </h2>
                            <div className="grid gap-8 sm:grid-cols-2">
                                <div className="border-t border-white/20 pt-5">
                                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                        Riding style
                                    </p>
                                    <p className="mt-4 font-serif text-2xl">Off-road first</p>
                                    <p className="mt-3 text-sm leading-6 text-white/65">
                                        The itinerary follows unpaved roads for most of the
                                        journey, with a technical single-track mule path on Day 6.
                                    </p>
                                </div>
                                <div className="border-t border-white/20 pt-5">
                                    <p className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                                        Daily choice
                                    </p>
                                    <p className="mt-4 font-serif text-2xl">Short or long</p>
                                    <p className="mt-3 text-sm leading-6 text-white/65">
                                        Most stages have two route options. Check the detailed
                                        distances and climbing above when planning your ride.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TRIP DETAILS */}
                <section
                    id="trip-details"
                    className="scroll-mt-24 mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28"
                >
                    <div className="max-w-2xl">
                        <Eyebrow>Plan your ride</Eyebrow>
                        <h2 className="mt-5 font-serif text-4xl md:text-5xl">
                            Trip details
                        </h2>
                        <p className="mt-5 text-sm leading-7 text-[#625E55]">
                            A multi-day mountain biking journey through the southern Atlas,
                            connecting the High Atlas foothills, valleys and the volcanic
                            Saghro range. The route combines transfers with off-road riding
                            and local overnight stays.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-12 border-t border-[#24231F]/20 pt-8 md:grid-cols-2">
                        <div>
                            <h3 className="font-serif text-2xl">At a glance</h3>
                            <dl className="mt-6">
                                {[
                                    ["Duration", "8 days"],
                                    ["Start and finish", "Marrakech, Morocco"],
                                    ["Main riding region", "Southern Atlas and Saghro Mountains"],
                                    ["Route character", "Mostly unpaved roads and tracks"],
                                    ["Ride options", "Short and long options on most days"],
                                    ["Key landscapes", "Oases, valleys, volcanic mountains and villages"],
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
                            <h3 className="font-serif text-2xl">Accommodation &amp; logistics</h3>
                            <p className="mt-6 text-sm leading-7 text-[#625E55]">
                                The itinerary names a 3-star hotel in Marrakech, stays with
                                local residents, a guesthouse near Bab n’Ali and a traditional
                                kasbah in Nkob. It also describes transfers by minibus or Land
                                Rover and vehicle support on the route, except for the Day 6
                                single-track section.
                            </p>
                            <p className="mt-5 text-sm leading-7 text-[#625E55]">
                                The source programme does not specify a full package
                                inclusions list, bike provision or a complete accommodation
                                breakdown for every night. These details should be confirmed
                                directly before booking.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 border-t border-[#24231F]/20 pt-10">
                        <Eyebrow>Booking information</Eyebrow>
                        <h3 className="mt-4 font-serif text-3xl">
                            Let’s plan your Saghro ride
                        </h3>
                        <p className="mt-5 max-w-3xl text-sm leading-7 text-[#625E55]">
                            Tell us when you would like to travel, what kind of riding you
                            enjoy and whether you prefer the shorter or longer options. We’ll
                            help clarify the route, logistics and arrangements for your trip.
                        </p>
                        <Link
                            href="/contact"
                            className="mt-7 inline-flex items-center gap-3 border-b border-[#24231F] pb-3 text-xs font-semibold uppercase tracking-[0.15em] transition hover:border-[#E56A2E] hover:text-[#E56A2E]"
                        >
                            Ask about this trip <ArrowIcon />
                        </Link>
                    </div>
                </section>

                {/* CONDITIONS */}
                <section className="border-y border-[#24231F]/15 bg-[#E8DECD]">
                    <div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-[0.5fr_1.5fr] md:px-12 md:py-16">
                        <Eyebrow>On the trail</Eyebrow>
                        <div className="max-w-3xl">
                            <h2 className="font-serif text-3xl leading-tight md:text-4xl">
                                The route has more than one rhythm.
                            </h2>
                            <p className="mt-5 text-sm leading-7 text-[#625E55]">
                                Most riding days offer a shorter and a longer option, but
                                distances, climbing and terrain vary significantly. Day 6
                                includes a single-track section without the support vehicle.
                                Review the stage details with the Ride The Atlas team to
                                understand the riding and support arrangements before
                                confirming your place.
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
                            <Eyebrow>On the trail</Eyebrow>
                            <h2 className="mt-5 font-serif text-4xl md:text-5xl">
                                Saghro in pictures
                            </h2>
                        </div>
                        <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[#777166] sm:block">
                            Southern Morocco
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
                                    More ways to ride Morocco.
                                </h2>
                                <p className="mt-4 max-w-xl text-sm leading-7 text-[#625E55]">
                                    Explore two other multi-day mountain bike journeys with
                                    different landscapes and riding character.
                                </p>
                            </div>
                            <Link
                                href="/mountain-biking"
                                className="w-fit border-b border-[#24231F] pb-3 text-xs font-semibold uppercase tracking-[0.15em] transition hover:border-[#E56A2E] hover:text-[#E56A2E]"
                            >
                                Explore all MTB trips <ArrowIcon />
                            </Link>
                        </div>

                        <div className="mt-12 grid gap-8 md:grid-cols-2">
                            <Link
                                href="/mountain-biking/8-day-mountain-biking-happy-valley-morocco"
                                className="group"
                            >
                                <div className="relative aspect-[5/3] overflow-hidden bg-[#D6CBB9]">
                                    <Image
                                        src="/images/mtb/happy-valley/happy-valley-green-landscapes.jpg"
                                        alt="Green landscapes in Morocco’s Happy Valley"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition duration-700 group-hover:scale-[1.04]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                    <div className="absolute bottom-5 left-5 text-white">
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/75">
                                            8 days · Mountain biking
                                        </span>
                                        <h3 className="mt-2 font-serif text-2xl md:text-3xl">
                                            Happy Valley MTB Tour
                                        </h3>
                                    </div>
                                </div>
                                <div className="flex items-start justify-between gap-4 pt-5">
                                    <p className="max-w-md text-sm leading-6 text-[#625E55]">
                                        Ride through the Mgoun massif, high valleys and villages
                                        of the Central High Atlas.
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
                                href="/mountain-biking/8-day-mountain-biking-eastern-high-atlas-morocco"
                                className="group"
                            >
                                <div className="relative aspect-[5/3] overflow-hidden bg-[#D6CBB9]">
                                    <Image
                                        src="/images/mtb/bikers-riding-on-ridge.jpeg"
                                        alt="Mountain bikers riding a ridge in the Atlas Mountains"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition duration-700 group-hover:scale-[1.04]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                                    <div className="absolute bottom-5 left-5 text-white">
                                        <span className="text-[10px] uppercase tracking-[0.2em] text-white/75">
                                            8 days · Mountain biking
                                        </span>
                                        <h3 className="mt-2 font-serif text-2xl md:text-3xl">
                                            Eastern High Atlas
                                        </h3>
                                    </div>
                                </div>
                                <div className="flex items-start justify-between gap-4 pt-5">
                                    <p className="max-w-md text-sm leading-6 text-[#625E55]">
                                        Discover another side of the Atlas on an eight-day
                                        mountain biking journey.
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
                                Find out more about the Saghro Mountains mountain biking
                                itinerary, route options and logistics. For your dates and
                                riding experience, contact the Ride The Atlas team.
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
                                Ready to ride
                                <br />
                                the Saghro?
                            </h2>
                            <p className="mt-6 max-w-lg text-sm leading-7 text-white/65">
                                Tell us your preferred dates, riding style and whether you
                                would choose the short or long routes. Let’s start planning
                                your mountain biking journey in southern Morocco.
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
