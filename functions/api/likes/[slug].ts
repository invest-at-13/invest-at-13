interface Env {
  LIKES: KVNamespace;
}

export const onRequestGet: PagesFunction<Env> = async ({ params, env }) => {
  const slug = params.slug as string;
  const count = await env.LIKES.get(slug);
  return new Response(JSON.stringify({ likes: Number(count || 0) }), {
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
};

export const onRequestPost: PagesFunction<Env> = async ({ params, env, request }) => {
  const slug = params.slug as string;
  const current = Number((await env.LIKES.get(slug)) || 0);
  const newCount = current + 1;
  await env.LIKES.put(slug, String(newCount));
  return new Response(JSON.stringify({ likes: newCount }), {
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
};
