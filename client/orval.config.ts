import { defineConfig } from "orval";

const apiUrl = process.env.API_URL
    ? `${process.env.API_URL.replace(/\/$/, "")}/swagger/v1/swagger.json`
    : "./api/openapi.yaml";

// TODO: положить сюда реальный OpenAPI-спек (./api/openapi.yaml) и запустить `yarn generate:api`.
export default defineConfig({
  "danda": {
    input: apiUrl,
    output: {
      mode: "tags-split",
      target: "./src/shared/api/generated/endpoints.ts",
      schemas: "./src/shared/api/generated/models",
      client: "react-query",
      httpClient: "fetch",
      clean: true,
      override: {
        mutator: {
          path: "./src/shared/api/instance.ts",
          name: "customFetch",
        },
      },
    },
  },
  "danda-zod": {
    input: apiUrl,
    output: {
      mode: "tags-split",
      client: "zod",
      target: "./src/shared/api/generated/zod",
      fileExtension: ".zod.ts",
      clean: true,
    },
  },
});
