---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


## Description

Returns a navigational table containing the documents found in the specified container and its subfolders from Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Details

Returns a navigational table containing the documents found in the specified container and its subfolders at the account URL, <code>endpoint</code>, from an Azure Data Lake Storage filesystem. <code>options</code> may be specified to control the following options:    <ul><li><code>BlockSize</code> : The number of bytes to read before waiting on the data consumer. The default value is 4 MB.</li><li><code>RequestSize</code> : The number of bytes to try to read in a single HTTP request to the server. The default value is 4 MB.</li><li><code>ConcurrentRequests</code> : The ConcurrentRequests option supports faster download of data by specifying the number of requests to be made in parallel, at the cost of memory utilization. The memory required is (ConcurrentRequest \* RequestSize). The default value is 16.</li><li><code>HierarchicalNavigation</code> : A logical (true/false) that controls whether the files are returned in a tree-like directory view or in a flat list. The default value is false.</li></ul>



## Category
Accessing data
