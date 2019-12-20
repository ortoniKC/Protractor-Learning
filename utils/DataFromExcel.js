const xlsx = require('xlsx')
class ReadData {

    getData(file, sheetName) {
        let wb = xlsx.readFile(file)
        return xlsx.utils.sheet_to_json(wb.Sheets[sheetName])
    }
}
exports.ReadData = ReadData;