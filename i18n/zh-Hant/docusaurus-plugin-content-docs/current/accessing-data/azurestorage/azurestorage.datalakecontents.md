---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


從 Azure Data Lake Storage 檔案系統傳回指定檔案的內容。


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

從 Azure Data Lake Storage 檔案系統傳回位於 URL `url` 的檔案內容。可指定 `options` 來控制下列選項:

-   `BlockSize` : 等候資料取用者前要讀取的位元組數。預設值為 4 MB。
-   `RequestSize` : 嘗試在伺服器單一 HTTP 要求中讀取的位元組數。預設值為 4 MB。
-   `ConcurrentRequests` : ConcurrentRequests 選項可指定要平行發送的要求數目，以讓您更快速地下載資料，但會降低記憶體使用率。需要的記憶體為 (ConcurrentRequest \* RequestSize)。預設值為 16。



## Category
Accessing data
