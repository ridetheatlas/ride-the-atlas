import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
    title: "8-Day Happy Valley Mountain Biking Tour Morocco | Ride The Atlas",
    description: "Ride five days through Morocco’s Central High Atlas on an 8-day mountain biking tour in the M’Goun region, from Demnate and Aït Bouguemez to Zawyat Ahansal and Bin El Ouidane.",
    openGraph: {
        title: "8-Day Happy Valley Mountain Biking Tour | Ride The Atlas",
        description: "Five days of mountain biking across the Central High Atlas, linking the Happy Valley, Zawyat Ahansal and Bin El Ouidane.",
        images: [{ url: "/images/mtb/happy-valley/rider-happey-valley-singletrack.jpg", alt: "Mountain biker riding a singletrack in Morocco’s Happy Valley" }],
        type: "website",
    },
};

const imagePath = "/images/mtb/happy-valley";
const navigation = [["Overview", "#overview"], ["Highlights", "#highlights"], ["Itinerary", "#itinerary"], ["Trip details", "#trip-details"], ["Gallery", "#gallery"], ["FAQs", "#faqs"], ["Enquire", "#enquire"]];
const facts = [["Duration", "8 days · 7 nights"], ["Ride days", "5 days on the bike"], ["Level", "Medium +"], ["Season", "Early April – late November"]];

const highlights = [
    ["01", "Ride into the Happy Valley", "Discover Aït Bouguemez, a broad mountain valley of villages, cultivated terraces and dramatic High Atlas scenery."],
    ["02", "Cross high Atlas passes", "Link remote valleys and mountain communities over routes including Tizi n’Tighist, Tizi n’Tirghist and Tizi n’Ilissi."],
    ["03", "A changing mountain landscape", "Move from red-earth tracks and green valley floors to high passes, juniper forests, ochre cliffs and lakeside terrain."],
    ["04", "Five days of riding", "Five substantial mountain-bike stages combine long climbs, rewarding descents and varied terrain across the M’Goun region."],
    ["05", "Stay close to the mountains", "Spend nights in local gîtes along the route, with riad accommodation in Marrakech at the beginning and end."],
    ["06", "Finish beside Bin El Ouidane", "Complete the mountain traverse above the lake before returning to Marrakech through the Central Atlas."]
];

type Day = { day: string; title: string; subtitle: string; distance: string; elevation: string; description: string; overnight: string; image?: string; imageAlt?: string; ride?: boolean };

