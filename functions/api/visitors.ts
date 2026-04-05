interface Env {
  LIKES: KVNamespace;
}

export const onRequestGet: PagesFunction<Env> = async ({ env }) => {
  const count = await env.LIKES.get("visitors:total");
  return new Response(JSON.stringify({ visitors: Number(count || 0) }), {
    headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
  });
};

export const onRequestPost: PagesFunction<Env> = async ({ env }) => {
  const current = Number((await env.LIKES.get("visitors:total")) || 0);
  const newCount = current + 1;
  await env.LIKES.put("visitors:total", String(newCount));
  return new Response(JSON.stringify({ visitors: newCount }), {
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
