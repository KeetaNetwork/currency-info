/**
 * This script extracts states data for all countries and saves them as JSON files in
 * the `src/data/countries/{country-code}/states.json` path.
 *
 * It uses the `@countrystatecity/countries` package to fetch the states data.
 *
 * To re-extract states data:
 * `npm install @countrystatecity/countries && npx tsx scripts/extract-states.ts && npm uninstall @countrystatecity/countries`
 */

import fs from "node:fs";
import path from "node:path";
import countries from "../src/data/countries";

// import { getStatesOfCountry } from "@countrystatecity/countries";
const getStatesOfCountry: any = {};

const pathname = path.dirname(new URL(import.meta.url).pathname);
const ROOT = path.normalize(path.join(pathname, ".."));
const COUNTRIES_DIR = path.join(ROOT, "src", "data", "countries");

async function main() {
	let total = 0;

	for (const country of countries) {
		const code = country.alpha2;
		const dir = path.join(COUNTRIES_DIR, code);

		if (!fs.existsSync(dir)) {
			fs.mkdirSync(dir, { recursive: true });
		}

		const rawStates = await getStatesOfCountry(code);

		const states = rawStates.map(
			(s: { name: any; iso2: any; type: any; timezone: any }) => ({
				name: s.name,
				iso2: s.iso2,
				type: s.type ?? null,
				timezone: s.timezone ?? null,
			}),
		);

		const outPath = path.join(dir, "states.json");
		fs.writeFileSync(outPath, JSON.stringify(states, null, "\t"), "utf8");

		if (states.length > 0) {
			console.log(`${code}: ${states.length} states`);
		}

		total++;
	}

	console.log(`\nDone. Wrote ${total} states.json files.`);
}

main();
