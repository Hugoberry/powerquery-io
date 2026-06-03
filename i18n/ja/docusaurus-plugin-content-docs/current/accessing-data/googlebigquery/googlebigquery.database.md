---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Google BigQuery データベースからデータをインポートします。


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

Google BigQuery 内の利用可能なプロジェクトを一覧表示するテーブルを返します。省略可能なレコード パラメーター `options` を指定して、次のオプションを制御できます。

-   `ConnectionTimeout`: サーバーへの接続試行を破棄するまで待機する長さを制御する期間。既定値は ODBC 接続タイムアウト値です。
-   `CommandTimeout`: キャンセルされるまでに、サーバー側クエリの実行がどのくらいの間許可されるかを制御する期間。
-   `BillingProject`: 課金プロジェクト ID。既定値は、最初に使用可能なプロジェクトです。
-   `UseStorageApi`: 大規模な結果セットに対して BigQuery Storage API を使用するかどうかを指定します。既定値は true で、Storage API を使用します。Storage API を使用しない場合は false に設定します

レコード パラメーターは、\[option1 = value1, option2 = value2...\] のように指定します。


## Examples

### Example #1
Google BigQuery で使用可能なプロジェクトを一覧表示します
```powerquery
GoogleBigQuery.Database()
```



