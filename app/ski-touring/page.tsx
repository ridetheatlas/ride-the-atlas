import Image from "next/image";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

const sections = [
    ["The terrain", "#terrain"],
    ["Toubkal Refuge", "#toubkal-refuge"],
    ["Tazaghart Refuge", "#tazaghart-refuge"],
    ["Tacheddirt", "#tacheddirt"],
    ["Aksoual", "#aksoual"],
    ["Planning", "#planning"],
    ["Expeditions", "#expeditions"],
];

const routeGroups = [
    {
        id: "toubkal-refuge",
        number: "01",
        eyebrow: "Louis Neltner Refuge · 3,207 m",
        title: "From the Toubkal Refuge",
        intro:
            "The upper basin of the Assif n’Aït Mizane gathers steep gullies, couloirs and high mountain passes beneath a group of 4,000-metre summits. The source guide describes the refuge as a base for ski objectives on the slopes of Toubkal, Ouanoukrim and Biiguinnoussene.",
        image: "/images/ski/skiers-on-toubkal-summit.jpeg",
        alt: "Skiers on a summit in the Moroccan High Atlas",
        access: [
            "The classic approach starts in Imlil (about 1,700 m) and climbs through Aremd and Sidi Chamharouch to the refuge.",
            "The source gives approximately 1,500 m of ascent and five hours for the approach. In winter, snow can make the path difficult or impassable on foot; access and porter or mule support depend on conditions.",
            "When snow cover is sufficient, the guide describes leaving the path near Irhzer n’Imouzzer and following the valley floor towards the refuge.",
        ],
        routes: [
            {
                name: "Tizi n’Ouagane",
                stats: "3,750 m · +550 m · 1 h 45 min up",
                level: "Good skiers",
                text: "A high pass giving access towards the upper Agoundis valley and, to the south, the Tifnout via Tizi n’Zaout. The final slope steepens to around 35°. The source recommends ski crampons; a snow cornice may overhang the Agoundis side.",
            },
            {
                name: "Tizi n’Ouanoums",
                stats: "3,684 m · +500 m · 1 h 30 min up",
                level: "Good skiers",
                text: "A high pass on the classic walking route towards Lake Ifni. The source notes that this wind- and sun-exposed slope often has insufficient snow, and that crampons or ski crampons may be needed.",
            },
            {
                name: "Amrharas n’Igliouia",
                stats: "+700 m · about 2 h 30 min up",
                level: "Good skiers",
                text: "A broad glacial cirque reached through a narrow gorge. The guide describes several options from the upper basin: the Amguird col and Bou Imrhaz valley, the Akioud ridge, or the smaller Amrharas cols. The upper slopes can be sun-exposed; an early descent is advised in spring.",
            },
            {
                name: "Tizi n’Bou Imrhaz",
                stats: "3,965 m · +760 m · about 3 h up",
                level: "Good to very good skiers",
                text: "Also called Tizi n’Ouanoukrim in the source. The route follows the Assif Mizane before climbing broad ledges or a steep, narrow couloir of roughly 150 m to a high plateau. The source praises the Bou Imrhaz bowl as one of the finest descents in the valley.",
            },
            {
                name: "Toubkal via Ikhibi Sud",
                stats: "4,167 m · +900 m · about 3 h up",
                level: "Very good skiers",
                text: "The south gully rises directly above the refuge, with slopes around 35° and rocky barriers below the summit cirque. The source calls for crampons or ski crampons on the ascent and rope, ice axe and crampons when the ridge is icy.",
            },
            {
                name: "Toubkal via Ikhibi Nord",
                stats: "4,167 m · +1,000 m · about 4 h up",
                level: "Very good skiers",
                text: "From the refuge, the route descends the Assif Mizane to the gully, then climbs towards the North Col (about 3,950 m) between Toubkal and Imouzzer. Skis are left before the final ridge ascent.",
            },
            {
                name: "Ras n’Ouanoukrim, north couloir",
                stats: "4,083 m · +900 m · about 3 h 30 min up",
                level: "Very good skiers",
                text: "A narrow, straight couloir on the north-east face, described in the source as around 350 m high with an average angle of 35°. It leads into the Bou Imrhaz bowl. The source suggests April and May, subject to conditions.",
            },
            {
                name: "Afella n’Ouanoukrim",
                stats: "4,015 m in the source · about 4 h up",
                level: "Very good skiers",
                text: "The described line climbs the Aougdal Bou Tiouna ravine on the south-east side. Steep steps and ledges lead to the upper slopes; skis are left before following the north ridge to the rounded summit. The source notes that this is an uncommon and more involved itinerary.",
            },
            {
                name: "Clochetons of Ouanoukrim",
                stats: "3,963 m in the source · +763 m",
                level: "Alpine experience",
                text: "The Irhzer Ikhelloun gully ends in a narrow, steep couloir (around 40°) below the south breach. The source warns of major avalanche activity in this ravine after heavy snowfall. The summit ridge has rocky steps; rope, ice axe and crampons are specified.",
            },
            {
                name: "Tizi n’Tadat",
                stats: "about 3,800 m · +600 m · about 2 h up",
                level: "Good skiers",
                text: "A gully above the refuge, with a narrow and irregular lower section often filled with blocks and avalanche debris. The source describes the upper slopes at around 30° and identifies this pass as a direct link between the Toubkal and Tazaghart refuges.",
            },
            {
                name: "Biiguinnoussene",
                stats: "4,002 m in the source · +800 m · about 3 h up",
                level: "Very good skiers",
                text: "The source describes an ascent to the north shoulder, or a longer approach from Tizi n’Tadat through the Assif Timellilt cirque. In good snow, the north bowl offers a major descent and a possible continuation to Tazaghart Refuge or a return towards Imlil via Tizi Mzic.",
            },
        ],
    },
    {
        id: "tazaghart-refuge",
        number: "02",
        eyebrow: "Jacques de Lépiney Refuge · 3,000 m",
        title: "From Tazaghart Refuge",
        intro:
            "Above the Azzadene valley, the refuge sits beneath the Tazaghart plateau in a dramatic mountain cirque. The source highlights the contrast between the plateau, the long north–south Ouanoukrim ridge and the coloured villages far below.",
        image: "/images/ski/bouignouane-skiers-skinning-up.jpeg",
        alt: "Skiers climbing a snow-covered slope in the High Atlas",
        access: [
            "The source describes an approach via Tizi n’Mzic (2,490 m) and the Azib Tamsoult summer settlements, with the final climb passing the Irhoulidene waterfalls.",
            "With moderate snow and no recent snowfall, mules may carry equipment as far as Azib Tamsoult. The source notes a possible 1.5–2 hour wait there while the muleteer contacts the refuge guardian.",
            "After heavy or recent snowfall, mule access may stop lower down. The path below the waterfalls crosses steep, exposed ledges; the source says it may be better to remove skis for this section.",
        ],
        routes: [
            {
                name: "Aougdal n’Bouidarene",
                stats: "about 900 m descent",
                level: "Intermediate to good skiers",
                text: "The refuge’s home bowl lies below the north face of Tazaghart. The source describes a broad north-facing slope, then the left bank opposite the refuge and finally the stream bed, with the exact line depending on snow cover.",
            },
            {
                name: "Assif Timellilt / north bowl of Biiguinnoussene",
                stats: "about 1,000–1,200 m descent · 8 h tour noted",
                level: "Good skiers",
                text: "From above the waterfall, the route climbs towards the west couloir of Biiguinnoussene. The source warns that an obvious first couloir ends blindly against the Adad ridge. An icy passage may require an ice axe and crampons; a narrow section can sometimes be blocked by a small icefall.",
            },
            {
                name: "Arhzane cirque",
                stats: "Route and vertical vary",
                level: "Very good skiers",
                text: "A more committing area for the Afella n’Ouanoukrim, the Tazaghart plateau, couloirs and traverses. The source places these objectives in the very-good-skier category and describes the refuge as a base in a striking high cirque.",
            },
            {
                name: "Tazaghart plateau and couloirs",
                stats: "Exact line-dependent elevation",
                level: "Very good skiers / alpinists",
                text: "The source groups the plateau, couloirs and traverse among the advanced objectives from this refuge. It does not give one universal descent line or a single vertical drop for the whole area.",
            },
        ],
    },
    {
        id: "tacheddirt",
        number: "03",
        eyebrow: "Tacheddirt · village about 2,300 m",
        title: "From Tacheddirt and the Imenane Valley",
        intro:
            "Tacheddirt opens a different side of the massif: the north-facing valleys beneath Aksoual, Likemt and Iguenouane. The source describes long ski lines, village-to-village journeys and a mix of high cols, bowls and couloirs.",
        image: "/images/ski/ski-descent-bouignouane.jpeg",
        alt: "Ski descent in the Tacheddirt and High Atlas area",
        access: [
            "The source describes Tacheddirt as a base at the entrance to the village, with views towards Aksoual and the snowfields of Likemt and Iguenouane.",
            "A link from Oukaïmeden to Tacheddirt via Tizi n’Ou Addi (also written Tizi n’Eddi) is described as a three-hour crossing, with about 300 m ascent and 600 m descent. The source cautions that the west-facing side is often too sparsely covered for skiing.",
            "The source also describes a longer traverse around Angour linking Tacheddirt and Oukaïmeden, with village stops possible. It is a full mountain journey, not simply a piste-to-piste connection.",
        ],
        routes: [
            {
                name: "Tizi Likemt",
                stats: "3,555 m · +1,300 m · about 4 h up",
                level: "Good skiers",
                text: "From the village, the route crosses the Assif Imenane and climbs the Irhzer n’Likemt. The upper slope steepens to around 35° and is often wind-affected or hard; the source says the final part is commonly completed on crampons. In good winter coverage, the descent may reach the Assif Imenane.",
            },
            {
                name: "Iguenouane via Amazer Meggoren",
                stats: "3,882 m · +1,500 m · about 5 h up",
                level: "Very good skiers",
                text: "The route crosses the Assif Imenane and climbs towards the Amazer Meggoren waterfall before traversing beneath the Iguenouane towers. The upper cirque rises on a broad slope of around 35°. The source describes this as an exceptional long descent, but stresses how dramatically snow quality can vary.",
            },
            {
                name: "Tizi n’Tigourzatine",
                stats: "+1,100 m · about 4 h up",
                level: "Good skiers",
                text: "The source gives two approaches: via Irhzer Nou Ahior, or from Tizi n’Tacheddirt (around 3,200 m; about 5 h). It notes that the lower west-facing section is often less well covered than neighbouring lines.",
            },
            {
                name: "Tour of Angour / Tacheddirt–Oukaïmeden",
                stats: "+2,100 m ascent · about 1,200 m ski descent · 8 h",
                level: "Fit, experienced mountain travellers",
                text: "From Tizi n’Tacheddirt, the itinerary skis east into the Assif Ibbassene and returns via Tizi n’Itbir below the north side of Angour, or via Jbel Ouhattar. The source gives the pass as 3,200–3,230 m depending on the map and suggests splitting the long day into village stages.",
            },
        ],
    },
    {
        id: "aksoual",
        number: "04",
        eyebrow: "Aksoual · north-facing couloirs",
        title: "Aksoual and Azrou n’Tamadôt",
        intro:
            "The source devotes a separate section to the couloirs of Aksoual and the west-facing slopes of Azrou n’Tamadôt. These are serious mountain routes where snow quality, sun exposure, avalanche debris and rocky barriers shape the line.",
        image: "/images/ski/radouane-couloir-skis-on-pack.jpeg",
        alt: "Ski touring equipment carried for a steep couloir in the Atlas",
        access: [
            "For Irhzer n’Temda, the source describes an approach from Tacheddirt across the Imenane valley and past Azib Amguedoul, then up the Assif Tirgad.",
            "The lower couloir is given at about 2,450 m and the Arhzane col at about 3,600 m, with around 3.5 hours for that section. The source describes a steepening upper section reaching roughly 45° and says crampons are necessary.",
        ],
        routes: [
            {
                name: "Irhzer n’Temda",
                stats: "about 1,150 m vertical · average 35°",
                level: "Experienced alpinists / very good skiers",
                text: "A long, straight couloir visible from Tacheddirt. The source warns of avalanche debris in the lower section and a steep, narrow finish. It describes the descent as magnificent but conditions-sensitive, especially where sun-softened snow may sit over hard or icy layers.",
            },
            {
                name: "Aksoual summit",
                stats: "3,910–3,912 m in the source",
                level: "Very good skiers",
                text: "The source describes reaching the summit from the Arhzane breach after passing the Aksoual towers. It distinguishes the towers (3,842 m) from the Aksoual summit (3,912 m); these are separate points and should not be conflated.",
            },
            {
                name: "West side of Azrou n’Tamadôt",
                stats: "Snow basin around 3,000 m",
                level: "Experienced skiers",
                text: "A broad west-facing cirque above the Aremd rockslide, with two snow zones separated by rocky steps. The source recommends an early descent because the slope warms quickly. In good coverage, snow tongues may lead towards Assif n’Imserdane and Aremd.",
            },
            {
                name: "Oukks n’Idane towers",
                stats: "3,813 m in the source",
                level: "Very good skiers / alpinists",
                text: "The source proposes following the Azrou n’Tamadôt ridge to the towers, then making a descending traverse on a 35–40° slope above a large rock band. It describes the shaded aspect as holding powder longer, but this is a serious exposed line.",
            },
            {
                name: "North face of Aksoual",
                stats: "3,910 m summit · +1,400 m · about 4 h 30 min up",
                level: "Alpine route for excellent skiers",
                text: "The source describes a complex ascent through gullies, short rocky steps and couloirs, including sections around 40°. The descent follows the ascent route. This should be treated as an alpine objective, not a standard touring descent.",
            },
        ],
    },
];

