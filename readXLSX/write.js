const XLSX = require('xlsx')
let wb = XLSX.utils.book_new();
XLSX.writeFile(,'Check')