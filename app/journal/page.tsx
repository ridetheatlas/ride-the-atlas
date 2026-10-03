import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import type { ReactNode } from "react";

export const metadata = {
    title: "The Atlas Journal | Ride The Atlas",
    description:
        "Stories, field notes and mountain perspectives from the Moroccan Atlas — from high-altitude ski touring to remote mountain-bike trails.",
};

type Story = {
    title: string;
    category: "Mountain biking" | "Ski touring";
    excerpt: string;
    image: string;
    imageAlt: string;
    href: string;
    label?: string;
};

const featuredStory: Story = {
    title: "A journey into the High Atlas",
    category: "Mountain biking",
    excerpt:
        "A closer look at the landscapes, trails and mountain communities that make riding in the Atlas an experience beyond the ordinary.",
    image: "/images/mtb/group-bikers-picture.jpeg",
    imageAlt: "Mountain bikers exploring the High Atlas",
    href: "/journal/high-atlas",
    label: "Editor's pick",
};

const mountainBikingStories: Story[] = [
    {
        title: "Finding the singletrack of the Atlas",
        category: "Mountain biking",
        excerpt:
            "Following narrow trails through rugged terrain, open mountain slopes and landscapes shaped by generations of mountain life.",
        image: "/images/mtb/singletrack-two-riders.jpeg",
        imageAlt: "Two mountain bikers riding a narrow Atlas singletrack",
        href: "/journal/atlas-singletrack",
    },
    {
        title: "Beyond the trail: riding through mountain villages",
        category: "Mountain biking",
        excerpt:
            "A ride through the quieter side of the mountains, where trails connect villages, valleys and everyday life in the Atlas.",
        image: "/images/mtb/two-riders-green-landcape-singletrack.jpeg",
        imageAlt: "Two riders crossing a green mountain landscape",
        href: "/journal/atlas-mountain-villages",
    },
];

const skiTouringStories: Story[] = [
    {
        title: "Ski touring on the summit of Toubkal",
        category: "Ski touring",
        excerpt:
            "A winter perspective on North Africa's highest mountain, where altitude, snow conditions and changing light shape the journey.",
        image: "/images/ski/skiers-on-toubkal-summit.jpeg",
        imageAlt: "Ski tourers on the summit of Mount Toubkal",
        href: "/journal/ski-touring-toubkal",
    },
    {
        title: "A descent in the high mountains of Mgoun",
        category: "Ski touring",
        excerpt:
            "Discovering the winter character of the Mgoun area and the scale of the mountains beyond the familiar routes.",
        image: "/images/ski/ski-descent-bouignouane.jpeg",
        imageAlt: "A skier descending a snow-covered mountain slope",
        href: "/journal/ski-touring-mgoun",
    },
];

// Add future articles to this list.
// The same card design will automatically be used for every story.
const allStories: Story[] = [
    ...mountainBikingStories,
    ...skiTouringStories,
];

