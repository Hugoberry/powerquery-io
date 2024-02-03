---
title: VSTS.AccountContents
---

# VSTS.AccountContents


## Description

請輸入您 Azure DevOps Analytics 服務的 URL。


## Syntax

```powerquery
VSTS.AccountContents(
    url as text,
    optional options as record
) as binary
```


## Details

以二進位值格式傳回從 Azure DevOps Analytics Service URL 下載的內容。此函式對不同的組織使用不同的認證。


