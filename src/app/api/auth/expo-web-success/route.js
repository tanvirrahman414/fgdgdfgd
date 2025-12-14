export async function GET() {
  const html = `
	<html>
	  <body>
		<script>
		  window.parent.postMessage({ type: 'AUTH_SUCCESS', message: 'expo-web-success' }, '*');
		</script>
	  </body>
	</html>
  `;

  return new Response(html, {
	headers: { 'Content-Type': 'text/html' },
  });
}

export default null;
