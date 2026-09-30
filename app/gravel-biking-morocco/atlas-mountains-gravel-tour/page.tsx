
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const images = "/images/gravel-biking/";

export const metadata: Metadata = {
    title: "Atlas Mountains Gravel Tour in Morocco | Ride The Atlas",
    description:
        "Explore Morocco on a challenging 7-day Atlas Mountains gravel tour from Marrakesh. Ride Tizi n’Tichka, Ait Benhaddou, Imlil and the Agafay landscape.",
    keywords: [
        "Atlas Mountains gravel tour",
        "gravel biking Morocco",
        "Morocco gravel cycling",
        "High Atlas cycling tour",
        "Marrakesh gravel bike tour",
    ],
};

const tourFacts = [
    { label: "Duration", value: "7 days / 6 nights" },
    { label: "Distance", value: "467 km" },
    { label: "Region", value: "Morocco" },
    { label: "Terrain", value: "Gravel" },
    { label: "Difficulty", value: "Advanced" },
    { label: "Daily average", value: "93 km / 6h10" },
];

const gallery = [
    {
        src: "gravel-bike-morocco1.jpeg",
        alt: "Gravel biking through the Moroccan landscape",
        label: "The Atlas by gravel bike",
    },
    {
        src: "gravel-bike-morocco2.jpg",
        alt: "A gravel cycling landscape in Morocco",
        label: "Remote roads and open landscapes",
    },
    {
        src: "gravel-bike-morocco3.jpg",
        alt: "Gravel bike adventure in the Atlas region",
        label: "Into the mountains",
    },
    {
        src: "gravel-bike-morocco4.jpg",
        alt: "Cycling terrain on a Moroccan gravel route",
        label: "A varied route",
    },
    {
        src: "gravel-bike-morocco5.jpg",
        alt: "Moroccan gravel cycling scenery",
        label: "Discover Morocco",
    },
];

const highlights = [
    {
        number: "01",
        title: "Ride into the High Atlas",
        text: "Leave Marrakesh behind and follow gravel roads into mountain valleys, traditional villages and changing landscapes.",
    },
    {
        number: "02",
        title: "Cross Tizi n’Tichka",
        text: "Take on a defining mountain climb as the route travels south through the Atlas.",
    },
    {
        number: "03",
        title: "See Ait Benhaddou",
        text: "Stop for lunch with a view of the historic mud-brick ksar, a UNESCO World Heritage Site.",
    },
    {
        number: "04",
        title: "Experience local hospitality",
        text: "Meet local people, enjoy mint tea and discover the warmth of Berber hospitality along the route.",
    },
    {
        number: "05",
        title: "Taste Moroccan food",
        text: "Enjoy local dishes including tagines and couscous, as well as fresh juices and traditional tea.",
    },
    {
        number: "06",
        title: "Finish through Agafay",
        text: "Return towards Marrakesh across gravel roads in the distinctive Agafay landscape.",
    },
];

