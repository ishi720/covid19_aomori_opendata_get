const fs = require('fs');

describe('consult', () => {
	it ('consult.json', () => {
		expect( isJson('./json/_consult.json') ).toBe(true);
	});
	it ('_consult.json', () => {
		expect( isJson('./json/_consult.json') ).toBe(true);
	});
});

describe('consult_call_center', () => {
	it ('consult_call_center.json', () => {
		expect( isJson('./json/_consult_call_center.json') ).toBe(true);
	});
	it ('_consult_call_center.json', () => {
		expect( isJson('./json/_consult_call_center.json') ).toBe(true);
	});
});

describe('inspection', () => {
	it ('inspection.json', () => {
		expect( isJson('./json/_inspection.json') ).toBe(true);
	});
	it ('_inspection.json', () => {
		expect( isJson('./json/_inspection.json') ).toBe(true);
	});
});

describe('patients', () => {
	it ('patients.json', () => {
		expect( isJson('./json/_patients.json') ).toBe(true);
	});
	it ('_patients.json', () => {
		expect( isJson('./json/_patients.json') ).toBe(true);
	});
});

describe('sickbeds_summary', () => {
	it ('sickbeds_summary.json', () => {
		expect( isJson('./json/sickbeds_summary.json') ).toBe(true);
	});
});

function isJson(jsonFile){
	try {
    	JSON.parse( fs.readFileSync(jsonFile));
  	} catch (e) {
    	return false
 	}
  	return true
}