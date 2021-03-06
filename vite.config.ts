import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    includeSource: ["./src/**/__test__/*.test.ts"],
    coverage: {
      all: true,
    },
    environment: "jsdom",
  },
});
