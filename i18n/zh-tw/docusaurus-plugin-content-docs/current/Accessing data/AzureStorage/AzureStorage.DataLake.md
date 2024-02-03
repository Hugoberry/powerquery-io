---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


## Description

從 Azure Data Lake Storage 傳回導覽資料表，內含在指定容器及其子資料夾中找到的文件。


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Details

從 Azure Data Lake Storage 檔案系統傳回導覽資料表，內含在帳戶 URL <code>endpoint</code> 之指定容器及其子資料夾中找到的文件。可指定 <code>options</code> 來控制下列選項:    <ul><li><code>BlockSize</code> : 等候資料取用者前要讀取的位元組數。預設值為 4 MB。</li><li><code>RequestSize</code> : 嘗試在伺服器單一 HTTP 要求中讀取的位元組數。預設值為 4 MB。</li><li><code>ConcurrentRequests</code> : ConcurrentRequests 選項可指定要平行發送的要求數目，以讓您更快速地下載資料，但會降低記憶體使用率。需要的記憶體為 (ConcurrentRequest \* RequestSize)。預設值為 16。</li><li><code>HierarchicalNavigation</code> : 邏輯 (true/false)，控制以樹狀目錄檢視或簡單列表傳回檔案。預設值為 false。</li></ul>



## Category
Accessing data
