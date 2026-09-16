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

export function sanitizeArticleHtml(html: string) {
  return html.replace(/<\/?([a-z0-9]+)(\s[^>]*)?>/gi, (match, tag: string, attrs = "") => {
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
}
