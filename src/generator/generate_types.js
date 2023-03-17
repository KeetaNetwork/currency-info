/**
 * This file gets ran by webpack -- before each compile
 */
const fs = require('fs');
const path = require('path');

const svgDir = path.join(__dirname, '../svg');
const outputFile = path.join(__dirname, '../types.generated.ts');

function writeTypes() {
    const svgFileNames = fs.readdirSync(svgDir);

    const names = svgFileNames.map(function(fileName) {
        // Make sure file name follows structure of 3 characters, plus svg extension
        if (!(/^[a-zA-Z]{3}\.svg$/.test(fileName))) {
            throw(new Error(`Invalid SVG name ${fileName}`));
        }

        // Convert file name to uppercase
        const upperCase = fileName.toUpperCase();

        // Remove file extension from name
        const withoutExtension = upperCase.replace('.SVG', '');

        // Wrap quotes around the currency code
        const quoteWrapped = `'${withoutExtension}'`;

        return quoteWrapped;
    });

    const content = [];

    // export type CurrencyCode = 'USD' | 'EUR' | ... 'GBP';
    const joinedForType = names.join(' | ');
    const currencyType = `export type CurrencyCode = ${joinedForType};`;
    content.push(currencyType);

    // export const currencyNames = ['USD', 'EUR', ... 'GBP'] as const;
    const joinedForArray = names.join(', ');
    const currencyArray = `export const currencyNames = [${joinedForArray}] as const;`;
    content.push(currencyArray);

    const contentStr = `${content.join('\n')}\n`;

    // Read the current generated type file, if it exists
    let currentContent = undefined;
    if (fs.existsSync(outputFile)) {
        currentContent = fs.readFileSync(outputFile).toString();
    }

    // Return if the generated types are the same as what is currently stored
    // We do this to avoid webpack:watch running recursively
    if (currentContent === contentStr) {
        return;
    }

    // Write the new generated types
    fs.writeFileSync(outputFile, contentStr);
}

module.exports = { writeTypes };
