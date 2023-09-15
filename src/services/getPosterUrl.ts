export default function getPosterUrl(posterUrl: string) {
  if (!posterUrl) return "";
  return `https://wsrv.nl/?url=https://simkl.in/posters/${posterUrl}_m.webp`;
}