const itinerary = [
    {
        day: "01",
        title: "Welcome to Marrakesh",
        location: "Marrakesh",
        distance: "Arrival day",
        ascent: "",
        image: "gravel-bike-morocco1.jpeg",
        imageAlt: "Gravel bike ready for a cycling journey in Morocco",
        description: [
            "Your journey begins in Marrakesh. Meet the team, get your bike set up and prepare for the days ahead.",
            "If time allows, join an optional walking tour of the city. In the evening, gather for a welcome meal and a briefing about the route and the week ahead.",
        ],
        route: "Arrival, bike set-up and welcome",
    },
    {
        day: "02",
        title: "Ait Ourir to Telouet",
        location: "Zat Valley · Tizi n’Tichka · Telouet",
        distance: "82 km",
        ascent: "2,147 m ascent",
        image: "gravel-bike-morocco2.jpg",
        imageAlt: "Mountain scenery on a gravel cycling route in Morocco",
        description: [
            "Start from Ait Ourir and ride south into the Atlas. The route passes through Tassourte, where farmers and shepherds work the land, before reaching the Zat Valley for a mint tea stop.",
            "Continue climbing towards Tizi n’Tichka, then make your way to Telouet, home to the historic Kasbah du Pacha.",
        ],
        route: "Ait Ourir → Telouet",
    },
    {
        day: "03",
        title: "Telouet to Agouim via Ait Benhaddou",
        location: "Ounila Valley · Ait Benhaddou · Agouim",
        distance: "92 km",
        ascent: "1,186 m ascent",
        image: "gravel-bike-morocco3.jpg",
        imageAlt: "Moroccan landscape along a gravel cycling route",
        description: [
            "Follow the old Spice Caravan route through the Ounila Valley, passing through a landscape of traditional villages and striking mountain scenery.",
            "Stop for lunch overlooking Ait Benhaddou, the historic mud-brick ksar recognised as a UNESCO World Heritage Site. Continue to Agouim for the night.",
        ],
        route: "Telouet → Ait Benhaddou → Agouim",
    },
    {
        day: "04",
        title: "Agouim to Amsouzart",
        location: "Anti-Atlas · Low Atlas · Amsouzart Valley",
        distance: "77 km",
        ascent: "1,463 m ascent",
        image: "gravel-bike-morocco4.jpg",
        imageAlt: "Open mountain terrain in Morocco",
        description: [
            "Discover a different side of the mountains as the route crosses the landscapes of the Anti-Atlas and Low Atlas.",
            "Ride towards the Amsouzart Valley, continuing deeper into the mountain environment and away from the more familiar routes.",
        ],
        route: "Agouim → Amsouzart",
    },
    {
        day: "05",
        title: "Azgrouz to Imlil via Ijoukak",
        location: "Azgrouz · Ijoukak Valley · Imlil",
        distance: "108 km",
        ascent: "2,157 m ascent",
        image: "gravel-bike-morocco5.jpg",
        imageAlt: "A challenging gravel route through the Atlas Mountains",
        description: [
            "After a transfer of around one and a half hours to Azgrouz, take on a demanding climb towards the highest point of the route.",
            "Descend into the foothills and follow the Ijoukak Valley into the High Atlas. The day continues along an old caravan route towards Imlil.",
        ],
        route: "Azgrouz → Ijoukak → Imlil",
    },
    {
        day: "06",
        title: "Imlil to Marrakesh",
        location: "Agafay · Lalla Takerkoust · Marrakesh",
        distance: "79 km",
        ascent: "910 m ascent",
        image: "hero-image.jpg",
        imageAlt: "Gravel cycling scenery in Morocco",
        description: [
            "The final ride takes you across gravel roads through the Agafay landscape and around Lalla Takerkoust before returning to Marrakesh.",
            "In the evening, come together for a final dinner and a chance to look back on the journey.",
        ],
        route: "Imlil → Agafay → Lalla Takerkoust → Marrakesh",
    },
    {
        day: "07",
        title: "Departure from Marrakesh",
        location: "Marrakesh",
        distance: "Departure day",
        ascent: "",
        image: "gravel-bike-morocco1.jpeg",
        imageAlt: "Morocco gravel tour landscape",
        description: [
            "Your tour comes to an end in Marrakesh. Depart from Marrakesh Menara Airport or continue your travels independently.",
        ],
        route: "Tour ends in Marrakesh",
    },
];

