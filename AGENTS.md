# Agent Guide

## Project

This repository is a minimal Astro starter configured for Cloudflare deployment.

- Runtime: Astro with TypeScript
- Deployment target: Cloudflare Workers with static assets
- Package manager: Bun
- Current product state: template shell only; homepage content is effectively empty

## Primary Files

- `src/pages/index.astro`: homepage entry point
- `src/layouts/Layout.astro`: shared page layout, metadata, header, footer
- `src/styles/global.css`: global tokens and base styling
- `astro.config.mjs`: Astro config with Cloudflare adapter
- `wrangler.jsonc`: Cloudflare worker/assets config
- `worker-configuration.d.ts`: generated Cloudflare env types

## Commands

- Install: `bun install`
- Generate Cloudflare types: `bun run types`
- Local dev: `bun run dev`
- Build: `bun run build`
- Preview worker locally: `bun run preview`
- Deploy: `bun run deploy`

## Working Rules

- Treat this as a Cloudflare-targeted Astro site, not a generic Node server app.
- Preserve the existing Astro file structure unless a refactor is clearly justified.
- Keep edits compatible with static output unless the task explicitly requires server behavior.
- If Cloudflare bindings or env values change, update both `wrangler.jsonc` and generated types when possible.
- Prefer simple Astro components and CSS over introducing new frameworks or dependencies.
- Check for user changes before editing; do not overwrite unrelated work.

## Implementation Notes

- `astro.config.mjs` uses `output: "static"` with the Cloudflare adapter.
- `wrangler.jsonc` serves built assets from `./dist` and points the worker entry to `dist/_worker.js/index.js`.
- `src/layouts/Layout.astro` inlines the SVG logo and favicon from `src/assets`.
- The current `package.json` scripts are Bun-based end to end.

## Safe Defaults

When the request is underspecified:

- put landing page content in `src/pages/index.astro`
- put shared document structure in `src/layouts/Layout.astro`
- put visual tokens and global styles in `src/styles/global.css`
- avoid adding client-side JavaScript unless the feature needs interactivity
