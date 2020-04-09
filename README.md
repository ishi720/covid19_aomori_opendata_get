covid19青森用のオープンデータをjsonにします

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
