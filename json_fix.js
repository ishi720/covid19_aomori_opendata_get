'use strict';

const fs = require('fs');


// _consult_call_center.jsonから想定外のデータを除去する
const jsonObject = JSON.parse(fs.readFileSync('./json/_consult_call_center.json', 'utf8'));
const workObj = [];
Object.keys(jsonObject).forEach(function (key) {
    if (jsonObject[key]['全国地方公共団体コード'].match(/※/)) {
    } else {
        workObj.push(jsonObject[key]);
    }
});
fs.writeFile('./json/_consult_call_center.json', JSON.stringify(workObj, null, 2), (err, data) => {
    if(err) console.log(err);
    else console.log('_consult_call_center.json fix');
});


// _inspection.jsonから日付以外を除去する
const jsonObject2 = JSON.parse(fs.readFileSync('./json/_inspection.json', 'utf8'));
const workObj2 = [];
Object.keys(jsonObject2).forEach(function (key) {
    if (jsonObject2[key]['検査日時'].match(/^\d+年\d+月\d+日$/)) {
    	workObj2.push(jsonObject2[key]);
    }
});
fs.writeFile('./json/_inspection.json', JSON.stringify(workObj2, null, 1), (err, data) => {
    if(err) console.log(err);
    else console.log('_inspection.json fix');
});
