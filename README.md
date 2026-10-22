# TypeClipboard Marketing Site

Marketing website for [TypeClipboard](https://github.com/ArbenP/TypeClipboard), built with the Next.js App Router and Tailwind CSS.

## Tech Stack
- Next.js 16 (App Router, `output: standalone`)
- React 18 with TypeScript
- Tailwind CSS & tailwindcss-animate
- Lucide icons

## Prerequisites
- Node.js ≥ 20.9
- npm ≥ 10

## Local Development
```bash
pnpm install --frozen-lockfile
pnpm dev
```

Useful scripts:

| Script | Description |
| ------ | ----------- |
| `pnpm dev` | Start the local dev server on port 3000 |
| `pnpm build` | Create a production build (used by Coolify/Docker) |
| `pnpm start` | Start the production server from the compiled build |
| `pnpm lint` | Run ESLint checks |

No environment variables are required for development. For production deploys set:

- `NEXT_PUBLIC_SITE_URL` – canonical domain used in metadata, OpenGraph/Twitter URLs, sitemap, and robots directives.

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
pnpm install --frozen-lockfile
pnpm build
NEXT_PUBLIC_SITE_URL="https://your-domain.tld" pnpm start
```

## Release Checklist
- Update marketing content as needed in `app/page.tsx`.
- Bump `package.json` version.
- Run `pnpm lint` and `pnpm build`.
- Commit and tag the release (matching the desktop app version if desired).

## Assets
- OpenGraph and Twitter images are generated dynamically via `app/opengraph-image.tsx` and `app/twitter-image.tsx`.
- Icons are generated at build time by `app/icon.tsx` and `app/apple-icon.tsx`.
- A PWA-style manifest is exposed via `app/manifest.ts`.

## Analytics Hooks
- Outbound CTA clicks emit a `cta_click` event when a supported analytics object is present on `window`:
  - `window.gtag(...)`
  - `window.plausible(...)`
  - `window.umami(...)` / `window.umami.track(...)`
- If no analytics client is loaded, tracking calls are safely ignored.

## License
MIT © TypeClipboard

## Security maintenance

Use Node 24.22.1 (see `.nvmrc`) and the pnpm version pinned in `package.json`. Install with `pnpm install --frozen-lockfile`. The release-age policy in `pnpm-workspace.yaml` requires packages to be at least 24 hours (1440 minutes) old.

The development dependency `braces` 3.0.3 still has [an unpatched upstream DoS advisory](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm). Do not feed untrusted glob patterns into the affected build/lint tools; no advisory has been suppressed. Production dependency audits are clean as of 22 October 2026.

In Coolify, select the **Dockerfile** build pack to use the pinned runtime image; the existing deployment uses Nixpacks. Keep the application port at 3000. Rebuild and deploy after reviewing the patch; repository changes alone do not update running containers.
