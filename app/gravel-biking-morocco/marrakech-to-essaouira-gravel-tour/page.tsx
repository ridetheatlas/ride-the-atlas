
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const images = "/images/gravel-biking/";

export const metadata: Metadata = {
    title: "Marrakech to Essaouira Gravel Tour | Ride The Atlas",
    description:
        "Ride a 7-day, 520 km gravel tour from Marrakech towards Essaouira, crossing the Agafay landscape, High Atlas and Atlantic coast of Morocco.",
    keywords: [
        "Marrakech to Essaouira gravel tour",
        "Morocco gravel biking",
        "gravel cycling Morocco",
        "Tizi n’Test cycling",
        "Essaouira cycling tour",
        "Atlas Mountains gravel bike",
    ],
};

const facts = [
    { label: "Duration", value: "7 days / 6 nights" },
    { label: "Distance", value: "520 km" },
    { label: "Region", value: "Morocco" },
    { label: "Terrain", value: "Gravel" },
    { label: "Difficulty", value: "Advanced" },
    { label: "Daily average", value: "86 km / 5h45" },
];

const navigation = [
    { label: "Overview", href: "#overview" },
    { label: "Highlights", href: "#highlights" },
    { label: "Gallery", href: "#gallery" },
    { label: "Itinerary", href: "#itinerary" },
    { label: "Difficulty", href: "#difficulty" },
    { label: "FAQs", href: "#faqs" },
];

const gallery = [
    {
        src: "gravel-bike-morocco2.jpg",
        alt: "Gravel cycling landscape in Morocco",
        label: "Across Morocco by gravel bike",
    },
    {
        src: "gravel-bike-morocco3.jpg",
        alt: "Mountain terrain on a Moroccan gravel route",
        label: "Mountain roads and open terrain",
    },
    {
        src: "gravel-bike-morocco4.jpg",
        alt: "A gravel cycling route through Morocco",
        label: "The road west",
    },
    {
        src: "gravel-bike-morocco5.jpg",
        alt: "Moroccan landscape on a gravel biking trip",
        label: "Changing landscapes",
    },
    {
        src: "gravel-bike-morocco1.jpeg",
        alt: "Gravel bike adventure in Morocco",
        label: "The journey continues",
    },
];

const highlights = [
    {
        number: "01",
        title: "From Agafay to the coast",
        text: "Travel west from the landscapes around Marrakech towards the Atlantic, riding through varied terrain along the way.",
    },
    {
        number: "02",
        title: "Climb Tizi n’Test",
        text: "Take on a major mountain pass, climbing towards 2,100 metres before descending towards Taroudant.",
    },
    {
        number: "03",
        title: "Ride the Atlantic coast",
        text: "Follow the route towards Agadir, Tamri and Imsouane, with the landscapes of the coast shaping the later stages.",
    },
    {
        number: "04",
        title: "Discover Imsouane",
        text: "Reach the coastal surf town after a day of rolling terrain and demanding climbs.",
    },
    {
        number: "05",
        title: "Finish in Essaouira",
        text: "Complete the ride in Essaouira, with time to enjoy its beach and medina.",
    },
    {
        number: "06",
        title: "Experience local hospitality",
        text: "Meet local communities and enjoy Moroccan food, including tagines, couscous, fresh juices and tea.",
    },
];

