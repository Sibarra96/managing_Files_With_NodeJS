const { convertCsv } = require('./csv.parse');
const fs = require('fs');
const { promisify } = require('util');

module.exports.read = () => {
    const promisifiedReadFile = promisify(fs.readFile);

    promisifiedReadFile("./data/pulitzer-circulation-data.csv", "utf8")
        .then(data => console.table(convertCsv(data)))
        .catch(err => console.log(`File error: ${err}`));

    const read = async () => {
        const data = await promisifiedReadFile("./data/pulitzer-circulation-data.csv", "utf8");
        console.table(convertCsv(data));
    };
    read();
}