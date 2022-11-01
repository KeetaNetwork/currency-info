import { CurrencyCode, currencyNames } from './types.generated'

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

type ImageObject = { [K in CurrencyCode]?: string };
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
export { CurrencyCode, currencyNames };