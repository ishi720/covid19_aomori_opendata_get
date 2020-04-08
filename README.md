covid19青森用のオープンデータをjsonにします

## データ取得元

- [青い森オープンデータカタログ](https://opendata.pref.aomori.lg.jp/dataset/1531.html)

## 推奨環境

- node: 12.x
- npm: 6.x

## jsonデータ作成

```bash
## 必要なパッケージの取得
$ npm install

## csvの取得
$ node csv_get.js

## csvをjson化
$ node csv_to_json.js
```

## このデータの活用プロジェクト

- [CodeForAomori/covid19](https://github.com/CodeForAomori/covid19)
