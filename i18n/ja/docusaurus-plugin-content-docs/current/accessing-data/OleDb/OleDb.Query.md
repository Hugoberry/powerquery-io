---
title: OleDb.Query
---

# OleDb.Query


OLE DB データ ソースでネイティブなクエリを実行した結果を戻します。


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

OLE DB を使用して、接続文字列 <code>connectionString</code> で <code>query</code> を実行した結果を返します。<code>connectionString</code> はテキストまたはプロパティ値のペアのレコードを使用できます。プロパティ値は、テキストまたは数値のどちらかにできます。省略可能なレコード パラメーター <code>options</code> を指定して、追加のプロパティを指定できます。レコードには次のフィールドを含めることができます。    <ul><li><code>ConnectionTimeout</code> : サーバーへの接続の試行を破棄するまでの待機時間を制御する期間です。既定値はドライバーによって異なります。</li><li><code>CommandTimeout</code> : サーバー側クエリがキャンセルされるまでに実行を許可する長さを制御する期間。既定値は 10 分です。</li><li><code>SqlCompatibleWindowsAuth</code> : Windows 認証のために SQL Server 互換の接続文字列オプションを生成するかどうかを決める論理値 (True/False)。既定値は True です。</li></ul>



## Category
Accessing data
