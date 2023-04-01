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
	static #allCountryCodes: ISOCountryCode[] = [];
	static #allowedCountries?: ISOCountryCode[];
	static #countryToCurrencyCache: UnionKeyObject<ISOCountryCode, ISOCurrencyCode> = {};
	static #codeToIndex: UnionKeyObject<ISOCountryCode, number> = {};
	static #longToShortCountryCode: UnionKeyObject<LongCountryCode, ISOCountryCode> = {};
	static #currencyToCountriesCache: UnionKeyObject<ISOCurrencyCode, ISOCountryCode[]> = {};

	static get allowedCountries(): ISOCountryCode[] {
		if (this.#allowedCountries) {
			return this.#allowedCountries;
		}

		this.#updateCache();

		return this.#allCountryCodes;
	}

	static allowCountries(toWhitelist: ISOCountryCode[]) {
		this.#allowedCountries = toWhitelist;
	}

	static assertWhitelisted(code: ISOCountryCode) {
		if (!this.allowedCountries.includes(code)) {
			throw new Error(`Country ${code} is not whitelisted`);
		}
	}

	constructor(countryCode: ISOCountryCode, skipWhitelist?: boolean);
	constructor(longCountryCode: LongCountryCode, skipWhitelist?: boolean);
	constructor(longOrShortCode: ISOCountryCode | LongCountryCode, skipWhitelist?: boolean) {
		let code;

		if (Country.isCountryCode(longOrShortCode)) {
			code = longOrShortCode;
		} else if (Country.isLongCountryCode(longOrShortCode)) {
			code = Country.#longToShortCountryCode[longOrShortCode];
		} else {
			throw(new Error(`Invalid country code: ${longOrShortCode}`));
		}

		if (skipWhitelist !== true) {
			Country.assertWhitelisted(code);
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
		if (this.#cacheSetup) {
			return;
		}

		for (let i = 0; i < countries.length; i++) {
			const country = countries[i];
			const { alpha2, alpha3, currency } = country;
			this.#countryToCurrencyCache[alpha2] = currency;
			this.#codeToIndex[alpha2] = i;
			this.#longToShortCountryCode[alpha3] = alpha2;

			if (!this.#currencyToCountriesCache[currency]) {
				this.#currencyToCountriesCache[currency] = [];
			}

			// @ts-ignore
			this.#currencyToCountriesCache[currency].push(alpha2);
		}

		this.#cacheSetup = true;
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
			flag: this.flag
		});
	}

	static isCountryCode(code: any): code is ISOCountryCode {
		this.#updateCache();
		return(this.#allCountryCodes.includes(code));
	}

	static assertCountryCode(code: any): ISOCountryCode {
		if (!this.isCountryCode(code)) {
			throw(new Error(`Invalid country code: ${code}`));
		}

		return(code);
	}

	static isLongCountryCode(code: any): code is ISOCountryCode {
		this.#updateCache();
		return(Object.keys(this.#longToShortCountryCode).includes(code));
	}

	static assertLongCOuntryCode(code: any): ISOCountryCode {
		if (!this.isLongCountryCode(code)) {
			throw(new Error(`Invalid long country code code: ${code}`));
		}

		return(code);
	}

	static findByCurrencyCode(currencyCode: ISOCurrencyCode): Country[] {
		const countryCodes = this.#currencyToCountriesCache[currencyCode];
		if (!countryCodes) {
			throw new Error(`No countries found for currency code: ${currencyCode}`);
		}

		return(countryCodes.map((code) => new this(code)));
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

	static #allCurrencies: ISOCurrencyCode[] = [];
	static #byCodeCache: { [key: string]: number } = {};
	static #byIsoNumberCodeCache: { [key: string]: ISOCurrencyCode } = {};

	static #updateCache() {
		if (this.#cacheSetup) {
			return;
		}

		this.#cacheSetup = true;

		for (let i = 0; i < currencies.length; i++) {
			const { code, isoNumber } = currencies[i];
			this.#byCodeCache[code] = i;
			this.#byIsoNumberCodeCache[isoNumber] = code;
			this.#allCurrencies.push(code);
		}
	}

	static get allowedCurrencies(): ISOCurrencyCode[] {
		this.#updateCache();

		if (this.#allowedCurrencies) {
			return this.#allowedCurrencies;
		}

		return this.#allCurrencies;
	}

	static #getDataFromCode(code: ISOCurrencyCode) {
		this.#updateCache();
		return currencies[this.#byCodeCache[code]];
	}

	static allowCurrencies(codes?: ISOCurrencyCode[]): void {
		this.#allowedCurrencies = codes;
	}

	static isCurrencyCode(code: any): code is ISOCurrencyCode {
		this.#updateCache();
		return this.#allCurrencies.includes(code);
	}

	static assertCurrencyCode(currencyCode: any): ISOCurrencyCode {
		if (!this.isCurrencyCode(currencyCode)) {
			throw(new Error(`Invalid ISO number: ${currencyCode}`));
		}

		return(currencyCode);
	}

	static isISOCurrencyNumber(number: any): number is ISOCurrencyNumber {
		this.#updateCache();
		const currencyCode = this.#byIsoNumberCodeCache[number];

		if (!currencyCode) {
			return false;
		}

		return this.#allCurrencies.includes(currencyCode);
	}

	static assertISOCurrencyNumber(isoNumber: any): ISOCurrencyNumber {
		if (!this.isISOCurrencyNumber(isoNumber)) {
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

	constructor(currencyISONumber: ISOCurrencyNumber, skipWhitelist?: boolean);
	constructor(currencyCode: ISOCurrencyCode, skipWhitelist?: boolean);
	constructor(codeOrNumber: ISOCurrencyCode | ISOCurrencyNumber, skipWhitelist?: boolean) {
		let code;
		let isoNumber;

		if (Currency.isCurrencyCode(codeOrNumber)) {
			code = codeOrNumber;
			isoNumber = Currency.#getDataFromCode(code).isoNumber;
		} else if (Currency.isISOCurrencyNumber(codeOrNumber)) {
			isoNumber = codeOrNumber;
			code = Currency.#byIsoNumberCodeCache[isoNumber];
		} else {
			throw new Error(`Invalid currency code or iso number: ${codeOrNumber}`);
		}

		if (skipWhitelist !== true && !Currency.allowedCurrencies.includes(code)) {
			throw new Error(`Currency code not allowed: ${code}`);
		}

		this.code = Currency.assertCurrencyCode(code);
		this.isoNumber = Currency.assertISOCurrencyNumber(isoNumber);

		const currency = Currency.#getDataFromCode(code);

		if (!currency) {
			throw new Error(`Invalid currency code: ${code}`);
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

	const content = allSvgs(filePath);

	if (typeof content !== 'string') {
		throw new Error(`Invalid content for file: ${filePath}, content is not a string: ${content}`);
	}

	// Get content of specific file name from key
	imageCache[countryCode] = content;
}

export { Currency, Country };
