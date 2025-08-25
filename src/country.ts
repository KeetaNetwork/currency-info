import type { ISOCountryCode, ISOCountryNumber, LongCountryCode } from "./data/countries";
import type { ISOCurrencyCode } from "./data/currencies";
import type { UnionKeyObject } from "./utils/types";
import { Currency } from "./currency";
import countries from "./data/countries";
import { getFlagSvg } from "./flags";

interface SingleCountryRegionInformation {
	name: string;
	code: string;
}

interface CountryRegionInformation {
	primary?: SingleCountryRegionInformation;
	subRegion?: SingleCountryRegionInformation;
	intermediateRegion?: SingleCountryRegionInformation;
}

export interface CountryInformation {
	name: string;
	code: ISOCountryCode;
	longCode: LongCountryCode;
	numericCode: string;
	dialCode: string;
	region: CountryRegionInformation | undefined;
}

export class Country implements CountryInformation {
	code: ISOCountryCode;

	name: string;
	longCode: LongCountryCode;
	numericCode: ISOCountryNumber;
	dialCode: string;
	region: CountryRegionInformation | undefined;
	#currencyCode: ISOCurrencyCode;

	static #cacheSetup = false;
	static #allCountryCodes: ISOCountryCode[] = [];
	static #allowedCountries?: ISOCountryCode[];
	static #countryToCurrencyCache: UnionKeyObject<ISOCountryCode, ISOCurrencyCode> = {};
	static #codeToIndex: UnionKeyObject<ISOCountryCode, number> = {};
	static #longToShortCountryCode: UnionKeyObject<LongCountryCode, ISOCountryCode> = {};
	static #countryNumberToCountryCode: UnionKeyObject<ISOCountryNumber, ISOCountryCode> = {};
	static #currencyToCountriesCache: UnionKeyObject<ISOCurrencyCode, ISOCountryCode[]> = {};

	static get allowedCountries(): ISOCountryCode[] {
		if (this.#allowedCountries) {
			return(this.#allowedCountries);
		}

		this.#updateCache();

		return(this.#allCountryCodes);
	}

	static get allCountryCodes(): ISOCountryCode[] {
		this.#updateCache();
		return(this.#allCountryCodes);
	}

	static allowCountries(toWhitelist: ISOCountryCode[]): void {
		this.#allowedCountries = toWhitelist;
	}

	static assertWhitelisted(code: ISOCountryCode): void {
		if (!this.allowedCountries.includes(code)) {
			throw(new Error(`Country ${code} is not whitelisted`));
		}
	}

	/**
	 * @param countryCode A valid ISO 3166-1 alpha-2/alpha-3/numeric code
	 * @param skipWhitelist Whether to skip the whitelist check
	 */
	constructor(input: ISOCountryNumber | ISOCountryCode | LongCountryCode, skipWhitelist?: boolean) {
		let code;

		if (Country.isCountryCode(input)) {
			code = input;
		} else if (Country.isLongCountryCode(input)) {
			code = Country.#longToShortCountryCode[input];
		} else if (Country.isISOCountryNumber(input)) {
			code = Country.#countryNumberToCountryCode[input];
		}

		if (!code) {
			throw(new Error(`Invalid country code: ${input}`));
		}

		if (skipWhitelist !== true) {
			Country.assertWhitelisted(code);
		}

		this.code = Country.assertCountryCode(code);

		const index = Country.#codeToIndex[this.code];
		if (index === undefined || !countries[index]) {
			throw(new Error(`Cannot find code ${code}`));
		}

		const { name, currency, alpha3, numericCode, region, dialCode } = countries[index];

		this.name = name;
		this.#currencyCode = currency;
		this.longCode = alpha3;
		this.numericCode = numericCode;
		this.region = region;
		this.dialCode = dialCode;
	}

	static #updateCache() {
		if (this.#cacheSetup) {
			return;
		}

		for (let i = 0; i < countries.length; i++) {
			const country = countries[i];

			const { alpha2, alpha3, currency } = country;
			this.#allCountryCodes.push(alpha2);
			this.#countryToCurrencyCache[alpha2] = currency;
			this.#codeToIndex[alpha2] = i;
			this.#longToShortCountryCode[alpha3] = alpha2;
			this.#countryNumberToCountryCode[country.numericCode] = alpha2;

			if (!this.#currencyToCountriesCache[currency]) {
				this.#currencyToCountriesCache[currency] = [];
			}

			// @ts-ignore
			this.#currencyToCountriesCache[currency].push(alpha2);
		}

		this.#cacheSetup = true;
	}

	async getFlag(): Promise<string> {
		return(await getFlagSvg(this.code));
	}

	get currency(): Currency {
		return(new Currency(this.#currencyCode));
	}

	toJSON(): CountryInformation {
		return({
			name: this.name,
			code: this.code,
			longCode: this.longCode,
			numericCode: this.numericCode,
			dialCode: this.dialCode,
			region: this.region
		});
	}

	static isCountryCode(code: unknown): code is ISOCountryCode {
		this.#updateCache();
		// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
		return(this.#allCountryCodes.includes(code as ISOCountryCode));
	}

	static assertCountryCode(code: unknown): ISOCountryCode {
		if (!this.isCountryCode(code)) {
			throw(new Error(`Invalid country code: ${code}`));
		}

		return(code);
	}

	static isLongCountryCode(code: unknown): code is ISOCountryCode {
		this.#updateCache();
		// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
		return(Object.keys(this.#longToShortCountryCode).includes(code as string));
	}

	/**
	 * @summary Check if a number is a valid ISO 3166-1 numeric code
	 *
	 * @param number A possible ISO 3166-1 numeric code
	 * @returns Whether the number is a valid ISO 3166-1 numeric code
	 */
	static isISOCountryNumber(number: unknown): number is ISOCountryNumber {
		this.#updateCache();
		// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
		return(Object.keys(this.#countryNumberToCountryCode).includes(number as string));
	}

	/**
	 * @summary Assert that a number is a valid ISO 3166-1 numeric code
	 *
	 * @param number A possible ISO 3166-1 numeric code
	 * @returns The number as a ISO 3166-1 numeric code
	 */
	static assertISOCountryNumber(number: unknown): ISOCountryNumber {
		if (!this.isISOCountryNumber(number)) {
			throw(new Error(`Invalid ISO number: ${number}`));
		}

		return(number);
	}

	static assertLongCountryCode(code: unknown): ISOCountryCode {
		if (!this.isLongCountryCode(code)) {
			throw(new Error(`Invalid long country code code: ${code}`));
		}

		return(code);
	}

	static findByCurrencyCode(currencyCode: ISOCurrencyCode): Country[] {
		const countryCodes = this.#currencyToCountriesCache[currencyCode];
		if (!countryCodes) {
			throw(new Error(`No countries found for currency code: ${currencyCode}`));
		}

		return(countryCodes.map((code) => new this(code)));
	}
}
