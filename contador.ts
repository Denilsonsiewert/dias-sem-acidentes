export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request): Promise<Response> {
  const dataInicial = new Date("2023-02-20");
  const hoje = new Date();

  const diffMs = hoje.getTime() - dataInicial.getTime();
  const dias = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  const svg = `
    <svg width="400" height="80" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="80" fill="#28a745"/>
      <text x="200" y="50" font-size="26" font-family="Arial" fill="#fff" text-anchor="middle">
        ${dias} dias sem acidentes
      </text>
    </svg>
  `;

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "no-cache"
    }
  });
}