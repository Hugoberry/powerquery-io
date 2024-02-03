---
title: VSTS.Contents
---

# VSTS.Contents


## Description

输入 Azure DevOps Analytics Service 的 URL。


## Syntax

```powerquery
VSTS.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

返回通过 Azure DevOps Analytics Service URL 下载为二进制值的内容。此函数对所有可访问的组织使用全局凭据。


