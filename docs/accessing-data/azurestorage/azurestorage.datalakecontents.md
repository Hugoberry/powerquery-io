---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


Returns the content of the specified file from an Azure Data Lake Storage filesystem.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Returns the content of the file at the URL, <code>url</code>, from an Azure Data Lake Storage filesystem. <code>options</code> may be specified to control the following options:    <ul><li><code>BlockSize</code> : The number of bytes to read before waiting on the data consumer. The default value is 4 MB.</li><li><code>RequestSize</code> : The number of bytes to try to read in a single HTTP request to the server. The default value is 4 MB.</li><li><code>ConcurrentRequests</code> : The ConcurrentRequests option supports faster download of data by specifying the number of requests to be made in parallel, at the cost of memory utilization. The memory required is (ConcurrentRequest \* RequestSize). The default value is 16.</li></ul>



## Category
Accessing data
