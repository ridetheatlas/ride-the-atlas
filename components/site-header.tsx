"use client";

import { useState } from "react";
import Link from "next/link";
import AtlasLogo from "./atlas-logo";

const accent = "#F3EBDD";

const navigation = [
    { label: "Home", href: "/" },
    { label: "Mountain Biking", href: "/mountain-biking" },
    { label: "Ski Touring", href: "/ski-touring" },
    { label: "Journal", href: "/journal" },
    { label: "About", href: "/about" },
];

export default function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <div className="relative flex items-center justify-between px-6 py-6 md:px-10 lg:px-14">

                {/* BRAND */}
                <Link
                    href="/"
                    aria-label="Ride The Atlas"
                    className="inline-flex"
                    onClick={() => setMenuOpen(false)}
                >
                    <AtlasLogo />
                </Link>

                {/* DESKTOP NAVIGATION */}
                <nav className="hidden items-center gap-8 lg:flex">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="group relative text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 transition-colors duration-300 hover:text-[#F3EBDD]"
                        >
                            {item.label}

                            <span
                                className="absolute -bottom-2 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                                style={{ backgroundColor: accent }}
                            />
                        </Link>
                    ))}

                    {/* CONTACT */}
                    <Link
                        href="/contact"
                        className="ml-3 border border-white/50 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-[#F3EBDD] hover:bg-[#F3EBDD] hover:text-black"
                    >
                        Contact
                    </Link>
                </nav>

                {/* MOBILE MENU BUTTON */}
                <button
                    type="button"
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="border border-white/50 px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:border-[#F3EBDD] hover:text-[#F3EBDD] lg:hidden"
                >
                    {menuOpen ? "Close" : "Menu"}
                </button>
            </div>

            {/* MOBILE NAVIGATION */}
            <div
                className={`absolute inset-x-0 top-full border-t border-white/10 bg-black/95 backdrop-blur-md transition-all duration-300 lg:hidden ${menuOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-3 opacity-0"
                    }`}
            >
                <nav className="px-6 py-8 md:px-10">
                    <div className="flex flex-col">
                        {navigation.map((item, index) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className={`py-5 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:text-[#F3EBDD] ${index !== navigation.length - 1
                                        ? "border-b border-white/10"
                                        : ""
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="mt-6 flex items-center justify-between border border-white/30 px-5 py-4 text-[10px] font-semibold uppercase tracking-[0.25em] text-white transition-all duration-300 hover:border-[#F3EBDD] hover:bg-[#F3EBDD] hover:text-black"
                        >
                            <span>Contact</span>
                            <span className="text-lg">→</span>
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}   