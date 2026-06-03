---
title: AzureStorage.BlobContents
---

# AzureStorage.BlobContents


Returns the content of the specified blob from an Azure storage vault.


## Syntax

```powerquery
AzureStorage.BlobContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Returns the content of the blob at the URL, `url`, from an Azure storage vault. `options` may be specified to control the following options:

-   `BlockSize` : The number of bytes to read before waiting on the data consumer. The default value is 4 MB.
-   `RequestSize` : The number of bytes to try to read in a single HTTP request to the server. The default value is 4 MB.
-   `ConcurrentRequests` : The ConcurrentRequests option supports faster download of data by specifying the number of requests to be made in parallel, at the cost of memory utilization. The memory required is (ConcurrentRequest \* RequestSize). The default value is 16.



## Category
Accessing data
