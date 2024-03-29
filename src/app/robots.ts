const baseUrl = process.env.PUBLIC_URL
  ? `https://${process.env.PUBLIC_URL}`
  : "http://localhost:3000";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
