---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


傳回導覽表格，內含在 Azure 儲存庫的指定帳戶中找到的容器。


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

從 Azure 儲存體保存庫傳回導覽資料表，表中每個資料列各代表在帳戶 URL <code>account</code> 找到的每個容器。每一列皆含有容器 blob 的連結。可指定 <code>options</code> 來控制下列選項:    <ul><li><code>BlockSize</code> : 等候資料取用者前要讀取的位元組數。預設值為 4 MB。</li><li><code>RequestSize</code> : 嘗試在伺服器單一 HTTP 要求中讀取的位元組數。預設值為 4 MB。</li><li><code>ConcurrentRequests</code> : ConcurrentRequests 選項可指定要平行發送的要求數目，以讓您更快速地下載資料，但會降低記憶體使用率。需要的記憶體為 (ConcurrentRequest \* RequestSize)。預設值為 16。</li></ul>



## Category
Accessing data
