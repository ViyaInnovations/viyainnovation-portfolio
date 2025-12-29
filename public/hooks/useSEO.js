import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useSEO({
  title,
  description,
  image = "https://www.viyainnovations.com/og-image.jpg",
  type = "website",
  schema = null,
}) {
  const location = useLocation();
  const url = `https://www.viyainnovations.com${location.pathname}`;

  useEffect(() => {
    /* ---------------- TITLE ---------------- */
    if (title) document.title = title;

    /* ---------------- META HELPER ---------------- */
    const setMeta = (attr, attrValue, content) => {
      if (!content) return;
      let meta = document.querySelector(`meta[${attr}='${attrValue}']`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    /* ---------------- BASIC SEO ---------------- */
    setMeta("name", "description", description);
    setMeta("name", "robots", "index, follow");

    /* ---------------- OPEN GRAPH ---------------- */
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);
    setMeta("property", "og:site_name", "ViyaInnovations");

    /* ---------------- TWITTER ---------------- */
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    /* ---------------- CANONICAL ---------------- */
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = url;

    /* ---------------- SCHEMA (JSON-LD) ---------------- */
    let schemaTag = document.querySelector("script[data-schema='true']");
    if (schemaTag) schemaTag.remove();

    if (schema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-schema", "true");
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    /* ---------------- CLEANUP ---------------- */
    return () => {
      const existingSchema = document.querySelector(
        "script[data-schema='true']"
      );
      if (existingSchema) existingSchema.remove();
    };
  }, [title, description, image, type, url, schema]);
}
