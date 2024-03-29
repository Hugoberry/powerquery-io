---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


Azure Data Lake Storage ファイル システムから指定されたファイルの内容を返します。


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Azure Data Lake Storage ファイルシステムから URL <code>url</code> のファイルのコンテンツを返します。<code>options</code> は、次のオプションを制御するために指定できます:    <ul><li><code>BlockSize</code> : データ コンシューマーでの待機前に読み取るバイト数。既定値は 4 MB です。</li><li><code>RequestSize</code> : サーバーに対する 1 つの HTTP 要求で読み取りを試行するバイト数。既定値は 4 MB です。</li><li><code>ConcurrentRequests</code> : ConcurrentRequests オプションは、並列で実行する要求の数を指定することにより、メモリ使用率を抑えて、データの高速ダウンロードをサポートします。必要なメモリは (ConcurrentRequest \* RequestSize) です。既定値は 16 です。</li></ul>



## Category
Accessing data
