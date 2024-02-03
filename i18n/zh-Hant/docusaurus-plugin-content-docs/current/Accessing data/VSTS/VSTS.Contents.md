---
title: VSTS.Contents
---

# VSTS.Contents


## Description

請輸入您 Azure DevOps Analytics 服務的 URL。


## Syntax

```powerquery
VSTS.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

以二進位值格式傳回從 Azure DevOps Analytics Service URL 下載的內容。此函式會對所有能夠存取的組織使用全域認證。


