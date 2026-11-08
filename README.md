# Zhang Haozhe — Mechanical Design Portfolio

A dependency-free static portfolio presenting four mechanical design studies. Built for GitHub Pages with relative asset paths and no build step.

## Included

- Underwater robotic platform: two CAD assembly views.
- Deployable solar array: expanded/folded views and a motion study.
- X-525 aircraft: rendering, animation, three-view drawing and downloadable report.
- Micro-drone iterations: annotated V1/V2 hardware comparison.
- Responsive layouts, project filters, accessible native project dialogs, native video controls, reduced-motion support and useful links without JavaScript.

## Preview

Open `index.html` directly, or run this command in the repository and visit `http://localhost:8000`:

```sh
python -m http.server 8000
```

No package manager, framework or external font service is required.

## Publish with GitHub Pages

1. Push this directory to the `main` branch of a public GitHub repository.
2. In **Settings → Pages**, choose **Deploy from a branch**.
3. Select **main** and **/ (root)**, then save.
4. GitHub Pages will provide the live URL after deployment completes.

The `.nojekyll` file makes this a plain static site. Keep all assets under `assets/` and preserve relative links so the site works under a repository subpath.

## Edit the content

- `index.html`: identity, homepage summaries, navigation and links.
- `script.js`: detailed project narratives, galleries and filters.
- `styles.css`: colours, typography, layout and responsive rules.
- `assets/`: original project screenshots, web-optimised videos and the aircraft report.

The GitHub profile is `https://github.com/josezhz`. There is no invented email address, job title, employment history or project-performance claim.

## Content and attribution

This is a preliminary edition based on the supplied project materials. Detailed team credits, dates and individual responsibilities can be added when available. The site does not assert sole authorship of unspecified team projects.

The X-525 numerical details come from `Aircraft Design_Zhang Haozhe.pdf`, principally pages 3–9. Reported FEA outputs are described as model results, with their stated assumptions; they are not presented as flight-test results or certification evidence.

Original screenshot pixels are preserved; the webpage crops application chrome with CSS. Video files are H.264 MP4 encodes with audio retained and fast-start metadata. The PDF is unchanged. The aircraft preview is extracted from the supplied video; the three-view drawing is rendered from page 2 of the report.

Project-media rights remain with their respective owners. No open-source licence is asserted for the supplied imagery or report.
