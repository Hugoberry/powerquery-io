---
title: AzureDevOpsServer.AccountContents
---

# AzureDevOpsServer.AccountContents


输入 Azure DevOps Analytics Service 的 URL。


## Syntax

```powerquery
AzureDevOpsServer.AccountContents(
    url as text,
    optional options as record
) as table
```


## Remarks

返回通过 Azure DevOps Analytics Service URL 下载为二进制值的内容。此函数对各个组织使用不同凭据。


