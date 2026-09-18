const ALLOWED_TAGS = new Set([
  "p",
  "br",
  "strong",
  "b",
  "em",
  "i",
  "u",
  "s",
  "h2",
  "h3",
  "ul",
  "ol",
  "li",
  "blockquote",
  "a",
  "hr",
]);

export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function articleHtml(content: string | string[] | undefined) {
  if (!content) return "";
  if (Array.isArray(content)) {
    return content
      .map((paragraph) => paragraph.trim())
      .filter(Boolean)
      .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
      .join("");
  }
  return content;
}

function slugifyHeading(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function sanitizeArticleHtml(html: string) {
  const cleaned = html.replace(/<\/?([a-z0-9]+)(\s[^>]*)?>/gi, (match, tag: string, attrs = "") => {
    const name = tag.toLowerCase();
    if (!ALLOWED_TAGS.has(name)) return "";
    if (match.startsWith("</")) return `</${name}>`;
    if (name === "br" || name === "hr") return `<${name}>`;
    if (name === "a") {
      const href = /href\s*=\s*(?:"([^"]*)"|'([^']*)')/i.exec(attrs);
      const url = (href?.[1] || href?.[2] || "").trim();
      if (!/^(https?:\/\/|\/|#)/i.test(url)) return "<a>";
      return `<a href="${escapeHtml(url)}" rel="noopener noreferrer" target="_blank">`;
    }
    return `<${name}>`;
  });

  return cleaned.replace(/<(h2|h3)>([\s\S]*?)<\/\1>/gi, (_match, tag: string, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    const id = slugifyHeading(text);
    return id ? `<${tag} id="${id}">${inner}</${tag}>` : `<${tag}>${inner}</${tag}>`;
  });
}
