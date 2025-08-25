import fs from "node:fs";
import path from "node:path";
import countries from "../src/data/countries";

const pathname = path.dirname(new URL(import.meta.url).pathname);
const ROOT = path.normalize(path.join(pathname, ".."));
const FLAGS_DIR = path.join(ROOT, "src", "data", "flags");
const OUT_TS_FILE = path.join(FLAGS_DIR, "index.ts");
const OUT_CSS_FILE = path.join(FLAGS_DIR, "flags.css");

export async function svgFileToDataUrlURLEnc(filePath: string): Promise<string> {
	let svg = await fs.readFileSync(filePath, "utf8");
	svg = svg
		.replace(/>\s+</g, "><")   // remove whitespace between tags
		.replace(/\s{2,}/g, " ")   // collapse runs of spaces
		.trim();

	const encoded = encodeURIComponent(svg)
		.replace(/%20/g, " ")
		.replace(/%2F/g, "/")
		.replace(/%3A/g, ":")
		.replace(/%2C/g, ",")
		.replace(/%3D/g, "=")
		.replace(/%3B/g, ";");
	return `data:image/svg+xml,${encoded}`;
}

export async function generateFlagsFile() {
	const countryCodes = countries.map(c => c.alpha2.toLowerCase());

	for(const code of countryCodes) {
		const filePath = path.join(FLAGS_DIR, `${code}.svg`);
		if(!fs.existsSync(filePath)) {
			console.warn(`Warning: Flag file not found for country code ${code.toUpperCase()}`);
		}
	}

	/**
	 * Generate TypeScript file exporting all flags as raw SVG imports
	 */
	const out = `/* AUTO-GENERATED. DO NOT EDIT. */
export const FLAG_SVGS = Object.freeze({
${countryCodes.map(code => `\t${code.toUpperCase()}: () => import("./${code}.svg?raw")`).join(",\n")}
} as const);
`;
	fs.writeFileSync(OUT_TS_FILE, out, "utf8");

	/**
	 * Generate CSS file with all flags as data URLs
	 */
	const cssLines = [
		"/* AUTO-GENERATED. DO NOT EDIT. */",
		".flag {",
		"  width: 1.5em;",
		"  height: 1em;",
		"  display: inline-block;",
		"  background-size: contain;",
		"  background-position: center;",
		"  background-repeat: no-repeat;",
		"}",
		"",
	];
	for(const code of countryCodes) {
		const filePath = path.join(FLAGS_DIR, `${code}.svg`);
		if(fs.existsSync(filePath)) {
			const dataUrl = await svgFileToDataUrlURLEnc(filePath);
			cssLines.push(`.flag-${code.toUpperCase()} { background-image: url("${dataUrl}"); }`);
		}
	}
	fs.writeFileSync(OUT_CSS_FILE, cssLines.join("\n"), "utf8");
	console.log(`Generated ${OUT_TS_FILE} and ${OUT_CSS_FILE}`);
}
