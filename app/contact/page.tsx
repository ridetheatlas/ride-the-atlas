import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import ContactForm from "@/components/contact-form";

export const metadata = {
    title: "Contact Ride The Atlas | Plan Your Morocco Mountain Adventure",
    description:
        "Contact Ride The Atlas to enquire about mountain biking, ski touring and mountain adventures in the Moroccan Atlas.",
};

const email = "ridetheatlas@gmail.com";
const whatsappNumber = "212771245210";
const whatsappMessage = encodeURIComponent(
    "Hello Ride The Atlas, I'm interested in planning a mountain adventure in Morocco."
);
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

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

export default function ContactPage() {
    return (
        <>
            <SiteHeader />

            <main className="overflow-hidden bg-[#F3EBDD] text-[#292D28]">
                {/* HERO */}
                <section className="relative flex min-h-[82svh] items-end bg-[#20241F] text-[#F3EBDD] md:min-h-[760px]">
                    <Image
                        src="/images/mtb/bikers-riding-on-ridge.jpeg"
                        alt="Mountain bikers riding along a high ridge in the Moroccan Atlas"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />

                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/25 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/10" />

                    <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-14 pt-40 md:px-12 md:pb-20">
                        <Eyebrow>Ride The Atlas · Contact</Eyebrow>

                        <div className="mt-8 max-w-5xl">
                            <h1 className="font-serif text-[clamp(4rem,11vw,10rem)] leading-[0.8] tracking-[-0.075em]">
                                Let&apos;s get
                                <br />
                                out <span className="text-[#E56A2E]">there.</span>
                            </h1>

                            <div className="mt-10 grid gap-8 border-t border-white/30 pt-6 md:grid-cols-[1fr_auto] md:items-end">
                                <p className="max-w-xl text-sm leading-8 text-white/80 md:text-base">
                                    A mountain-bike journey, a ski tour or simply a question
                                    about the Atlas. Tell us what you have in mind and let’s
                                    start a conversation.
                                </p>

                                <a
                                    href="#send-enquiry"
                                    className="group inline-flex items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/80 transition-colors hover:text-white"
                                >
                                    Send an enquiry
                                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/50 text-base transition-all duration-300 group-hover:translate-y-1 group-hover:border-[#E56A2E] group-hover:bg-[#E56A2E]">
                                        ↓
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className="mt-12 flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-white/50">
                            <span className="h-px w-8 bg-[#E56A2E]" />
                            Morocco · High Atlas · Your next journey
                        </div>
                    </div>
                </section>

                {/* INTRO */}
                <section className="px-6 py-20 md:px-12 md:py-28">
                    <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.6fr_1.4fr]">
                        <div>
                            <Eyebrow dark>Start a conversation</Eyebrow>
                            <p className="mt-6 text-[9px] uppercase tracking-[0.2em] text-[#292D28]/40">
                                Tell us what you have in mind
                            </p>
                        </div>

                        <div>
                            <h2 className="max-w-4xl font-serif text-4xl leading-[0.98] tracking-[-0.055em] sm:text-5xl md:text-7xl">
                                Every good journey
                                <br />
                                starts somewhere<span className="text-[#E56A2E]">.</span>
                            </h2>

                            <p className="mt-8 max-w-2xl text-sm leading-8 text-[#292D28]/65">
                                Share a few details about your plans. Whether you know
                                exactly what you want or are just beginning to explore,
                                we’d be glad to hear from you.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CONTACT FORM AND CONTACT DETAILS */}
                <section
                    id="send-enquiry"
                    className="scroll-mt-20 bg-[#E8E0D2] px-6 py-16 md:px-12 md:py-24"
                >
                    <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                        {/* FORM */}
                        <div className="bg-[#F3EBDD] p-6 md:p-10 lg:p-12">
                            <Eyebrow dark>Enquiry form</Eyebrow>

                            <h2 className="mt-6 font-serif text-4xl leading-none tracking-[-0.05em] md:text-5xl">
                                Tell us about
                                <br />
                                your plans<span className="text-[#E56A2E]">.</span>
                            </h2>

                            <p className="mt-5 max-w-lg text-sm leading-7 text-[#292D28]/60">
                                A few details will help us understand what kind of mountain
                                experience you are looking for.
                            </p>

                            <div className="mt-9">
                                <ContactForm />
                            </div>
                        </div>

                        {/* DIRECT CONTACT */}
                        <div className="flex flex-col">
                            <div className="relative min-h-[360px] flex-1 overflow-hidden bg-[#292D28] md:min-h-[500px]">
                                <Image
                                    src="/images/about/radouane-on-bike-profile.jpeg"
                                    alt="Radouane with his mountain bike in the Atlas"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 45vw"
                                    className="object-cover object-center"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                                <div className="absolute bottom-0 left-0 right-0 p-7 text-white md:p-10">
                                    <Eyebrow>Ride The Atlas</Eyebrow>
                                    <p className="mt-5 max-w-lg font-serif text-3xl leading-[1.05] tracking-[-0.04em] md:text-4xl">
                                        One message can be the beginning of your next mountain
                                        journey.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-[#292D28] p-6 text-[#F3EBDD] md:p-9">
                                <Eyebrow>Get in touch directly</Eyebrow>

                                {/* EMAIL */}
                                <a
                                    href={`mailto:${email}`}
                                    className="group mt-7 flex items-center justify-between gap-4 border-b border-white/15 pb-6 transition-colors hover:text-[#E56A2E]"
                                >
                                    <div>
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
                                            Email
                                        </p>
                                        <p className="mt-2 break-all text-base md:text-lg">
                                            {email}
                                        </p>
                                    </div>
                                    <span className="text-xl text-[#E56A2E] transition-transform group-hover:translate-x-1">
                                        ↗
                                    </span>
                                </a>

                                {/* WHATSAPP */}
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group mt-6 flex items-center justify-between gap-4 transition-colors hover:text-[#E56A2E]"
                                >
                                    <div>
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/45">
                                            WhatsApp
                                        </p>
                                        <p className="mt-2 text-base md:text-lg">
                                            +212 771 245 210
                                        </p>
                                        <p className="mt-2 text-xs text-white/45">
                                            Open a direct conversation
                                        </p>
                                    </div>
                                    <span className="text-xl text-[#E56A2E] transition-transform group-hover:translate-x-1">
                                        ↗
                                    </span>
                                </a>

                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-8 inline-flex w-full items-center justify-between gap-5 bg-[#E56A2E] px-5 py-4 text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#C45B2B]"
                                >
                                    Chat on WhatsApp
                                    <span className="text-lg">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ACTIVITY LINKS */}
                <section className="bg-[#F3EBDD] px-6 py-20 md:px-12 md:py-28">
                    <div className="mx-auto max-w-[1400px]">
                        <Eyebrow dark>Explore before you enquire</Eyebrow>

                        <div className="mt-8 grid gap-5 md:grid-cols-2">
                            <Link href="/mountain-biking" className="group">
                                <div className="relative aspect-[16/9] overflow-hidden bg-[#292D28]">
                                    <Image
                                        src="/images/about/radouane-brothers-on-bikes.jpeg"
                                        alt="Radouane and his brother mountain biking"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 text-white md:p-8">
                                        <div>
                                            <p className="text-[9px] uppercase tracking-[0.2em] text-[#E56A2E]">
                                                Explore on two wheels
                                            </p>
                                            <h3 className="mt-3 font-serif text-3xl md:text-4xl">
                                                Mountain biking
                                            </h3>
                                        </div>
                                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 transition-all group-hover:border-[#E56A2E] group-hover:bg-[#E56A2E]">
                                            ↗
                                        </span>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/ski-touring" className="group">
                                <div className="relative aspect-[16/9] overflow-hidden bg-[#292D28]">
                                    <Image
                                        src="/images/about/radouane-ski-descent-with-waterfall-background.jpeg"
                                        alt="Ski touring in the Moroccan Atlas"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                                    <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6 text-white md:p-8">
                                        <div>
                                            <p className="text-[9px] uppercase tracking-[0.2em] text-[#E56A2E]">
                                                Explore on skis
                                            </p>
                                            <h3 className="mt-3 font-serif text-3xl md:text-4xl">
                                                Ski touring
                                            </h3>
                                        </div>
                                        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 transition-all group-hover:border-[#E56A2E] group-hover:bg-[#E56A2E]">
                                            ↗
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="bg-[#292D28] px-6 py-20 text-[#F3EBDD] md:px-12 md:py-28">
                    <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
                        <div>
                            <Eyebrow>Ready when you are</Eyebrow>

                            <h2 className="mt-7 max-w-3xl font-serif text-4xl leading-[0.95] tracking-[-0.055em] md:text-6xl">
                                The Atlas is
                                <br />
                                waiting<span className="text-[#E56A2E]">.</span>
                            </h2>

                            <p className="mt-6 max-w-xl text-sm leading-7 text-white/60">
                                Start with a question, an idea or a date. We’ll take it from
                                there.
                            </p>
                        </div>

                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-w-[210px] items-center justify-between gap-6 border border-[#E56A2E] bg-[#E56A2E] px-6 py-5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-transparent"
                        >
                            Message on WhatsApp
                            <span className="text-lg">↗</span>
                        </a>
                    </div>
                </section>
            </main>

            <SiteFooter />
        </>
    );
}