/*
  The route table the prerender step works from. Titles and descriptions live in
  src/routes-meta.json, because the application needs them for client navigation too.
*/
import fs from "node:fs";

const meta = JSON.parse(fs.readFileSync(new URL("../src/routes-meta.json", import.meta.url), "utf8"));

const origin = "https://devtechblog.dawidolko.pl";
const author = { "@type": "Person", name: "Dawid Olko", url: "https://dawidolko.pl" };

export const site = {
  origin,
  name: "DevPulse",
  locale: "en_US",
  image: "/og-image.jpg",
  imageAlt: "DevPulse developer tech blog home page",
  outDir: "build",
  rootId: "root",
};

function breadcrumbs(route) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
      { "@type": "ListItem", position: 2, name: route.title.split(" | ")[0], item: origin + route.path },
    ],
  };
}

function structuredData(route) {
  if (route.path === "/") {
    return [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "DevPulse",
        url: `${origin}/`,
        description: route.description,
        author,
      },
    ];
  }
  if (route.path.startsWith("/post/")) {
    return [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: route.title.split(" | ")[0],
        description: route.description,
        url: origin + route.path,
        image: origin + site.image,
      },
      breadcrumbs(route),
    ];
  }
  return [breadcrumbs(route)];
}

export const routes = meta.map((route) => ({ ...route, jsonLd: structuredData(route) }));

export const notFound = {
  probe: "/this-page-does-not-exist/",
  title: "Page Not Found | DevPulse Tech Blog",
  description: "This address does not match any DevPulse article or page. Go back to the home page to see all the latest articles.",
};
