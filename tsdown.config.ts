import { defineConfig } from 'tsdown';
import { generateFlagsFile } from './scripts/generate-flags-file';
import Raw from "unplugin-raw/rollup";
import path from "node:path";
import fs from "node:fs";

function genFlagsPlugin() {
	return {
		name: "gen-flags",
		async buildStart() {
			const dir = path.join(__dirname, "src", "data", "flags");
			for (const f of fs.readdirSync(dir)) {
				if (f.endsWith(".svg")) this.addWatchFile(path.join(dir, f));
			}
			await generateFlagsFile();
		},
	};
}

export default defineConfig({
	entry: ['./src/index.ts'],
	platform: "neutral",
	clean: true,
	format: ['esm', 'cjs'],
	minify: false,
	dts: true,
	outDir: './dist',
	copy: [
		{ from: 'src/data/flags/flags.css', to: 'dist/flags.css' },
	],
	plugins: [
		genFlagsPlugin(),
		Raw({ include: ["**/*.svg"] }),
	],
	outputOptions: {
		chunkFileNames: 'chunks/[name].[hash].js',
	}
});
