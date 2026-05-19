import { defineConfig } from "oxfmt";

export default defineConfig({
  sortImports: {
    groups: [
      "type-import",
      "builtin",
      "external",
      ["internal", "subpath"],
      ["parent", "sibling", "index"],
      "side_effect",
      "style",
      "side_effect_style",
      "unknown",
    ],
    newlinesBetween: false,
  },
});
