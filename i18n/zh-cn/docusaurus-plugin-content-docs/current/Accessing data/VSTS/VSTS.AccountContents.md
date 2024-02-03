---
title: VSTS.AccountContents
---

# VSTS.AccountContents


## Description

输入 Azure DevOps Analytics Service 的 URL。


## Syntax

```powerquery
VSTS.AccountContents(
    url as text,
    optional options as record
) as binary
```


## Details

返回通过 Azure DevOps Analytics Service URL 下载为二进制值的内容。此函数对各个组织使用不同凭据。