const faqs = [
    {
        question: "How long is the Atlas Mountains Gravel Tour?",
        answer:
            "The tour is listed as 7 days and 6 nights, with a stated total distance of 467 km. The riding itinerary includes five main riding stages, as well as an arrival day and a departure day.",
    },
    {
        question: "How difficult is this gravel tour?",
        answer:
            "The tour is rated Advanced, 3 out of 4. It is intended for regular, experienced riders who are comfortable with consecutive challenging days, long climbs and varied gravel terrain.",
    },
    {
        question: "How much do we ride each day?",
        answer:
            "The stated average is 93 km and around 6 hours 10 minutes per day. Individual stage distances and climbing figures are shown in the itinerary above. Arrival and departure days are not full riding stages.",
    },
    {
        question: "What kind of terrain should I expect?",
        answer:
            "The tour follows gravel roads through mountain passes, valleys, villages and the Agafay landscape. The route includes long climbs and descents, so confident bike handling is important.",
    },
    {
        question: "Where do we stay during the tour?",
        answer:
            "The tour uses simple, characterful accommodation, including local guesthouses, riads and one village homestay.",
    },
    {
        question: "What food can I expect?",
        answer:
            "The tour gives you the chance to enjoy Moroccan food, including tagines and couscous, alongside fresh juices and traditional tea.",
    },
    {
        question: "Are e-bikes available?",
        answer:
            "E-bikes are available on all tours. Contact us to discuss whether an e-bike is suitable for this route and your riding plans.",
    },
    {
        question: "Does the tour visit Ait Benhaddou?",
        answer:
            "Yes. On Day 3, the route travels from Telouet towards Agouim via Ait Benhaddou, with a lunch stop overlooking the historic site.",
    },
    {
        question: "Where does the tour start and finish?",
        answer:
            "The tour begins in Marrakesh and returns to Marrakesh on Day 6. Day 7 is the departure day from Marrakesh.",
    },
    {
        question: "Is there another gravel tour to compare?",
        answer:
            "Yes. The Marrakech to Essaouira Gravel Tour follows a different route, travelling from the Agafay and High Atlas region towards Morocco’s Atlantic coast. You can read about it in the related tour section below.",
    },
];

