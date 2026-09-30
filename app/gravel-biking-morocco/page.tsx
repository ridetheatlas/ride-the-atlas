import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const images = "/images/gravel-biking/";

const photoStory = [
    {
        src: `${images}gravel-bike-morocco1.jpeg`,
        alt: "Gravel cycling through the Moroccan landscape",
        title: "Beyond the main road",
    },
    {
        src: `${images}gravel-bike-morocco2.jpg`,
        alt: "A gravel bike journey in Morocco",
        title: "A different rhythm",
    },
    {
        src: `${images}gravel-bike-morocco3.jpg`,
        alt: "Open terrain for gravel riding in Morocco",
        title: "Room to explore",
    },
    {
        src: `${images}gravel-bike-morocco4.jpg`,
        alt: "Cycling through a remote Moroccan landscape",
        title: "The long way around",
    },
    {
        src: `${images}gravel-bike-morocco5.jpg`,
        alt: "Gravel riding in the Moroccan countryside",
        title: "Find your own line",
    },
];

const regions = [
    {
        number: "01",
        title: "The High Atlas",
        subtitle: "Big climbs. High passes. Mountain horizons.",
        text: "The High Atlas brings a more mountainous style of gravel riding: long ascents, high passes, valley-to-valley routes and changing conditions at altitude. It is a place for riders who enjoy earning the view.",
        season: "Spring and autumn are commonly suitable windows. High-altitude conditions can change quickly.",
    },
    {
        number: "02",
        title: "The Anti-Atlas",
        subtitle: "Rocky ridges. Arid valleys. A quieter Morocco.",
        text: "South of the High Atlas, the Anti-Atlas offers a different landscape of rugged hills, dry valleys and rural tracks. The terrain and climate vary by route, making local planning important.",
        season: "The cooler months are generally more comfortable for lower-altitude riding.",
    },
    {
        number: "03",
        title: "The pre-Sahara and oasis valleys",
        subtitle: "Palm groves, open pistes and desert-edge landscapes.",
        text: "Around the oasis valleys and the approaches to the Sahara, gravel riding can follow broad tracks between settlements, cultivated land and open, stony terrain. Water, distance and support planning matter here.",
        season: "Spring and autumn are useful starting points; heat needs careful consideration.",
    },
    {
        number: "04",
        title: "The Atlantic coast",
        subtitle: "Ocean air. Rolling tracks. A different kind of escape.",
        text: "The Atlantic side offers a contrast to the mountains and desert: coastal landscapes, rolling terrain and routes influenced by the ocean. Wind and the exact route can shape the day as much as climbing.",
        season: "Coastal conditions can be more moderate, but wind and local weather still matter.",
    },
];

const tripCards = [
    {
        number: "01",
        name: "Atlas Mountains Gravel Tour",
        region: "Marrakesh · High Atlas · Agafay",
        description:
            "Ride from Marrakesh into the High Atlas on a demanding gravel journey across mountain passes, remote valleys and historic southern routes. Highlights include the Tizi n’Tichka climb, a stop near Ait Benhaddou and the gravel tracks of the Agafay desert.",
        duration: "7 days / 6 nights",
        distance: "467 km",
        level: "Advanced",
        image: `${images}gravel-bike-morocco1.jpeg`,
        imageAlt: "Gravel cycling in the Moroccan Atlas Mountains",
        href: "/gravel-biking-morocco/atlas-mountains-gravel-tour",
    },
    {
        number: "02",
        name: "Marrakech to Essaouira Gravel Tour",
        region: "Agafay · High Atlas · Atlantic Coast",
        description:
            "Cross Morocco from the Agafay desert to the Atlantic coast. Climb the Tizi n’Test, ride through the landscapes around Taroudant and Agadir, then follow the coast north through Imsouane to finish in Essaouira.",
        duration: "7 days / 6 nights",
        distance: "520 km",
        level: "Advanced",
        image: `${images}gravel-bike-morocco2.jpg`,
        imageAlt: "Gravel bike adventure through Morocco towards the Atlantic coast",
        href: "/gravel-biking-morocco/marrakech-to-essaouira-gravel-tour",
    },
];

