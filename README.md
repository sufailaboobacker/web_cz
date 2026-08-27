# cozmo® travel — brand site

A single-page brand site for Cozmo Travel, built with Tailwind CSS v4.
Manifesto-led design in the spirit of releaf.bio: lowercase wordmark, big
statement typography, a sun-over-horizon visual system, and journey-arc
sections (plan / go / return).

## Stack

- Plain HTML (`index.html`) — no framework
- Tailwind CSS v4 (`src/input.css` → compiled to `assets/css/styles.css`)
- Inline SVG illustrations (no external images)
- Fonts: Fraunces + Instrument Sans via Google Fonts

## Develop

```bash
npm install
npm run watch:css   # rebuild styles on change
```

Open `index.html` in a browser.

## Build

```bash
npm run build:css
```

The compiled `assets/css/styles.css` is committed, so the site works as
static files with no build step required for deployment.
