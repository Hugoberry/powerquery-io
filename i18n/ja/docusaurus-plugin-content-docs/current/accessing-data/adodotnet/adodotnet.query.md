---
title: AdoDotNet.Query
---

# AdoDotNet.Query


ADO.NET データ ソースでネイティブ クエリを実行した結果を戻します。


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

ADO.NET プロバイダー `providerName` を使用して、接続文字列 `connectionString` で `query` を実行した結果を返します。`connectionString` にはテキスト、またはプロパティ値のペアのレコードを使用できます。プロパティ値は、テキストまたは数値のどちらかにできます。省略可能なレコード パラメーター `options` を指定して、追加のプロパティを指定できます。レコードには次のフィールドを含めることができます。

-   `CommandTimeout` : サーバー側クエリがキャンセルされるまでに実行を許可する長さを制御する期間。既定値は 10 分です。
-   `SqlCompatibleWindowsAuth` : Windows 認証のために SQL Server 互換の接続文字列オプションを生成するかどうかを決める論理値 (True/False)。既定値は True です。



## Category
Accessing data
