import { CurrencyCode, currencyNames } from './types.generated'
import ISOCurrencies from './isocurrencies';

export function isCurrencyCode(code: any): code is CurrencyCode {
    return currencyNames.includes(code);
}

// Convert usd.svg -> USD, eur.svg -> EUR, etc
function fileNameToCurrencyCode(fileName: string): CurrencyCode {
    // Check if the currency code provided matches the CurrencyCode type
    const withoutExtension = fileName.replace(/(\.svg)|(\.\/)/g, '');
    const currencyCode = withoutExtension.toUpperCase();

    // We should throw an error if for some reason a file provided isnt a valid CurrencyCode
    if (!(isCurrencyCode(currencyCode))) {
        throw(new Error(`Invalid SVG name ${fileName}`));
    }

    return currencyCode;
}

type UnionKeyObject<U extends string, V> = { [K in U]?: V };

type ImageObject = UnionKeyObject<CurrencyCode, string>;
const tmpImages: ImageObject = {};

// Require all svg files in ./svg
const allSvgs = require.context('./svg', false, /\.svg$/);
const allSvgFileNames = allSvgs.keys();

for (const fileName of allSvgFileNames) {    
    // Get currency code from file name
    const currencyCode = fileNameToCurrencyCode(fileName);

    // Get content of specific file name from key
    tmpImages[currencyCode] = allSvgs(fileName);
}

// Export Images as an object with all currencies required
export const Images = tmpImages as Required<ImageObject>;
export { CurrencyCode, currencyNames, ISOCurrencies };

type ISOCurrencyCode = typeof ISOCurrencies[number]['code'];
type ISOCurrencyNumber = typeof ISOCurrencies[number]['isoNumber'];

type IndexByISOCode = UnionKeyObject<ISOCurrencyCode, number>;
type IndexByISONumber = UnionKeyObject<ISOCurrencyNumber, number>;

const currenciesByCode: IndexByISOCode = {};
const currenciesByNumber: IndexByISONumber = {};

interface IsoCodeEntry {
    code: ISOCurrencyCode;
    isoNumber: ISOCurrencyNumber;
    precision: string;
    name: string;
}

interface IsoCodeEntryWithImage extends IsoCodeEntry {
    code: ISOCurrencyCode & CurrencyCode;
    svg: string;
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

    return {
        ...entry,
        svg: Images[entry.code]
    } as IsoCodeEntryWithImage
}

export function getByISOCode(code: ISOCurrencyCode, returnImage: true): IsoCodeEntryWithImage | null;
export function getByISOCode(code: ISOCurrencyCode, returnImage?: false): IsoCodeEntry | null;
export function getByISOCode(code: ISOCurrencyCode, returnImage?: boolean): IsoCodeEntry | IsoCodeEntryWithImage | null {
    updateISOCache();

    const found = ISOCurrencies[(currenciesByCode as Required<IndexByISOCode>)[code]];

    return formatIsoLookup(found, returnImage);
}

export function getByISONumber(isoNumber: ISOCurrencyNumber, returnImage: true): IsoCodeEntryWithImage | null;
export function getByISONumber(isoNumber: ISOCurrencyNumber, returnImage?: false): IsoCodeEntry | null;
export function getByISONumber(isoNumber: ISOCurrencyNumber, returnImage?: boolean): IsoCodeEntry | IsoCodeEntryWithImage | null {
    updateISOCache();
    
    const found = ISOCurrencies[(currenciesByNumber as Required<IndexByISONumber>)[isoNumber]]

    return formatIsoLookup(found, returnImage);
}
