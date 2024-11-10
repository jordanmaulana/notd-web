export function getDomainName(url: string): string {
  const parsedUrl = new URL(url);
  const hostname = parsedUrl.hostname;

  // Remove "www." if it exists
  return hostname.startsWith("www.") ? hostname.slice(4) : hostname;
}

export function formatTwitterDate(inputDate: Date | string): string {
  const date = typeof inputDate === "string" ? new Date(inputDate) : inputDate;

  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d`;

  // If more than a week, return the full date in "MMM D, YYYY" format
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