const pageNavigation = [
    { label: "Overview", href: "#overview" },
    { label: "Highlights", href: "#highlights" },
    { label: "The route", href: "#itinerary" },
    { label: "Difficulty", href: "#difficulty" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQs", href: "#faqs" },
];

export default function AtlasMountainsGravelTourPage() {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#F3EBDD] text-[#20231F]">
                {/* HERO */}
                <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-[#20231F]">
                    <Image
                        src={`${images}hero-image.jpg`}
                        alt="Gravel biking adventure in the Moroccan Atlas Mountains"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-black/25" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                    <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 sm:px-10 lg:px-16 lg:pb-24">
                        <div className="max-w-4xl">
                            <div className="mb-6 flex items-center gap-3">
                                <span className="h-[2px] w-10 bg-[#E56A2E]" />
                                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/90">
                                    Gravel biking · Morocco
                                </p>
                            </div>

                            <h1 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-8xl">
                                Atlas Mountains
                                <span className="block text-[#E56A2E]">Gravel Tour</span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                                Seven days of challenging gravel riding through Morocco’s
                                High Atlas, connecting mountain passes, remote valleys,
                                historic villages and the landscapes around Marrakesh.
                            </p>

                            <div className="mt-9 flex flex-wrap items-center gap-4">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center bg-[#E56A2E] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#c95622]"
                                >
                                    Enquire about this tour
                                </Link>
                                <a
                                    href="#itinerary"
                                    className="inline-flex items-center justify-center border border-white/70 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#20231F]"
                                >
                                    View the itinerary
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-7 right-6 z-10 hidden text-right text-xs uppercase tracking-[0.2em] text-white/70 sm:block lg:right-16">
                        <span className="text-[#E56A2E]">01</span> / Atlas Mountains
                    </div>
                </section>

                {/* SECTION NAVIGATION */}
                <nav
                    aria-label="Tour page navigation"
                    className="sticky top-0 z-40 border-b border-[#20231F]/15 bg-[#F3EBDD]/95 backdrop-blur"
                >
                    <div className="mx-auto flex max-w-7xl gap-7 overflow-x-auto px-6 py-4 text-xs font-semibold uppercase tracking-[0.13em] sm:px-10 lg:px-16">
                        {pageNavigation.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="shrink-0 text-[#20231F]/65 transition hover:text-[#E56A2E]"
                            >
                                {item.label}
                            </a>
                        ))}
                        <Link
                            href="/contact"
                            className="shrink-0 text-[#E56A2E] transition hover:text-[#20231F]"
                        >
                            Enquire
                        </Link>
                    </div>
                </nav>

                {/* TOUR FACTS */}
                <section className="border-b border-[#20231F]/15">
                    <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-[#20231F]/15 sm:grid-cols-3 lg:grid-cols-6">
                        {tourFacts.map((fact) => (
                            <div key={fact.label} className="bg-[#F3EBDD] px-5 py-6 sm:px-6">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#20231F]/55">
                                    {fact.label}
                                </p>
                                <p className="mt-2 text-base font-semibold sm:text-lg">
                                    {fact.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* OVERVIEW */}
                <section
                    id="overview"
                    className="scroll-mt-20 px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
                >
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
                        <div>
                            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#E56A2E]">
                                The journey
                            </p>
                            <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                                From Marrakesh into the heart of the Atlas.
                            </h2>
                            <p className="mt-7 max-w-xl text-lg leading-8 text-[#20231F]/70">
                                A gravel journey through mountain country, shaped by
                                challenging riding and encounters with the people and places
                                of Morocco.
                            </p>
                        </div>

                        <div className="space-y-5 text-base leading-8 text-[#20231F]/75">
                            <p>
                                Leave the energy of Marrakesh behind and ride into the
                                landscapes of the High Atlas. This tour links mountain
                                passes, traditional villages and remote valleys, following
                                gravel roads through a changing landscape.
                            </p>
                            <p>
                                The route includes the climb towards Tizi n’Tichka, a lunch
                                stop overlooking Ait Benhaddou, and a journey through the
                                valleys and foothills towards Imlil and Agafay.
                            </p>
                            <p>
                                Along the way, experience local hospitality, share mint tea
                                and enjoy Moroccan food, including tagines, couscous and
                                fresh juices. Accommodation is simple and characterful,
                                including local guesthouses, riads and one village homestay.
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto mt-16 grid max-w-7xl gap-4 sm:grid-cols-3">
                        <div className="border-t border-[#20231F]/20 pt-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E56A2E]">
                                Start
                            </p>
                            <p className="mt-2 text-xl font-semibold">Marrakesh</p>
                        </div>
                        <div className="border-t border-[#20231F]/20 pt-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E56A2E]">
                                Through
                            </p>
                            <p className="mt-2 text-xl font-semibold">
                                High Atlas & mountain valleys
                            </p>
                        </div>
                        <div className="border-t border-[#20231F]/20 pt-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E56A2E]">
                                Finish
                            </p>
                            <p className="mt-2 text-xl font-semibold">Marrakesh</p>
                        </div>
                    </div>
                </section>

                {/* HIGHLIGHTS */}
                <section
                    id="highlights"
                    className="scroll-mt-20 bg-[#20231F] px-6 py-20 text-[#F3EBDD] sm:px-10 lg:px-16 lg:py-28"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-14 max-w-2xl">
                            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#E56A2E]">
                                Tour highlights
                            </p>
                            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                                A week shaped by the mountains.
                            </h2>
                            <p className="mt-6 text-base leading-8 text-white/65">
                                More than a ride from one place to another: a route through
                                the landscapes, culture and hospitality of the Atlas.
                            </p>
                        </div>

                        <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                            {highlights.map((item) => (
                                <div
                                    key={item.number}
                                    className="border-t border-white/20 pt-6"
                                >
                                    <p className="mb-8 text-sm font-semibold text-[#E56A2E]">
                                        {item.number}
                                    </p>
                                    <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                                    <p className="max-w-sm text-sm leading-7 text-white/65">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PHOTO GALLERY */}
                <section
                    id="gallery"
                    className="scroll-mt-20 px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
                            <div>
                                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#E56A2E]">
                                    The landscape
                                </p>
                                <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                                    A closer look at the ride.
                                </h2>
                            </div>
                            <p className="max-w-md text-sm leading-7 text-[#20231F]/65">
                                Gravel roads, mountain terrain and the changing scenery of
                                Morocco. A few views from the world of Ride The Atlas.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
                            {gallery.map((photo, index) => (
                                <figure
                                    key={photo.src}
                                    className={`group relative overflow-hidden bg-[#20231F] ${index === 0
                                            ? "aspect-[4/5] sm:row-span-2 lg:col-span-5"
                                            : index === 1
                                                ? "aspect-[5/3] lg:col-span-7"
                                                : index === 2
                                                    ? "aspect-[5/3] lg:col-span-4"
                                                    : index === 3
                                                        ? "aspect-[5/3] lg:col-span-4"
                                                        : "aspect-[5/3] lg:col-span-4"
                                        }`}
                                >
                                    <Image
                                        src={`${images}${photo.src}`}
                                        alt={photo.alt}
                                        fill
                                        sizes={
                                            index === 0
                                                ? "(max-width: 640px) 100vw, 42vw"
                                                : "(max-width: 1024px) 100vw, 30vw"
                                        }
                                        className="object-cover transition duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                                    <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-sm font-semibold text-white sm:p-6">
                                        {photo.label}
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                </section>

                {/* DIFFICULTY */}
                <section
                    id="difficulty"
                    className="scroll-mt-20 border-y border-[#20231F]/10 bg-[#E9DFCE] px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
                >
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                        <div>
                            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#E56A2E]">
                                Know before you go
                            </p>
                            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                                Built for experienced riders.
                            </h2>

                            <div className="mt-8 inline-flex items-center gap-5 border border-[#20231F]/20 px-5 py-4">
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#20231F]/55">
                                        Difficulty
                                    </p>
                                    <p className="mt-1 text-lg font-semibold">Advanced</p>
                                </div>
                                <div className="h-10 w-px bg-[#20231F]/20" />
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#20231F]/55">
                                        Tour rating
                                    </p>
                                    <p className="mt-1 text-lg font-semibold">3 / 4</p>
                                </div>
                            </div>

                            <div className="mt-8">
                                <div className="mb-2 flex justify-between text-[10px] font-semibold uppercase tracking-[0.16em] text-[#20231F]/55">
                                    <span>Tour difficulty</span>
                                    <span>3 of 4</span>
                                </div>
                                <div className="flex gap-2">
                                    {[1, 2, 3, 4].map((step) => (
                                        <span
                                            key={step}
                                            className={`h-2 flex-1 ${step <= 3 ? "bg-[#E56A2E]" : "bg-[#20231F]/15"
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-5 text-base leading-8 text-[#20231F]/75">
                            <p>
                                This tour is designed for regular cyclists who are comfortable
                                with consecutive challenging days and long climbs. Riders
                                should be able to manage their effort over extended distances
                                and varied terrain.
                            </p>
                            <p>
                                The route includes demanding ascents and descents. Good bike
                                handling is important, particularly on corners and downhill
                                sections. Riders should feel confident riding at their own
                                pace on gravel.
                            </p>
                            <p>
                                E-bikes are available on all tours. If you are unsure whether
                                this route matches your experience, contact us before making
                                your plans.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ITINERARY */}
                <section
                    id="itinerary"
                    className="scroll-mt-20 px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-14 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
                            <div>
                                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#E56A2E]">
                                    Day by day
                                </p>
                                <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                                    The Atlas Mountains itinerary.
                                </h2>
                            </div>
                            <p className="max-w-xl text-sm leading-7 text-[#20231F]/70 lg:justify-self-end">
                                Follow the journey from Marrakesh into the mountains and back
                                again. Each stage brings a new landscape and a different
                                part of Morocco into view.
                            </p>
                        </div>

                        <div className="space-y-5">
                            {itinerary.map((item) => (
                                <article
                                    key={item.day}
                                    className="grid overflow-hidden border border-[#20231F]/15 bg-[#F7F1E7] lg:grid-cols-[0.85fr_1.15fr]"
                                >
                                    <div className="relative min-h-[260px] bg-[#20231F] sm:min-h-[320px]">
                                        <Image
                                            src={`${images}${item.image}`}
                                            alt={item.imageAlt}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 42vw"
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                                        <div className="absolute bottom-5 left-5 flex items-end gap-4 text-white sm:bottom-7 sm:left-7">
                                            <span className="text-5xl font-semibold leading-none text-[#E56A2E]">
                                                {item.day}
                                            </span>
                                            <span className="pb-1 text-xs font-semibold uppercase tracking-[0.2em]">
                                                Day {Number(item.day)}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                                        <div>
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E56A2E]">
                                                {item.location}
                                            </p>
                                            <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                                                {item.title}
                                            </h3>

                                            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-y border-[#20231F]/15 py-4 text-xs font-semibold">
                                                <span>{item.distance}</span>
                                                {item.ascent && (
                                                    <span className="text-[#20231F]/60">
                                                        {item.ascent}
                                                    </span>
                                                )}
                                            </div>

                                            <div className="mt-5 space-y-4 text-sm leading-7 text-[#20231F]/75">
                                                {item.description.map((paragraph) => (
                                                    <p key={paragraph}>{paragraph}</p>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-7 border-t border-[#20231F]/15 pt-4">
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#20231F]/45">
                                                Stage
                                            </p>
                                            <p className="mt-2 text-sm font-semibold">{item.route}</p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <p className="mt-8 max-w-3xl text-xs leading-6 text-[#20231F]/55">
                            Distances and elevation figures are shown as supplied for each
                            stage. Arrival and departure days are included in the 7-day
                            itinerary.
                        </p>
                    </div>
                </section>

                {/* ACCOMMODATION AND CULTURE */}
                <section className="bg-[#20231F] px-6 py-20 text-[#F3EBDD] sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
                        <div>
                            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#E56A2E]">
                                Beyond the bike
                            </p>
                            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                                The people, food and places along the way.
                            </h2>
                        </div>

                        <div className="space-y-6 text-base leading-8 text-white/70">
                            <p>
                                The Atlas is not only a landscape to ride through. It is also
                                a place to meet local communities, experience Berber
                                hospitality and take time to appreciate the culture of the
                                region.
                            </p>
                            <p>
                                Expect Moroccan dishes such as tagines and couscous, fresh
                                juices and traditional tea. The tour stays in local
                                guesthouses, riads and one village homestay, offering a
                                simple and locally rooted way to experience the journey.
                            </p>
                            <p>
                                An optional walking tour in Marrakesh offers a chance to
                                explore the city at the beginning of the trip.
                            </p>
                        </div>
                    </div>
                </section>

                {/* RELATED TOUR */}
                <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 max-w-2xl">
                            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#E56A2E]">
                                Explore another route
                            </p>
                            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                                Looking for a different gravel journey?
                            </h2>
                            <p className="mt-5 text-base leading-8 text-[#20231F]/70">
                                Compare this Atlas route with our gravel journey from
                                Marrakech towards the Atlantic coast.
                            </p>
                        </div>

                        <article className="grid overflow-hidden border border-[#20231F]/15 bg-[#F7F1E7] md:grid-cols-2">
                            <div className="relative min-h-[300px] bg-[#20231F] md:min-h-[420px]">
                                <Image
                                    src={`${images}gravel-bike-morocco2.jpg`}
                                    alt="Gravel cycling landscape in Morocco"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover"
                                />
                                <div className="absolute left-5 top-5 bg-[#E56A2E] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white">
                                    Related gravel tour
                                </div>
                            </div>

                            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
                                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E56A2E]">
                                    Agafay · High Atlas · Atlantic Coast
                                </p>
                                <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                                    Marrakech to Essaouira Gravel Tour
                                </h3>
                                <p className="mt-5 text-sm leading-7 text-[#20231F]/70">
                                    A 7-day gravel journey travelling west from the Agafay and
                                    High Atlas region towards the Atlantic coast. Ride through
                                    mountain landscapes and coastal terrain before reaching
                                    Essaouira.
                                </p>

                                <div className="mt-7 grid grid-cols-3 gap-4 border-y border-[#20231F]/15 py-5">
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#20231F]/50">
                                            Duration
                                        </p>
                                        <p className="mt-2 text-sm font-semibold">7 days</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#20231F]/50">
                                            Distance
                                        </p>
                                        <p className="mt-2 text-sm font-semibold">520 km</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#20231F]/50">
                                            Level
                                        </p>
                                        <p className="mt-2 text-sm font-semibold">Advanced</p>
                                    </div>
                                </div>

                                <Link
                                    href="/gravel-biking-morocco/marrakech-to-essaouira-gravel-tour"
                                    className="mt-8 inline-flex w-fit items-center gap-4 bg-[#20231F] px-6 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#E56A2E]"
                                >
                                    Discover this tour
                                    <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </article>
                    </div>
                </section>

                {/* FAQ */}
                <section
                    id="faqs"
                    className="scroll-mt-20 border-t border-[#20231F]/15 bg-[#E9DFCE] px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
                >
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
                        <div>
                            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#E56A2E]">
                                Frequently asked questions
                            </p>
                            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                                Before you ride.
                            </h2>
                            <p className="mt-6 max-w-sm text-sm leading-7 text-[#20231F]/65">
                                A few useful details about the route, riding level and
                                experience. For anything else, get in touch with us.
                            </p>
                            <Link
                                href="/contact"
                                className="mt-8 inline-flex items-center gap-3 border-b border-[#E56A2E] pb-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#20231F] transition hover:text-[#E56A2E]"
                            >
                                Ask us a question <span aria-hidden="true">→</span>
                            </Link>
                        </div>

                        <div className="border-t border-[#20231F]/20">
                            {faqs.map((faq, index) => (
                                <details
                                    key={faq.question}
                                    className="group border-b border-[#20231F]/20"
                                >
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left">
                                        <span className="flex gap-5 text-base font-semibold sm:text-lg">
                                            <span className="text-xs font-semibold text-[#E56A2E]">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            {faq.question}
                                        </span>
                                        <span className="shrink-0 text-2xl font-light text-[#E56A2E] transition group-open:rotate-45">
                                            +
                                        </span>
                                    </summary>
                                    <div className="pb-7 pl-9 pr-8 text-sm leading-7 text-[#20231F]/70 sm:pl-10">
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="relative overflow-hidden bg-[#20231F] px-6 py-24 text-center text-[#F3EBDD] sm:px-10 lg:px-16 lg:py-32">
                    <div className="absolute left-1/2 top-0 h-px w-24 -translate-x-1/2 bg-[#E56A2E]" />
                    <div className="relative mx-auto max-w-3xl">
                        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#E56A2E]">
                            Ride The Atlas
                        </p>
                        <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                            Your next gravel journey starts here.
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/65">
                            Interested in riding through the Atlas Mountains? Contact us
                            to ask about the tour and discuss whether it suits your
                            experience.
                        </p>

                        <div className="mt-9 flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center bg-[#E56A2E] px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#c95622]"
                            >
                                Enquire about this tour
                            </Link>
                            <Link
                                href="/gravel-biking-morocco"
                                className="inline-flex items-center justify-center border border-white/50 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-white hover:text-[#20231F]"
                            >
                                Explore all gravel tours
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <SiteFooter />
        </>
    );
}