import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export default function JournalPage() {
    return (
        <>
            <SiteHeader />

            <main className="bg-black text-white">

                {/* HERO */}

                <section className="relative min-h-screen overflow-hidden">

                    <div className="absolute inset-0">

                        <Image
                            src="/images/general/atlas-mountains.jpeg"
                            alt="Mountain landscape in the Moroccan Atlas"
                            fill
                            priority
                            sizes="100vw"
                            className="object-cover object-center"
                        />

                        <div className="absolute inset-0 bg-black/20" />

                        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent" />

                        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/85" />

                    </div>

                    {/* TOP LABEL */}

                    <div className="absolute left-6 top-32 z-20 md:left-10 md:top-36 lg:left-14">

                        <p className="text-[9px] font-semibold uppercase tracking-[0.42em] text-white/80">
                            Ride The Atlas · Journal
                        </p>

                    </div>

                    {/* MAIN TITLE */}

                    <div className="absolute left-6 top-1/2 z-20 -translate-y-1/2 md:left-10 lg:left-14">

                        <div className="flex items-start gap-5 md:gap-7">

                            <span className="mt-2 h-28 w-px shrink-0 bg-[#F3EBDD] md:h-36" />

                            <div>

                                <h1 className="text-[3.2rem] font-semibold uppercase leading-[0.88] tracking-[-0.055em] text-white sm:text-[4rem] md:text-[5rem] lg:text-[6rem]">
                                    The Atlas
                                    <br />
                                    Journal
                                </h1>

                            </div>

                        </div>

                    </div>

                    {/* BOTTOM */}

                    <div className="absolute bottom-8 left-6 right-6 z-20 flex items-end justify-between md:left-10 md:right-10 lg:left-14 lg:right-14">

                        <p className="text-[8px] uppercase tracking-[0.35em] text-white/40">
                            Morocco · High Atlas
                        </p>

                        <Link
                            href="#stories"
                            className="group flex items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.35em] text-white/70 transition-colors duration-300 hover:text-[#F3EBDD]"
                        >
                            Explore

                            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-sm text-[#F3EBDD] transition-all duration-300 group-hover:border-[#F3EBDD] group-hover:translate-y-1">
                                ↓
                            </span>
                        </Link>

                    </div>

                </section>
                {/* FEATURED STORY */}

                <section
                    id="stories"
                    className="px-6 py-24 md:px-10 md:py-32 lg:px-14"
                >

                    <div className="mx-auto max-w-7xl">

                        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

                            <div>

                                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                    Featured Story
                                </p>

                                <h2 className="mt-5 max-w-4xl text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-[5.5rem]">
                                    Into the
                                    <br />
                                    High Atlas.
                                </h2>

                            </div>

                            <p className="max-w-sm text-xs leading-6 text-white/45 md:pb-2">
                                Stories from the trails, summits and remote landscapes
                                that shape the Ride The Atlas experience.
                            </p>

                        </div>

                        <Link
                            href="/journal/high-atlas"
                            className="group block"
                        >

                            <article>

                                <div className="relative aspect-[16/9] min-h-[480px] overflow-hidden md:min-h-[580px]">

                                    <Image
                                        src="/images/mtb/group-bikers-picture.jpeg"
                                        alt="Mountain bikers exploring the Moroccan High Atlas"
                                        fill
                                        sizes="100vw"
                                        className="object-cover object-center transition-transform duration-1000 group-hover:scale-[1.03]"
                                    />

                                    <div className="absolute inset-0 bg-black/15" />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                    <div className="absolute left-7 top-7 md:left-10 md:top-10">

                                        <span className="border border-white/30 bg-black/20 px-3 py-2 text-[8px] font-semibold uppercase tracking-[0.3em] text-white backdrop-blur-sm">
                                            Mountain Biking
                                        </span>

                                    </div>

                                    <div className="absolute inset-x-0 bottom-0 p-7 md:p-10 lg:p-14">

                                        <div className="flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

                                            <div>

                                                <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                                    Atlas · Morocco
                                                </p>

                                                <h3 className="mt-4 max-w-4xl text-4xl font-semibold uppercase leading-[0.88] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                                                    Mountain biking
                                                    <br />
                                                    through Morocco&apos;s Atlas
                                                </h3>

                                            </div>

                                            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/35 text-lg text-[#F3EBDD] transition-all duration-300 group-hover:border-[#F3EBDD] group-hover:bg-[#F3EBDD] group-hover:text-black">
                                                ↗
                                            </span>

                                        </div>

                                    </div>

                                </div>

                                <div className="grid border-x border-b border-white/10 md:grid-cols-[1fr_auto]">

                                    <div className="p-7 md:p-9">

                                        <p className="max-w-3xl text-sm leading-7 text-white/50 md:text-base md:leading-8">
                                            Following singletrack, mountain passes and remote
                                            valleys through the High Atlas, discovering the
                                            landscapes and communities along the way.
                                        </p>

                                    </div>

                                    <div className="flex items-center border-t border-white/10 px-7 py-6 md:border-l md:border-t-0 md:px-9">

                                        <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/40 transition-colors duration-300 group-hover:text-[#F3EBDD]">
                                            Read story →
                                        </p>

                                    </div>

                                </div>

                            </article>

                        </Link>

                    </div>

                </section>
                {/* MOUNTAIN BIKING STORIES */}

                <section className="px-6 py-24 md:px-10 md:py-32 lg:px-14">

                    <div className="mx-auto max-w-7xl">

                        <div className="mb-14 grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:items-end">

                            <div>

                                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                    Mountain Biking
                                </p>

                            </div>

                            <div>

                                <h2 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-[5.5rem]">
                                    Stories from
                                    <br />
                                    two wheels.
                                </h2>

                            </div>

                        </div>

                        <div className="grid gap-6 md:grid-cols-2">

                            {/* STORY 01 */}

                            <Link
                                href="/journal/atlas-singletrack"
                                className="group"
                            >

                                <article>

                                    <div className="relative aspect-[4/3] overflow-hidden">

                                        <Image
                                            src="/images/mtb/singletrack-two-riders.jpeg"
                                            alt="Two mountain bikers riding singletrack in the Moroccan Atlas"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                        <div className="absolute left-6 top-6 md:left-8 md:top-8">

                                            <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                                01 · Mountain Biking
                                            </p>

                                        </div>

                                        <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">

                                            <h3 className="max-w-2xl text-3xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                                                Following
                                                <br />
                                                the singletrack
                                            </h3>

                                        </div>

                                    </div>

                                    <div className="border-x border-b border-white/10 p-6 md:p-8">

                                        <p className="text-sm leading-7 text-white/50">
                                            Exploring the trails, valleys and mountain paths
                                            that make the Atlas such a unique place to ride.
                                        </p>

                                        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

                                            <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/35">
                                                Singletrack · High Atlas
                                            </p>

                                            <span className="text-lg text-[#F3EBDD] transition-transform duration-300 group-hover:translate-x-1">
                                                →
                                            </span>

                                        </div>

                                    </div>

                                </article>

                            </Link>

                            {/* STORY 02 */}

                            <Link
                                href="/journal/atlas-mountain-villages"
                                className="group"
                            >

                                <article>

                                    <div className="relative aspect-[4/3] overflow-hidden">

                                        <Image
                                            src="/images/mtb/two-riders-green-landcape-singletrack.jpeg"
                                            alt="Mountain bikers riding through a green valley in the Moroccan Atlas"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                        <div className="absolute left-6 top-6 md:left-8 md:top-8">

                                            <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                                02 · Mountain Biking
                                            </p>

                                        </div>

                                        <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">

                                            <h3 className="max-w-2xl text-3xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                                                Riding through
                                                <br />
                                                mountain villages
                                            </h3>

                                        </div>

                                    </div>

                                    <div className="border-x border-b border-white/10 p-6 md:p-8">

                                        <p className="text-sm leading-7 text-white/50">
                                            A different pace of travel through remote villages,
                                            valleys and landscapes shaped by mountain life.
                                        </p>

                                        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

                                            <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/35">
                                                Villages · Valleys · Morocco
                                            </p>

                                            <span className="text-lg text-[#F3EBDD] transition-transform duration-300 group-hover:translate-x-1">
                                                →
                                            </span>

                                        </div>

                                    </div>

                                </article>

                            </Link>

                        </div>

                    </div>

                </section>
                {/* SKI TOURING STORIES */}

                <section className="px-6 py-24 md:px-10 md:py-32 lg:px-14">

                    <div className="mx-auto max-w-7xl">

                        <div className="mb-14 grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:items-end">

                            <div>

                                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                    Ski Touring
                                </p>

                            </div>

                            <div>

                                <h2 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-[5.5rem]">
                                    Stories from
                                    <br />
                                    the snow.
                                </h2>

                            </div>

                        </div>

                        <div className="grid gap-6 md:grid-cols-2">

                            {/* STORY 01 */}

                            <Link
                                href="/journal/ski-touring-toubkal"
                                className="group"
                            >

                                <article>

                                    <div className="relative aspect-[4/3] overflow-hidden">

                                        <Image
                                            src="/images/ski/skiers-on-toubkal-summit.jpeg"
                                            alt="Skiers on a summit in the Toubkal region of Morocco"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                                        <div className="absolute left-6 top-6 md:left-8 md:top-8">

                                            <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                                01 · Ski Touring
                                            </p>

                                        </div>

                                        <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">

                                            <h3 className="max-w-2xl text-3xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                                                Ski touring
                                                <br />
                                                around Toubkal
                                            </h3>

                                        </div>

                                    </div>

                                    <div className="border-x border-b border-white/10 p-6 md:p-8">

                                        <p className="text-sm leading-7 text-white/50">
                                            High mountain terrain, winter approaches and
                                            long descents in the Toubkal region.
                                        </p>

                                        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

                                            <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/35">
                                                Toubkal · Winter · High Atlas
                                            </p>

                                            <span className="text-lg text-[#F3EBDD] transition-transform duration-300 group-hover:translate-x-1">
                                                →
                                            </span>

                                        </div>

                                    </div>

                                </article>

                            </Link>

                            {/* STORY 02 */}

                            <Link
                                href="/journal/ski-touring-mgoun"
                                className="group"
                            >

                                <article>

                                    <div className="relative aspect-[4/3] overflow-hidden">

                                        <Image
                                            src="/images/ski/ski-descent-bouignouane.jpeg"
                                            alt="Ski descent in the Moroccan High Atlas"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                                        <div className="absolute left-6 top-6 md:left-8 md:top-8">

                                            <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                                02 · Ski Touring
                                            </p>

                                        </div>

                                        <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8">

                                            <h3 className="max-w-2xl text-3xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                                                Skiing through
                                                <br />
                                                the M&apos;Goun Massif
                                            </h3>

                                        </div>

                                    </div>

                                    <div className="border-x border-b border-white/10 p-6 md:p-8">

                                        <p className="text-sm leading-7 text-white/50">
                                            Discovering the Central High Atlas on skis,
                                            from high valleys to remote winter lines.
                                        </p>

                                        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">

                                            <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/35">
                                                M&apos;Goun · Winter · Morocco
                                            </p>

                                            <span className="text-lg text-[#F3EBDD] transition-transform duration-300 group-hover:translate-x-1">
                                                →
                                            </span>

                                        </div>

                                    </div>

                                </article>

                            </Link>

                        </div>

                    </div>

                </section>
                {/* JOURNAL CTA */}

                <section className="px-6 py-24 md:px-10 md:py-32 lg:px-14">

                    <div className="mx-auto max-w-7xl">

                        <div className="border-y border-white/10 py-16 md:py-20 lg:py-24">

                            <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-end">

                                <div>

                                    <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                        From The Atlas
                                    </p>

                                </div>

                                <div>

                                    <h2 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-[6rem]">
                                        The mountains
                                        <br />
                                        are the story.
                                    </h2>

                                    <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">

                                        <p className="max-w-xl text-sm leading-7 text-white/50 md:text-base md:leading-8">
                                            Follow Ride The Atlas as we explore new trails,
                                            winter lines, mountain passes and remote corners
                                            of Morocco.
                                        </p>

                                        <Link
                                            href="/contact"
                                            className="group flex w-fit shrink-0 items-center gap-5 border border-white/25 px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:border-[#F3EBDD] hover:bg-[#F3EBDD] hover:text-black"
                                        >
                                            <span>
                                                Start a journey
                                            </span>

                                            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                                                →
                                            </span>
                                        </Link>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>

            </main>

            <SiteFooter />
        </>
    );
}