const faqs = [
    {
        q: "Are these current, fixed itineraries?",
        a: "No. These are route descriptions drawn from the supplied French source. They are not a promise that a line is currently in condition. Snow cover, wind, temperature, visibility, avalanche hazard and the team’s ability determine what is appropriate on the day.",
    },
    {
        q: "Why do some elevations differ from modern maps?",
        a: "The source is an older guide and some summit or pass figures differ from contemporary references. We have retained source figures where they identify the route, and labelled uncertain or source-specific figures. Confirm exact points against a current topographic map before publishing a trip plan.",
    },
    {
        q: "What do the ascent times and vertical figures mean?",
        a: "They are the figures stated in the source for particular route descriptions, not guaranteed timings. They do not include every transition, rest, snow condition or descent. Actual time depends on the route chosen and the group.",
    },
    {
        q: "What level is required?",
        a: "The source separates good skiers from very good skiers and, for some couloirs, experienced mountaineers. Steepness, exposure, avalanche terrain, icy passages and the need to carry skis or use crampons can make a route substantially more serious than its distance suggests.",
    },
    {
        q: "Can the route change during the trip?",
        a: "Yes. A route may be changed, shortened or abandoned if conditions or the team do not support it. A summit or descent is never more important than sound mountain decisions.",
    },
    {
        q: "What equipment is mentioned in the source?",
        a: "Depending on the line, the source mentions ski crampons, crampons, an ice axe and a rope. It also describes sections where skis may need to be carried. This is not a complete modern equipment list; the final kit should be set after a route and conditions assessment.",
    },
];

