import Link from "next/link";

export default function WhatsAppButton() {
    const whatsappUrl =
        "https://wa.me/212771245210?text=Hi%20Ride%20The%20Atlas%2C%20I%27m%20interested%20in%20an%20adventure%20in%20the%20Moroccan%20Atlas.";

    return (
        <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact Ride The Atlas on WhatsApp"
            className="group fixed bottom-6 right-6 z-[60] flex items-center gap-3"
        >
            <span className="hidden border border-white/15 bg-black/85 px-4 py-3 text-[9px] font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-sm transition-all duration-300 group-hover:border-[#F3EBDD]/40 group-hover:text-[#F3EBDD] md:block">
                WhatsApp
            </span>

            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-[#F3EBDD] text-black shadow-2xl transition-all duration-300 group-hover:scale-105 group-hover:bg-white">
                <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    className="h-6 w-6"
                    fill="currentColor"
                >
                    <path d="M20.52 3.48A11.82 11.82 0 0 0 12.08 0C5.54 0 .22 5.32.22 11.87c0 2.09.55 4.13 1.59 5.92L.12 24l6.36-1.67a11.86 11.86 0 0 0 5.6 1.43h.01c6.54 0 11.86-5.32 11.86-11.87 0-3.17-1.23-6.15-3.43-8.41ZM12.09 21.7h-.01a9.83 9.83 0 0 1-5.01-1.37l-.36-.21-3.77.99 1.01-3.67-.23-.38a9.84 9.84 0 0 1-1.51-5.19C2.21 6.44 6.64 2 12.09 2a9.82 9.82 0 0 1 6.98 2.9 9.88 9.88 0 0 1 2.88 7c0 5.45-4.43 9.88-9.86 9.88Zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.09 4.5.71.31 1.27.5 1.71.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                </svg>
            </span>
        </Link>
    );
}