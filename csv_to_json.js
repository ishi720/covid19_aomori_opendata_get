//CSVをjsonに変換する
const fs = require('fs');
const iconv = require('iconv-lite');
const csv = require('convert-csv-to-json');

csv_to_json('./csv/consult.csv','./json/consult.json');
csv_to_json('./csv/consult_call_center.csv','./json/consult_call_center.json');
csv_to_json('./csv/inspect.csv','./json/inspect.json');

function csv_to_json (inputFile, outputFile) {
	genCSV().then(res => {
	    const fileInputName = 'temp.csv'; 
	    const fileOutputName = outputFile;
	    csv.fieldDelimiter(',') .getJsonFromCsv(fileInputName);
	    csv.generateJsonFileFromCsv(fileInputName,fileOutputName);
	});
	function genCSV(){
	    return new Promise((resolve, reject) => {
	        fs.readFile(inputFile, function(err, data){
	            const buf = new Buffer.from(data, 'binary');
	            const retStr = iconv.decode(buf, "Shift_JIS");
	            fs.writeFile('temp.csv', retStr, (err) => {
	                if (err) throw err;
	                resolve(retStr);  
	            });
	        });
	    });
	}
}
