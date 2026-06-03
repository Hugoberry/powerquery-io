---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Microsoft Entra ID を使用して Google BigQuery データベースからデータをインポートする


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

`Billing Project ID` に対し、Microsoft Entra ID を使用して Google BigQuery で使用可能なプロジェクトを一覧表示するテーブルを返します。省略可能なレコード パラメーター `options` を指定して、次のオプションを制御できます。

-   `ConnectionTimeout`: サーバーへの接続試行を破棄するまで待機する長さを制御する期間。既定値は ODBC 接続タイムアウト値です。
-   `CommandTimeout`: キャンセルされるまでに、サーバー側クエリの実行がどのくらいの間許可されるかを制御する期間。
-   `UseStorageApi`: 大規模な結果セットに対して BigQuery Storage API を使用するかどうかを指定します。既定値は true で、Storage API を使用します。Storage API を使用しない場合は false に設定します
-   `AudienceUri`: これは ODBC ドライバーがトークン交換要求に使用できるオーディエンス URI です。このフィールドは完全修飾 URI (例: //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread) である必要があります。pool\_id は、ワークフォース プールを識別するためのグローバル固有の名前です。

レコード パラメーターは、\[option1 = value1, option2 = value2...\] のように指定します。


## Examples

### Example #1
Microsoft Entra ID を使用して、Google BigQuery で使用可能なプロジェクトを一覧表示します
```powerquery
GoogleBigQueryAad.Database()
```



