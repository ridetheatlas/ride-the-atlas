
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const imagePath =
    "/images/mtb/4-day-eastern-high-atlas/";

const gallery = [
    {
        src: `${imagePath}amezmiz-region-ridge.jpeg`,
        alt: "Mountain biking along a high Atlas ridge",
        title: "Above the valleys",
    },
    {
        src: `${imagePath}amezmiz-region-group-bikers.jpeg`,
        alt: "A group of mountain bikers riding in the Atlas",
        title: "Ride together",
    },
    {
        src: `${imagePath}above-taskourt-dam.jpeg`,
        alt: "Landscape above the Taskourt Dam",
        title: "The Atlas landscape",
    },
    {
        src: `${imagePath}ait-zitoune-village.jpeg`,
        alt: "A traditional village in the Atlas Mountains",
        title: "Village life",
    },
    {
        src: `${imagePath}amezmiz-region-dirty-road.jpeg`,
        alt: "A dirt road through the Atlas region",
        title: "Dirt roads and open space",
    },
    {
        src: `${imagePath}amezmiz-region-bike-on-car.jpeg`,
        alt: "Mountain bike being transported in the Atlas",
        title: "The journey between rides",
    },
    {
        src: `${imagePath}amezmiz-region.jpeg`,
        alt: "Mountain scenery in the Atlas region",
        title: "A changing landscape",
    },
];

const days = [
    {
        number: "01",
        title: "Marrakech to Imlil via the Kik Plateau",
        subtitle: "Open plateaus, mountain villages and big views",
        distance: "Route details to be confirmed",
        content: (
            <>
                <p>
                    We meet at 09:00 in Marrakech before heading towards the foothills
                    of the High Atlas and the shores of Lake Lalla Takerkoust. From here,
                    the ride climbs steadily towards Taghenchoute and the wide-open
                    landscapes of the Kik Plateau.
                </p>
                <p>
                    The effort is rewarded with sweeping views across the High Atlas,
                    with Mount Toubkal rising above the surrounding peaks. The plateau
                    changes character with the seasons: freshly turned ochre earth,
                    spring fields scattered with poppies, summer harvest colours and,
                    in winter, the snow-covered mountains beyond.
                </p>
                <p>
                    We ride through terraced farmland and adobe villages before
                    descending towards Asni. From there, a transfer takes us to Imlil,
                    the mountain village that will be our base for the night.
                </p>
            </>
        ),
        overnight: "Traditional Amazigh guesthouse",
        meals: "Dinner",
    },
    {
        number: "02",
        title: "The Imenane Valley Loop",
        subtitle: "A high mountain pass and a winding valley descent",
        distance: "Route details to be confirmed",
        content: (
            <>
                <p>
                    After breakfast, we set out for a demanding climb towards Tizi
                    n’Tamatert, at approximately 2,230 metres. As we gain altitude, the
                    views open across the High Atlas: rugged summits, steep-sided valleys
                    and villages scattered across the mountainsides.
                </p>
                <p>
                    From the pass, the ride turns towards a long descent, leading us
                    through the traditional village of Ouanskra and into the Imenane
                    Valley. A winding dirt track follows the contours of the landscape,
                    passing green terraces and hillside villages along the way.
                </p>
                <p>
                    The day finishes in Asni, where we can relax after a rewarding ride
                    and enjoy a freshly prepared local meal.
                </p>
            </>
        ),
        overnight: "Traditional Amazigh guesthouse",
        meals: "Breakfast and dinner",
    },
    {
        number: "03",
        title: "Asni to the Ourika Valley",
        subtitle: "A sustained climb and a new side of the Atlas",
        distance: "Route details to be confirmed",
        content: (
            <>
                <p>
                    After breakfast, we transfer back to the Asni Valley to begin the
                    day’s ride. A short, easier opening section leads into a sustained
                    climb towards Tademamt Pass, at approximately 1,800 metres.
                </p>
                <p>
                    The ascent brings changing views across the Haouz Plain, set against
                    the dramatic wall of the High Atlas. After reaching the pass, we
                    continue along a scenic route overlooking the Ourika Valley, where
                    mountain slopes, cultivated terraces and villages create a striking
                    contrast.
                </p>
                <p>
                    We spend the night in a traditional guesthouse surrounded by gardens
                    and terraced fields.
                </p>
            </>
        ),
        overnight: "Traditional Amazigh guesthouse",
        meals: "Breakfast and dinner",
    },
    {
        number: "04",
        title: "Ourika Valley to Marrakech",
        subtitle: "One final climb, followed by a memorable descent",
        distance: "Route details to be confirmed",
        content: (
            <>
                <p>
                    Our final day begins with a climb towards the Timenkar Plateau. The
                    route winds through mountain trails and Amazigh villages, gaining
                    altitude to around 2,450 metres.
                </p>
                <p>
                    At the top, the effort is rewarded with expansive views across the
                    High Atlas. We then begin a beautiful descent overlooking the Ourika
                    Valley, finishing the ride in Setti Fatma.
                </p>
                <p>
                    From here, we transfer back to Marrakech, bringing four days of
                    mountain riding to a close.
                </p>
            </>
        ),
        overnight: "Return to Marrakech",
        meals: "Breakfast",
    },
];

