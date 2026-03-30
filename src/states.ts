import type { ISOCountryCode } from "./data/countries";
import { COUNTRY_STATES } from "./data/countries/index-states";

export interface State {
	name: string;
	iso2: string;
	type: string | null;
	timezone: string | null;
}

// @__NO_SIDE_EFFECTS__
export async function getStates(code: ISOCountryCode): Promise<State[]> {
	return(await COUNTRY_STATES[code]().then(
		(d: { default: State[] }) => d.default
	));
}
