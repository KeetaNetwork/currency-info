import fs from "node:fs";
import path from "node:path";
import countries from "../src/data/countries";

const pathname = path.dirname(new URL(import.meta.url).pathname);
const ROOT = path.normalize(path.join(pathname, ".."));
const COUNTRIES_DIR = path.join(ROOT, "src", "data", "countries");
const OUT_TS_FILE = path.join(COUNTRIES_DIR, "index-states.ts");

export function generateStatesFile() {
	const countryCodes = countries.map(c => c.alpha2);

	for (const code of countryCodes) {
		const filePath = path.join(COUNTRIES_DIR, code, "states.json");
		if (!fs.existsSync(filePath)) {
			console.warn(`Warning: States file not found for country code ${code}`);
		}
	}

	const out = `/* AUTO-GENERATED. DO NOT EDIT. */
export const COUNTRY_STATES = Object.freeze({
${countryCodes.map(code => `\t${code}: () => import("./${code}/states.json")`).join(",\n")}
} as const);
`;
	fs.writeFileSync(OUT_TS_FILE, out, "utf8");
	console.log(`Generated ${OUT_TS_FILE}`);
}
