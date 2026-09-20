const orange = "#F3EBDD";

export default function AtlasLogo({
    className = "",
}: {
    className?: string;
}) {
    return (
        <div
            className={`group inline-flex items-center gap-3 ${className}`}
        >
            <svg
                viewBox="0 0 100 70"
                aria-hidden="true"
                className="h-10 w-auto shrink-0 transition-transform duration-500 group-hover:scale-105"
            >
                <path
                    d="M8 58 L34 20 L50 39 L64 17 L92 58"
                    fill="none"
                    stroke={orange}
                    strokeWidth="5"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                />

                <path
                    d="M34 20 L50 39 L42 50"
                    fill="none"
                    stroke={orange}
                    strokeWidth="5"
                    strokeLinecap="square"
                />

                <path
                    d="M64 17 L58 27"
                    fill="none"
                    stroke={orange}
                    strokeWidth="5"
                    strokeLinecap="square"
                />
            </svg>

            <span className="flex flex-col leading-none">
                <span className="text-[11px] font-semibold uppercase tracking-[0.38em] text-white">
                    Ride
                </span>

                <span
                    className="mt-1 text-[13px] font-bold uppercase tracking-[0.28em]"
                    style={{ color: orange }}
                >
                    The Atlas
                </span>
            </span>
        </div>
    );
}