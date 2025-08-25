import type { ISOCurrencyCode, ISOCurrencyNumber } from "./data/currencies";
import { Country } from "./country";
import currencies from "./data/currencies";

interface CurrencyInformation {
	code: ISOCurrencyCode;
	isoNumber: ISOCurrencyNumber;
	precision: string;
	name: string;
}

export class Currency implements CurrencyInformation {
	static #cacheSetup = false;
	static #allowedCurrencies?: ISOCurrencyCode[];

	static #allCurrencyCodes: ISOCurrencyCode[] = [];
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
			this.#allCurrencyCodes.push(code);
		}
	}

	static get allowedCurrencies(): ISOCurrencyCode[] {
		this.#updateCache();

		if (this.#allowedCurrencies) {
			return this.#allowedCurrencies;
		}

		return this.#allCurrencyCodes;
	}

	static get allCurrencyCodes(): ISOCurrencyCode[] {
		this.#updateCache();
		return this.#allCurrencyCodes;
	}

	static #getDataFromCode(code: ISOCurrencyCode) {
		this.#updateCache();
		return currencies[this.#byCodeCache[code]];
	}

	static allowCurrencies(codes: ISOCurrencyCode[]): void {
		this.#allowedCurrencies = codes;
	}

	static isCurrencyCode(code: any): code is ISOCurrencyCode {
		this.#updateCache();
		return this.#allCurrencyCodes.includes(code);
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

		return this.#allCurrencyCodes.includes(currencyCode);
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

	get country(): Country[] {
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
