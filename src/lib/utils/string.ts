export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
}

export function truncate(text: string, length: number): string {
  if (!text) return ""
  return text.length > length ? text.slice(0, length) + "…" : text
}

export function capitalize(text: string): string {
  if (!text) return ""
  return text.charAt(0).toUpperCase() + text.slice(1)
}
