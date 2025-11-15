export default {
  async fetch(req, env) {
    if (req.method === 'POST') {
      const { payload } = await req.json();
      // Basic demo: Echo validated (no secrets)
      return new Response(JSON.stringify({ validated: true, echo: payload }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }
    return new Response('nebulaapi running — fork and test!', { status: 200 });
  }
};
