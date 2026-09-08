# Noise Dept. — Portfolio Site

A one-page portfolio site for **Noise Dept.**, a branding &amp; visual identity studio.

## Fonts

The design calls for **Arial Black** (headline) and **Bickham Script Pro** (the
"Portfolio" script). Arial Black is a system font — most Windows/macOS
machines already have it, so no download is needed there. Bickham Script Pro
is a paid Adobe font and can't be linked from a public CDN.

Both font stacks in `css/style.css` list the real names first, so if you
license Bickham Script Pro later (e.g. through an Adobe Fonts kit) and add
its `<link>`/`@font-face` to `index.html`, it'll be picked up automatically —
no other changes needed. Until then, the site renders with **Archivo Black**
and **Allura** (both free, loaded from Google Fonts) as close visual
stand-ins.

## Structure

```
noise-dept/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
└── assets/
    └── images/
        └── halftone-hero.jpg
```

## Running locally

No build step — it's plain HTML/CSS/JS. Just open `index.html` in a browser,
or serve the folder locally:

```bash
npx serve .
```

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to `Deploy from a branch`,
   pick your default branch and the `/ (root)` folder.
4. Save — your site will be live at `https://<username>.github.io/<repo>/`
   within a minute or two.

## Customising

- **Hero background** — swap `assets/images/halftone-hero.jpg` for another
  image of the same aspect ratio if you want a different texture.
- **Copy** — all text lives directly in `index.html`; the Creations,
  Services and Contact sections are plain HTML you can edit freely.
- **Contact form** — `js/main.js` currently opens a pre-filled email draft
  on submit. Swap in a real form endpoint (Formspree, Netlify Forms, your
  own backend, etc.) when you're ready to go live.
- **Colours & type** — defined as CSS variables at the top of
  `css/style.css` under `:root`.
