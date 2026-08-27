# Portfolio — Clément Métois

Site statique construit avec [Astro](https://astro.build). Une seule page,
zéro framework côté client, quelques scripts vanilla pour les interactions.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:4321
```

| Commande          | Effet                                        |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | serveur de dev avec rechargement à chaud     |
| `npm run build`   | build de production dans `dist/`             |
| `npm run preview` | sert le `dist/` pour vérifier avant de push  |
| `npm run check`   | vérification des types Astro + TypeScript    |

## Modifier le contenu

Tout le texte du site vit dans **`src/data/cv.ts`**, typé.
Changer une expérience, ajouter une certification ou corriger un email
se fait dans ce fichier, jamais dans les composants.

Les types (`Quete`, `Formation`, `ContactRow`…) servent de garde-fou :
si un champ obligatoire manque, `npm run check` le signale avant le déploiement.

## Structure

```
src/
├── data/cv.ts          contenu, source unique de vérité
├── styles/global.css   tokens couleur/typo + primitives de section
├── layouts/Base.astro  <head>, SEO, JSON-LD, observateur de scroll
├── components/         une section = un composant, styles scopés
└── pages/
    ├── index.astro
    └── robots.txt.ts   robots généré depuis l'URL réelle du site
```

## Déploiement

Le workflow `.github/workflows/deploy.yml` publie sur GitHub Pages
à chaque push sur `main`.

À faire une fois, côté GitHub :
**Settings → Pages → Source → GitHub Actions**.

Le site sort alors sur `https://<compte>.github.io/clement-metois-portfolio/`.

### Passer sur un domaine perso

1. Créer `public/CNAME` contenant le domaine, sans `https://` ni slash final.
2. Dans le workflow, remplacer les deux variables du bloc `env` :
   `SITE_URL: https://le-domaine.fr` et `BASE_PATH: /`.
3. Chez le registrar, pointer un CNAME vers `<compte>.github.io`.

Le `base` n'est pas cosmétique : sans lui sur des Project Pages,
le favicon, l'image Open Graph et le sitemap pointent à la racine du
domaine et renvoient des 404.

## À compléter

- `public/og.png` — image de partage 1200×630, absente pour l'instant.

- `src/assets/photo.jpg` — photo de profil. Déposée là, elle est détectée
  et optimisée automatiquement ; sinon le cadre affiche un placeholder.
