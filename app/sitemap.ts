import type { MetadataRoute } from "next";

const siteUrl = "https://ridetheatlas.com";

const routes = [
    "/",
    "/about",
    "/contact",
    "/mountain-biking",
    "/mountain-biking/4-day-mountain-biking-eastern-high-atlas-morocco",
    "/mountain-biking/6-day-mountain-biking-eastern-high-atlas-morocco",
    "/mountain-biking/8-day-mountain-biking-eastern-high-atlas-morocco",
    "/mountain-biking/8-day-mountain-biking-happy-valley-morocco",
    "/mountain-biking/8-day-mountain-biking-saghro-mountains-morocco",
    "/gravel-biking-morocco",
    "/gravel-biking-morocco/atlas-mountains-gravel-tour",
    "/gravel-biking-morocco/marrakech-to-essaouira-gravel-tour",
    "/ski-touring",
    "/ski-touring/tacheddirt-ski-touring",
    "/ski-touring/tachedirt-toubkal",
    "/ski-touring/tazaghart-toubkal-high-route",
    "/journal",
    "/journal/atlas-mountain-villages",
    "/journal/atlas-singletrack",
    "/journal/high-atlas",
    "/journal/ski-touring-mgoun",
    "/journal/ski-touring-toubkal",
];

export default function sitemap(): MetadataRoute.Sitemap {
    return routes.map((route) => ({
        url: `${siteUrl}${route}`,
    }));
}