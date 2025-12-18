import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useSEO({
  title,
  description,
  image = "https://www.viyainnovations.com/og-image.jpg",
  type = "website",
}) {
  const location = useLocation();
  const url = `https://www.viyainnovations.com${location.pathname}`;

  useEffect(() => {
    /* ---------- Title ---------- */
    if (title) document.title = title;

    /* ---------- Meta helper ---------- */
    const setMeta = (attr, attrValue, content) => {
      let meta = document.querySelector(`meta[${attr}='${attrValue}']`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, attrValue);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    /* ---------- Description ---------- */
    if (description) {
      setMeta("name", "description", description);
    }

    /* ---------- Open Graph ---------- */
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", image);

    /* ---------- Twitter ---------- */
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);

    /* ---------- Canonical ---------- */
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = url;
  }, [title, description, image, type, url]);
}