const itinerary = [
    {
        day: "01",
        title: "Welcome to Agafay",
        location: "Marrakech · Agafay",
        distance: "36 km",
        ascent: "500 m ascent",
        image: "hero-image.jpg",
        imageAlt: "Gravel cycling in the Moroccan landscape",
        route: "Marrakech → Agafay",
        description: [
            "Meet at the agreed meeting point in Marrakech before a short transfer south to Agafay, where the tour begins.",
            "Get your bike set up and head out for a short warm-up ride across the rolling terrain. This first stage offers an introduction to the gravel riding ahead.",
        ],
    },
    {
        day: "02",
        title: "Agafay to Ouirgane",
        location: "Oued N’Fis · Tizi Oula · Ouirgane",
        distance: "57 km",
        ascent: "1,100 m ascent",
        image: "gravel-bike-morocco1.jpeg",
        imageAlt: "Gravel road through the landscapes of Morocco",
        route: "Agafay → Ouirgane",
        description: [
            "Leave Agafay and follow the Oued N’Fis before taking on a gravel climb of around 7 km towards Tizi Oula.",
            "The route continues through the changing terrain towards Ouirgane, with the final kilometres on paved roads.",
        ],
    },
    {
        day: "03",
        title: "Ijoukak to Taroudant via Tizi n’Test",
        location: "Ijoukak · Tizi n’Test · Taroudant",
        distance: "140 km",
        ascent: "1,900 m ascent",
        image: "gravel-bike-morocco2.jpg",
        imageAlt: "Mountain scenery on a challenging gravel cycling route",
        route: "Ijoukak → Tizi n’Test → Taroudant",
        description: [
            "After a short transfer to the start in Ijoukak, take on the major climb of the day towards Tizi n’Test. The ascent is around 39 km, reaching approximately 2,100 metres with an average gradient of 2.5%.",
            "After the pass, descend towards Taroudant. This is a long and demanding stage, combining a sustained mountain climb with a substantial descent.",
        ],
    },
    {
        day: "04",
        title: "Taroudant to Agadir",
        location: "Taroudant · Atlantic Coast · Agadir",
        distance: "95 km",
        ascent: "350 m ascent",
        image: "gravel-bike-morocco3.jpg",
        imageAlt: "Open terrain on a gravel ride in Morocco",
        route: "Taroudant → Agadir",
        description: [
            "Head west from Taroudant towards the Atlantic coast. Compared with the previous day, this stage is flatter and faster, with a more gradual profile.",
            "Cover the distance towards Agadir and the coast, continuing the journey west.",
        ],
    },
    {
        day: "05",
        title: "Agadir to Imsouane",
        location: "Tamri National Park · Imsouane",
        distance: "95 km",
        ascent: "1,500 m ascent",
        image: "gravel-bike-morocco4.jpg",
        imageAlt: "Gravel cycling terrain on Morocco's Atlantic side",
        route: "Agadir → Tamri → Imsouane",
        description: [
            "Ride north from Agadir towards Tamri National Park. The first part of the stage follows around 60 km of rolling terrain.",
            "The route then becomes more demanding, with further climbs before reaching Imsouane, a coastal town known for its surf.",
        ],
    },
    {
        day: "06",
        title: "Imsouane to Essaouira",
        location: "Imsouane · Atlantic Coast · Essaouira",
        distance: "95 km",
        ascent: "1,100 m ascent",
        image: "gravel-bike-morocco5.jpg",
        imageAlt: "Moroccan gravel landscape on the route towards Essaouira",
        route: "Imsouane → Essaouira",
        description: [
            "Leave Imsouane and continue north on gravel roads. The route begins with a climb out of town, followed by a varied ride along the coast.",
            "After the halfway point, take on another climb of around 9 km before continuing towards Essaouira. Arrive by the beach and explore the medina.",
        ],
    },
    {
        day: "07",
        title: "Departure from Essaouira",
        location: "Essaouira",
        distance: "Departure day",
        ascent: "",
        image: "gravel-bike-morocco1.jpeg",
        imageAlt: "Moroccan gravel cycling landscape",
        route: "Tour ends in Essaouira",
        description: [
            "The tour comes to an end in Essaouira. You can spend more time in the city or arrange a transfer back to Marrakech.",
        ],
    },
];