const itinerary: Day[] = [
    { day: "01", title: "Arrive in Marrakech", subtitle: "Airport welcome · Transfer to the riad", distance: "Arrival day", elevation: "No riding", description: "Meet the Ride The Atlas team at Marrakech Menara Airport and transfer into the city. Settle into your riad, recover from your journey and get ready for the mountain-bike traverse ahead. The evening is an opportunity to meet the team and go over the plan for the coming days.", overnight: "Riad in Marrakech" },
    { day: "02", title: "Demnate to Imi n’Ouaqqa", subtitle: "Imi n’Ifri · Tizi n’Amarskine · First ride", distance: "38 km", elevation: "+1,390 m / −690 m", description: "Leave Marrakech early and travel towards Demnate and the natural bridge of Imi n’Ifri, around 1,100 m. After a visit, continue to the ride start, unload the bikes and begin across red-earth tracks and broad mountain flanks. Climb to Tizi n’Amarskine at approximately 2,020 m, with views over the Iwaridene Valley, then descend through Berber villages to Imi n’Ouaqqa at around 1,817 m.", overnight: "Gîte or local homestay in Imi n’Ouaqqa", image: "berber-village-happy-valley.jpg", imageAlt: "A Berber village in Morocco’s Happy Valley region", ride: true },
    { day: "03", title: "Imi n’Ouaqqa to Aït Bouguemez", subtitle: "Tizi n’Tighist · Abachkou Valley · Happy Valley", distance: "51 km", elevation: "+1,450 m / −1,350 m", description: "Ride via Tarbat n’Tirsal beneath Mount Ghat and climb to Tizi n’Tighist at approximately 2,400 m, known for its rock engravings. A long descent leads into the colourful Abachkou Valley, where we stop for lunch beside the wadi. In the afternoon, follow the Assif Aït Boulli towards Aguersif before climbing to Agouti, the first village of the Aït Bouguemez Valley. Continue through the valley’s villages to Iskatafen, in the heart of the Happy Valley.", overnight: "Gîte in Iskatafen, Aït Bouguemez", image: "ait-bougmaz-singletrack.jpg", imageAlt: "Mountain biking on a trail in the Aït Bouguemez area", ride: true },
    { day: "04", title: "Aït Bouguemez to Zawyat Ahansal", subtitle: "Tizi n’Tirghist · Juniper forest · Cathedral cliffs", distance: "71 km", elevation: "+1,380 m / −1,700 m", description: "Follow the upper Bouguemez Valley towards Ifrane before the sustained climb to Tizi n’Tirghist at approximately 2,629 m. From the pass, take in the M’Goun Massif and the green valley below. Continue over Tizi n’Tsalli n’Imenaïn, descend into the Asmsouq Valley and cross the ancient thurifer juniper forest—the Dead Forest—towards Tizi n’Ilissi at around 2,603 m. A long descent brings us to Zawyat Ahansal, a historic mountain village beneath Aroudan.", overnight: "Gîte in Zawyat Ahansal", image: "happy-valley-green-landscapes.jpg", imageAlt: "Green mountain landscapes in the Central High Atlas", ride: true },
    { day: "05", title: "Zawyat Ahansal to Mestefrane", subtitle: "Ahançal Valley · Taghia views · The Cathedral", distance: "43 km", elevation: "+840 m / −1,320 m", description: "Descend alongside the Zawyat river, passing villages and traditional tighremt—fortified houses. Cross to the right bank and climb gradually along the mountainside. Higher up, look back towards the Taghia cirque and its ochre cliffs; ahead, the striking Mestefrane rock formation rises above the valley, known as the Cathedral. A winding descent leads to Imi n’Ouareg, where the route pauses beside the river beneath the cliffs.", overnight: "Gîte near Imi n’Ouareg / Mestefrane", image: "mgoun-happy-valley.jpg", imageAlt: "The rugged M’Goun landscape in Morocco’s Central High Atlas", ride: true },
    { day: "06", title: "Mestefrane to Bin El Ouidane", subtitle: "Ahançal wadi · Tilouguit · Lake panorama", distance: "45 km off-road + 10 km paved", elevation: "+955 m / −950 m", description: "Continue north along the Ahançal wadi and climb over a small pass at approximately 1,450 m to reach Tilouguit. From there, ascend towards Tizi n’Aït Isha at around 1,802 m. The reward is a flowing descent with wide views over the Bin El Ouidane dam and its lake. Finish the riding stage by the water and enjoy an evening in this lakeside setting.", overnight: "Gîte by Bin El Ouidane Lake", image: "single-track-happy-valley.jpg", imageAlt: "A mountain-bike trail in the Central High Atlas", ride: true },
    { day: "07", title: "Bin El Ouidane to Marrakech", subtitle: "Road transfer · Time in the city", distance: "Approx. 225 km transfer", elevation: "No riding", description: "Leave the lake and travel back to Marrakech by road, via the Azilal or Ouaouizeghte area and Oued El Abid. Arrive around the beginning of the afternoon and check in at your riad. The rest of the day is free to explore the medina and souks, visit a monument or simply relax after the mountain journey.", overnight: "Riad in Marrakech" },
    { day: "08", title: "Departure from Marrakech", subtitle: "Airport transfer · End of the trip", distance: "According to flight schedule", elevation: "No riding", description: "At the agreed time, transfer to Marrakech Menara Airport for your onward journey. Your eight-day mountain-bike journey through the Happy Valley and Central High Atlas comes to an end.", overnight: "Departure" }
];

