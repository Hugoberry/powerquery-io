---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Azure AD を使用して Google BigQuery データベースからデータをインポートします


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

      <code>課金プロジェクト ID</code> 用 Azure AD を使用して、Google BigQuery 内の利用可能なプロジェクトを一覧表示するテーブルを返します。オプションのレコード パラメーターである <code>options</code> を指定して、次のオプションを制御できます。      <ul>        <li><code>ConnectionTimeout</code>: サーバーへの接続の試行を中止するまでの待機時間を制御する期間です。既定値は、ODBC 接続のタイムアウト値です。</li>        <li><code>CommandTimeout</code>: キャンセルされるまでに許可されるサーバー側クエリの実行時間を制御する期間です。</li>        <li><code>UseStorageApi</code>: 大規模な結果セットに対して BigQuery Storage API を使用するかどうかを指定します。既定値は true で、Storage API を使用します。Storage API を使用しない場合は、false に設定します</li>        <li><code>AudienceUri</code>: これは、ODBC ドライバーがトークン交換リクエストに使用できる対象ユーザー URI です。このフィールドは完全修飾 URI (例: //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/azuread) である必要があり、pool_id はワークフォース プールを識別するグローバル固有の名前です。</li>      </ul>    レコード パラメーターは、[option1 = value1, option2 = value2...] のように指定します。    


## Examples

### Example #1 
Azure AD を使用して、Google BigQuery で使用可能なプロジェクトを一覧表示します
```powerquery
GoogleBigQueryAad.Database()
```