const faqs = [
    {
        question: "How long is the Marrakech to Essaouira Gravel Tour?",
        answer:
            "The tour is planned over 7 days and 6 nights, with a stated total distance of 520 km.",
    },
    {
        question: "How difficult is this gravel tour?",
        answer:
            "The tour is rated Advanced, 3 out of 4. It is intended for regular riders who are comfortable with consecutive demanding days, long climbs and varied terrain.",
    },
    {
        question: "How far do we ride each day?",
        answer:
            "The stated daily average is 86 km and around 5 hours 45 minutes. The individual stage distances and climbing figures are listed in the itinerary. Day 1 is a shorter warm-up ride, while Day 7 is the departure day.",
    },
    {
        question: "What is the biggest climb on the route?",
        answer:
            "Day 3 includes the climb towards Tizi n’Test. The supplied route information describes an ascent of around 39 km to approximately 2,100 metres, with an average gradient of 2.5%.",
    },
    {
        question: "What kind of terrain should I expect?",
        answer:
            "The route combines gravel roads, rolling terrain, mountain climbs and coastal riding. Some stages include substantial climbing, so good fitness and confident bike handling are important.",
    },
    {
        question: "Does the tour finish in Essaouira?",
        answer:
            "Yes. The riding itinerary finishes in Essaouira on Day 6, with Day 7 set aside for departure.",
    },
    {
        question: "Can I return to Marrakech after the tour?",
        answer:
            "The supplied tour information says that transfers back to Marrakech can be arranged. Contact us to discuss your plans.",
    },
    {
        question: "Are e-bikes available?",
        answer:
            "E-bikes are available on all tours. Contact us to discuss whether an e-bike is suitable for this route and your riding plans.",
    },
    {
        question: "What food can I expect?",
        answer:
            "The tour offers the chance to enjoy Moroccan food, including tagines and couscous, as well as fresh juices and tea.",
    },
    {
        question: "Is there another gravel tour to compare?",
        answer:
            "Yes. The Atlas Mountains Gravel Tour explores the High Atlas, including Tizi n’Tichka, Ait Benhaddou, Imlil and the Agafay landscape. It offers a different route and mountain focus.",
    },
];

