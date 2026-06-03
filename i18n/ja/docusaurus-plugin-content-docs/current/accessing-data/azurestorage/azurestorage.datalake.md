---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Azure Data Lake Storage から、指定されたコンテナーとそのサブフォルダーにあるドキュメントを含むナビゲーション テーブルを返します。


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Azure Data Lake Storage ファイルシステムから、アカウントの URL `endpoint` で指定されたコンテナーとそのサブフォルダーにあるドキュメントを含むナビゲーション テーブルを返します。`options` は、次のオプションを制御するために指定できます:

-   `BlockSize` : データ コンシューマーでの待機前に読み取るバイト数。既定値は 4 MB です。
-   `RequestSize` : サーバーに対する 1 つの HTTP 要求で読み取りを試行するバイト数。既定値は 4 MB です。
-   `ConcurrentRequests` : ConcurrentRequests オプションは、並列で実行する要求の数を指定することにより、メモリ使用率を抑えて、データの高速ダウンロードをサポートします。必要なメモリは (ConcurrentRequest \* RequestSize) です。既定値は 16 です。
-   `HierarchicalNavigation` : ファイルをツリー形式のディレクトリ ビューとフラット リストのどちらで返すかを制御する論理 (true/false)。既定値は false です。



## Category
Accessing data
