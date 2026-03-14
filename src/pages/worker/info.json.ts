export const prerender = false;

import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const body = JSON.stringify({ generatedAt: Date.now() });
  const response = new Response(body, {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600, s-maxage=3600, must-revalidate",
    },
  });
  return response;
};
