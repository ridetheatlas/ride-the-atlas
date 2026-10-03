import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export const metadata = {
    title: "About Ride The Atlas | Mountain Biking & Ski Touring in Morocco",
    description:
        "Discover Ride The Atlas: a mountain project rooted in Morocco, exploring the High Atlas by mountain bike and on skis.",
};

function Eyebrow({
    children,
    dark = false,
}: {
    children: string;
    dark?: boolean;
}) {
    return (
        <div
            className={`flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.24em] ${dark ? "text-[#292D28]/55" : "text-[#F3EBDD]/60"
                }`}
        >
            <span className="h-px w-8 bg-[#E56A2E]" />
            {children}
        </div>
    );
}

function Photo({
    src,
    alt,
    className = "",
    sizes = "(max-width: 768px) 100vw, 50vw",
}: {
    src: string;
    alt: string;
    className?: string;
    sizes?: string;
}) {
    return (
        <div className={`group relative overflow-hidden bg-[#343A32] ${className}`}>
            <Image
                src={src}
                alt={alt}
                fill
                sizes={sizes}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
            />
        </div>
    );
}

export default function AboutPage() {
    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#292D28] text-[#F3EBDD]">
                {/* HERO — BIKE FIRST */}
                <section className="relative flex min-h-[92svh] items-end bg-[#20241F] md:min-h-[850px]">
                    <Image
                        src="/images/about/radouane-brothers-on-bikes.jpeg"
                        alt="Radouane and his brother riding mountain bikes in the Atlas"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                    <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-12 pt-36 md:px-12 md:pb-20">
                        <Eyebrow>Ride The Atlas · Morocco</Eyebrow>

                        <div className="mt-8 max-w-5xl">
                            <h1 className="font-serif text-[clamp(4rem,11vw,10.5rem)] leading-[0.78] tracking-[-0.075em]">
                                Made for
                                <br />
                                the <span className="text-[#E56A2E]">mountains.</span>
                            </h1>

                            <div className="mt-10 grid gap-8 border-t border-white/30 pt-6 md:grid-cols-[1fr_auto] md:items-end">
                                <p className="max-w-xl text-sm leading-8 text-white/80 md:text-base">
                                    A mountain project shaped by the trails, people and
                                    landscapes of Morocco — explored first by bike, and also
                                    on skis when winter arrives.
                                </p>

                                <a
                                    href="#our-story"
                                    className="group inline-flex items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/80 transition-colors hover:text-white"
                                >
                                    Discover Ride The Atlas
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 text-base transition-all duration-300 group-hover:translate-y-1 group-hover:border-[#E56A2E] group-hover:bg-[#E56A2E]">
                                        ↓
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="mt-12 flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-white/50">
                            <span className="h-px w-8 bg-[#E56A2E]" />
                            Mountain biking · High Atlas · Morocco
                        </div>
                    </div>
                </section>

                {/* OUR STORY */}
                <section
                    id="our-story"
                    className="scroll-mt-20 bg-[#F3EBDD] px-6 py-20 text-[#292D28] md:px-12 md:py-32"
                >
                    <div className="mx-auto max-w-[1400px]">
                        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr]">
                            <div>
                                <Eyebrow dark>Our story</Eyebrow>
                                <p className="mt-6 text-[9px] uppercase tracking-[0.2em] text-[#292D28]/40">
                                    A connection to the Atlas
                                </p>
                            </div>

                            <div>
                                <h2 className="max-w-5xl font-serif text-4xl leading-[0.98] tracking-[-0.055em] sm:text-5xl md:text-7xl">
                                    The mountains
                                    <br />
                                    are the reason.
                                </h2>

                                <div className="mt-9 grid gap-7 md:grid-cols-2">
                                    <p className="text-sm leading-8 text-[#292D28]/70">
                                        Ride The Atlas was born from a simple idea: to experience
                                        Morocco through its mountains, moving at the pace of a
                                        bike or on skis.
                                    </p>

                                    <p className="text-sm leading-8 text-[#292D28]/70">
                                        The Atlas is not simply a destination. It is a landscape
                                        of high passes, remote valleys, mountain villages and
                                        changing seasons. Ride The Atlas exists to explore that
                                        landscape through meaningful journeys and time spent in
                                        the mountains.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                            <Photo
                                src="/images/about/radouane-brothers-team-picture.jpeg"
                                alt="Radouane and his brothers together outdoors"
                                className="aspect-[5/3] md:aspect-[1.55/1]"
                                sizes="(max-width: 768px) 100vw, 60vw"
                            />
                            <Photo
                                src="/images/about/radouane-brothers-on-bikes.jpeg"
                                alt="Radouane and his brother out riding in the Atlas"
                                className="aspect-[5/3] md:aspect-[1.55/1]"
                                sizes="(max-width: 768px) 100vw, 40vw"
                            />
                        </div>

                        <p className="mt-4 text-[9px] uppercase tracking-[0.18em] text-[#292D28]/45">
                            The people and moments behind the project
                        </p>
                    </div>
                </section>

                {/* RADOUANE */}
                <section className="bg-[#292D28] px-6 py-20 md:px-12 md:py-32">
                    <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
                        <div className="relative">
                            <Photo
                                src="/images/about/radouane-on-bike-profile.jpeg"
                                alt="Radouane with his mountain bike"
                                className="aspect-[4/5] md:aspect-[0.9/1]"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute bottom-5 left-5 bg-[#E56A2E] px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.2em] text-white">
                                Ride The Atlas
                            </div>
                        </div>

                        <div className="lg:pl-8">
                            <Eyebrow>The person behind the project</Eyebrow>

                            <h2 className="mt-7 font-serif text-5xl leading-[0.9] tracking-[-0.06em] md:text-7xl">
                                Meet
                                <br />
                                Radouane<span className="text-[#E56A2E]">.</span>
                            </h2>

                            <div className="mt-8 max-w-xl space-y-5 text-sm leading-8 text-white/65">
                                <p>
                                    Ride The Atlas is built around a personal connection with
                                    the mountains and the desire to experience them in
                                    different ways — on a mountain bike and on skis.
                                </p>

                                <p>
                                    The project brings these two worlds together under one
                                    name. Mountain biking is a central part of that story:
                                    following trails, crossing valleys and discovering the
                                    scale and variety of the Atlas.
                                </p>

                                <p>
                                    When winter transforms the landscape, skis offer another
                                    way to move through the same mountain environment.
                                </p>
                            </div>

                            <div className="mt-10 flex items-center gap-4 border-t border-white/15 pt-6">
                                <span className="h-px w-10 bg-[#E56A2E]" />
                                <span className="text-[9px] uppercase tracking-[0.2em] text-white/50">
                                    One landscape · Different ways to explore
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* BIKE EDITORIAL FEATURE */}
                <section className="bg-[#E8E0D2] px-6 py-20 text-[#292D28] md:px-12 md:py-28">
                    <div className="mx-auto max-w-[1400px]">
                        <div className="mb-12 grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-end">
                            <div>
                                <Eyebrow dark>At the heart of the project</Eyebrow>
                                <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-[0.94] tracking-[-0.06em] md:text-7xl">
                                    The Atlas,
                                    <br />
                                    by bike<span className="text-[#E56A2E]">.</span>
                                </h2>
                            </div>

                            <p className="max-w-lg text-sm leading-8 text-[#292D28]/65 md:justify-self-end">
                                Mountain biking gives us a way to travel through the
                                landscape: along trails, over high ground and into valleys.
                                It is about the ride, but also everything encountered along
                                the way.
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-[1.25fr_0.75fr]">
                            <Photo
                                src="/images/about/radouane-brothers-on-bikes.jpeg"
                                alt="Mountain biking in the Moroccan Atlas"
                                className="aspect-[5/4] md:aspect-[1.2/1]"
                                sizes="(max-width: 768px) 100vw, 65vw"
                            />

                            <div className="grid gap-4">
                                <Photo
                                    src="/images/mtb/bikers-riding-on-ridge.jpeg"
                                    alt="Mountain bikers riding across an Atlas ridge"
                                    className="aspect-[5/3] md:aspect-auto md:min-h-0"
                                />
                                <Photo
                                    src="/images/about/radouane-brothers-team-picture.jpeg"
                                    alt="Radouane and his brothers sharing time in the mountains"
                                    className="aspect-[5/3] md:aspect-auto md:min-h-0"
                                />
                            </div>
                        </div>

                        <div className="mt-10 flex flex-col gap-6 border-t border-[#292D28]/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
                            <p className="max-w-xl text-sm leading-7 text-[#292D28]/65">
                                Discover the mountain-bike journeys and routes that are part
                                of Ride The Atlas.
                            </p>

                            <Link
                                href="/mountain-biking"
                                className="inline-flex items-center gap-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#292D28] transition-colors hover:text-[#C45B2B]"
                            >
                                Explore mountain biking
                                <span className="text-lg text-[#E56A2E]">→</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* SKI TOURING — SECONDARY */}
                <section className="bg-[#292D28] px-6 py-20 md:px-12 md:py-28">
                    <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <div>
                            <Eyebrow>When winter arrives</Eyebrow>

                            <h2 className="mt-7 max-w-xl font-serif text-5xl leading-[0.93] tracking-[-0.055em] md:text-7xl">
                                And then,
                                <br />
                                the snow<span className="text-[#E56A2E]">.</span>
                            </h2>

                            <p className="mt-8 max-w-lg text-sm leading-8 text-white/65">
                                The mountains change with the seasons. In winter, ski touring
                                opens another perspective on the Atlas — its high routes,
                                snow-covered slopes and vast mountain spaces.
                            </p>

                            <Link
                                href="/ski-touring"
                                className="mt-9 inline-flex items-center gap-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:text-[#E56A2E]"
                            >
                                Explore ski touring
                                <span className="text-lg text-[#E56A2E]">→</span>
                            </Link>
                        </div>

                        <Photo
                            src="/images/about/radouane-ski-descent-with-waterfall-background.jpeg"
                            alt="Radouane skiing in the Moroccan Atlas"
                            className="aspect-[5/4] md:aspect-[1.15/1]"
                            sizes="(max-width: 1024px) 100vw, 55vw"
                        />
                    </div>
                </section>

                {/* MOUNTAIN MOMENTS */}
                <section className="bg-[#F3EBDD] px-6 py-20 text-[#292D28] md:px-12 md:py-28">
                    <div className="mx-auto max-w-[1400px]">
                        <div className="mb-12 grid gap-8 md:grid-cols-[1fr_1fr] md:items-end">
                            <div>
                                <Eyebrow dark>Out there</Eyebrow>
                                <h2 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.055em] md:text-7xl">
                                    The moments
                                    <br />
                                    in between<span className="text-[#E56A2E]">.</span>
                                </h2>
                            </div>

                            <p className="max-w-lg text-sm leading-8 text-[#292D28]/65 md:justify-self-end">
                                The Atlas is more than a line on a map. It is the terrain,
                                the changing weather, the people met along the way and the
                                moments that make every journey its own.
                            </p>
                        </div>

                        <div className="grid gap-4 md:grid-cols-3">
                            <Photo
                                src="/images/about/radouane-selfie-with-scarf-shash-wearing.jpeg"
                                alt="Radouane in the Atlas mountains"
                                className="aspect-[4/5]"
                            />
                            <Photo
                                src="/images/about/radouane-above-couloir.jpeg"
                                alt="Radouane above a mountain couloir"
                                className="aspect-[4/5]"
                            />
                            <Photo
                                src="/images/about/radouane-with-ski-clients-on-ridge-tizi-likemt.jpeg"
                                alt="Radouane with ski clients on a ridge at Tizi Likemt"
                                className="aspect-[4/5]"
                            />
                        </div>
                    </div>
                </section>

                {/* CLOSING CTA */}
                <section className="relative flex min-h-[570px] items-end overflow-hidden bg-[#20241F] px-6 py-16 md:min-h-[700px] md:px-12 md:py-24">
                    <Image
                        src="/images/about/radouane-brothers-on-bikes.jpeg"
                        alt="Mountain biking in the Atlas"
                        fill
                        sizes="100vw"
                        className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-black/25" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                    <div className="relative z-10 mx-auto w-full max-w-[1400px]">
                        <Eyebrow>Ride The Atlas · Morocco</Eyebrow>

                        <h2 className="mt-7 max-w-5xl font-serif text-5xl leading-[0.9] tracking-[-0.06em] md:text-7xl lg:text-8xl">
                            Your next
                            <br />
                            mountain story<span className="text-[#E56A2E]">.</span>
                        </h2>

                        <div className="mt-10 flex flex-col gap-6 border-t border-white/30 pt-6 md:flex-row md:items-end md:justify-between">
                            <p className="max-w-lg text-sm leading-7 text-white/75">
                                Discover Morocco through its mountains, by bike or on skis.
                            </p>

                            <Link
                                href="/contact"
                                className="inline-flex min-w-[190px] items-center justify-between gap-8 border border-[#E56A2E] bg-[#E56A2E] px-6 py-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-transparent"
                            >
                                Get in touch
                                <span aria-hidden="true" className="text-lg">
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <SiteFooter />
        </>
    );
}