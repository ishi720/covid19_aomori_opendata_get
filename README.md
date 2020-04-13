covid19青森用のオープンデータをjsonにします

## Badge

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/bba5c58b3cbc4cb492415f5a273b28cb)](https://www.codacy.com/manual/ishi720/covid19_aomori_opendata_get?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ishi720/covid19_aomori_opendata_get&amp;utm_campaign=Badge_Grade)[![dependencies Status](https://david-dm.org/ishi720/covid19_aomori_opendata_get/status.svg)](https://david-dm.org/ishi720/covid19_aomori_opendata_get)

## オープンデータ取得元

- [青い森オープンデータカタログ](https://opendata.pref.aomori.lg.jp/dataset/1531.html)
- [COVID-19 Japan](https://www.stopcovid19.jp/)

## 実行環境

- node: 12.x
- npm: 6.x

## jsonデータ作成

```bash
## 必要なパッケージの取得
$ npm install

###
# 青い森オープンデータカタログからデータ生成
###

## csvの取得
$ node csv_get.js

## csvをjson化
$ node csv_to_json.js

###
# COVID-19 Japanからデータ生成
###

## jsonの生成
$ node sickbeds_summary_json_create.js
```

## このデータの活用プロジェクト

- [CodeForAomori/covid19](https://github.com/CodeForAomori/covid19)
