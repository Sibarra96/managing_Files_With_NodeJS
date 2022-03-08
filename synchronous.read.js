const { convertCsv } = require('./csv.parse');
const { readFileSync } = require('fs');

try {
    const data = readFileSync("./data/pulitzer-circulation-data.csv", "utf8");
} catch (error) {
    console.log(`Error with file: ${error}`);
}


console.table(convertCsv(data));