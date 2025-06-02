import { defineConfig, loadEnv } from "vite";
import { fileURLToPath } from "url";
import viteTsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const config = {
    API_URL: env.API_URL,
  };

  return {
    plugins: [react(), viteTsconfigPaths()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
    define: {
      "process.env": config,
    },
  };
});
