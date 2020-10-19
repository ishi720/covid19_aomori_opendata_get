'use strict';

const fs = require('fs');
const request = require('request-promise');

// 現在の入院患者数の取得
request('https://www.stopcovid19.jp/data/covid19japan.json')
    .then(body => {
        const obj = JSON.parse(body);
        const ncurrentpatients = obj.area[1]['ncurrentpatients'];
        const ncurrentpatients_lastUpdate = obj.lastUpdate;

        //病床数の取得
        // request('https://www.stopcovid19.jp/data/bedforinfection_summary.json')
        //     .then(body => {
        //         const obj2 = JSON.parse(body);
        //         //const sumi = obj2.area[1]['sumi'];
        //         const sumi = 99;

        //         // 出力するデータの作成
        //         const outputData = {
        //             'sickbeds_summary': {
        //                 'data': {
        //                     '入院患者数': ncurrentpatients,
        //                     '残り病床数': sumi - ncurrentpatients
        //                 },
        //                 'last_update': ncurrentpatients_lastUpdate.replace(/-/g,'/')
        //             }
        //         };

        //         fs.writeFile('json/sickbeds_summary.json', JSON.stringify(outputData, null, 4), (err, data) => {
        //             if(err) console.log(err);
        //             else console.log('sickbeds_summary.json write');
        //         });
        //     })
        //     .catch(error => {
        //         throw error;
        //     });

        //病床数の取得
        request('https://www.stopcovid19.jp/data/covid19japan_beds/latest.json')
            .then(body => {
                const beds = JSON.parse(body);

                // 出力するデータの作成
                const outputData = {
                    'sickbeds_summary': {
                        'data': {
                            '入院患者数': ncurrentpatients,
                            '残り病床数':  Number(beds[1]['入院患者受入確保病床']) - ncurrentpatients
                        },
                        'last_update': getNewerDate(beds[1]['更新日'].replace(/-/g,'/'), ncurrentpatients_lastUpdate.replace(/-/g,'/'))
                    }
                };
                fs.writeFile('json/sickbeds_summary.json', JSON.stringify(outputData, null, 4), (err, data) => {
                    if(err) console.log(err);
                    else console.log('sickbeds_summary.json write');
                });
            })
            .catch(error => {
                throw error;
            });

    })
    .catch(error => {
        throw error;
    });


/**
 * 新しいほうの日付を取得する
 * @param {string} d1 - 日付1
 * @param {string} d2 - 日付2
 */
let getNewerDate = (d1, d2) => {
    if ( new Date(d1) > new Date(d2)) {
        return d1;
    } else {
        return d2;
    }
}