const faqs = [
    {
        question: "What is gravel biking in Morocco like?",
        answer:
            "It depends on the region and route. A ride may combine paved roads, compacted-earth tracks, rougher stony pistes and sections through villages or valleys. The exact surface should always be checked for the chosen trip.",
    },
    {
        question: "Where can you go gravel riding in Morocco?",
        answer:
            "The High Atlas, Anti-Atlas, pre-Sahara and Atlantic coast each offer a different experience. Our current journeys explore the Atlas Mountains and the route from Marrakech to Essaouira.",
    },
    {
        question: "When is the best time to go gravel biking in Morocco?",
        answer:
            "There is no single ideal season for every region. Spring and autumn are useful general planning windows, while winter and summer require more attention to altitude, heat and local conditions.",
    },
    {
        question: "What kind of bike should I bring?",
        answer:
            "A gravel bike with suitable gearing, reliable brakes and tyres matched to the route is a sensible starting point. The best tyre width and setup depend on the actual surface, load and riding style.",
    },
    {
        question: "Do I need to be an experienced cyclist?",
        answer:
            "The two gravel journeys currently presented on this page are rated Advanced. They are designed for riders who are comfortable with demanding distances, sustained climbing and consecutive days on the bike. Check the individual trip details before choosing a tour.",
    },
    {
        question: "Can I join a guided gravel biking tour?",
        answer:
            "Ride The Atlas currently presents two gravel journeys: a route through the Atlas Mountains and a ride from Marrakech to Essaouira. Contact us for details about availability, guiding and trip arrangements.",
    },
    {
        question: "Can I bring my own bike?",
        answer:
            "Bike arrangements depend on the trip. Contact us before booking to confirm whether you should bring your own bike or whether a rental option is available.",
    },
];

export const metadata = {
    title: "Gravel Biking Morocco | Atlas & Essaouira Tours | Ride The Atlas",
    description:
        "Explore Morocco by gravel bike with Ride The Atlas. Ride the High Atlas, climb Tizi n’Tichka or Tizi n’Test, and journey from Marrakech to Essaouira.",
};

