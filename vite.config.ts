import reactScan from "@react-scan/vite-plugin-react-scan";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		reactScan({
			enable: true,
		}),
	],
	css: { transformer: "lightningcss" },
});
