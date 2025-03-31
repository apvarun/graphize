import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwind()],
  base: "/graphize/",
});
