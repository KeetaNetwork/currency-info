import fs from "node:fs";
import path from "node:path";
import countries from "../src/data/countries";
import { getStatesOfCountry } from "@countrystatecity/countries";

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

		const states = rawStates.map((s) => ({
			name: s.name,
			iso2: s.iso2,
			type: s.type ?? null,
			timezone: s.timezone ?? null,
		}));

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
