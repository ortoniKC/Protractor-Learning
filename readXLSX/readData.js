const xlsx = require('xlsx')
let wb = xlsx.readFile('./../data.xlsx')
let sheet = wb.Sheets['Sheet1']
let data = xlsx.utils.sheet_to_json(sheet)
data.forEach((data) => {
    console.log(data.user);

})