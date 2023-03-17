import { CurrencyCode, currencyNames } from './types.generated';
import ISOCurrencies from './isocurrencies';

const currenciesByCode: IndexByISOCode = {};
const currenciesByNumber: IndexByISONumber = {};
type ImageObject = UnionKeyObject<CurrencyCode, string>;
const tmpImages: ImageObject = {};
// Export Images as an object with all currencies required
// eslint-disable-next-line no-type-assertion/no-type-assertion
export const Images = tmpImages as Required<ImageObject>;

interface IsoCodeEntry {
	code: ISOCurrencyCode;
	isoNumber: ISOCurrencyNumber;
	precision: string;
	name: string;
}

interface IsoCodeEntryWithImage extends IsoCodeEntry {
	code: ISOCurrencyCode & CurrencyCode;
	flag: string;
}

let isoCacheUpdated = false;
function updateISOCache() {
	if (isoCacheUpdated) {
		return;
	}

	for (let i = 0; i < ISOCurrencies.length; i++) {
		const { code, isoNumber } = ISOCurrencies[i];

		currenciesByCode[code] = i;
		currenciesByNumber[isoNumber] = i;
	}

	isoCacheUpdated = true;
}

export function isCurrencyCode(code: any): code is CurrencyCode {
	return currencyNames.includes(code);
}

export function isISOCurrencyNumber(number: any): number is ISOCurrencyNumber {
	return ISOCurrencies.some((currency) => currency.isoNumber === String(number));
}

function formatIsoLookup(entry: IsoCodeEntry, addImage?: boolean): IsoCodeEntry | IsoCodeEntryWithImage | null {
	if (!entry) {
		return null;
	}

	if (addImage !== true) {
		return entry;
	}

	if (!isCurrencyCode(entry.code)) {
		throw new Error(`Cannot get svg for currency code ${entry.code}`);
	}

	return({
		...entry,
		code: entry.code,
		flag: Images[entry.code]
	});
}

export function getByISOCode(code: ISOCurrencyCode, returnImage: true): IsoCodeEntryWithImage | null;
export function getByISOCode(code: ISOCurrencyCode, returnImage?: false): IsoCodeEntry | null;
export function getByISOCode(code: ISOCurrencyCode, returnImage?: boolean): IsoCodeEntry | IsoCodeEntryWithImage | null {
	updateISOCache();

	// eslint-disable-next-line no-type-assertion/no-type-assertion
	const found = ISOCurrencies[(currenciesByCode as Required<IndexByISOCode>)[code]];

	return formatIsoLookup(found, returnImage);
}

export function getByISONumber(isoNumber: ISOCurrencyNumber, returnImage: true): IsoCodeEntryWithImage | null;
export function getByISONumber(isoNumber: ISOCurrencyNumber, returnImage?: false): IsoCodeEntry | null;
export function getByISONumber(isoNumber: ISOCurrencyNumber, returnImage?: boolean): IsoCodeEntry | IsoCodeEntryWithImage | null {
	updateISOCache();

	// eslint-disable-next-line no-type-assertion/no-type-assertion
	const found = ISOCurrencies[(currenciesByNumber as Required<IndexByISONumber>)[isoNumber]];

	return formatIsoLookup(found, returnImage);
}

export function deleteCurrencies(codes: CurrencyCode[]): void {
	codes.forEach((code) => {
		const index = currencyNames.indexOf(code);
		if (index > -1) {
			// eslint-disable-next-line no-type-assertion/no-type-assertion
			(currencyNames as unknown as string[]).splice(index, 1);
		}
	});
}

export function assertCurrencyCode(code: any): CurrencyCode {
	if (!isCurrencyCode(code)) {
		throw(new Error(`Invalid currency code: ${code}`));
	}

	return(code);
}

export function assertISOCurrencyNumber(isoNumber: any): ISOCurrencyNumber {
	if (!isISOCurrencyNumber(isoNumber)) {
		throw(new Error(`Invalid ISO number: ${isoNumber}`));
	}

	return(isoNumber);
}

export function currencyNumberToCurrencyCode(isoNumber: ISOCurrencyNumber): CurrencyCode {
	const currency = getByISONumber(isoNumber);
	if (!currency || !isCurrencyCode(currency.code)) {
		throw(new Error(`Invalid currency number: ${isoNumber}`));
	}

	return currency.code;
}

export function currencyCodeToISONumber(code: CurrencyCode): ISOCurrencyNumber {
	const currency = getByISOCode(code);
	if (!currency || !isISOCurrencyNumber(currency.isoNumber)) {
		throw(new Error(`Invalid currency code: ${code}`));
	}

	return currency.isoNumber;
}

// Convert usd.svg -> USD, eur.svg -> EUR, etc
function fileNameToCurrencyCode(fileName: string): CurrencyCode {
	// Check if the currency code provided matches the CurrencyCode type
	const withoutExtension = fileName.replace(/(\.svg)|(\.\/)/g, '');
	const currencyCode = withoutExtension.toUpperCase();

	// We should throw an error if for some reason a file provided is not a valid CurrencyCode
	if (!(isCurrencyCode(currencyCode))) {
		throw(new Error(`Invalid SVG name ${fileName}`));
	}

	return currencyCode;
}

type UnionKeyObject<U extends string, V> = { [K in U]?: V };

// Require all svg files in ./svg
const allSvgs = require.context('./svg', false, /\.svg$/);
const allSvgFileNames = allSvgs.keys();

for (const fileName of allSvgFileNames) {
	// Get currency code from file name
	const currencyCode = fileNameToCurrencyCode(fileName);

	// Get content of specific file name from key
	tmpImages[currencyCode] = allSvgs(fileName);
}

export { CurrencyCode, currencyNames, ISOCurrencies };

type ISOCurrencyCode = typeof ISOCurrencies[number]['code'];
type ISOCurrencyNumber = typeof ISOCurrencies[number]['isoNumber'];

type IndexByISOCode = UnionKeyObject<ISOCurrencyCode, number>;
type IndexByISONumber = UnionKeyObject<ISOCurrencyNumber, number>;
