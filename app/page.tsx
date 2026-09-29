import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";


export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="bg-[#171715] text-white">

        {/* HERO */}

        <section className="relative h-[100svh] min-h-[650px] overflow-hidden bg-[#171715]">

          {/* BACKGROUND VIDEO */}
          <div className="absolute inset-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/images/general/atlas-mountains.jpeg"
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover object-center"
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
            </video>

            {/* VIDEO TREATMENT */}
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
          </div>

          {/* TOP LOCATION LABEL */}
          <div className="absolute left-6 right-6 top-32 z-20 flex items-center justify-between md:left-10 md:right-10 md:top-36 lg:left-14 lg:right-14">
            <p className="flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-white/80">
              <span className="h-px w-7 bg-[#E56A2E]" />
              Moroccan High Atlas
            </p>

            <p className="hidden text-[9px] uppercase tracking-[0.3em] text-white/60 sm:block">
              31° North · Morocco
            </p>
          </div>

          {/* BOTTOM CONTENT */}
          <div className="hero-reveal absolute inset-x-0 bottom-0 z-20 px-6 pb-8 md:px-10 md:pb-10 lg:px-14 lg:pb-12">
            <div className="mx-auto max-w-[1600px]">

              <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">

                {/* BRAND */}
                <div>
                  <p className="mb-4 text-[9px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">
                    By Bike · By Ski
                  </p>

                  <h1 className="text-[clamp(3rem,7vw,6.5rem)] font-semibold uppercase leading-[0.85] tracking-[-0.075em] text-white">
                    RIDE THE
                    <br />
                    ATLAS<span className="text-[#E56A2E]">.</span>
                  </h1>

                  <p className="mt-5 text-[9px] font-medium uppercase tracking-[0.25em] text-white/70">
                    Explore the Moroccan mountains
                  </p>
                </div>

                {/* SINGLE EXPLORE LINK */}
                <Link
                  href="#journeys"
                  className="group flex w-fit items-center gap-4 pb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-white transition-colors hover:text-[#E56A2E]"
                >
                  Explore
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/60 text-lg transition-all duration-300 group-hover:translate-y-1 group-hover:border-[#E56A2E]">
                    ↓
                  </span>
                </Link>

              </div>

              {/* BOTTOM LOCATION */}
              <div className="mt-8">
                <p className="text-[8px] font-medium uppercase tracking-[0.25em] text-white/55">
                  High Atlas Mountains · Morocco
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ABOUT RIDE THE ATLAS */}

        <section
          id="about"
          className="overflow-hidden bg-[#F3EBDD] px-6 py-24 text-[#171715] md:px-10 md:py-32 lg:px-14"
        >
          <div className="mx-auto max-w-7xl">

            {/* SECTION INTRO */}

            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

              <div className="flex flex-col justify-between">
                <div>
                  <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#B85A2A]">
                    <span className="h-px w-8 bg-[#B85A2A]" />
                    About Ride The Atlas
                  </p>

                  <p className="mt-8 max-w-[190px] text-xs uppercase leading-6 tracking-[0.16em] text-[#171715]/50">
                    A family connection to the mountains of Morocco.
                  </p>
                </div>

                <p className="mt-12 hidden text-[9px] uppercase tracking-[0.3em] text-[#171715]/40 lg:block">
                  Isouktan Family · High Atlas
                </p>
              </div>


              <div>
                <h2 className="max-w-5xl text-[clamp(3rem,7vw,6.8rem)] font-semibold uppercase leading-[0.84] tracking-[-0.065em]">
                  Born in the Atlas.
                  <br />
                  <span className="text-[#B85A2A]">Built to explore.</span>
                </h2>

                <div className="mt-10 grid gap-7 border-t border-[#171715]/20 pt-7 md:grid-cols-2 md:gap-10">

                  <p className="text-sm leading-7 text-[#171715]/75 md:text-base md:leading-8">
                    Ride The Atlas was founded by Radouane and his brothers, from the
                    Isouktan family, whose roots are in Morocco’s High Atlas Mountains.
                    The mountains are more than a landscape to us — they are part of
                    our family story and the place that shaped our connection to
                    outdoor life.
                  </p>

                  <p className="text-sm leading-7 text-[#171715]/75 md:text-base md:leading-8">
                    From this connection grew a company dedicated to exploring Morocco
                    by mountain bike and ski. We bring these two passions together,
                    sharing the trails, valleys, villages and high mountain terrain
                    that make the Atlas such a distinctive place to discover.
                  </p>

                </div>
              </div>
            </div>


            {/* ACTIVITY INTRO */}

            <div className="mt-24 flex flex-col gap-5 border-t border-[#171715]/20 pt-7 md:mt-32 md:flex-row md:items-end md:justify-between">

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#B85A2A]">
                  Two ways to explore
                </p>

                <h3 className="mt-4 max-w-2xl text-3xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] md:text-5xl">
                  One mountain range.
                  <br />
                  Different ways to experience it.
                </h3>
              </div>

              <p className="max-w-xs text-sm leading-7 text-[#171715]/60 md:pb-1">
                From the trails of the warmer months to the snow-covered peaks of
                winter, discover the Atlas through the seasons.
              </p>
            </div>


            {/* ACTIVITY CARDS */}

            <div className="mt-10 grid gap-4 md:grid-cols-2">

              {/* MOUNTAIN BIKING */}

              <Link
                href="/mountain-biking"
                className="group relative block overflow-hidden bg-[#171715]"
              >
                <div className="relative aspect-[4/5] overflow-hidden md:aspect-[4/4.5]">

                  <Image
                    src="/images/mtb/bikers-riding-on-ridge.jpeg"
                    alt="Mountain bikers riding a ridge in the Moroccan Atlas"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                  {/* CARD TOP */}

                  <div className="absolute left-6 right-6 top-6 flex items-center justify-between md:left-8 md:right-8 md:top-8">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/75">
                      01 / Mountain Biking
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 text-white transition-all duration-300 group-hover:border-[#E56A2E] group-hover:bg-[#E56A2E]">
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                        ↗
                      </span>
                    </span>
                  </div>

                  {/* CARD CONTENT */}

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">

                    <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">
                      Explore by bike
                    </p>

                    <h4 className="mt-4 max-w-lg text-4xl font-semibold uppercase leading-[0.88] tracking-[-0.05em] text-white md:text-5xl">
                      Ride the trails.
                      <br />
                      Discover the valleys.
                    </h4>

                    <div className="mt-7 flex items-center justify-between border-t border-white/30 pt-5">
                      <p className="text-[9px] uppercase tracking-[0.25em] text-white/65">
                        Mountain Biking · Morocco
                      </p>

                      <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white transition-colors group-hover:text-[#E56A2E]">
                        Discover
                      </span>
                    </div>

                  </div>
                </div>
              </Link>


              {/* SKI TOURING */}

              <Link
                href="/ski-touring"
                className="group relative block overflow-hidden bg-[#171715]"
              >
                <div className="relative aspect-[4/5] overflow-hidden md:aspect-[4/4.5]">

                  <Image
                    src="/images/ski/ski-descent-bouignouane.jpeg"
                    alt="Ski tourer descending a mountain in the Moroccan Atlas"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                  {/* CARD TOP */}

                  <div className="absolute left-6 right-6 top-6 flex items-center justify-between md:left-8 md:right-8 md:top-8">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/75">
                      02 / Ski Touring
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 text-white transition-all duration-300 group-hover:border-[#E56A2E] group-hover:bg-[#E56A2E]">
                      <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                        ↗
                      </span>
                    </span>
                  </div>

                  {/* CARD CONTENT */}

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">

                    <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">
                      Explore by ski
                    </p>

                    <h4 className="mt-4 max-w-lg text-4xl font-semibold uppercase leading-[0.88] tracking-[-0.05em] text-white md:text-5xl">
                      Follow the winter.
                      <br />
                      Find your line.
                    </h4>

                    <div className="mt-7 flex items-center justify-between border-t border-white/30 pt-5">
                      <p className="text-[9px] uppercase tracking-[0.25em] text-white/65">
                        Ski Touring · Morocco
                      </p>

                      <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white transition-colors group-hover:text-[#E56A2E]">
                        Discover
                      </span>
                    </div>

                  </div>
                </div>
              </Link>

            </div>


            {/* CLOSING LINE */}

            <div className="mt-8 flex flex-col gap-4 border-t border-[#171715]/20 pt-6 sm:flex-row sm:items-center sm:justify-between">

              <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#171715]/50">
                Isouktan Family · Moroccan High Atlas
              </p>

              <p className="text-[9px] uppercase tracking-[0.3em] text-[#171715]/50">
                By Bike <span className="px-2 text-[#E56A2E]">/</span> By Ski
              </p>

            </div>

          </div>
        </section>


        {/* EXPLORE THE ATLAS */}

        <section
          id="journeys"
          className="bg-[#171715] px-6 py-24 text-white md:px-10 md:py-32 lg:px-14"
        >
          <div className="mx-auto max-w-7xl">

            {/* SECTION HEADER */}

            <div className="mb-12 grid gap-8 border-b border-white/15 pb-8 md:grid-cols-[1fr_auto] md:items-end">
              <div>
                <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">
                  <span className="h-px w-8 bg-[#E56A2E]" />
                  Explore The Atlas
                </p>

                <h2 className="mt-6 max-w-4xl text-[clamp(2.8rem,6vw,5.8rem)] font-semibold uppercase leading-[0.86] tracking-[-0.06em]">
                  Find your way
                  <br />
                  into the mountains.
                </h2>
              </div>

              <p className="max-w-xs text-sm leading-7 text-white/50 md:pb-1 md:text-right">
                Three ways to experience Morocco’s mountain landscapes.
                Choose the journey that moves you.
              </p>
            </div>


            {/* ACTIVITY GRID */}

            <div className="grid gap-5 md:grid-cols-2">

              {/* MOUNTAIN BIKING */}

              <Link
                href="/mountain-biking"
                className="group relative block overflow-hidden border border-white/10 bg-[#242421] transition-colors duration-300 hover:border-[#E56A2E]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">

                  <Image
                    src="/images/mtb/rider-singletrack-atlas.jpeg"
                    alt="Mountain biker riding singletrack in the Moroccan Atlas"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent" />
                  <div className="absolute inset-0 bg-[#171715]/10 transition-colors duration-500 group-hover:bg-transparent" />

                  {/* TOP */}

                  <div className="absolute left-6 right-6 top-6 flex items-center justify-between md:left-8 md:right-8 md:top-8">
                    <span className="bg-[#E56A2E] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                      01 / By Bike
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E56A2E] text-xl text-white transition-transform duration-300 group-hover:rotate-45">
                      ↗
                    </span>
                  </div>

                  {/* BOTTOM */}

                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">

                    <div className="mb-4 h-1 w-14 bg-[#E56A2E] transition-all duration-500 group-hover:w-24" />

                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E56A2E]">
                      Mountain Biking
                    </p>

                    <h3 className="mt-3 text-3xl font-semibold uppercase leading-[0.9] tracking-[-0.045em] md:text-4xl">
                      Ride beyond
                      <br />
                      the ordinary.
                    </h3>

                    <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
                      Explore mountain trails, remote tracks and traditional
                      villages across the Atlas.
                    </p>

                    <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/25 pt-5">
                      <span className="text-[8px] uppercase tracking-[0.28em] text-white/50">
                        High Atlas · Morocco
                      </span>

                      <span className="inline-flex shrink-0 items-center gap-2 bg-[#E56A2E] px-4 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#171715]">
                        Explore biking
                        <span className="text-sm">↗</span>
                      </span>
                    </div>

                  </div>
                </div>
              </Link>


              {/* SKI TOURING */}

              <Link
                href="/ski-touring"
                className="group relative block overflow-hidden border border-white/10 bg-[#242421] transition-colors duration-300 hover:border-[#E56A2E]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">

                  <Image
                    src="/images/ski/skiers-on-toubkal-summit.jpeg"
                    alt="Ski tourers on a summit in the Moroccan Atlas"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/25 to-transparent" />
                  <div className="absolute inset-0 bg-[#171715]/10 transition-colors duration-500 group-hover:bg-transparent" />

                  {/* TOP */}

                  <div className="absolute left-6 right-6 top-6 flex items-center justify-between md:left-8 md:right-8 md:top-8">
                    <span className="bg-[#E56A2E] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                      02 / By Ski
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E56A2E] text-xl text-white transition-transform duration-300 group-hover:rotate-45">
                      ↗
                    </span>
                  </div>

                  {/* BOTTOM */}

                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">

                    <div className="mb-4 h-1 w-14 bg-[#E56A2E] transition-all duration-500 group-hover:w-24" />

                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E56A2E]">
                      Ski Touring
                    </p>

                    <h3 className="mt-3 text-3xl font-semibold uppercase leading-[0.9] tracking-[-0.045em] md:text-4xl">
                      Into the
                      <br />
                      winter mountains.
                    </h3>

                    <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
                      Climb into the high mountains and discover the Atlas
                      on skis when winter brings snow to its peaks.
                    </p>

                    <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/25 pt-5">
                      <span className="text-[8px] uppercase tracking-[0.28em] text-white/50">
                        High Atlas · Winter
                      </span>

                      <span className="inline-flex shrink-0 items-center gap-2 bg-[#E56A2E] px-4 py-3 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#171715]">
                        Explore skiing
                        <span className="text-sm">↗</span>
                      </span>
                    </div>

                  </div>
                </div>
              </Link>


              {/* GRAVEL BIKING */}

              <Link
                href="/gravel-biking-morocco"
                className="group relative block overflow-hidden border border-white/10 bg-[#242421] transition-colors duration-300 hover:border-[#E56A2E] md:col-span-2"
              >
                <div className="relative min-h-[560px] overflow-hidden md:min-h-[540px]">

                  <Image
                    src="/images/mtb/gravel-bike-morocco-atlas-mountains.jpeg"
                    alt="Gravel cyclist riding through the Atlas Mountains in Morocco"
                    fill
                    sizes="100vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />

                  <div className="absolute inset-0 bg-black/25" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

                  {/* TOP */}

                  <div className="absolute left-6 right-6 top-6 flex items-center justify-between md:left-10 md:right-10 md:top-8">
                    <span className="bg-[#E56A2E] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                      03 / By Gravel
                    </span>

                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E56A2E] text-xl text-white transition-transform duration-300 group-hover:rotate-45">
                      ↗
                    </span>
                  </div>

                  {/* CONTENT */}

                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-12">

                    <div className="max-w-3xl">

                      <div className="mb-5 h-1 w-16 bg-[#E56A2E] transition-all duration-500 group-hover:w-28" />

                      <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#E56A2E]">
                        Gravel Biking
                      </p>

                      <h3 className="mt-4 text-4xl font-semibold uppercase leading-[0.88] tracking-[-0.055em] sm:text-5xl md:text-7xl">
                        Take the
                        <br />
                        longer way.
                      </h3>

                      <p className="mt-6 max-w-lg text-sm leading-7 text-white/75 md:text-base md:leading-8">
                        Explore Morocco by gravel bike, from remote roads and
                        high passes to the wide-open landscapes of the Atlas.
                      </p>

                    </div>

                    <div className="mt-9 flex flex-col gap-5 border-t border-white/25 pt-5 sm:flex-row sm:items-center sm:justify-between">

                      <p className="text-[8px] uppercase tracking-[0.28em] text-white/55">
                        Gravel · Atlas · Morocco
                      </p>

                      <span className="inline-flex w-fit items-center gap-2 bg-[#E56A2E] px-5 py-3.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#171715]">
                        Explore gravel biking
                        <span className="text-sm">↗</span>
                      </span>

                    </div>

                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>
        {/* THE FOUNDER */}

        <section className="overflow-hidden bg-[#F3EBDD] px-6 py-24 text-[#171715] md:px-10 md:py-32 lg:px-14">
          <div className="mx-auto max-w-7xl">

            <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-16">

              {/* SECTION LABEL */}

              <div className="flex items-start justify-between lg:block">
                <div>
                  <p className="pt-2 text-[10px] font-bold uppercase tracking-[0.35em] text-[#B85A2A]">
                    The Founder
                  </p>
                  <span className="mt-4 block h-1 w-14 bg-[#E56A2E]" />
                </div>
              </div>


              {/* CONTENT */}

              <div>

                <div className="max-w-5xl">
                  <h2 className="text-4xl font-semibold uppercase leading-[0.92] tracking-[-0.05em] text-[#171715] md:text-6xl lg:text-[5.5rem]">
                    Built from a
                    <br />
                    love of mountains.
                  </h2>

                  <p className="mt-8 max-w-2xl text-sm leading-7 text-[#171715]/70 md:text-base md:leading-8">
                    Ride The Atlas was created by Radouane to share a different
                    way of experiencing Morocco — through movement, exploration
                    and time spent in the mountains.
                  </p>
                </div>


                {/* FOUNDER PHOTOGRAPHS */}

                <div className="mt-12 grid gap-5 md:grid-cols-2">

                  {/* BY BIKE */}

                  <div className="group">
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#171715]/10">

                      <Image
                        src="/images/mtb/radouane-bike.jpeg"
                        alt="Radouane riding a mountain bike in the Moroccan Atlas"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                      {/* ORANGE TOP MARKER */}

                      <div className="absolute left-5 top-5 flex items-center gap-2">
                        <span className="h-2 w-2 bg-[#E56A2E]" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white">
                          01 / 02
                        </span>
                      </div>

                      {/* CARD CAPTION */}

                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                        <span className="inline-block bg-[#E56A2E] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.25em] text-white">
                          By Bike
                        </span>

                        <p className="mt-3 text-2xl font-semibold uppercase tracking-[-0.03em] text-white">
                          Radouane
                        </p>
                      </div>

                      {/* ORANGE EDGE */}

                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#E56A2E] transition-all duration-500 group-hover:w-full" />
                    </div>
                  </div>


                  {/* BY SKI */}

                  <div className="group">
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#171715]/10">

                      <Image
                        src="/images/ski/radouane-on-skis.jpeg"
                        alt="Radouane ski touring in the Moroccan Atlas"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                      {/* ORANGE TOP MARKER */}

                      <div className="absolute left-5 top-5 flex items-center gap-2">
                        <span className="h-2 w-2 bg-[#E56A2E]" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-white">
                          02 / 02
                        </span>
                      </div>

                      {/* CARD CAPTION */}

                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                        <span className="inline-block bg-[#E56A2E] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.25em] text-white">
                          By Ski
                        </span>

                        <p className="mt-3 text-2xl font-semibold uppercase tracking-[-0.03em] text-white">
                          Radouane
                        </p>
                      </div>

                      {/* ORANGE EDGE */}

                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#E56A2E] transition-all duration-500 group-hover:w-full" />
                    </div>
                  </div>

                </div>


                {/* FOOTER LINK */}

                <div className="mt-8 flex flex-col gap-5 border-t border-[#171715]/15 pt-6 sm:flex-row sm:items-center sm:justify-between">

                  <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#171715]/50">
                    Radouane · Founder
                  </p>

                  <Link
                    href="/about"
                    className="group inline-flex w-fit items-center gap-4 bg-[#E56A2E] px-5 py-4 text-[9px] font-bold uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-[#171715]"
                  >
                    More about the project
                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>

                </div>

              </div>
            </div>
          </div>
        </section>
        {/* STORIES */}

        <section className="bg-[#171715] px-6 py-24 md:px-10 md:py-32 lg:px-14">
          <div className="mx-auto max-w-7xl">

            {/* HEADER */}

            <div className="mb-14 grid gap-8 border-b border-white/15 pb-8 lg:grid-cols-[0.55fr_1.45fr] lg:items-end">

              <div>
                <p className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.35em] text-[#E56A2E]">
                  <span className="h-px w-8 bg-[#E56A2E]" />
                  From The Atlas
                </p>
              </div>

              <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

                <h2 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-[5.5rem]">
                  Stories from
                  <br />
                  the mountains.
                </h2>

                <Link
                  href="/journal"
                  className="group hidden shrink-0 items-center gap-3 pb-1 text-[9px] font-bold uppercase tracking-[0.3em] text-white md:inline-flex"
                >
                  <span className="h-2 w-2 bg-[#E56A2E]" />
                  Explore the journal
                  <span className="text-base text-[#E56A2E] transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>

              </div>
            </div>


            {/* STORIES GRID */}

            <div className="grid gap-6 lg:grid-cols-2">

              {/* MOUNTAIN BIKING STORY */}

              <Link href="/journal" className="group block">

                <article className="h-full">

                  {/* IMAGE */}

                  <div className="relative aspect-[4/3] overflow-hidden bg-[#242421]">

                    <Image
                      src="/images/mtb/singletrack-two-riders.jpeg"
                      alt="Mountain bikers riding through the Moroccan Atlas"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                    {/* TOP LABEL */}

                    <div className="absolute left-6 top-6 md:left-8 md:top-8">
                      <span className="inline-flex items-center gap-2 bg-[#E56A2E] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.25em] text-white">
                        <span className="h-1.5 w-1.5 bg-white" />
                        Mountain Biking
                      </span>
                    </div>

                    {/* STORY NUMBER */}

                    <span className="absolute right-6 top-6 text-[9px] font-bold uppercase tracking-[0.25em] text-white/80 md:right-8 md:top-8">
                      01 / 02
                    </span>

                    {/* IMAGE TITLE */}

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">

                      <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#E56A2E]">
                        Atlas · Morocco
                      </p>

                      <h3 className="mt-3 max-w-xl text-3xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                        Mountain Biking
                        <br />
                        Adventures in Morocco
                      </h3>

                      <div className="mt-6 h-1 w-12 bg-[#E56A2E] transition-all duration-500 group-hover:w-24" />

                    </div>
                  </div>


                  {/* STORY DESCRIPTION */}

                  <div className="border-x border-b border-white/10 p-6 transition-colors duration-300 group-hover:border-[#E56A2E]/50 md:p-8">

                    <p className="max-w-2xl text-sm leading-7 text-white/60 md:text-base md:leading-8">
                      From remote Amazigh villages and green valleys to oasis and
                      desert landscapes, discover the Moroccan Atlas by mountain bike.
                    </p>

                    <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">

                      <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/40">
                        Singletrack · Villages · High Atlas
                      </p>

                      <span className="inline-flex shrink-0 items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#E56A2E]">
                        Read story
                        <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </span>

                    </div>
                  </div>

                </article>
              </Link>


              {/* SKI TOURING STORY */}

              <Link href="/journal" className="group block">

                <article className="h-full">

                  {/* IMAGE */}

                  <div className="relative aspect-[4/3] overflow-hidden bg-[#242421]">

                    <Image
                      src="/images/ski/radouane-ski-descent-tizi-mazik.jpeg"
                      alt="Ski touring descent in the high mountains of Morocco"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

                    {/* TOP LABEL */}

                    <div className="absolute left-6 top-6 md:left-8 md:top-8">
                      <span className="inline-flex items-center gap-2 bg-[#E56A2E] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.25em] text-white">
                        <span className="h-1.5 w-1.5 bg-white" />
                        Ski Touring
                      </span>
                    </div>

                    {/* STORY NUMBER */}

                    <span className="absolute right-6 top-6 text-[9px] font-bold uppercase tracking-[0.25em] text-white/80 md:right-8 md:top-8">
                      02 / 02
                    </span>

                    {/* IMAGE TITLE */}

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">

                      <p className="text-[9px] font-bold uppercase tracking-[0.35em] text-[#E56A2E]">
                        Winter · High Atlas
                      </p>

                      <h3 className="mt-3 max-w-xl text-3xl font-semibold uppercase leading-[0.9] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
                        Ski Touring Through
                        <br />
                        Morocco&apos;s High Mountains
                      </h3>

                      <div className="mt-6 h-1 w-12 bg-[#E56A2E] transition-all duration-500 group-hover:w-24" />

                    </div>
                  </div>


                  {/* STORY DESCRIPTION */}

                  <div className="border-x border-b border-white/10 p-6 transition-colors duration-300 group-hover:border-[#E56A2E]/50 md:p-8">

                    <p className="max-w-2xl text-sm leading-7 text-white/60 md:text-base md:leading-8">
                      Couloirs, high summits and winter lines across the Toubkal and
                      M&apos;Goun massifs, exploring a different side of the Atlas on skis.
                    </p>

                    <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">

                      <p className="text-[8px] font-semibold uppercase tracking-[0.3em] text-white/40">
                        Toubkal · M&apos;Goun · Couloirs
                      </p>

                      <span className="inline-flex shrink-0 items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#E56A2E]">
                        Read story
                        <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </span>

                    </div>
                  </div>

                </article>
              </Link>

            </div>


            {/* MOBILE JOURNAL LINK */}

            <div className="mt-8 md:hidden">
              <Link
                href="/journal"
                className="inline-flex items-center gap-3 bg-[#E56A2E] px-5 py-4 text-[9px] font-bold uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-[#F3EBDD] hover:text-[#171715]"
              >
                Explore the journal
                <span className="text-base">→</span>
              </Link>
            </div>

          </div>
        </section>
        {/* FINAL CTA */}

        <section className="bg-[#171715] px-6 pb-20 md:px-10 md:pb-28 lg:px-14">
          <div className="mx-auto max-w-7xl">

            <div className="relative overflow-hidden bg-black">

              {/* IMAGE */}

              <div className="relative min-h-[620px] md:min-h-[600px] lg:min-h-[640px]">

                <Image
                  src="/images/mtb/group-bikers-picture.jpeg"
                  alt="Mountain bikers exploring the Moroccan Atlas"
                  fill
                  sizes="100vw"
                  className="object-cover object-center transition-transform duration-1000 hover:scale-[1.02]"
                />

                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />

                {/* CONTENT */}

                <div className="absolute inset-0 flex items-end">

                  <div className="w-full p-7 pb-9 md:p-10 lg:p-14">

                    <div className="max-w-5xl">

                      <div className="flex items-center gap-4">
                        <span className="h-1 w-10 bg-[#E56A2E]" />

                        <p className="text-[9px] font-bold uppercase tracking-[0.4em] text-[#E56A2E]">
                          Ride The Atlas
                        </p>
                      </div>

                      <h2 className="mt-6 max-w-4xl text-[2.7rem] font-semibold uppercase leading-[0.88] tracking-[-0.055em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
                        The mountains
                        <br />
                        are yours to explore.
                      </h2>

                      <div className="mt-7 flex flex-col gap-7 md:mt-8 md:flex-row md:items-end md:justify-between">

                        <p className="max-w-sm text-[10px] font-medium uppercase leading-6 tracking-[0.22em] text-white/70">
                          Mountain biking.
                          <br />
                          Gravel biking.
                          <br />
                          Ski touring.
                          <br />
                          Moroccan Atlas.
                        </p>

                        <Link
                          href="/contact"
                          className="group inline-flex w-fit items-center gap-5 bg-[#E56A2E] px-6 py-4 text-[9px] font-bold uppercase tracking-[0.3em] text-white transition-colors duration-300 hover:bg-[#F3EBDD] hover:text-[#171715]"
                        >
                          <span>Start a conversation</span>

                          <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                            →
                          </span>
                        </Link>

                      </div>

                    </div>
                  </div>
                </div>

                {/* ORANGE IMAGE ACCENT */}

                <div className="absolute bottom-0 left-0 h-1.5 w-full bg-[#E56A2E]" />

              </div>


              {/* LOWER STATEMENT */}

              <div className="border-t border-white/10 px-6 py-7 md:px-8 md:py-8 lg:px-10">

                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                  <p className="max-w-2xl text-xs leading-6 text-white/55 md:text-sm md:leading-7">
                    Planning a ride, a ski traverse, or simply looking for
                    the next line through the Atlas?
                  </p>

                  <p className="shrink-0 text-[8px] font-bold uppercase tracking-[0.3em] text-[#E56A2E]">
                    By bike <span className="text-white/40">·</span> By ski
                  </p>

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