export default function MarrakechEssaouiraGravelTourPage() {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#F3EBDD] text-[#20231F]">
                {/* HERO */}
                <section className="relative flex min-h-[88vh] items-end overflow-hidden bg-[#20231F]">
                    <Image
                        src={`${images}hero-image.jpg`}
                        alt="Gravel biking in Morocco on a journey towards the Atlantic coast"
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
                                Marrakech to
                                <span className="block text-[#E56A2E]">Essaouira</span>
                            </h1>

                            <p className="mt-7 max-w-2xl text-base leading-7 text-white/85 sm:text-lg sm:leading-8">
                                A 7-day gravel journey from the landscapes of Agafay and the
                                High Atlas towards Morocco’s Atlantic coast, finishing in
                                Essaouira.
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
                        <span className="text-[#E56A2E]">02</span> / Atlantic route
                    </div>
                </section>

                {/* SECTION NAVIGATION */}
                <nav
                    aria-label="Tour page navigation"
                    className="sticky top-0 z-40 border-b border-[#20231F]/15 bg-[#F3EBDD]/95 backdrop-blur"
                >
                    <div className="mx-auto flex max-w-7xl gap-7 overflow-x-auto px-6 py-4 text-xs font-semibold uppercase tracking-[0.13em] sm:px-10 lg:px-16">
                        {navigation.map((item) => (
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
                        {facts.map((fact) => (
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
                                From the Atlas towards the Atlantic.
                            </h2>
                            <p className="mt-7 max-w-xl text-lg leading-8 text-[#20231F]/70">
                                A demanding westbound ride through mountain terrain,
                                changing landscapes and the coastal roads of Morocco.
                            </p>
                        </div>

                        <div className="space-y-5 text-base leading-8 text-[#20231F]/75">
                            <p>
                                Begin near Marrakech, with a warm-up ride across the rolling
                                landscapes of Agafay. From there, travel through the Oued
                                N’Fis area and climb towards Tizi Oula before taking on the
                                major ascent of Tizi n’Test.
                            </p>
                            <p>
                                The route then turns west towards the Atlantic. Ride through
                                the landscapes around Taroudant and Agadir, continue north
                                towards Tamri and Imsouane, and follow gravel roads to
                                Essaouira.
                            </p>
                            <p>
                                The journey brings together mountain riding and coastal
                                terrain, with opportunities to experience local hospitality
                                and Moroccan food along the way. The final destination is
                                Essaouira, where you can enjoy the beach and medina.
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto mt-16 grid max-w-7xl gap-4 sm:grid-cols-3">
                        <div className="border-t border-[#20231F]/20 pt-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E56A2E]">
                                Start
                            </p>
                            <p className="mt-2 text-xl font-semibold">Agafay</p>
                        </div>
                        <div className="border-t border-[#20231F]/20 pt-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E56A2E]">
                                Through
                            </p>
                            <p className="mt-2 text-xl font-semibold">
                                High Atlas & Atlantic coast
                            </p>
                        </div>
                        <div className="border-t border-[#20231F]/20 pt-5">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E56A2E]">
                                Finish
                            </p>
                            <p className="mt-2 text-xl font-semibold">Essaouira</p>
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
                                Mountains, coast and the road between.
                            </h2>
                            <p className="mt-6 text-base leading-8 text-white/65">
                                A route that moves from inland gravel roads to the Atlantic,
                                with a major mountain pass and a coastal finish.
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

                {/* GALLERY */}
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
                                    Follow the road west.
                                </h2>
                            </div>
                            <p className="max-w-md text-sm leading-7 text-[#20231F]/65">
                                From inland gravel terrain to the Atlantic coast, this route
                                crosses a variety of landscapes on the way to Essaouira.
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
                                A challenge for experienced riders.
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
                                This tour is intended for regular riders who are comfortable
                                with consecutive challenging days, long climbs and extended
                                time in the saddle. The stages require fitness and the
                                confidence to manage your own pace.
                            </p>
                            <p>
                                The route includes varied gravel terrain, sustained climbing
                                and descents. Good bike handling is important, especially on
                                corners and downhill sections.
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
                                    The Marrakech to Essaouira itinerary.
                                </h2>
                            </div>
                            <p className="max-w-xl text-sm leading-7 text-[#20231F]/70 lg:justify-self-end">
                                Seven days from the Agafay landscape to the Atlantic coast,
                                including the climb over Tizi n’Test and the final ride into
                                Essaouira.
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
                            stage. Day 7 is the departure day.
                        </p>
                    </div>
                </section>

                {/* FOOD AND LOCAL EXPERIENCE */}
                <section className="bg-[#20231F] px-6 py-20 text-[#F3EBDD] sm:px-10 lg:px-16 lg:py-28">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
                        <div>
                            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#E56A2E]">
                                Beyond the bike
                            </p>
                            <h2 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                                Discover Morocco along the way.
                            </h2>
                        </div>

                        <div className="space-y-6 text-base leading-8 text-white/70">
                            <p>
                                The route is about more than the kilometres. As you travel
                                from the inland landscapes towards the coast, there is time
                                to experience local hospitality and the character of the
                                places along the way.
                            </p>
                            <p>
                                Enjoy Moroccan food, including tagines and couscous, alongside
                                fresh juices and tea. The route also brings you to Imsouane
                                and, finally, Essaouira, where the beach and medina mark the
                                end of the journey.
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
                                Prefer a deeper journey into the Atlas?
                            </h2>
                            <p className="mt-5 text-base leading-8 text-[#20231F]/70">
                                Compare this coast-bound ride with our Atlas Mountains
                                Gravel Tour, a route focused on the High Atlas, mountain
                                passes and historic villages.
                            </p>
                        </div>

                        <article className="grid overflow-hidden border border-[#20231F]/15 bg-[#F7F1E7] md:grid-cols-2">
                            <div className="relative min-h-[300px] bg-[#20231F] md:min-h-[420px]">
                                <Image
                                    src={`${images}gravel-bike-morocco3.jpg`}
                                    alt="Gravel biking through the Atlas Mountains in Morocco"
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
                                    Marrakesh · High Atlas · Agafay
                                </p>
                                <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                                    Atlas Mountains Gravel Tour
                                </h3>
                                <p className="mt-5 text-sm leading-7 text-[#20231F]/70">
                                    A challenging gravel journey from Marrakesh into the High
                                    Atlas, crossing Tizi n’Tichka and riding through Ait
                                    Benhaddou, mountain valleys and the Agafay landscape.
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
                                        <p className="mt-2 text-sm font-semibold">467 km</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#20231F]/50">
                                            Level
                                        </p>
                                        <p className="mt-2 text-sm font-semibold">Advanced</p>
                                    </div>
                                </div>

                                <Link
                                    href="/gravel-biking-morocco/atlas-mountains-gravel-tour"
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
                                Find out more about the route, riding level and finish in
                                Essaouira. If you need more detail, get in touch.
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
                            Ride from the mountains to the sea.
                        </h2>
                        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/65">
                            Interested in the Marrakech to Essaouira Gravel Tour? Get in
                            touch to discuss the route and whether it suits your riding
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