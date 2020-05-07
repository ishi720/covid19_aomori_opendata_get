'use strict';

const fs = require('fs');
const request = require('request');
const wget = require('node-wget');
const url = 'https://opendata.pref.aomori.lg.jp/api/package_show?id=5e4612ce-1636-41d9-82a3-c5130a79ffe0';

request.get({ url: url }, function (error, response, body) {
    const obj = JSON.parse(body);
    const resources = obj.result.resources;

    resources.forEach( (val) => {
        if (val.name.match(/相談件数（コールセンター）/)) {


            // 更新日時のjson作成
            const consult_call_center_last_update= {
                "date": val.updated.replace(/^(\d{4})-(\d{2})-(\d{2}).+$/,"$1/$2/$3")
            }

            fs.writeFile('json/consult_call_center.json', JSON.stringify(consult_call_center_last_update, null, 4), (err, data) => {
              if(err) console.log(err);
              else console.log('save_consult_call_center.json');
            });

            // csv作成
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

            // 更新日時のjson作成
            const consult_last_update = {
                "date": val.updated.replace(/^(\d{4})-(\d{2})-(\d{2}).+$/,"$1/$2/$3")
            }

            fs.writeFile('json/consult.json', JSON.stringify(consult_last_update, null, 4), (err, data) => {
              if(err) console.log(err);
              else console.log('consult.json');
            });

            // csv作成
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

            // 更新日時のjson作成
            const inspect_last_update = {
                "date": val.updated.replace(/^(\d{4})-(\d{2})-(\d{2}).+$/,"$1/$2/$3")
            }

            fs.writeFile('json/inspection.json', JSON.stringify(inspect_last_update, null, 4), (err, data) => {
              if(err) console.log(err);
              else console.log('inspection.json');
            });

            // csv作成
            wget({
                url: val.url,
                dest: './csv/inspection.csv'
             },(error, response, body) => {
                if (error) {
                    console.log("inspection.csv [Error]");
                } else {
                    console.log("Save to inspection.csv");
                }
            });
        } else if (val.name.match(/陽性患者関係/)) {

            // 更新日時のjson作成
            const patients_last_update = {
                "date": val.updated.replace(/^(\d{4})-(\d{2})-(\d{2}).+$/,"$1/$2/$3")
            }

            fs.writeFile('json/patients.json', JSON.stringify(patients_last_update, null, 4), (err, data) => {
              if(err) console.log(err);
              else console.log('patients.json');
            });

            // csv作成
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