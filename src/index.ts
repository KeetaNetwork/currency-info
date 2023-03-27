import currencies from './data/currencies';
import countries from './data/countries';

export type ISOCurrencyNumber = typeof currencies[number]['isoNumber'];
export type ISOCurrencyCode = typeof currencies[any]['code'];
export type ISOCountryCode = typeof countries[any]['alpha2'];
export type LongCountryCode = typeof countries[any]['alpha3'];

type UnionKeyObject<U extends string, V> = { [K in U]?: V };

const imageCache: UnionKeyObject<ISOCountryCode, string> = {};

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
	region?: CountryRegionInformation;
	flag?: string;
}

class Country implements CountryInformation {
	code: ISOCountryCode;

	name: string;
	longCode: LongCountryCode;
	numericCode: string;
	dialCode: string;
	region?: CountryRegionInformation;
	flag?: string;
	#currencyCode: ISOCurrencyCode;

	static #cacheSetup = false;
	static #whitelist?: ISOCountryCode[];
	static #countryToCurrencyCache: UnionKeyObject<ISOCountryCode, ISOCurrencyCode> = {};
	static #codeToIndex: UnionKeyObject<ISOCountryCode, number> = {};
	static #longToShortCountryCode: UnionKeyObject<LongCountryCode, ISOCountryCode> = {};
	static #currencyToCountriesCache: UnionKeyObject<ISOCurrencyCode, ISOCountryCode[]> = {};

	static get allowedCountries(): ISOCountryCode[] {
		if (this.#whitelist) {
			return this.#whitelist;
		}

		Country.#updateCache();

		// eslint-disable-next-line no-type-assertion/no-type-assertion
		return Object.keys(this.#countryToCurrencyCache) as ISOCountryCode[];
	}

	constructor(countryCode: ISOCountryCode);
	constructor(longCountryCode: LongCountryCode);
	constructor(longOrShortCode: ISOCountryCode | LongCountryCode) {
		let code;

		if (Country.isCountryCode(longOrShortCode)) {
			code = longOrShortCode;
		} else if (Country.isLongCountryCode(longOrShortCode)) {
			code = Country.#longToShortCountryCode[longOrShortCode];
		} else {
			throw(new Error(`Invalid country code: ${longOrShortCode}`));
		}

		this.code = Country.assertCountryCode(code);

		const index = Country.#codeToIndex[this.code];
		if (index === undefined || !countries[index]) {
			throw new Error(`Cannot find code ${code}`);
		}

		this.flag = imageCache[code];

		const { name, currency, alpha3, numericCode, region, dialCode } = countries[index];

		this.name = name;
		this.#currencyCode = currency;
		this.longCode = alpha3;
		this.numericCode = numericCode;
		this.region = region;
		this.dialCode = dialCode;
	}

	static #updateCache() {
		if (Country.#cacheSetup) {
			return;
		}

		for (let i = 0; i < countries.length; i++) {
			const country = countries[i];
			const { alpha2, alpha3, currency } = country;
			Country.#countryToCurrencyCache[alpha2] = currency;
			Country.#codeToIndex[alpha2] = i;
			Country.#longToShortCountryCode[alpha3] = alpha2;

			if (!Country.#currencyToCountriesCache[currency]) {
				Country.#currencyToCountriesCache[currency] = [];
			}

			// @ts-ignore
			Country.#currencyToCountriesCache[currency].push(alpha2);
		}

		Country.#cacheSetup = true;
	}

