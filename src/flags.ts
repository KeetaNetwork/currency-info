import type { ISOCountryCode } from "./data/countries";
import { FLAG_SVGS } from "./data/flags";

export async function getFlagSvg(code: ISOCountryCode): Promise<string> {
	return await FLAG_SVGS[code].then(d => d.default);
}