const expeditions = [
    {
        number: "01",
        duration: "8 days",
        label: "High Atlas · Classic ski mountaineering",
        title: "Tacheddirt & Toubkal",
        level: "Intermediate",
        terrain: "High passes · Summit objectives · Long descents",
        description:
            "The established eight-day journey linking the Tacheddirt and Toubkal areas through high passes, summit objectives and long winter descents.",
        image: "/images/ski/radouane-ski-descent-tizi-mazik.jpeg",
        alt: "Ski touring descent in the Toubkal area of Morocco",
        href: "/ski-touring/tachedirt-toubkal",
        action: "Explore the 8-day expedition",
    },
    {
        number: "02",
        duration: "6 days",
        label: "Imenane Valley · Ski touring",
        title: "Tacheddirt Ski Touring",
        level: "Good to very good skiers",
        terrain: "High passes · North-facing bowls · Valley touring",
        description:
            "A six-day ski-touring journey based around Tacheddirt and the Imenane Valley, with objectives selected from the surrounding passes and mountain terrain according to conditions.",
        image: "/images/ski/ski-descent-bouignouane.jpeg",
        alt: "Ski descent in the Tacheddirt area of the High Atlas",
        href: "/ski-touring/tacheddirt-ski-touring",
        action: "Explore the 6-day expedition",
    },
    {
        number: "03",
        duration: "6 days",
        label: "Toubkal Massif · High route",
        title: "Tazaghart & Toubkal High Route Expedition",
        level: "Advanced ski mountaineering",
        terrain: "High traverses · Refuge-to-refuge travel · Couloirs",
        description:
            "A six-day high-mountain expedition linking the Tazaghart and Toubkal sectors. The route is planned around suitable snow, safe passage between the valleys and the team’s experience; specific summits and descents are not guaranteed.",
        image: "/images/ski/radouane-couloir-skis-on-pack.jpeg",
        alt: "Ski touring equipment prepared for a technical High Atlas route",
        href: "/ski-touring/tazaghart-toubkal-high-route",
        action: "Explore the 6-day expedition",
    },
];