export default function GravelBikingMoroccoPage() {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#F3EBDD] text-[#20231F]">
                {/* HERO */}
                <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-[#20231F] text-white">
                    <Image
                        src={`${images}hero-image.jpg`}
                        alt="Gravel biking through the landscapes of Morocco"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-black/25" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                    <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-36 md:px-10 md:pb-24">
                        <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-white/85">
                            <span className="h-px w-10 bg-[#E56A2E]" />
                            Ride The Atlas · Morocco
                        </div>

                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#E56A2E]">
                            Gravel beyond the expected
                        </p>

                        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                            Gravel
                            <br />
                            Biking
                            <br />
                            <span className="text-[#E56A2E]">Morocco.</span>
                        </h1>

                        <p className="mt-7 max-w-xl text-base leading-7 text-white/85 md:text-lg">
                            Leave the familiar road behind. Discover Morocco by gravel
                            bike, from the high passes of the Atlas Mountains to remote
                            valleys and the Atlantic coast.
                        </p>

                        <div className="mt-9 flex flex-wrap gap-3">
                            {["Atlas Mountains", "Remote gravel routes", "Atlantic coast"].map((item) => (
                                <span
                                    key={item}
                                    className="border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em]"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                        <a
                            href="#trips"
                            className="mt-10 inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] transition hover:text-[#E56A2E]"
                        >
                            Explore our gravel trips
                            <span className="text-xl text-[#E56A2E]">↓</span>
                        </a>
                    </div>
                </section>

                {/* PAGE NAV */}
                <nav className="sticky top-0 z-40 border-b border-[#20231F]/10 bg-[#F3EBDD]/95 backdrop-blur">
                    <div className="mx-auto flex max-w-7xl gap-7 overflow-x-auto px-6 py-4 md:px-10">
                        {[
                            ["Discover", "#discover"],
                            ["Why gravel", "#why-gravel"],
                            ["Where to ride", "#regions"],
                            ["Our trips", "#trips"],
                            ["When to go", "#seasons"],
                            ["Bike & kit", "#bike"],
                            ["FAQ", "#faq"],
                        ].map(([label, href]) => (
                            <a
                                key={href}
                                href={href}
                                className="shrink-0 text-[10px] font-bold uppercase tracking-[0.16em] text-[#20231F]/65 transition hover:text-[#E56A2E]"
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </nav>

                {/* INTRODUCTION */}
                <section id="discover" className="scroll-mt-20 px-6 py-24 md:px-10 md:py-32">
                    <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
                        <div>
                            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#E56A2E]">
                                <span className="h-px w-9 bg-[#E56A2E]" />
                                Discover gravel in Morocco
                            </p>

                            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-6xl">
                                A country of
                                <br />
                                roads less travelled.
                            </h2>

                            <div className="mt-9 max-w-2xl space-y-5 text-base leading-8 text-[#20231F]/75">
                                <p>
                                    Morocco is not one gravel destination. It is a collection
                                    of landscapes, climates and riding experiences. From the
                                    high terrain of the Atlas to the dry valleys of the south
                                    and the Atlantic edge, every region has its own rhythm.
                                </p>
                                <p>
                                    Gravel riding offers a way to connect these places at
                                    ground level: following rural tracks, crossing open
                                    country and discovering the smaller roads between
                                    destinations.
                                </p>
                                <p>
                                    Our current journeys take different paths through this
                                    variety. Ride into the High Atlas on a demanding mountain
                                    route, or cross from the Agafay desert towards the
                                    Atlantic coast and Essaouira.
                                </p>
                            </div>
                        </div>

                        <div className="relative min-h-[360px] overflow-hidden lg:min-h-[520px]">
                            <Image
                                src={`${images}gravel-bike-morocco1.jpeg`}
                                alt="A gravel cycling landscape in Morocco"
                                fill
                                sizes="(max-width: 1024px) 100vw, 45vw"
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* WHY GRAVEL */}
                <section
                    id="why-gravel"
                    className="scroll-mt-20 bg-[#20231F] px-6 py-24 text-[#F3EBDD] md:px-10 md:py-32"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="max-w-3xl">
                            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#E56A2E]">
                                <span className="h-px w-9 bg-[#E56A2E]" />
                                The gravel feeling
                            </p>
                            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-6xl">
                                Not quite road.
                                <br />
                                Not quite mountain bike.
                                <br />
                                <span className="text-[#E56A2E]">Entirely its own.</span>
                            </h2>
                        </div>

                        <div className="mt-16 grid gap-10 border-t border-white/20 pt-10 md:grid-cols-3">
                            {[
                                {
                                    n: "01",
                                    title: "Freedom to explore",
                                    text: "Gravel connects paved roads with tracks that lead deeper into rural landscapes. It gives the journey room to change direction.",
                                },
                                {
                                    n: "02",
                                    title: "A changing surface",
                                    text: "Expect variety. Depending on the route, the ride may move between tarmac, firm earth, loose stones and rougher pistes.",
                                },
                                {
                                    n: "03",
                                    title: "A closer connection",
                                    text: "At a cycling pace, the details come forward: a village, a field, a mountain pass or a quiet stretch of road.",
                                },
                            ].map((item) => (
                                <div key={item.n}>
                                    <p className="text-sm font-semibold text-[#E56A2E]">{item.n}</p>
                                    <h3 className="mt-5 text-2xl font-semibold tracking-tight">{item.title}</h3>
                                    <p className="mt-4 max-w-sm text-sm leading-7 text-white/60">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PHOTO STORY */}
                <section className="px-6 py-20 md:px-10 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                            <div>
                                <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#E56A2E]">
                                    <span className="h-px w-9 bg-[#E56A2E]" />
                                    The photo story
                                </p>
                                <h2 className="text-4xl font-semibold tracking-[-0.045em] md:text-6xl">
                                    See where the
                                    <br />
                                    road takes you.
                                </h2>
                            </div>
                            <p className="max-w-sm text-sm leading-7 text-[#20231F]/60">
                                A glimpse of the landscapes and riding experiences that make
                                Morocco worth exploring by gravel bike.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {photoStory.map((photo, index) => (
                                <figure
                                    key={photo.src}
                                    className={`group relative overflow-hidden bg-[#20231F] ${index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                                        }`}
                                >
                                    <div
                                        className={`relative ${index === 0
                                                ? "aspect-[4/3] h-full min-h-[360px]"
                                                : "aspect-[4/3]"
                                            }`}
                                    >
                                        <Image
                                            src={photo.src}
                                            alt={photo.alt}
                                            fill
                                            sizes={
                                                index === 0
                                                    ? "(max-width: 768px) 100vw, 66vw"
                                                    : "(max-width: 768px) 100vw, 33vw"
                                            }
                                            className="object-cover transition duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                                        <figcaption className="absolute bottom-0 left-0 p-5 text-sm font-semibold text-white md:p-7">
                                            {photo.title}
                                        </figcaption>
                                    </div>
                                </figure>
                            ))}
                        </div>
                    </div>
                </section>

                {/* REGIONS */}
                <section
                    id="regions"
                    className="scroll-mt-20 bg-[#E9DDCA] px-6 py-24 md:px-10 md:py-32"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                            <div>
                                <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#E56A2E]">
                                    <span className="h-px w-9 bg-[#E56A2E]" />
                                    Choose your landscape
                                </p>
                                <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-6xl">
                                    Four sides
                                    <br />
                                    of Morocco.
                                </h2>
                            </div>
                            <p className="max-w-2xl self-end text-base leading-8 text-[#20231F]/70">
                                The best gravel journey begins with the right region. Each
                                landscape brings different terrain, weather and demands.
                                Explore the character of each before choosing your ride.
                            </p>
                        </div>

                        <div className="border-t border-[#20231F]/20">
                            {regions.map((region) => (
                                <article
                                    key={region.number}
                                    className="grid gap-5 border-b border-[#20231F]/20 py-9 md:grid-cols-[4rem_0.8fr_1.2fr] md:gap-8"
                                >
                                    <p className="text-sm font-semibold text-[#E56A2E]">{region.number}</p>
                                    <div>
                                        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                                            {region.title}
                                        </h3>
                                        <p className="mt-3 text-sm font-medium text-[#20231F]/55">
                                            {region.subtitle}
                                        </p>
                                    </div>
                                    <div className="max-w-2xl">
                                        <p className="text-sm leading-7 text-[#20231F]/75">{region.text}</p>
                                        <p className="mt-4 text-xs leading-6 text-[#20231F]/55">
                                            <strong className="text-[#20231F]">Seasonal note:</strong>{" "}
                                            {region.season}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* OUR GRAVEL TRIPS */}
                <section id="trips" className="scroll-mt-20 px-6 py-24 md:px-10 md:py-32">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-14 flex flex-col justify-between gap-7 md:flex-row md:items-end">
                            <div>
                                <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#E56A2E]">
                                    <span className="h-px w-9 bg-[#E56A2E]" />
                                    Ride with us
                                </p>

                                <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-6xl">
                                    Find your
                                    <br />
                                    gravel journey.
                                </h2>
                            </div>

                            <p className="max-w-sm text-sm leading-7 text-[#20231F]/65">
                                Two challenging gravel journeys, each with its own character.
                                Cross the High Atlas or ride from the mountains to the
                                Atlantic coast. Choose the route that matches your riding
                                ambitions.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            {tripCards.map((trip) => (
                                <article
                                    key={trip.number}
                                    className="group flex flex-col border border-[#20231F]/20 transition hover:border-[#E56A2E]"
                                >
                                    {/* TRIP IMAGE */}
                                    <Link
                                        href={trip.href}
                                        className="relative block aspect-[16/9] overflow-hidden bg-[#20231F]"
                                        aria-label={`Discover ${trip.name}`}
                                    >
                                        <Image
                                            src={trip.image}
                                            alt={trip.imageAlt}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                        <span className="absolute bottom-5 left-6 text-xs font-bold uppercase tracking-[0.18em] text-white">
                                            Gravel journey · Morocco
                                        </span>
                                    </Link>

                                    {/* TRIP DETAILS */}
                                    <div className="flex flex-1 flex-col p-7 md:p-9">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-semibold text-[#E56A2E]">
                                                {trip.number}
                                            </span>

                                            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#20231F]/45">
                                                Advanced · Gravel
                                            </span>
                                        </div>

                                        <div className="mt-9">
                                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#E56A2E]">
                                                {trip.region}
                                            </p>

                                            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                                                {trip.name}
                                            </h3>

                                            <p className="mt-5 text-sm leading-7 text-[#20231F]/65">
                                                {trip.description}
                                            </p>
                                        </div>

                                        {/* TRIP FACTS */}
                                        <div className="mt-8 grid grid-cols-2 gap-4 border-y border-[#20231F]/15 py-5">
                                            <div>
                                                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#20231F]/45">
                                                    Duration
                                                </p>
                                                <p className="mt-2 text-sm font-semibold">{trip.duration}</p>
                                            </div>

                                            <div>
                                                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#20231F]/45">
                                                    Distance
                                                </p>
                                                <p className="mt-2 text-sm font-semibold">{trip.distance}</p>
                                            </div>

                                            <div>
                                                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#20231F]/45">
                                                    Terrain
                                                </p>
                                                <p className="mt-2 text-sm font-semibold">Gravel</p>
                                            </div>

                                            <div>
                                                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#20231F]/45">
                                                    Level
                                                </p>
                                                <p className="mt-2 text-sm font-semibold">{trip.level}</p>
                                            </div>
                                        </div>

                                        <div className="mt-auto flex items-center justify-between gap-4 pt-6">
                                            <span className="text-xs text-[#20231F]/55">
                                                Ride The Atlas · Morocco
                                            </span>

                                            <Link
                                                href={trip.href}
                                                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#20231F] transition hover:text-[#E56A2E]"
                                            >
                                                Discover trip
                                                <span className="text-base">↗</span>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SEASONS */}
                <section
                    id="seasons"
                    className="scroll-mt-20 bg-[#20231F] px-6 py-24 text-[#F3EBDD] md:px-10 md:py-32"
                >
                    <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                        <div>
                            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#E56A2E]">
                                <span className="h-px w-9 bg-[#E56A2E]" />
                                Plan your ride
                            </p>
                            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-6xl">
                                Follow the
                                <br />
                                seasons.
                            </h2>
                        </div>

                        <div className="space-y-8">
                            <p className="max-w-2xl text-base leading-8 text-white/65">
                                Morocco has several climate zones. The right time to ride
                                depends on altitude, region and daily conditions—not just
                                the month. These are general planning pointers, not a
                                substitute for checking the route before departure.
                            </p>

                            {[
                                [
                                    "Spring",
                                    "A useful period to explore many mountain and southern routes. Conditions vary with altitude and the year.",
                                ],
                                [
                                    "Summer",
                                    "Lowland and desert heat can be intense. Higher routes may be more suitable, with careful timing and local advice.",
                                ],
                                [
                                    "Autumn",
                                    "Often a good time to consider mountain and desert-edge journeys as temperatures begin to ease.",
                                ],
                                [
                                    "Winter",
                                    "The coast and some southern regions may offer milder riding, while snow and cold can affect high mountain routes.",
                                ],
                            ].map(([season, description]) => (
                                <div
                                    key={season}
                                    className="grid gap-3 border-t border-white/20 pt-5 sm:grid-cols-[8rem_1fr]"
                                >
                                    <h3 className="text-lg font-semibold">{season}</h3>
                                    <p className="text-sm leading-7 text-white/60">{description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* BIKE AND EQUIPMENT */}
                <section id="bike" className="scroll-mt-20 px-6 py-24 md:px-10 md:py-32">
                    <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
                        <div>
                            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#E56A2E]">
                                <span className="h-px w-9 bg-[#E56A2E]" />
                                Bike and equipment
                            </p>
                            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-6xl">
                                Set up for
                                <br />
                                the surface.
                            </h2>
                        </div>

                        <div className="space-y-7 text-sm leading-7 text-[#20231F]/70">
                            <p>
                                Gravel routes in Morocco can vary significantly. A firm
                                valley track is very different from a loose, rocky mountain
                                piste. Your bike setup should match the specific route, not
                                simply the word “gravel”.
                            </p>

                            {[
                                [
                                    "Tyres",
                                    "Choose a tyre width and tread suited to the route’s actual surface. Wider tyres can offer more comfort and control on rougher tracks.",
                                ],
                                [
                                    "Gearing",
                                    "Low enough gearing makes sustained climbs and loaded riding more manageable.",
                                ],
                                [
                                    "Brakes",
                                    "Reliable brakes and well-maintained pads are important on long or steep descents.",
                                ],
                                [
                                    "Repair kit",
                                    "Carry the tools and spares appropriate to your bike, including a way to repair a puncture.",
                                ],
                                [
                                    "Navigation",
                                    "Bring a reliable navigation device or route backup, especially where tracks are remote or intersections are unclear.",
                                ],
                                [
                                    "Water and sun protection",
                                    "Plan water capacity and sun protection around the route, temperature and availability of resupply.",
                                ],
                            ].map(([title, description]) => (
                                <div key={title} className="border-t border-[#20231F]/15 pt-5">
                                    <h3 className="font-semibold text-[#20231F]">{title}</h3>
                                    <p className="mt-2">{description}</p>
                                </div>
                            ))}

                            <p className="text-xs text-[#20231F]/50">
                                Final equipment recommendations should be confirmed against
                                the route and season of your chosen trip.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section
                    id="faq"
                    className="scroll-mt-20 bg-[#E9DDCA] px-6 py-24 md:px-10 md:py-32"
                >
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                        <div>
                            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#E56A2E]">
                                <span className="h-px w-9 bg-[#E56A2E]" />
                                Good to know
                            </p>
                            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-6xl">
                                Gravel
                                <br />
                                questions.
                            </h2>
                        </div>

                        <div className="border-t border-[#20231F]/20">
                            {faqs.map((faq) => (
                                <details key={faq.question} className="group border-b border-[#20231F]/20">
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-base font-semibold">
                                        {faq.question}
                                        <span className="text-xl font-normal text-[#E56A2E] transition group-open:rotate-45">
                                            +
                                        </span>
                                    </summary>
                                    <p className="max-w-2xl pb-7 pr-10 text-sm leading-7 text-[#20231F]/65">
                                        {faq.answer}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="relative overflow-hidden bg-[#E56A2E] px-6 py-24 text-[#20231F] md:px-10 md:py-32">
                    <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-between gap-12 lg:flex-row lg:items-end">
                        <div>
                            <p className="mb-6 text-xs font-bold uppercase tracking-[0.24em]">
                                Your next ride starts here
                            </p>
                            <h2 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-7xl">
                                Find your road.
                                <br />
                                Ride your Atlas.
                            </h2>
                            <p className="mt-7 max-w-xl text-base leading-7 text-[#20231F]/75">
                                Tell us what kind of gravel journey you have in mind. We’ll
                                help you find the right route through Morocco.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex w-fit items-center gap-6 border border-[#20231F] px-7 py-5 text-xs font-bold uppercase tracking-[0.18em] transition hover:bg-[#20231F] hover:text-[#F3EBDD]"
                        >
                            Talk to Ride The Atlas
                            <span className="text-xl">↗</span>
                        </Link>
                    </div>
                </section>
            </main>

            <SiteFooter />
        </>
    );
}