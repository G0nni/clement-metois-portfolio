import type { APIRoute } from 'astro';

// Généré plutôt que statique : l'URL du sitemap suit le domaine
// et le base path réels du déploiement.
export const GET: APIRoute = ({ site }) => {
  // BASE_URL est indispensable ici : `site` ne contient que le domaine,
  // le sitemap vit sous le base path du dépôt.
  const sitemap = new URL(`${import.meta.env.BASE_URL}/sitemap-index.xml`.replace(/\/{2,}/g, '/'), site).href;

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
