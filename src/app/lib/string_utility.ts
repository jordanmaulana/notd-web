export function getDomainName(url: string): string {
  const parsedUrl = new URL(url);
  const hostname = parsedUrl.hostname;

  // Remove "www." if it exists
  return hostname.startsWith("www.") ? hostname.slice(4) : hostname;
}