function RouteCard({ route }: { route: (typeof routeGroups)[number]["routes"][number] }) {
    return (
        <article className="border-t border-white/15 py-7 first:border-t-0">
            <div className="grid gap-4 md:grid-cols-[0.75fr_1.25fr] md:gap-10">
                <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#E56A2E]">
                        {route.level}
                    </p>
                    <h4 className="mt-3 text-xl font-semibold uppercase leading-tight tracking-[-0.035em] text-[#F3EBDD]">
                        {route.name}
                    </h4>
                    <p className="mt-3 text-[10px] uppercase leading-5 tracking-[0.12em] text-white/45">
                        {route.stats}
                    </p>
                </div>
                <p className="text-sm leading-7 text-white/60">{route.text}</p>
            </div>
        </article>
    );
}

export default function SkiTouringPage() {
    return (
        <>
            <SiteHeader />
            <main className="bg-[#101310] text-[#F3EBDD]">
                <section className="relative isolate min-h-[760px] overflow-hidden bg-[#17212A] lg:min-h-[850px]">
                    <Image
                        src="/images/ski/radouane-ski-descent-tizi-mazik.jpeg"
                        alt="Ski touring descent in the Moroccan High Atlas"
                        fill
                        priority
                        sizes="100vw"
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/25" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/15" />
                    <div className="absolute left-6 right-6 top-28 z-10 flex items-center justify-between md:left-12 md:right-12">
                        <div className="flex items-center gap-5">
                            <span className="text-[10px] uppercase tracking-[0.35em]">Ride The Atlas</span>
                            <span className="h-px w-12 bg-[#E56A2E]" />
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-white/75">Morocco / High Atlas</span>
                    </div>
                    <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1600px] items-end px-6 pb-20 pt-44 md:px-12 lg:min-h-[850px] lg:pb-28">
                        <div className="max-w-4xl">
                            <p className="mb-6 text-xs uppercase tracking-[0.35em] text-[#E56A2E]">Winter mountain journeys · Morocco</p>
                            <h1 className="font-serif text-7xl font-normal leading-[0.82] tracking-[-0.055em] sm:text-8xl md:text-9xl lg:text-[10rem]">
                                Ski
                                <br />
                                Touring
                            </h1>
                            <p className="mt-9 max-w-xl text-sm leading-7 text-white/80 md:text-base">
                                High passes, summit bowls and natural couloirs in the Moroccan High Atlas —
                                explored on skis, with the mountain conditions setting the route.
                            </p>
                            <div className="mt-9 flex flex-wrap gap-4">
                                <Link href="#terrain" className="bg-[#E56A2E] px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-black transition hover:bg-[#F3EBDD]">
                                    Explore the terrain
                                </Link>
                                <Link href="#planning" className="border border-white/50 px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-white transition hover:border-[#E56A2E] hover:text-[#E56A2E]">
                                    Plan an expedition
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                <nav className="sticky top-0 z-40 border-y border-white/10 bg-[#101310]/95 backdrop-blur">
                    <div className="mx-auto flex max-w-7xl gap-7 overflow-x-auto px-6 py-4 md:px-10 lg:px-14">
                        {sections.map(([label, href]) => (
                            <a key={href} href={href} className="shrink-0 text-[8px] font-semibold uppercase tracking-[0.2em] text-white/55 transition hover:text-[#E56A2E]">
                                {label}
                            </a>
                        ))}
                    </div>
                </nav>

                <section id="terrain" className="scroll-mt-20 px-6 py-24 md:px-10 md:py-32 lg:px-14">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">01 / Read the range</p>
                        <div className="mt-8 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
                            <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl md:text-7xl">A mountain range.<br />Many ways through.</h2>
                            <div className="max-w-3xl space-y-5 text-sm leading-7 text-white/60 md:text-base md:leading-8">
                                <p>The supplied guide focuses on four connected ski-touring areas: the Toubkal Refuge, Tazaghart Refuge, Tacheddirt and the Aksoual–Azrou n’Tamadôt sector. Together they offer high passes, summit routes, broad bowls, couloirs and longer traverses.</p>
                                <p>Its most useful detail is not simply a list of peaks. It describes how the terrain changes: sunny and wind-exposed slopes can lose their snow, shaded aspects may preserve better snow, gullies can collect avalanche debris, and some upper sections require crampons or carrying skis.</p>
                                <p>Route information is indicative. Conditions in the High Atlas change throughout the winter, so routes, timings and difficulty can vary. Every expedition is planned according to the snowpack, weather and the group’s experience.</p>
                            </div>
                        </div>
                        <div className="mt-14 grid gap-px bg-white/15 sm:grid-cols-3">
                            {[
                                ["4,167 m", "Toubkal · highest summit in the source"],
                                ["3,207 m", "Louis Neltner Refuge"],
                                ["3,000 m", "Jacques de Lépiney Refuge"],
                            ].map(([value, label]) => (
                                <div key={value} className="bg-[#101310] p-7 md:p-9">
                                    <p className="font-serif text-4xl text-[#E56A2E] md:text-5xl">{value}</p>
                                    <p className="mt-4 text-[9px] uppercase leading-5 tracking-[0.18em] text-white/45">{label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {routeGroups.map((group) => (
                    <section id={group.id} key={group.id} className="scroll-mt-20 border-t border-white/10 px-6 py-24 md:px-10 md:py-32 lg:px-14">
                        <div className="mx-auto max-w-7xl">
                            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">{group.number} / {group.eyebrow}</p>
                                    <h2 className="mt-7 font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl">{group.title}</h2>
                                    <p className="mt-7 max-w-xl text-sm leading-7 text-white/60">{group.intro}</p>
                                    <div className="relative mt-10 aspect-[4/5] overflow-hidden bg-white/5">
                                        <Image src={group.image} alt={group.alt} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                                    </div>
                                </div>
                                <div>
                                    <div className="border border-white/15 p-6 md:p-8">
                                        <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#E56A2E]">Approach & mountain context</p>
                                        <ul className="mt-6 space-y-4">
                                            {group.access.map((item) => (
                                                <li key={item} className="flex gap-4 text-sm leading-7 text-white/60">
                                                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#E56A2E]" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-10">
                                        <div className="mb-5 flex items-end justify-between gap-5">
                                            <div>
                                                <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#E56A2E]">Selected lines</p>
                                                <h3 className="mt-3 text-2xl font-semibold uppercase tracking-[-0.035em]">Routes & objectives</h3>
                                            </div>
                                            <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">{group.routes.length} routes</span>
                                        </div>
                                        <div className="border-y border-white/15">
                                            {group.routes.map((route) => <RouteCard key={route.name} route={route} />)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}

                <section id="planning" className="scroll-mt-20 bg-[#F3EBDD] px-6 py-24 text-[#20231F] md:px-10 md:py-32 lg:px-14">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
                        <div>
                            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#C65A2C]">05 / Before you go</p>
                            <h2 className="mt-7 font-serif text-5xl leading-[0.95] tracking-[-0.04em] sm:text-6xl">Plan with<br />the mountain.</h2>
                            <p className="mt-7 max-w-sm text-sm leading-7 text-[#20231F]/60">The old guide is valuable for understanding the terrain, but it cannot tell us what is safe or skiable today.</p>
                            <Link href="/contact" className="mt-9 inline-flex items-center gap-5 bg-[#20231F] px-6 py-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#F3EBDD] transition hover:bg-[#E56A2E] hover:text-black">Discuss a ski trip <span>→</span></Link>
                        </div>
                        <div className="space-y-10">
                            <div>
                                <h3 className="text-xl font-semibold uppercase tracking-[-0.03em]">Important route note</h3>
                                <p className="mt-4 text-sm leading-7 text-[#20231F]/65">The French source is an older route guide. Some elevations differ from modern references, and OCR in the supplied copy contains damaged words and numbers. Figures marked “in the source” are retained as printed; ambiguous values are identified rather than silently corrected. Verify every objective, access point and elevation against current mapping and local conditions before using it for a trip.</p>
                            </div>
                            <div className="border-t border-[#20231F]/20 pt-8">
                                <h3 className="text-xl font-semibold uppercase tracking-[-0.03em]">Mountain decisions</h3>
                                <p className="mt-4 text-sm leading-7 text-[#20231F]/65">The source repeatedly flags avalanche-prone gullies, hard or wind-affected snow, sun-exposed slopes, cornices, rocky steps and passages where crampons, an ice axe or a rope may be necessary. Route choice must account for the snowpack, weather, visibility, terrain and the experience of the team.</p>
                            </div>
                            <div className="border-t border-[#20231F]/20 pt-8">
                                <h3 className="text-xl font-semibold uppercase tracking-[-0.03em]">A note on the numbers</h3>
                                <p className="mt-4 text-sm leading-7 text-[#20231F]/65">The source distinguishes summit elevation, pass elevation, route vertical gain and descent vertical. They are not interchangeable. For example, the Toubkal summit is listed at 4,167 m, while the Ikhibi South route is described as 900 m of ascent from the refuge. The Tacheddirt pass is given as 3,200–3,230 m depending on the map.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="px-6 py-24 md:px-10 md:py-32 lg:px-14">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">06 / Questions</p>
                                <h2 className="mt-7 font-serif text-5xl leading-[0.95] sm:text-6xl">Before the<br />first climb.</h2>
                                <Link href="/contact" className="mt-8 inline-flex items-center gap-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#E56A2E] hover:text-white">Ask about an expedition <span>→</span></Link>
                            </div>
                            <div className="border-t border-white/20">
                                {faqs.map((faq, i) => (
                                    <details key={faq.q} className="group border-b border-white/20">
                                        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6">
                                            <span className="flex gap-5">
                                                <span className="pt-1 text-[9px] tracking-[0.2em] text-[#E56A2E]">{String(i + 1).padStart(2, "0")}</span>
                                                <span className="text-sm font-medium leading-6 text-white/85 md:text-base">{faq.q}</span>
                                            </span>
                                            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-white/25 text-sm transition group-open:rotate-45 group-open:border-[#E56A2E] group-open:bg-[#E56A2E] group-open:text-black">+</span>
                                        </summary>
                                        <p className="max-w-3xl pb-7 pl-10 text-sm leading-7 text-white/55">{faq.a}</p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section id="expeditions" className="scroll-mt-20 border-t border-white/10 px-6 py-24 md:px-10 md:py-32 lg:px-14">
                    <div className="mx-auto max-w-7xl">
                        <div className="mb-14 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">07 / Ski touring journeys</p>
                                <h2 className="mt-6 font-serif text-5xl leading-[0.92] tracking-[-0.045em] sm:text-6xl">Choose your<br />expedition.</h2>
                            </div>
                            <p className="max-w-2xl text-sm leading-7 text-white/60 md:text-base md:leading-8">
                                Three ways to explore the winter Atlas: the established Tacheddirt–Toubkal journey, a focused six-day tour in Tacheddirt, and a six-day high route linking Tazaghart and Toubkal. Every itinerary remains subject to snow, weather and the experience of the group.
                            </p>
                        </div>

                        <div className="grid gap-5 lg:grid-cols-3">
                            {expeditions.map((trip) => (
                                <Link key={trip.href} href={trip.href} className="group relative flex min-h-[560px] flex-col overflow-hidden border border-white/10 bg-[#171B17]">
                                    <div className="absolute inset-0">
                                        <Image src={trip.image} alt={trip.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/10" />
                                    </div>
                                    <div className="relative z-10 flex flex-1 flex-col justify-between p-7 md:p-8">
                                        <div className="flex items-start justify-between gap-4">
                                            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/75">{trip.number} / {trip.label}</span>
                                            <span className="shrink-0 border border-white/40 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white">{trip.duration}</span>
                                        </div>
                                        <div className="mt-24">
                                            <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#E56A2E]">{trip.level}</p>
                                            <h3 className="mt-4 max-w-sm text-3xl font-semibold uppercase leading-[0.95] tracking-[-0.045em] text-white md:text-4xl">{trip.title}</h3>
                                            <p className="mt-5 text-[9px] font-semibold uppercase leading-5 tracking-[0.16em] text-white/55">{trip.terrain}</p>
                                            <p className="mt-6 max-w-md text-sm leading-7 text-white/75">{trip.description}</p>
                                            <div className="mt-8 flex items-center justify-between border-t border-white/25 pt-5">
                                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white">{trip.action}</span>
                                                <span className="grid h-10 w-10 place-items-center rounded-full border border-white/50 text-lg text-white transition group-hover:border-[#E56A2E] group-hover:bg-[#E56A2E] group-hover:text-black">↗</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        <p className="mt-7 max-w-3xl text-xs leading-6 text-white/40">
                            The two six-day journeys are expedition concepts; their day-by-day schedules, included services and final difficulty grades should be confirmed before those detail pages are published.
                        </p>
                    </div>
                </section>

                <section className="px-6 pb-24 md:px-10 md:pb-32 lg:px-14">
                    <div className="relative mx-auto flex min-h-[480px] max-w-7xl items-end overflow-hidden p-7 md:min-h-[600px] md:p-14">
                        <Image src="/images/ski/skiers-on-toubkal-summit.jpeg" alt="Skiers on a summit in the Moroccan High Atlas" fill sizes="100vw" className="object-cover" />
                        <div className="absolute inset-0 bg-black/35" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/20 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                        <div className="relative z-10 flex w-full flex-col justify-between gap-8 md:flex-row md:items-end">
                            <div>
                                <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#E56A2E]">Ride The Atlas / Ski touring Morocco</p>
                                <h2 className="mt-6 font-serif text-5xl leading-[0.9] sm:text-6xl md:text-7xl">Find your line<br />through winter.</h2>
                            </div>
                            <Link href="/contact" className="inline-flex items-center justify-between gap-12 border border-white/60 px-6 py-5 text-[9px] font-semibold uppercase tracking-[0.22em] transition hover:border-[#E56A2E] hover:bg-[#E56A2E] hover:text-black">Start a conversation <span>→</span></Link>
                        </div>
                    </div>
                </section>
            </main>
            <SiteFooter />
        </>
    );
}
