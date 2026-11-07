import type { APIRoute } from 'astro';
import { languages, type Locale, getLocalePath } from '../i18n/ui';

const SITE_URL = 'https://shrinkvideo.github.io';

export const GET: APIRoute = () => {
  const locales = Object.keys(languages) as Locale[];
  const lastmod = new Date().toISOString().split('T')[0];

  const buildUrlFull = (loc: Locale) => {
    const path = getLocalePath(loc);
    return `${SITE_URL}${path.endsWith('/') ? path : path + '/'}`;
  };

  const xhtmlLinks = [
    ...locales.map(
      (altLoc) =>
        `    <xhtml:link rel="alternate" hreflang="${altLoc}" href="${buildUrlFull(altLoc)}" />`
    ),
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/" />`,
  ].join('\n');

  const urlEntries = locales
    .map((loc) => {
      const locUrl = buildUrlFull(loc);
      return [
        '  <url>',
        `    <loc>${locUrl}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        '    <changefreq>weekly</changefreq>',
        '    <priority>1.0</priority>',
        xhtmlLinks,
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    urlEntries,
    '</urlset>',
  ].join('\n');

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
