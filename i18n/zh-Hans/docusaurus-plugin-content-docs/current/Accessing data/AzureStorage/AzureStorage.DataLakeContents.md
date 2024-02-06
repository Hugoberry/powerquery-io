---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


从 Azure Data Lake Storage 文件系统返回指定文件的内容。


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Remarks

从 Azure Data Lake Storage 文件系统返回 URL <code>url</code> 处的文件内容。可以指定 <code>options</code> 来控制以下选项:    <ul><li><code>BlockSize</code> : 等待数据使用者前要读取的字节数。默认值为 4MB。</li><li><code>RequestSize</code> : 要在对服务器的单个 HTTP 请求中尝试读取的字节数。默认值为 4MB。</li><li><code>ConcurrentRequests</code> : ConcurrentRequests 选项通过指定要并行执行的请求数来支持更快速的数据下载，这是以内存利用率为代价的。所需的内存为 (ConcurrentRequest \* RequestSize)。默认值为 16。</li></ul>



## Category
Accessing data
