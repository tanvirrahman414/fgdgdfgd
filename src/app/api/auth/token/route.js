export async function GET() {
  return new Response(
	JSON.stringify({ ok: true, message: 'token stub' }),
	{ headers: { 'Content-Type': 'application/json' } }
  );
}

export default null;
