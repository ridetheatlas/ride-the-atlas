import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

export default function AboutPage() {
    return (
        <>
            <SiteHeader />

            <main className="bg-black text-white">

                {/* HERO */}

                <section className="relative min-h-screen overflow-hidden">

                    <div className="absolute inset-0">

                        <Image
                            src="/images/ski/radouane-on-skis.jpeg"
                            alt="Radouane ski touring in the Moroccan High Atlas"
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
                            Ride The Atlas · About
                        </p>

                    </div>

                    {/* MAIN TITLE */}

                    <div className="absolute left-6 top-1/2 z-20 -translate-y-1/2 md:left-10 lg:left-14">

                        <div className="flex items-start gap-5 md:gap-7">

                            <span className="mt-2 h-28 w-px shrink-0 bg-[#F3EBDD] md:h-36" />

                            <div>

                                <h1 className="text-[3.2rem] font-semibold uppercase leading-[0.88] tracking-[-0.055em] text-white sm:text-[4rem] md:text-[5rem] lg:text-[6rem]">
                                    More Than
                                    <br />
                                    A Mountain
                                </h1>

                            </div>

                        </div>

                    </div>

                    {/* BOTTOM */}

                    <div className="absolute bottom-8 left-6 right-6 z-20 flex items-end justify-between md:left-10 md:right-10 lg:left-14 lg:right-14">

                        <p className="text-[8px] uppercase tracking-[0.35em] text-white/40">
                            Ride The Atlas · Morocco
                        </p>

                        <Link
                            href="#about"
                            className="group flex items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.35em] text-white/70 transition-colors duration-300 hover:text-[#F3EBDD]"
                        >
                            Discover

                            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-sm text-[#F3EBDD] transition-all duration-300 group-hover:border-[#F3EBDD] group-hover:translate-y-1">
                                ↓
                            </span>
                        </Link>

                    </div>

                </section>
                {/* THE IDEA */}

                <section
                    id="about"
                    className="px-6 py-24 md:px-10 md:py-32 lg:px-14"
                >

                    <div className="mx-auto max-w-7xl">

                        <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">

                            <div className="pt-2">

                                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#F3EBDD]">
                                    The Idea
                                </p>

                            </div>

                            <div>

                                <h2 className="max-w-5xl text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-[5.8rem]">
                                    Ride the
                                    <br />
                                    mountains.
                                </h2>

                                <p className="mt-8 max-w-2xl text-sm leading-7 text-white/55 md:text-base md:leading-8">
                                    Ride The Atlas was born from a simple idea: to experience
                                    Morocco through its mountains, moving at the pace of a
                                    bike or on skis.
                                </p>

                                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/55 md:text-base md:leading-8">
                                    The Atlas is not simply a destination. It is a landscape
                                    of high passes, remote valleys, mountain villages and
                                    changing seasons. Ride The Atlas exists to explore that
                                    landscape through meaningful journeys and time spent
                                    in the mountains.
                                </p>

                            </div>

                        </div>

                    </div>

                </section>

            </main>

            <SiteFooter />
        </>
    );
}