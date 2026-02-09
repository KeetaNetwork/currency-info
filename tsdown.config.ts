import { defineConfig } from 'tsdown';
import { generateFlagsFile } from './scripts/generate-flags-file';
import { generateStatesFile } from './scripts/generate-states-file';
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

function genStatesPlugin() {
	return {
		name: "gen-states",
		async buildStart() {
			const dir = path.join(__dirname, "src", "data", "countries");
			for (const f of fs.readdirSync(dir)) {
				const statesFile = path.join(dir, f, "states.json");
				if (fs.existsSync(statesFile)) this.addWatchFile(statesFile);
			}
			generateStatesFile();
		},
	};
}

export default defineConfig({
	entry: ['./src/index.ts'],
	platform: "neutral",
	clean: true,
	format: ['esm', 'cjs'],
	minify: true,
	dts: true,
	outDir: './dist',
	copy: [
		{ from: 'src/data/flags/flags.css', to: 'dist/flags.css' },
	],
	plugins: [
		genFlagsPlugin(),
		genStatesPlugin(),
		Raw({ include: ["**/*.svg"] }),
	],
	outputOptions: {
		chunkFileNames: 'chunks/[name].[hash].js',
	}
});
