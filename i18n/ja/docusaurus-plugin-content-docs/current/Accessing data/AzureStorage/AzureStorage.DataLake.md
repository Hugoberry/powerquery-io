---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


## Description

Azure Data Lake Storage から、指定されたコンテナーとそのサブフォルダーにあるドキュメントを含むナビゲーション テーブルを返します。


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Details

Azure Data Lake Storage ファイルシステムから、アカウントの URL <code>endpoint</code> で指定されたコンテナーとそのサブフォルダーにあるドキュメントを含むナビゲーション テーブルを返します。<code>options</code> は、次のオプションを制御するために指定できます:    <ul><li><code>BlockSize</code> : データ コンシューマーでの待機前に読み取るバイト数。既定値は 4 MB です。</li><li><code>RequestSize</code> : サーバーに対する 1 つの HTTP 要求で読み取りを試行するバイト数。既定値は 4 MB です。</li><li><code>ConcurrentRequests</code> : ConcurrentRequests オプションは、並列で実行する要求の数を指定することにより、メモリ使用率を抑えて、データの高速ダウンロードをサポートします。必要なメモリは (ConcurrentRequest \* RequestSize) です。既定値は 16 です。</li><li><code>HierarchicalNavigation</code> : ファイルをツリー形式のディレクトリ ビューとフラット リストのどちらで返すかを制御する論理 (true/false)。既定値は false です。</li></ul>



## Category
Accessing data