function Eyebrow({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
    return (
        <div
            className={`flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.24em] ${dark ? "text-[#292D28]/55" : "text-[#F3EBDD]/55"
                }`}
        >
            <span className="h-px w-8 bg-[#E56A2E]" />
            {children}
        </div>
    );
}

function StoryCard({ story }: { story: Story }) {
    return (
        <article className="group">
            <Link href={story.href} className="block">
                <div className="relative aspect-[5/4] overflow-hidden bg-[#D9D3C8]">
                    <Image
                        src={story.image}
                        alt={story.imageAlt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                    {story.label && (
                        <span className="absolute left-4 top-4 bg-[#E56A2E] px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white">
                            {story.label}
                        </span>
                    )}

                    <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/70 text-white transition-all duration-300 group-hover:border-[#E56A2E] group-hover:bg-[#E56A2E]">
                        <span aria-hidden="true" className="text-lg leading-none">
                            ↗
                        </span>
                    </span>
                </div>

                <div className="pt-5">
                    <div className="mb-3 flex items-center gap-3">
                        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#C45B2B]">
                            {story.category}
                        </span>
                        <span className="h-px w-5 bg-[#292D28]/20" />
                        <span className="text-[9px] uppercase tracking-[0.18em] text-[#292D28]/40">
                            Ride The Atlas
                        </span>
                    </div>

                    <h3 className="max-w-xl font-serif text-2xl leading-[1.12] tracking-[-0.035em] text-[#292D28] transition-colors duration-300 group-hover:text-[#C45B2B] md:text-[28px]">
                        {story.title}
                    </h3>

                    <p className="mt-3 max-w-lg text-sm leading-7 text-[#292D28]/65">
                        {story.excerpt}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#292D28]">
                        Read story
                        <span
                            aria-hidden="true"
                            className="text-base text-[#E56A2E] transition-transform duration-300 group-hover:translate-x-1"
                        >
                            →
                        </span>
                    </span>
                </div>
            </Link>
        </article>
    );
}

function StorySection({
    id,
    number,
    title,
    intro,
    stories,
    dark = false,
}: {
    id: string;
    number: string;
    title: string;
    intro: string;
    stories: Story[];
    dark?: boolean;
}) {
    return (
        <section
            id={id}
            className={`scroll-mt-20 px-6 py-20 md:px-12 md:py-28 ${dark ? "bg-[#292D28] text-[#F3EBDD]" : "bg-[#F3EBDD] text-[#292D28]"
                }`}
        >
            <div className="mx-auto max-w-[1400px]">
                <div className="mb-12 grid gap-8 border-b border-current/15 pb-8 md:grid-cols-[1fr_1.2fr] md:items-end">
                    <div>
                        <Eyebrow dark={!dark}>
                            {number} / Journal category
                        </Eyebrow>

                        <h2 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.055em] md:text-7xl">
                            {title}
                            <span className="text-[#E56A2E]">.</span>
                        </h2>
                    </div>

                    <div className="flex flex-col justify-between gap-6 md:items-end">
                        <p
                            className={`max-w-md text-sm leading-7 ${dark ? "text-[#F3EBDD]/65" : "text-[#292D28]/65"
                                }`}
                        >
                            {intro}
                        </p>

                        <a
                            href="#all-stories"
                            className={`inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors hover:text-[#E56A2E] ${dark ? "text-[#F3EBDD]" : "text-[#292D28]"
                                }`}
                        >
                            Explore the journal <span aria-hidden="true">↓</span>
                        </a>
                    </div>
                </div>

                <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
                    {stories.map((story) => (
                        <StoryCard key={story.href} story={story} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default function JournalPage() {
    return (
        <main className="overflow-hidden bg-[#F3EBDD]">
            <SiteHeader />

            {/* HERO */}
            <section className="relative flex min-h-[85svh] items-end bg-[#20241F] text-[#F3EBDD] md:min-h-[780px]">
                <Image
                    src="/images/general/atlas-mountains.jpeg"
                    alt="Mountain landscape in the Moroccan Atlas"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/25 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-16 pt-40 md:px-12 md:pb-24">
                    <div className="max-w-5xl">
                        <Eyebrow>Stories from the Moroccan Atlas</Eyebrow>

                        <h1 className="mt-8 font-serif text-[clamp(4.5rem,12vw,11rem)] leading-[0.78] tracking-[-0.075em]">
                            The Atlas
                            <br />
                            <span className="text-[#E56A2E]">Journal.</span>
                        </h1>

                        <div className="mt-10 grid gap-8 border-t border-white/30 pt-6 md:grid-cols-[1fr_1fr] md:items-end">
                            <p className="max-w-xl text-base leading-8 text-white/85 md:text-lg">
                                Field notes, mountain stories and perspectives from a
                                landscape made for exploration — on two wheels and on skis.
                            </p>

                            <div className="flex flex-wrap gap-3 md:justify-end">
                                <a
                                    href="#mountain-biking"
                                    className="border border-white/60 px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.18em] transition-colors hover:border-[#E56A2E] hover:bg-[#E56A2E]"
                                >
                                    Mountain biking
                                </a>
                                <a
                                    href="#ski-touring"
                                    className="border border-white/60 px-5 py-3 text-[9px] font-semibold uppercase tracking-[0.18em] transition-colors hover:border-[#E56A2E] hover:bg-[#E56A2E]"
                                >
                                    Ski touring
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-6 right-6 hidden items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-white/60 md:flex">
                    <span className="h-px w-10 bg-[#E56A2E]" />
                    Morocco · High Atlas
                </div>
            </section>

            {/* INTRODUCTION */}
            <section className="bg-[#F3EBDD] px-6 py-20 md:px-12 md:py-28">
                <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-[0.7fr_1.3fr]">
                    <div>
                        <Eyebrow dark>From the mountains</Eyebrow>
                        <p className="mt-6 text-xs uppercase tracking-[0.18em] text-[#292D28]/45">
                            A journal by Ride The Atlas
                        </p>
                    </div>

                    <div>
                        <p className="max-w-4xl font-serif text-3xl leading-[1.2] tracking-[-0.035em] text-[#292D28] md:text-5xl">
                            The mountains are more than a destination. They are a place to
                            move, discover and see the world differently.
                        </p>
                        <p className="mt-7 max-w-2xl text-sm leading-8 text-[#292D28]/65">
                            This is where we share the stories behind the routes: the
                            landscapes, the people, the changing seasons and the moments
                            that stay with you long after the ride or the descent.
                        </p>
                    </div>
                </div>
            </section>

            {/* FEATURED STORY */}
            <section className="bg-[#E8E0D2] px-6 py-16 md:px-12 md:py-24">
                <div className="mx-auto max-w-[1400px]">
                    <div className="mb-8 flex items-center justify-between gap-4">
                        <Eyebrow dark>Selected story</Eyebrow>
                        <span className="text-[9px] uppercase tracking-[0.2em] text-[#292D28]/45">
                            01 / Featured
                        </span>
                    </div>

                    <Link
                        href={featuredStory.href}
                        className="group grid overflow-hidden bg-[#292D28] text-[#F3EBDD] md:grid-cols-[1.15fr_0.85fr]"
                    >
                        <div className="relative min-h-[320px] overflow-hidden md:min-h-[620px]">
                            <Image
                                src={featuredStory.image}
                                alt={featuredStory.imageAlt}
                                fill
                                sizes="(max-width: 768px) 100vw, 60vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                            />
                            <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/0" />
                        </div>

                        <div className="flex flex-col justify-between p-7 md:p-12 lg:p-16">
                            <div>
                                <span className="inline-flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#E56A2E]">
                                    <span className="h-px w-7 bg-[#E56A2E]" />
                                    {featuredStory.label}
                                </span>

                                <p className="mt-8 text-[10px] uppercase tracking-[0.2em] text-white/45">
                                    {featuredStory.category}
                                </p>

                                <h2 className="mt-5 font-serif text-4xl leading-[0.98] tracking-[-0.05em] md:text-6xl lg:text-7xl">
                                    {featuredStory.title}
                                    <span className="text-[#E56A2E]">.</span>
                                </h2>

                                <p className="mt-7 max-w-md text-sm leading-8 text-white/65">
                                    {featuredStory.excerpt}
                                </p>
                            </div>

                            <span className="mt-12 inline-flex items-center justify-between border-t border-white/25 pt-5 text-[10px] font-semibold uppercase tracking-[0.2em]">
                                Discover the story
                                <span
                                    aria-hidden="true"
                                    className="text-xl text-[#E56A2E] transition-transform duration-300 group-hover:translate-x-2"
                                >
                                    →
                                </span>
                            </span>
                        </div>
                    </Link>
                </div>
            </section>

            {/* MOUNTAIN BIKING STORIES */}
            <StorySection
                id="mountain-biking"
                number="01"
                title="On two wheels"
                intro="Singletrack, high passes and journeys through the valleys. Explore stories from the mountain-bike trails of the Moroccan Atlas."
                stories={mountainBikingStories}
            />

            {/* FULL-WIDTH EDITORIAL BREAK */}
            <section className="relative flex min-h-[420px] items-center overflow-hidden bg-[#252A24] px-6 py-20 text-[#F3EBDD] md:min-h-[560px] md:px-12">
                <Image
                    src="/images/mtb/bikers-riding-on-ridge.jpeg"
                    alt="Mountain bikers crossing a high mountain ridge"
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/45" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />

                <div className="relative z-10 mx-auto w-full max-w-[1400px]">
                    <Eyebrow>Made for the journey</Eyebrow>
                    <p className="mt-7 max-w-3xl font-serif text-4xl leading-[1.05] tracking-[-0.045em] md:text-6xl lg:text-7xl">
                        Every trail has a story.
                        <br />
                        <span className="text-[#E56A2E]">Every season, a new way in.</span>
                    </p>
                </div>
            </section>

            {/* SKI TOURING STORIES */}
            <StorySection
                id="ski-touring"
                number="02"
                title="On snow"
                intro="Winter changes the rhythm of the Atlas. These stories follow the snow, the high routes and the experience of moving through the mountains on skis."
                stories={skiTouringStories}
                dark
            />

            {/* ALL STORIES / FUTURE CONTENT */}
            <section
                id="all-stories"
                className="scroll-mt-20 bg-[#F3EBDD] px-6 py-20 md:px-12 md:py-28"
            >
                <div className="mx-auto max-w-[1400px]">
                    <div className="mb-12 grid gap-8 border-b border-[#292D28]/15 pb-8 md:grid-cols-[1fr_1fr] md:items-end">
                        <div>
                            <Eyebrow dark>Explore more</Eyebrow>
                            <h2 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.055em] text-[#292D28] md:text-7xl">
                                All stories<span className="text-[#E56A2E]">.</span>
                            </h2>
                        </div>

                        <p className="max-w-md text-sm leading-7 text-[#292D28]/65 md:justify-self-end">
                            Browse the journal across both disciplines. New stories can be
                            added here as your collection of mountain experiences grows.
                        </p>
                    </div>

                    <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
                        {allStories.map((story) => (
                            <StoryCard key={story.href} story={story} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CONTACT CTA */}
            <section className="relative overflow-hidden bg-[#292D28] px-6 py-24 text-[#F3EBDD] md:px-12 md:py-32">
                <div className="absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full border border-white/10 md:h-[600px] md:w-[600px]" />
                <div className="absolute -right-10 -top-16 h-[300px] w-[300px] rounded-full border border-white/10 md:h-[460px] md:w-[460px]" />

                <div className="relative mx-auto max-w-[1400px]">
                    <Eyebrow>Make your own story</Eyebrow>

                    <div className="mt-8 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
                        <div>
                            <h2 className="max-w-4xl font-serif text-5xl leading-[0.92] tracking-[-0.06em] md:text-7xl lg:text-8xl">
                                The next story
                                <br />
                                could be <span className="text-[#E56A2E]">yours.</span>
                            </h2>

                            <p className="mt-8 max-w-xl text-sm leading-8 text-white/60">
                                Explore the Atlas with Ride The Atlas. Get in touch to start
                                planning your next mountain adventure.
                            </p>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex min-w-[190px] items-center justify-between gap-8 border border-[#E56A2E] bg-[#E56A2E] px-6 py-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-transparent"
                        >
                            Get in touch
                            <span aria-hidden="true" className="text-lg">
                                →
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            <SiteFooter />
        </main>
    );
}