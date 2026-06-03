---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


返回一个导航表，其中包含在 Azure Data Lake Storage 的指定容器及其子文件夹中找到的文档。


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

从 Azure Data Lake Storage 文件系统返回包含帐户 URL `endpoint` 处指定容器及其子文件夹中的文档的导航表。可以指定 `options` 来控制以下选项:

-   `BlockSize` : 等待数据使用者前要读取的字节数。默认值为 4MB。
-   `RequestSize` : 要在对服务器的单个 HTTP 请求中尝试读取的字节数。默认值为 4MB。
-   `ConcurrentRequests` : ConcurrentRequests 选项通过指定要并行执行的请求数来支持更快速的数据下载，这是以内存利用率为代价的。所需的内存为 (ConcurrentRequest \* RequestSize)。默认值为 16。
-   `HierarchicalNavigation` : 逻辑(true/false)，用于控制是以类似树的目录视图还是以简单列表的形式返回文件。默认值为 false。



## Category
Accessing data
