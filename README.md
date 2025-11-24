# TypeClipboard Marketing Site

Marketing website for [TypeClipboard](https://github.com/ArbenP/TypeClipboard), built with the Next.js App Router and Tailwind CSS.

## Tech Stack
- Next.js 14 (App Router, `output: standalone`)
- React 18 with TypeScript
- Tailwind CSS & tailwindcss-animate
- Framer Motion for subtle motion and reveal effects
- Lucide icons

## Prerequisites
- Node.js ≥ 18.18
- npm ≥ 9 (ships with Node 18+)

## Local Development
```bash
npm install
npm run dev
```

Useful scripts:

| Script | Description |
| ------ | ----------- |
| `npm run dev` | Start the local dev server on port 3000 |
| `npm run build` | Create a production build (used by Coolify/Docker) |
| `npm run start` | Start the production server from the compiled build |
| `npm run lint` | Run Next.js lint checks |

No environment variables are required for development. For production deploys set:

- `NEXT_PUBLIC_SITE_URL` – canonical domain used in metadata, sitemap, and robots directives.
- `NEXT_PUBLIC_APP_VERSION` (optional) – displayed in the hero banner for marketing parity with the desktop release.

## Deployment

### Coolify
1. Add a new **Application** in Coolify and point it at this repository.
2. Choose **Dockerfile** as the build pack (the repo contains a pre-configured multi-stage `Dockerfile`).
3. Set environment variables:
   - `NEXT_PUBLIC_SITE_URL=https://your-domain.tld`
   - `PORT=3000` (Coolify defaults to 3000, but it helps to be explicit.)
4. Trigger a deploy. The Dockerfile produces a minimal Node 20 Alpine image running `next start` with the standalone output.

### Manual Docker Build
```bash
docker build -t typeclipboard-site .
docker run -p 3000:3000 --env NEXT_PUBLIC_SITE_URL="https://localhost" typeclipboard-site
```

### Static Node Host
If you prefer a traditional Node deployment (without Docker), run:
```bash
npm install
npm run build
NEXT_PUBLIC_SITE_URL="https://your-domain.tld" npm run start
```

## Release Checklist
- Update marketing content as needed in `app/page.tsx`.
- Bump `package.json` version.
- Run `npm run lint` and `npm run build`.
- Commit and tag the release (matching the desktop app version if desired).

## Assets
- OpenGraph and Twitter images are generated dynamically via `app/opengraph-image.tsx` and `app/twitter-image.tsx`.
- Icons are generated at build time by `app/icon.tsx` and `app/apple-icon.tsx`.
- A PWA-style manifest is exposed via `app/manifest.ts`.

## License
MIT © TypeClipboard
