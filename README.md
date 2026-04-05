# Jatin Shrivastava | Portfolio

Personal portfolio website for **Jatin Shrivastava**, highlighting mobile engineering experience, featured work, skills, education, awards, and resume/contact details.

Live site: [jatinshrivastava.github.io](https://jatinshrivastava.github.io)

## What’s in this repo

- `index.html` — main portfolio page
- `resume/index.html` — resume viewer page with a custom tab title
- `resume/Jatin_Shrivastava_Resume.pdf` — hosted resume PDF
- `img/` — profile image, project screenshots, favicon, and other image assets
- `css/`, `js/`, `scss/`, `font/`, `video/` — legacy template assets still kept in the repo
- `navbar.html`, `footer.html`, `projects.html`, `coming-soon.html`, `gallery-variations.html`, `index-2.html` — older standalone pages/partials retained for reference

## Current site sections

- **About** — bio, portrait, current project chip, and key stats
- **Experience** — timeline of professional roles
- **Featured Work** — personal and professional project cards with screenshots
- **Skills** — grouped technical skills with category hierarchy
- **Awards** — recognitions and achievements
- **Education** — academic background
- **Contact** — LinkedIn, email, and Formspree-backed message form

## Tech stack

- HTML, CSS, and vanilla JavaScript
- AOS for scroll animations
- Typed.js for the hero typing effect
- Formspree for contact form submissions
- GitHub Pages for hosting

The current homepage is implemented primarily as a single static `index.html` file with inline CSS/JS, so there’s no build step required for normal edits.

## Run locally

From the repo root, serve the site with any static file server, for example:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

You can also open `index.html` directly in a browser, but a local server is usually safer for testing asset paths and embedded pages.

## Deployment

This repository is configured as a GitHub Pages site. Changes merged into `master` are published to the live portfolio site.

## Notes

- The site’s current UI is in `index.html`; several older template files are intentionally retained but are not the primary production experience.
- `.claude/` and `.DS_Store` are ignored via `.gitignore`.
