# Mu Alpha Theta — Eagan High School

The website for Mu Alpha Theta, a student-led math-coaching initiative in Eagan, Minnesota.
We coach elementary and middle school students toward the University of Minnesota's UMTYMP
program and the Math Masters competition — and turn that effort into support for
underprivileged children in India.

**Live site:** https://mu-alpha-theta-ehs.org

## Tech

- **[Astro](https://astro.build)** — static site generator (outputs plain HTML/CSS to S3)
- Hand-written CSS design system (`src/styles/global.css`) — no UI framework
- Photos optimized to responsive WebP at build time

## Develop

```bash
npm install
npm run dev      # local dev server with hot reload
npm run build    # build static site into dist/
npm run preview  # serve the built site locally
```

## Project structure

```
src/
  layouts/Base.astro     shared header, nav, footer, SEO
  styles/global.css      the design system
  assets/gallery/        Math Masters photos (optimized at build)
  pages/                 one file per route
    index.astro          Home
    program.astro        Our Program (UMTYMP + Math Masters)
    achievements.astro   Achievements + photo gallery
    story.astro          Our Story + the team
    support.astro        Support the cause
    contact.astro        Contact / enroll / volunteer
```

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and deploys
it to S3 + CloudFront using GitHub OIDC (no stored AWS keys). The workflow stays dormant
until these repo **Variables** are set:

| Variable | Purpose |
| --- | --- |
| `AWS_ROLE_ARN` | IAM role the workflow assumes via OIDC |
| `AWS_REGION` | Region of the S3 bucket |
| `S3_BUCKET` | Target bucket name |
| `CLOUDFRONT_DISTRIBUTION_ID` | Distribution to invalidate after deploy |
