# Astro + Cloudflare Quickstart Template

A quickstart template for web applications built with **Astro**, **Bun** and **Cloudflare**, leveraging **TypeScript** for type safety and **Wrangler CLI** for deployment.

## Prerequisites

- **Bun** must be installed.

## Getting Started

1. Install dependencies: `bun install`

1. Log in to Cloudflare (if not already logged in): `bun run login`

1. You must define the Cloudflare **project name** used by Wrangler. Edit `wrangler.jsonc` to update the `name` and `routes.pattern` fields.

## Development Mode

1. Start the local **development** server (hot reload enabled): `bun run dev`

## Deployment

1. Preview the project locally: `bun run preview`

2. Deploy to Cloudflare: `bun run deploy`
