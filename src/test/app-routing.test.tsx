import { createMemoryHistory, createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

const paths = [
  "/",
  "/internet-services",
  "/cable-tv-services",
  "/contact",
  "/privacy-policy",
  "/terms-and-conditions",
  "/disclaimer",
  "/refund-policy",
];

describe("App routing", () => {
  it.each(paths)("matches a page for %s instead of falling back to not found", (path) => {
    const router = createRouter({
      routeTree,
      history: createMemoryHistory({ initialEntries: [path] }),
    });

    const matches = router.matchRoutes(path);

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});
