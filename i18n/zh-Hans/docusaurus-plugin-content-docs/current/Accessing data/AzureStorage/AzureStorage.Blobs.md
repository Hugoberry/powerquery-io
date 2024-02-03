---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


## Description

返回一个导航表，它包含从 Azure 存储库的指定帐户中找到的容器。


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Details

从 Azure 存储保管库返回包含帐户 URL <code>account</code> 处每个容器的行的导航表。每行都包含与容器 blob 的链接。可以指定 <code>options</code> 来控制以下选项:    <ul><li><code>BlockSize</code> : 等待数据使用者前要读取的字节数。默认值为 4MB。</li><li><code>RequestSize</code> : 要在对服务器的单个 HTTP 请求中尝试读取的字节数。默认值为 4MB。</li><li><code>ConcurrentRequests</code> : ConcurrentRequests 选项通过指定要并行执行的请求数来支持更快速的数据下载，这是以内存利用率为代价的。所需的内存为 (ConcurrentRequest \* RequestSize)。默认值为 16。</li></ul>



## Category
Accessing data
