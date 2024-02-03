---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


## Description

從 Azure 儲存體保存庫傳回指定 blob 的內容。


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Details

從 Azure 儲存體保存庫傳回位於 URL <code>url</code> 的 blob 內容。可指定 <code>options</code> 來控制下列選項:    <ul><li><code>BlockSize</code> : 等候資料取用者前要讀取的位元組數。預設值為 4 MB。</li><li><code>RequestSize</code> : 嘗試在伺服器單一 HTTP 要求中讀取的位元組數。預設值為 4 MB。</li><li><code>ConcurrentRequests</code> : ConcurrentRequests 選項可指定要平行發送的要求數目，以讓您更快速地下載資料，但會降低記憶體使用率。需要的記憶體為 (ConcurrentRequest \* RequestSize)。預設值為 16。</li></ul>



## Category
Accessing data
