import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * Deux scénarios de déploiement, au choix.
 *
 * 1. Project Pages (par défaut) — le site vit sous
 *    https://<compte>.github.io/clement-metois-portfolio/
 *    Il faut alors un `base`, sinon tous les chemins absolus cassent.
 *
 * 2. Domaine perso — on met le domaine dans `site`, `base` repasse à '/',
 *    et on ajoute un fichier `public/CNAME` contenant ce domaine.
 *
 * Le workflow CI surcharge ces valeurs via SITE_URL et BASE_PATH,
 * ce qui évite d'avoir à committer un changement de config pour basculer.
 */
const SITE = process.env.SITE_URL ?? 'https://g0nni.github.io';
const BASE = process.env.BASE_PATH ?? '/clement-metois-portfolio';

export default defineConfig({
  site: SITE,
  base: BASE,
  // 'always' évite que le sitemap liste l'accueil deux fois (avec et sans slash).
  trailingSlash: 'always',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
  compressHTML: true,
});
