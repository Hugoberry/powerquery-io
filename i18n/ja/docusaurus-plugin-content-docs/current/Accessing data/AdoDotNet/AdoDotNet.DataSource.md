---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


ADO.NET データ ソースのスキーマ コレクションを返します。


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

プロバイダー名 <code>providerName</code>、接続文字列 <code>connectionString</code> の ADO.NET データ ソースのスキーマ コレクションを返します。<code>connectionString</code> にはテキスト、またはプロパティ値のペアのレコードを使用できます。プロパティ値は、テキストまたは数値のどちらかにできます。省略可能なレコード パラメーター <code>options</code> を指定して、追加のプロパティを指定できます。レコードには次のフィールドを含めることができます。    <ul><li><code>CommandTimeout</code> : サーバー側クエリがキャンセルされるまでに実行を許可する長さを制御する期間。既定値は 10 分です。</li><li><code>SqlCompatibleWindowsAuth</code> : Windows 認証のために SQL Server 互換の接続文字列オプションを生成するかどうかを決める論理値 (True/False)。既定値は True です。</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