const gallery = [
    ["rider-happey-valley-singletrack.jpg", "Mountain biker riding a singletrack in the Happy Valley"],
    ["happy-valley-green-landscapes.jpg", "Green landscapes of the Happy Valley in the High Atlas"],
    ["ait-bougmaz-singletrack.jpg", "Singletrack in the Aït Bouguemez region"],
    ["berber-village-happy-valley.jpg", "Berber village among the High Atlas mountains"],
    ["mgoun-happy-valley.jpg", "M’Goun Massif and the Happy Valley landscape"],
    ["single-track-happy-valley.jpg", "Mountain-bike trail through the Happy Valley region"]
];

const faqs = [
    ["How many days do we ride?", "The trip lasts eight days and includes five days of mountain biking, from the Demnate area through Aït Bouguemez and Zawyat Ahansal to Bin El Ouidane."],
    ["What level of riding is this tour?", "The stated level is Medium +. The five stages include sustained climbs, mountain passes, long descents and varied off-road terrain. Riders should be comfortable spending full days on a mountain bike and should discuss their experience with the Ride The Atlas team before booking."],
    ["When can I take this Happy Valley mountain-bike tour?", "The planned season is early April to late November. Conditions can vary across the Central High Atlas, so the route and daily plan may be adjusted to the conditions on the ground."],
    ["Where do we stay during the trip?", "The itinerary describes two nights in a riad in Marrakech and five nights in gîtes along the mountain route. The precise accommodation and room arrangements should be confirmed when booking."],
    ["Are mountain bikes and helmets included?", "No. Mountain bikes and helmets are listed as not included. Please contact Ride The Atlas before travelling to confirm equipment requirements and any available rental options."],
    ["What happens if conditions change?", "The route crosses remote mountain terrain. The guide and local team may need to adapt the riding plan according to weather, trail conditions, access and the group’s ability. The day-by-day programme is a route plan, not a guarantee that every section will be ridden exactly as described."]
];

function ArrowIcon() { return <span aria-hidden="true">↗</span>; }
function Eyebrow({ children }: { children: React.ReactNode }) {
    return <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#E56A2E]">{children}</p>;
}

