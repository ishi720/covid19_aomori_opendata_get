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
            updatedToJson(val.updated,'consult_call_center');

            // csv生成
            getCSV(val.url,'consult_call_center');

        } else if (val.name.match(/相談件数（帰国者・接触者相談）/)) {

            // 更新日時のjson作成
            updatedToJson(val.updated,'consult');

            // csv生成
            getCSV(val.url,'consult');

        } else if (val.name.match(/検査実施状況/)) {

            // 更新日時のjson作成
            updatedToJson(val.updated,'inspection');

            // csv生成
            getCSV(val.url,'inspection');

        } else if (val.name.match(/陽性患者関係/)) {

            // 更新日時のjson作成
            updatedToJson(val.updated,'patients');

            // csv生成
            getCSV(val.url,'patients');

        } else if (val.name.match(/検査陽性者の状況/)) {
        }
    })
});

/**
 * 各データの更新日時をフォーマットして、jsonファイルとして保存する
 * @param {string} dateTime - 更新された日時
 * @param {string} fileName - 出力するファイル名
 */
let updatedToJson = (dateTime,fileName) => {
    // 更新日時のjson作成
    const updated = {
        'date': dateTime.replace(/^(\d{4})-(\d{2})-(\d{2}).+$/,"$1/$2/$3")
    }

    fs.writeFile('json/'+ fileName +'.json', JSON.stringify(updated, null, 4), (err, data) => {
      if(err) console.log(err);
      else console.log(fileName +'.json');
    });
}

/**
 * CSVの取得と保存をする
 * @param {string} url - csv取得元のURL
 * @param {string} fileName - 出力するファイル名
 */
let getCSV = (url,fileName) => {
    wget({
        url: url,
        dest: './csv/'+ fileName +'.csv'
    },(error, response, body) => {
        if (error) {
            console.log(fileName +'.csv [Error]');
        } else {
            console.log('Save to '+ fileName +'.csv');
        }
    });
}