const tripLinks = [
    ["Overview", "#overview"],
    ["The itinerary", "#itinerary"],
    ["Photo story", "#gallery"],
    ["The experience", "#experience"],
    ["Accommodation", "#accommodation"],
    ["Practical information", "#practical"],
    ["FAQ", "#faq"],
];

export const metadata = {
    title: "4-Day Eastern High Atlas Mountain Biking Tour | Ride The Atlas",
    description:
        "Ride the Kik Plateau, Imenane Valley and Ourika Valley on a four-day mountain biking journey through Morocco’s High Atlas.",
};

export default function FourDayEasternHighAtlasPage() {
    return (
        <>
            <SiteHeader />

            <main className="bg-[#F3EBDD] text-[#20231F]">
                {/* HERO */}
                <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-[#20231F] text-white">
                    <Image
                        src={`${imagePath}amezmiz-region-group-bikers.jpeg`}
                        alt="Mountain bikers exploring the landscapes of the Moroccan Atlas"
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
                            Morocco · High Atlas
                        </div>

                        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#E56A2E]">
                            A four-day mountain journey
                        </p>

                        <h1 className="max-w-5xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
                            Eastern
                            <br />
                            High Atlas
                            <br />
                            <span className="text-[#E56A2E]">by bike.</span>
                        </h1>

                        <p className="mt-7 max-w-xl text-base leading-7 text-white/85 md:text-lg">
                            Four days linking high passes, traditional villages and the
                            changing landscapes of the Moroccan Atlas.
                        </p>

                        <div className="mt-9 flex flex-wrap items-center gap-3">
                            <span className="border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]">
                                4 days
                            </span>
                            <span className="border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]">
                                Mountain biking
                            </span>
                            <span className="border border-white/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em]">
                                Guided journey
                            </span>
                        </div>

                        <a
                            href="#itinerary"
                            className="mt-10 inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.2em] transition hover:text-[#E56A2E]"
                        >
                            Explore the journey
                            <span className="text-xl text-[#E56A2E]">↓</span>
                        </a>
                    </div>
                </section>

                {/* STICKY TRIP NAVIGATION */}
                <nav className="sticky top-0 z-40 border-b border-[#20231F]/10 bg-[#F3EBDD]/95 backdrop-blur">
                    <div className="mx-auto flex max-w-7xl gap-7 overflow-x-auto px-6 py-4 md:px-10">
                        {tripLinks.map(([label, href]) => (
                            <a
                                key={href}
                                href={href}
                                className="shrink-0 text-[10px] font-bold uppercase tracking-[0.16em] text-[#20231F]/65 transition hover:text-[#E56A2E]"
                            >
                                {label}
                            </a>
                        ))}

                        <a
                            href="#related-trips"
                            className="shrink-0 text-[10px] font-bold uppercase tracking-[0.16em] text-[#20231F]/65 transition hover:text-[#E56A2E]"
                        >
                            Related trips
                        </a>
                    </div>
                </nav>

                {/* OVERVIEW */}
                <section id="overview" className="scroll-mt-20 px-6 py-24 md:px-10 md:py-32">
                    <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
                        <div>
                            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#E56A2E]">
                                <span className="h-px w-9 bg-[#E56A2E]" />
                                The journey
                            </p>

                            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-6xl">
                                Four days.
                                <br />
                                Three mountain valleys.
                                <br />
                                <span className="text-[#E56A2E]">One Atlas journey.</span>
                            </h2>

                            <div className="mt-9 max-w-2xl space-y-5 text-base leading-8 text-[#20231F]/75">
                                <p>
                                    This four-day ride links the open landscapes of the Kik
                                    Plateau with the high passes and traditional villages of
                                    the Imenane and Ourika valleys.
                                </p>
                                <p>
                                    Expect rewarding climbs, varied mountain terrain, long
                                    descents and nights in local guesthouses. It is a journey
                                    through the landscapes and communities of the Moroccan
                                    High Atlas, experienced one ride at a time.
                                </p>
                            </div>
                        </div>

                        <div className="self-end border-t border-[#20231F]/20 pt-8">
                            <p className="mb-8 text-xs font-bold uppercase tracking-[0.22em] text-[#20231F]/50">
                                At a glance
                            </p>

                            <div className="grid grid-cols-2 gap-x-8 gap-y-9">
                                {[
                                    ["Duration", "4 days"],
                                    ["Region", "High Atlas, Morocco"],
                                    ["Ride style", "Mountain biking"],
                                    ["Accommodation", "Local guesthouses"],
                                    ["Highest stated point", "Approx. 2,450 m"],
                                    ["Start / finish", "Marrakech"],
                                ].map(([label, value]) => (
                                    <div key={label} className="border-t border-[#20231F]/15 pt-4">
                                        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#20231F]/45">
                                            {label}
                                        </p>
                                        <p className="mt-2 text-sm font-semibold leading-6">{value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* PHOTO STORY */}
                <section id="gallery" className="scroll-mt-20 bg-[#20231F] px-6 py-20 text-[#F3EBDD] md:px-10 md:py-28">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                            <div>
                                <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#E56A2E]">
                                    <span className="h-px w-9 bg-[#E56A2E]" />
                                    The photo story
                                </p>
                                <h2 className="text-4xl font-semibold tracking-[-0.045em] md:text-6xl">
                                    A landscape made
                                    <br />
                                    for the ride.
                                </h2>
                            </div>
                            <p className="max-w-sm text-sm leading-7 text-white/60">
                                Mountain roads, high ridgelines and villages shaped by the
                                terrain. This is the world you’ll ride through.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {gallery.map((image, index) => (
                                <figure
                                    key={image.src}
                                    className={`group relative overflow-hidden bg-white/5 ${index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                                        }`}
                                >
                                    <div
                                        className={`relative ${index === 0 ? "aspect-[4/3] h-full min-h-[360px]" : "aspect-[4/3]"
                                            }`}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            fill
                                            sizes={
                                                index === 0
                                                    ? "(max-width: 768px) 100vw, 66vw"
                                                    : "(max-width: 768px) 100vw, 33vw"
                                            }
                                            className="object-cover transition duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                                        <figcaption className="absolute bottom-0 left-0 p-5 text-sm font-semibold tracking-wide text-white md:p-7">
                                            {image.title}
                                        </figcaption>
                                    </div>
                                </figure>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ITINERARY */}
                <section id="itinerary" className="scroll-mt-20 px-6 py-24 md:px-10 md:py-32">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                            <div>
                                <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#E56A2E]">
                                    <span className="h-px w-9 bg-[#E56A2E]" />
                                    Day by day
                                </p>
                                <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-6xl">
                                    The route
                                    <br />
                                    unfolds.
                                </h2>
                            </div>
                            <p className="max-w-2xl self-end text-base leading-8 text-[#20231F]/70">
                                Each day brings a different perspective on the Atlas: from
                                open plateaus and high passes to cultivated valleys and
                                mountain villages. Open each day to explore the journey.
                            </p>
                        </div>

                        <div className="border-t border-[#20231F]/20">
                            {days.map((day, index) => (
                                <details
                                    key={day.number}
                                    open={index === 0}
                                    className="group border-b border-[#20231F]/20"
                                >
                                    <summary className="grid cursor-pointer list-none grid-cols-[3.5rem_1fr_auto] items-center gap-4 py-7 md:grid-cols-[5rem_1fr_auto] md:gap-8 md:py-9">
                                        <span className="text-sm font-semibold text-[#E56A2E]">
                                            {day.number}
                                        </span>

                                        <span>
                                            <span className="block text-xl font-semibold tracking-tight md:text-2xl">
                                                {day.title}
                                            </span>
                                            <span className="mt-2 block text-sm text-[#20231F]/55">
                                                {day.subtitle}
                                            </span>
                                        </span>

                                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#20231F]/25 text-xl transition group-open:rotate-45 group-open:border-[#E56A2E] group-open:text-[#E56A2E]">
                                            +
                                        </span>
                                    </summary>

                                    <div className="grid gap-8 pb-10 pl-0 md:grid-cols-[5rem_1fr_0.45fr] md:gap-8">
                                        <div className="hidden md:block" />
                                        <div className="max-w-3xl space-y-5 text-[15px] leading-8 text-[#20231F]/75">
                                            {day.content}
                                            <div className="mt-8 grid gap-5 border-t border-[#20231F]/15 pt-6 sm:grid-cols-2">
                                                <div>
                                                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#20231F]/45">
                                                        Overnight
                                                    </p>
                                                    <p className="mt-2 text-sm font-semibold">{day.overnight}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#20231F]/45">
                                                        Meals stated
                                                    </p>
                                                    <p className="mt-2 text-sm font-semibold">{day.meals}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-l border-[#20231F]/15 pl-5">
                                            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#20231F]/45">
                                                Ride details
                                            </p>
                                            <p className="mt-3 text-sm leading-6 text-[#20231F]/65">
                                                {day.distance}
                                            </p>
                                        </div>
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* EXPERIENCE */}
                <section id="experience" className="scroll-mt-20 bg-[#E9DDCA] px-6 py-24 md:px-10 md:py-32">
                    <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-24">
                        <div>
                            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#E56A2E]">
                                <span className="h-px w-9 bg-[#E56A2E]" />
                                The riding experience
                            </p>
                            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-6xl">
                                Earn the climb.
                                <br />
                                Enjoy the descent.
                            </h2>
                        </div>

                        <div className="space-y-6 self-end text-base leading-8 text-[#20231F]/75">
                            <p>
                                This journey combines sustained mountain climbs with descents
                                through valleys, villages and changing terrain. The route
                                reaches high points of approximately 2,450 metres, according
                                to the supplied itinerary.
                            </p>
                            <p>
                                The experience is shaped by the landscape as much as the
                                riding: wide views from the passes, cultivated terraces on
                                the valley sides and the everyday life of communities along
                                the route.
                            </p>
                            <p className="text-sm text-[#20231F]/50">
                                Detailed distance, elevation gain, trail surface and technical
                                grading will be added once confirmed with your guide.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ACCOMMODATION */}
                <section id="accommodation" className="scroll-mt-20 px-6 py-24 md:px-10 md:py-32">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
                        <div>
                            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#E56A2E]">
                                <span className="h-px w-9 bg-[#E56A2E]" />
                                Stay close to the mountains
                            </p>
                            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-6xl">
                                Nights in
                                <br />
                                local guesthouses.
                            </h2>
                        </div>
                        <div className="self-end space-y-5 text-base leading-8 text-[#20231F]/75">
                            <p>
                                The itinerary includes overnight stays in traditional
                                guesthouses, offering a chance to slow down after the ride
                                and experience the warmth of local hospitality.
                            </p>
                            <p>
                                Accommodation names, room arrangements and the exact
                                overnight locations should be confirmed before publication.
                            </p>
                        </div>
                    </div>
                </section>

                {/* PRACTICAL */}
                <section id="practical" className="scroll-mt-20 bg-[#20231F] px-6 py-24 text-[#F3EBDD] md:px-10 md:py-32">
                    <div className="mx-auto max-w-7xl">
                        <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#E56A2E]">
                            <span className="h-px w-9 bg-[#E56A2E]" />
                            Before you ride
                        </p>
                        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-6xl">
                                The practical
                                <br />
                                details.
                            </h2>

                            <div className="grid gap-8 sm:grid-cols-2">
                                {[
                                    [
                                        "Meeting point",
                                        "Marrakech, with a 09:00 meeting time stated for Day 1.",
                                    ],
                                    [
                                        "Getting around",
                                        "The itinerary includes transfers between Asni, Imlil and the riding areas.",
                                    ],
                                    [
                                        "Ride information",
                                        "Daily distances, elevation gain and technical grading are to be confirmed.",
                                    ],
                                    [
                                        "What to bring",
                                        "Bike, helmet, riding kit and personal essentials. Confirm the final equipment list with your guide.",
                                    ],
                                ].map(([title, copy]) => (
                                    <div key={title} className="border-t border-white/20 pt-5">
                                        <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#E56A2E]">
                                            {title}
                                        </h3>
                                        <p className="mt-4 text-sm leading-7 text-white/65">{copy}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section id="faq" className="scroll-mt-20 px-6 py-24 md:px-10 md:py-32">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
                        <div>
                            <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] text-[#E56A2E]">
                                <span className="h-px w-9 bg-[#E56A2E]" />
                                Good to know
                            </p>
                            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-6xl">
                                Frequently
                                <br />
                                asked.
                            </h2>
                        </div>

                        <div className="border-t border-[#20231F]/20">
                            {[
                                {
                                    q: "Where does the tour start and finish?",
                                    a: "The itinerary starts in Marrakech and returns to Marrakech on Day 4, after the ride finishes in Setti Fatma.",
                                },
                                {
                                    q: "How long is the tour?",
                                    a: "The journey takes four days, with riding planned across all four days.",
                                },
                                {
                                    q: "Where do we stay?",
                                    a: "The itinerary describes traditional guesthouse accommodation. Specific properties and room arrangements are to be confirmed.",
                                },
                                {
                                    q: "How difficult is the ride?",
                                    a: "The itinerary includes sustained climbs and high mountain passes. A formal difficulty rating, daily distance and elevation gain have not yet been confirmed.",
                                },
                                {
                                    q: "What is included?",
                                    a: "The final inclusions list—including guiding, transfers, meals, accommodation and bike arrangements—should be confirmed before booking.",
                                },
                            ].map((item) => (
                                <details key={item.q} className="group border-b border-[#20231F]/20">
                                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-base font-semibold">
                                        {item.q}
                                        <span className="text-xl font-normal text-[#E56A2E] transition group-open:rotate-45">
                                            +
                                        </span>
                                    </summary>
                                    <p className="max-w-2xl pb-7 pr-10 text-sm leading-7 text-[#20231F]/65">
                                        {item.a}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
                {/* RELATED TRIPS */}
                <section
                    id="related-trips"
                    className="bg-[#20231F] px-6 py-24 text-[#F3EBDD] md:px-10 lg:px-16"
                >
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-12 max-w-2xl">
                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#B9B5A8]">
                                Keep exploring
                            </p>

                            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                                Find your way further into the Atlas.
                            </h2>

                            <p className="mt-5 text-base leading-7 text-[#D0CDC2]">
                                Looking for a longer ride? Explore two more journeys through
                                the trails, valleys and mountain landscapes of the Atlas.
                            </p>
                        </div>

                        <div className="grid gap-8 md:grid-cols-2">
                            {/* 8-DAY TRIP */}
                            <article className="group">
                                <a
                                    href="/mountain-biking/8-day-mountain-biking-eastern-high-atlas-morocco"
                                    className="block"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image
                                            src="/images/mtb/bikers-riding-on-ridge.jpeg"
                                            alt="Mountain bikers riding along a ridge in the Moroccan Atlas"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition duration-700 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="pt-5">
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B9B5A8]">
                                            8 days · Mountain biking
                                        </p>

                                        <h3 className="mt-3 text-2xl font-semibold">
                                            Eastern High Atlas & Toubkal
                                        </h3>

                                        <p className="mt-3 max-w-lg text-sm leading-6 text-[#D0CDC2]">
                                            A longer journey through mountain trails, valleys and
                                            villages across the High Atlas.
                                        </p>

                                        <span className="mt-6 inline-flex items-center border-b border-[#F3EBDD] pb-2 text-sm font-semibold">
                                            Explore trip <span className="ml-3">↗</span>
                                        </span>
                                    </div>
                                </a>
                            </article>

                            {/* 6-DAY TRIP */}
                            <article className="group">
                                <a
                                    href="/mountain-biking/6-day-mountain-biking-eastern-high-atlas-morocco"
                                    className="block"
                                >
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <Image
                                            src="/images/mtb/easter-high-atlas-mtb-6-days/amezmiz-region-group-bikers.jpeg"
                                            alt="Mountain bikers riding through the Atlas"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition duration-700 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="pt-5">
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B9B5A8]">
                                            6 days · Mountain biking
                                        </p>

                                        <h3 className="mt-3 text-2xl font-semibold">
                                            Eastern High Atlas
                                        </h3>

                                        <p className="mt-3 max-w-lg text-sm leading-6 text-[#D0CDC2]">
                                            Discover a wider range of Atlas trails, remote valleys
                                            and traditional mountain villages.
                                        </p>

                                        <span className="mt-6 inline-flex items-center border-b border-[#F3EBDD] pb-2 text-sm font-semibold">
                                            Explore trip <span className="ml-3">↗</span>
                                        </span>
                                    </div>
                                </a>
                            </article>
                        </div>
                    </div>
                </section>

                {/* CONTACT CTA */}
                <section id="contact" className="relative overflow-hidden bg-[#E56A2E] px-6 py-24 text-[#20231F] md:px-10 md:py-32">
                    <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-between gap-12 lg:flex-row lg:items-end">
                        <div>
                            <p className="mb-6 text-xs font-bold uppercase tracking-[0.24em]">
                                Your next Atlas journey
                            </p>
                            <h2 className="max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] md:text-7xl">
                                Ready to ride
                                <br />
                                the High Atlas?
                            </h2>
                            <p className="mt-7 max-w-xl text-base leading-7 text-[#20231F]/75">
                                Get in touch to discuss the route, dates and details for your
                                four-day mountain biking journey.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex w-fit items-center gap-6 border border-[#20231F] px-7 py-5 text-xs font-bold uppercase tracking-[0.18em] transition hover:bg-[#20231F] hover:text-[#F3EBDD]"
                        >
                            Enquire about this tour
                            <span className="text-xl">↗</span>
                        </Link>
                    </div>
                </section>
            </main>

            <SiteFooter />
        </>
    );
}