export default function HappyValleyMountainBikingPage() {
    return <>
        <SiteHeader />
        <main className="bg-[#F3EBDD] text-[#24231F]">
            <section id="top" className="relative isolate min-h-[720px] overflow-hidden bg-[#242923] text-[#F3EBDD] lg:min-h-[790px]">
                <Image src={`${imagePath}/rider-happey-valley-singletrack.jpg`} alt="Mountain biker riding a singletrack in Morocco’s Happy Valley" fill priority sizes="100vw" className="object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#171A16]/90 via-[#171A16]/55 to-[#171A16]/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#171A16]/60 via-transparent to-[#171A16]/20" />
                <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-end px-6 pb-16 pt-36 md:px-12 md:pb-20 lg:min-h-[790px] lg:items-center">
                    <div className="max-w-3xl">
                        <div className="mb-8 flex items-center gap-3"><span className="h-px w-10 bg-[#E56A2E]" /><p className="text-[10px] uppercase tracking-[0.28em] text-white/75">Ride The Atlas / Mountain biking</p></div>
                        <p className="mb-5 text-xs uppercase tracking-[0.24em] text-[#F08A53]">Morocco · Central High Atlas · M’Goun</p>
                        <h1 className="font-serif text-6xl font-normal leading-[0.9] tracking-[-0.045em] sm:text-7xl md:text-8xl lg:text-[108px]">Happy<br /><span className="italic">Valley</span></h1>
                        <p className="mt-8 max-w-xl text-base leading-8 text-white/85 md:text-lg">Eight days across the Central High Atlas, with five days on the bike linking remote valleys, high passes and the villages of Aït Bouguemez.</p>
                        <div className="mt-10 flex flex-wrap items-center gap-6">
                            <Link href="#itinerary" className="inline-flex items-center gap-5 bg-[#E56A2E] px-6 py-4 text-[11px] font-bold uppercase tracking-[0.15em] text-[#171815] transition hover:bg-[#F3EBDD]">Explore the itinerary <ArrowIcon /></Link>
                            <span className="text-xs uppercase tracking-[0.12em] text-white/75">8 days <span className="mx-2 text-[#E56A2E]">/</span> 5 ride days</span>
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-7 right-6 hidden text-[10px] uppercase tracking-[0.22em] text-white/65 md:block md:right-12">M’Goun Massif · Morocco</div>
            </section>

            <nav aria-label="Trip sections" className="sticky top-0 z-40 border-b border-[#24231F]/15 bg-[#F3EBDD]/95 backdrop-blur-md">
                <div className="mx-auto flex max-w-7xl items-center gap-8 overflow-x-auto px-6 py-4 md:px-12">
                    <Link href="#top" className="hidden shrink-0 text-[10px] font-bold uppercase tracking-[0.16em] sm:block">Happy Valley</Link>
                    <div className="flex shrink-0 items-center gap-6 md:gap-8">{navigation.map(([label, href]) => <Link key={href} href={href} className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#625E55] transition hover:text-[#E56A2E]">{label}</Link>)}</div>
                </div>
            </nav>

            <section aria-label="Trip facts" className="border-b border-[#24231F]/15">
                <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-7 px-6 py-8 md:grid-cols-4 md:px-12">
                    {facts.map(([label, value], i) => <div key={label} className={`md:border-l md:border-[#24231F]/15 md:pl-7 ${i === 0 ? "md:border-0 md:pl-0" : ""}`}><p className="text-[10px] uppercase tracking-[0.2em] text-[#777166]">{label}</p><p className="mt-2 text-sm font-semibold">{value}</p></div>)}
                </div>
            </section>

            <section id="overview" className="scroll-mt-24 mx-auto grid max-w-7xl gap-12 px-6 py-20 md:px-12 md:py-28 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
                <div><Eyebrow>The journey</Eyebrow><h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-tight md:text-5xl">Five days riding.<br />A world of Atlas.</h2></div>
                <div className="max-w-3xl">
                    <p className="text-lg leading-8 text-[#454239]">This eight-day mountain biking tour explores the Central High Atlas, crossing the M’Goun region from the landscapes around Demnate to the green terraces of Aït Bouguemez, the remote valleys around Zawyat Ahansal and the shores of Bin El Ouidane.</p>
                    <p className="mt-6 text-base leading-8 text-[#625E55]">The riding begins on red-earth tracks before climbing into high-pass country. Across five stages, the route links village trails, long mountain traverses and rewarding descents, with changing views of the M’Goun Massif and the distinctive rock formations of the Ahançal valley.</p>
                    <p className="mt-6 text-base leading-8 text-[#625E55]">Rated Medium +, this is a full mountain journey rather than a sequence of short rides. Daily distances and elevation gain vary, and the route reaches passes above 2,600 m. The programme is designed for riders who enjoy sustained climbs, remote terrain and a strong sense of place.</p>
                </div>
            </section>

            <section id="highlights" className="scroll-mt-24 bg-[#E8DECD] px-6 py-20 md:px-12 md:py-24">
                <div className="mx-auto max-w-7xl"><Eyebrow>Why ride this route</Eyebrow><div className="mt-5 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><h2 className="font-serif text-4xl leading-tight md:text-5xl">The character<br />of the Atlas.</h2><div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">{highlights.map(([number, title, description]) => <article key={number} className="border-t border-[#24231F]/20 pt-5"><span className="text-[10px] tracking-[0.2em] text-[#E56A2E]">{number}</span><h3 className="mt-3 font-serif text-2xl">{title}</h3><p className="mt-3 text-sm leading-6 text-[#625E55]">{description}</p></article>)}</div></div></div>
            </section>

            <section className="relative min-h-[440px] overflow-hidden md:min-h-[600px]">
                <Image src={`${imagePath}/happy-valley-green-landscapes.jpg`} alt="Green valley and mountain landscapes in Aït Bouguemez, Morocco" fill sizes="100vw" className="object-cover object-center" />
                <div className="absolute inset-0 bg-black/20" /><div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/15 to-transparent" />
                <div className="relative z-10 flex min-h-[440px] items-end px-6 py-12 md:min-h-[600px] md:px-12 md:py-16"><div className="max-w-xl text-white"><Eyebrow>Central High Atlas</Eyebrow><h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">Find your line through the valley.</h2></div></div>
            </section>

            <section id="itinerary" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
                <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><Eyebrow>Day by day</Eyebrow><h2 className="mt-5 font-serif text-5xl leading-none tracking-tight md:text-6xl">The itinerary</h2></div><p className="max-w-sm text-sm leading-7 text-[#625E55]">Eight days from Marrakech into the M’Goun region, with five consecutive days of mountain biking across the Central High Atlas.</p></div>
                <div className="border-t border-[#24231F]/20">{itinerary.map(item => <article key={item.day} className="grid gap-6 border-b border-[#24231F]/20 py-9 md:grid-cols-[64px_1fr_0.72fr] md:gap-10 md:py-12">
                    <div><span className="font-serif text-4xl text-[#E56A2E]">{item.day}</span><p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#777166]">Day</p></div>
                    <div><p className="text-[10px] uppercase tracking-[0.18em] text-[#777166]">{item.distance}</p><h3 className="mt-3 max-w-xl font-serif text-2xl leading-snug md:text-3xl">{item.title}</h3><p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#E56A2E]">{item.subtitle}</p><p className="mt-4 text-xs font-semibold text-[#454239]">{item.ride ? "Elevation: " : ""}{item.elevation}</p><p className="mt-4 max-w-2xl text-sm leading-7 text-[#625E55]">{item.description}</p><p className="mt-5 text-xs text-[#454239]"><span className="font-semibold">Overnight:</span> {item.overnight}</p></div>
                    {item.image && <div className="relative mt-2 aspect-[4/3] overflow-hidden bg-[#DED5C5] md:mt-0"><Image src={`${imagePath}/${item.image}`} alt={item.imageAlt ?? item.title} fill sizes="(max-width: 768px) 100vw, 30vw" className="object-cover transition duration-700 hover:scale-[1.03]" /></div>}
                </article>)}</div>
            </section>

            <section id="trip-details" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
                <div className="max-w-2xl"><Eyebrow>Plan your ride</Eyebrow><h2 className="mt-5 font-serif text-4xl md:text-5xl">Trip details</h2><p className="mt-5 text-sm leading-7 text-[#625E55]">A point-to-point mountain-bike journey through the Central High Atlas, supported by a local team and an assistance vehicle.</p></div>
                <div className="mt-12 grid gap-12 border-t border-[#24231F]/20 pt-8 md:grid-cols-2">
                    <div><h3 className="font-serif text-2xl">At a glance</h3><dl className="mt-6">{[["Duration", "8 days / 7 nights"], ["Cycling", "5 days"], ["Region", "Central High Atlas · M’Goun Massif"], ["Start and finish", "Marrakech, Morocco"], ["Route", "Demnate · Aït Bouguemez · Zawyat Ahansal · Bin El Ouidane"], ["Level", "Medium +"], ["Season", "Early April to late November"], ["Accommodation", "2 Marrakech riad nights and 5 gîte nights, subject to confirmation"]].map(([label, value]) => <div key={label} className="grid grid-cols-[minmax(110px,0.7fr)_1.3fr] gap-4 border-b border-[#24231F]/15 py-4"><dt className="text-xs text-[#777166]">{label}</dt><dd className="text-sm">{value}</dd></div>)}</dl></div>
                    <div><h3 className="font-serif text-2xl">Support on the route</h3><p className="mt-6 text-sm leading-7 text-[#625E55]">The supplied programme includes a qualified guide, a cook preparing meals, an assistance vehicle with driver and transfers between the airport, Marrakech and the mountain-bike route. Full board is listed for the stay, with lunch in Marrakech excluded.</p><p className="mt-5 text-sm leading-7 text-[#625E55]">The route is planned across remote mountain areas. The daily schedule, trail choice and logistics should be confirmed with the team before departure.</p></div>
                </div>
                <div className="mt-16 border-t border-[#24231F]/20 pt-10"><Eyebrow>Booking information</Eyebrow><h3 className="mt-4 font-serif text-3xl">What’s included</h3><div className="mt-7 grid gap-3 sm:grid-cols-2">{["Full board during the stay", "Airport and route transfers, outward and return", "Qualified guide", "Trekking cook preparing varied meals", "Assistance vehicle with driver", "Camping and kitchen equipment", "Drinks", "Accommodation as specified in the final booking confirmation"].map(x => <p key={x} className="flex gap-3 text-sm leading-6 text-[#625E55]"><span className="text-[#E56A2E]">+</span>{x}</p>)}</div><h3 className="mt-10 font-serif text-2xl">Not included</h3><div className="mt-5 grid gap-3 sm:grid-cols-2">{["Mountain bike and helmet", "Repatriation insurance", "Personal expenses", "Tips for the local team", "Lunch in Marrakech"].map(x => <p key={x} className="flex gap-3 text-sm leading-6 text-[#625E55]"><span className="text-[#E56A2E]">−</span>{x}</p>)}</div><p className="mt-8 max-w-3xl border-l-2 border-[#E56A2E] pl-5 text-xs leading-6 text-[#777166]">Accommodation note: the route description accounts for five gîte nights, while the supplied “Included” list specifies four. Confirm the final accommodation breakdown before publishing prices or accepting bookings.</p></div>
            </section>

            <section className="border-y border-[#24231F]/15 bg-[#E8DECD]"><div className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-[0.5fr_1.5fr] md:px-12 md:py-16"><Eyebrow>Mountain conditions</Eyebrow><div className="max-w-3xl"><h2 className="font-serif text-3xl leading-tight md:text-4xl">The route follows the mountains.</h2><p className="mt-5 text-sm leading-7 text-[#625E55]">This itinerary travels through high and remote terrain. Weather, trail conditions, access and the group’s ability may affect the day’s route or timing. The guide and local team should make any necessary adjustments with safety as the priority.</p></div></div></section>

            <section id="gallery" className="scroll-mt-24 mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
                <div className="mb-10 flex items-end justify-between gap-6"><div><Eyebrow>On the trail</Eyebrow><h2 className="mt-5 font-serif text-4xl md:text-5xl">Happy Valley in pictures</h2></div><span className="hidden text-[10px] uppercase tracking-[0.2em] text-[#777166] sm:block">M’Goun · Aït Bouguemez</span></div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{gallery.map(([src, alt], i) => <div key={src} className={`relative aspect-[4/3] overflow-hidden bg-[#DED5C5] ${i === 1 ? "lg:mt-10" : ""}`}><Image src={`${imagePath}/${src}`} alt={alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-700 hover:scale-[1.03]" /></div>)}</div>
            </section>

            <section className="bg-[#E8DECD] px-6 py-20 md:px-12 md:py-24"><div className="mx-auto max-w-7xl">
                <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><Eyebrow>Keep exploring</Eyebrow><h2 className="mt-5 font-serif text-4xl md:text-5xl">More ways to ride Morocco.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-[#625E55]">Two more eight-day journeys through the landscapes of the Moroccan Atlas.</p></div><Link href="/mountain-biking" className="w-fit border-b border-[#24231F] pb-3 text-xs font-semibold uppercase tracking-[0.15em] transition hover:border-[#E56A2E] hover:text-[#E56A2E]">Explore all MTB trips <ArrowIcon /></Link></div>
                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    <Link href="/mountain-biking/8-day-mountain-biking-eastern-high-atlas-morocco" className="group"><div className="relative aspect-[5/3] overflow-hidden bg-[#D6CBB9]"><Image src="/images/mtb/bikers-riding-on-ridge.jpeg" alt="Mountain biking in Morocco’s Eastern High Atlas" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" /><div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" /><span className="absolute left-5 top-5 bg-[#E56A2E] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-[#171815]">Best offer</span><div className="absolute bottom-5 left-5 text-white"><span className="text-[10px] uppercase tracking-[0.2em] text-white/75">8 days · Mountain biking</span><h3 className="mt-2 font-serif text-2xl md:text-3xl">Eastern High Atlas</h3></div></div><div className="flex items-start justify-between gap-4 pt-5"><p className="max-w-md text-sm leading-6 text-[#625E55]">An eight-day mountain-bike journey through the Eastern High Atlas.</p><span aria-hidden="true" className="pt-1 text-xl transition group-hover:translate-x-1 group-hover:text-[#E56A2E]">→</span></div></Link>
                    <Link href="/mountain-biking/8-day-mountain-biking-saghro-mountains-morocco" className="group"><div className="relative aspect-[5/3] overflow-hidden bg-[#D6CBB9]"><Image src="/images/mtb/rider-singletrack-atlas.jpeg" alt="Mountain biking in Morocco’s Saghro Mountains" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" /><div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" /><div className="absolute bottom-5 left-5 text-white"><span className="text-[10px] uppercase tracking-[0.2em] text-white/75">8 days · Mountain biking</span><h3 className="mt-2 font-serif text-2xl md:text-3xl">Saghro Mountains</h3></div></div><div className="flex items-start justify-between gap-4 pt-5"><p className="max-w-md text-sm leading-6 text-[#625E55]">Explore a different side of Morocco on an eight-day ride through the Saghro Mountains.</p><span aria-hidden="true" className="pt-1 text-xl transition group-hover:translate-x-1 group-hover:text-[#E56A2E]">→</span></div></Link>
                </div>
            </div></section>

            <section id="faqs" className="scroll-mt-24 bg-[#F3EBDD] px-6 py-20 md:px-12 md:py-28"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
                <div><Eyebrow>Before you ride</Eyebrow><h2 className="mt-5 font-serif text-4xl leading-tight md:text-5xl">Frequently asked<br />questions.</h2><p className="mt-6 max-w-sm text-sm leading-7 text-[#625E55]">Practical information about the Happy Valley mountain biking tour. For dates, riding experience and equipment questions, contact the Ride The Atlas team.</p><Link href="/contact" className="mt-8 inline-flex items-center gap-3 border-b border-[#24231F] pb-3 text-xs font-semibold uppercase tracking-[0.15em] transition hover:border-[#E56A2E] hover:text-[#E56A2E]">Ask us a question <ArrowIcon /></Link></div>
                <div className="border-t border-[#24231F]/20">{faqs.map(([question, answer], i) => <details key={question} className="group border-b border-[#24231F]/20"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden"><span className="flex items-start gap-5"><span className="pt-1 text-[10px] tracking-[0.15em] text-[#E56A2E]">{String(i + 1).padStart(2, "0")}</span><span className="font-serif text-xl leading-snug md:text-2xl">{question}</span></span><span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#24231F]/20 text-lg transition group-open:rotate-45 group-open:border-[#E56A2E] group-open:text-[#E56A2E]">+</span></summary><div className="pb-7 pl-10 pr-12"><p className="max-w-2xl text-sm leading-7 text-[#625E55]">{answer}</p></div></details>)}</div>
            </div></section>

            <section id="enquire" className="scroll-mt-24 bg-[#242923] px-6 py-20 text-[#F3EBDD] md:px-12 md:py-28"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end"><div className="max-w-2xl"><Eyebrow>Ride The Atlas</Eyebrow><h2 className="mt-5 font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">Ready for the<br />Happy Valley?</h2><p className="mt-6 max-w-lg text-sm leading-7 text-white/65">Tell us your preferred dates, riding experience and plans for the mountains. We’ll help you prepare for five days on the trails of the Central High Atlas.</p></div><Link href="/contact" className="inline-flex w-fit items-center gap-5 border-b border-[#F3EBDD]/70 pb-4 text-xs font-semibold uppercase tracking-[0.17em] transition hover:border-[#E56A2E] hover:text-[#E56A2E]">Enquire about this trip <ArrowIcon /></Link></div></section>
        </main>
        <SiteFooter />
    </>;
}
