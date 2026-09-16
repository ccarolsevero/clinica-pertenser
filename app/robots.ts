export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/admin", "/api/admin"] },
    ],
    sitemap: "https://www.clinicapertenser.com.br/sitemap.xml",
    host: "https://www.clinicapertenser.com.br",
  };
}
