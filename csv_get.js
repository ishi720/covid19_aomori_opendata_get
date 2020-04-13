'use strict';

const request = require("request");
const wget = require('node-wget');
const url = 'https://opendata.pref.aomori.lg.jp/api/package_show?id=5e4612ce-1636-41d9-82a3-c5130a79ffe0';

request.get({ url: url }, function (error, response, body) {
	const obj = JSON.parse(body);
	const resources = obj.result.resources;

	resources.forEach( (val) => {
	 	if (val.name.match(/相談件数（コールセンター）/)) {
	 		wget({
	 			url: val.url,
	 			dest: './csv/consult_call_center.csv'
	 		},(error, response, body) => {
	 			if (error) {
	 				console.log("consult_call_center.csv [Error]");
	 			} else {
	 				console.log("Save to consult_call_center.csv");
	 			}
	 		});
	 	} else if (val.name.match(/相談件数（帰国者・接触者相談）/)) {
	 		wget({
	 			url: val.url,
	 			dest: './csv/consult.csv'
	 		},(error, response, body) => {
	 			if (error) {
	 				console.log("consult.csv [Error]");
	 			} else {
	 				console.log("Save to consult.csv");
	 			}
	 		});
	 	} else if (val.name.match(/検査実施状況/)) {
	 		wget({
	 			url: val.url,
	 			dest: './csv/inspect.csv'
	 		},(error, response, body) => {
	 			if (error) {
	 				console.log("inspect.csv [Error]");
	 			} else {
	 				console.log("Save to inspect.csv");
	 			}
	 		});
	 	} else if (val.name.match(/陽性患者関係/)) {
	 		wget({
	 			url: val.url,
	 			dest: './csv/patients.csv'
	 		},(error, response, body) => {
	 			if (error) {
	 				console.log("patients.csv [Error]");
	 			} else {
	 				console.log("Save to patients.csv");
	 			}
	 		});
	 	} else if (val.name.match(/検査陽性者の状況/)) {
	 	}
	})
});



