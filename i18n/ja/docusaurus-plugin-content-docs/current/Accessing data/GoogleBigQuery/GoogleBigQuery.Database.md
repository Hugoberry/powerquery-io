---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

Google BigQuery データベースからデータをインポートします。


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      Google BigQuery 内の利用可能なプロジェクトを一覧表示するテーブルを返します。オプションのレコード パラメーターである <code>options</code> を指定して、次のオプションを制御できます。      <ul>        <li><code>ConnectionTimeout</code>: サーバーへの接続の試行を中止するまでの待機時間を制御する期間です。既定値は、ODBC 接続のタイムアウト値です。</li>        <li><code>CommandTimeout</code>: キャンセルされるまでに許可されるサーバー側クエリの実行時間を制御する期間です。</li>        <li><code>BillingProject</code>: 課金プロジェクト名 ID です。既定値は、最初の利用可能なプロジェクトです。</li>        <li><code>UseStorageApi</code>: 大規模な結果セットに対して BigQuery Storage API を使用するかどうかを指定します。既定値は true で、Storage API を使用します。Storage API を使用しない場合は、false に設定します</li>      </ul>    レコード パラメーターは、[option1 = value1, option2 = value2...] のように指定します。    


## Examples

### Example #1 
Google BigQuery で使用可能なプロジェクトを一覧表示します
```powerquery
GoogleBigQuery.Database()
```



