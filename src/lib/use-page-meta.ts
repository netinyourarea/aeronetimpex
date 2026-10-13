import { useEffect } from "react";

import { siteName } from "@/lib/site-config";

export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = `${title} | ${siteName}`;
    let tag = document.querySelector<HTMLMetaElement>("meta[name='description']");
    if (!tag) {
      tag = document.createElement("meta");
      tag.name = "description";
      document.head.appendChild(tag);
    }
    tag.content = description;
  }, [title, description]);
}
