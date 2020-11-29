const XLSX = require('xlsx');
const workbook = XLSX.readFile(__dirname + '/TestData.xlsx');
console.log(workbook)
function GetDataFromExcel(sheetName,testCaseName){ 
    let convertSheetToJson= XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    let mainData = convertSheetToJson.filter((element)=>{
        return element.TestCase == testCaseName
    })
    return mainData
}
module.exports = GetDataFromExcel