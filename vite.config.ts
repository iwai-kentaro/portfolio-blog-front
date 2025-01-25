import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

export default defineConfig(() => {
  dotenv.config();
  return {
    plugins: [
      react(),
      {
        name: "env-check",
        config() {
          console.log("Environment Variables:", process.env);
        },
      },
    ],
    // resolve: {
    //   alias: {
    //     "@": resolve(__dirname, "src"),
    //   },
    // },
    "process.env": process.env, // 必要に応じて設定
  };
});