	get currency() {
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		return new Currency(this.#currencyCode);
	}

	toJSON(): CountryInformation {
		return({
			name: this.name,
			code: this.code,
			longCode: this.longCode,
			numericCode: this.numericCode,
			dialCode: this.dialCode,
			region: this.region,
			flag: this.flag,
		});
	}

	static isCountryCode(code: any): code is ISOCountryCode {
		Country.#updateCache();
		return(Object.keys(Country.#codeToIndex).includes(code));
	}

	static assertCountryCode(code: any): ISOCountryCode {
		if (!Country.isCountryCode(code)) {
			throw(new Error(`Invalid country code: ${code}`));
		}

		return(code);
	}

	static isLongCountryCode(code: any): code is ISOCountryCode {
		Country.#updateCache();
		return(Object.keys(Country.#longToShortCountryCode).includes(code));
	}

	static assertLongCOuntryCode(code: any): ISOCountryCode {
		if (!Country.isLongCountryCode(code)) {
			throw(new Error(`Invalid long country code code: ${code}`));
		}

		return(code);
	}

	static findByCurrencyCode(currencyCode: ISOCurrencyCode): Country[] {
		const countryCodes = Country.#currencyToCountriesCache[currencyCode];
		if (!countryCodes) {
			throw new Error(`No countries found for currency code: ${currencyCode}`);
		}

		return(countryCodes.map((code) => new Country(code)));
	}
}

interface CurrencyInformation {
	code: ISOCurrencyCode;
	isoNumber: ISOCurrencyNumber;
	precision: string;
	name: string;
}

class Currency implements CurrencyInformation {
	static #cacheSetup = false;
	static #allowedCurrencies?: ISOCurrencyCode[];

	static #byCodeCache: { [key: string]: number } = {};
	static #byIsoNumberCodeCache: { [key: string]: ISOCurrencyCode } = {};

	static #updateCache() {
		if (Currency.#cacheSetup) {
			return;
		}

		for (let i = 0; i < currencies.length; i++) {
			const currency = currencies[i];
			Currency.#byCodeCache[currency.code] = i;
			Currency.#byIsoNumberCodeCache[currency.isoNumber] = currency.code;
		}

		Currency.#cacheSetup = true;
	}

	static get allowedCurrencies(): ISOCurrencyCode[] {
		Currency.#updateCache();

		if (Currency.#allowedCurrencies) {
			return Currency.#allowedCurrencies;
		}

		// @ts-ignore
		return Object.keys(Currency.#byCodeCache);
	}

	static #getIndexFromCode(code: ISOCurrencyCode) {
		Currency.#updateCache();
		return currencies[Currency.#byCodeCache[code]];
	}

	static updateAllowedCurrencies(codes?: ISOCurrencyCode[]): void {
		Currency.#allowedCurrencies = codes;
	}

	static isCurrencyCode(code: any): code is ISOCurrencyCode {
		return Currency.allowedCurrencies.includes(code);
	}

	static assertCurrencyCode(currencyCode: any): ISOCurrencyCode {
		if (!Currency.isCurrencyCode(currencyCode)) {
			throw(new Error(`Invalid ISO number: ${currencyCode}`));
		}

		return(currencyCode);
	}

	static isISOCurrencyNumber(number: any): number is ISOCurrencyNumber {
		Currency.#updateCache();
		const currencyCode = Currency.#byIsoNumberCodeCache[number];

		if (!currencyCode) {
			return false;
		}

		return Currency.allowedCurrencies.includes(currencyCode);
	}

	static assertISOCurrencyNumber(isoNumber: any): ISOCurrencyNumber {
		if (!Currency.isISOCurrencyNumber(isoNumber)) {
			throw(new Error(`Invalid ISO number: ${isoNumber}`));
		}

		return(isoNumber);
	}

	readonly code: ISOCurrencyCode;
	readonly name: string;
	readonly precision: string;
	readonly isoNumber: ISOCurrencyNumber;

	get country() {
		return Country.findByCurrencyCode(this.code);
	}

	constructor(currencyISONumber: ISOCurrencyNumber);
	constructor(currencyCode: ISOCurrencyCode);
	constructor(codeOrNumber: ISOCurrencyCode | ISOCurrencyNumber) {
		let code;
		let isoNumber;

		if (Currency.isCurrencyCode(codeOrNumber)) {
			code = codeOrNumber;
			isoNumber = Currency.#getIndexFromCode(code).isoNumber;
		} else if (Currency.isISOCurrencyNumber(codeOrNumber)) {
			isoNumber = codeOrNumber;
			code = Currency.#byIsoNumberCodeCache[isoNumber];
		} else {
			throw new Error(`Invalid currency code or iso number: ${codeOrNumber}`);
		}

		this.code = Currency.assertCurrencyCode(code);
		this.isoNumber = Currency.assertISOCurrencyNumber(isoNumber);

		const currency = Currency.#getIndexFromCode(code);

		if (!currency) {
			throw new Error(`Invalid currency code: ${code}`);
		}

		if (!Currency.allowedCurrencies.includes(code)) {
			throw new Error(`Currency code not allowed: ${code}`);
		}

		this.name = currency.name;
		this.precision = currency.precision;
		this.isoNumber = currency.isoNumber;
	}

	toJSON(): CurrencyInformation {
		return({
			code: this.code,
			isoNumber: this.isoNumber,
			precision: this.precision,
			name: this.name
		});
	}
}


// Require all svg files in ./svg
const allSvgs = require.context('./data/flags', false, /\.svg$/);
const allSvgFilePaths = allSvgs.keys();

for (const filePath of allSvgFilePaths) {
	// Get currency code from file name
	const countryCode = filePath.split('.svg')[0].split('/')[1].toUpperCase();

	if (!Country.isCountryCode(countryCode)) {
		continue;
	}

	// Get content of specific file name from key
	imageCache[countryCode] = allSvgs(filePath);
}

export { Currency, Country };
