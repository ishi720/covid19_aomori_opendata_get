//CSVをjsonに変換する
const fs = require('fs');
const iconv = require('iconv-lite');
const csv = require('convert-csv-to-json');

csv_to_json('consult.csv','_consult.json');
csv_to_json('consult_call_center.csv','_consult_call_center.json');
csv_to_json('inspect.csv','_inspection.json');
csv_to_json('patients.csv','_patients.json');

function csv_to_json (inputFile, outputFile) {
	genCSV().then(res => {
	    const fileInputName = 'temp_' + inputFile; 
	    const fileOutputName = './json/'+ outputFile;
	    csv.fieldDelimiter(',') .getJsonFromCsv(fileInputName);
	    csv.generateJsonFileFromCsv(fileInputName,fileOutputName);
	});
	function genCSV(){
	    return new Promise((resolve, reject) => {
	        fs.readFile('./csv/'+ inputFile, function(err, data){
	            const buf = new Buffer.from(data, 'binary');
	            const retStr = iconv.decode(buf, "Shift_JIS");
	            fs.writeFile('temp_' + inputFile, retStr, (err) => {
	                if (err) throw err;
	                resolve(retStr);  
	            });
	        });
	    });
	}
}
