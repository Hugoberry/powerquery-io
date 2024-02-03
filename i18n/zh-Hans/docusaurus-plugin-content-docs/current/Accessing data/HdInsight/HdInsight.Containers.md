---
title: HdInsight.Containers
---

# HdInsight.Containers


## Description

返回一个导航表，它包含从 Azure 存储库的指定帐户中找到的容器。


## Syntax

```powerquery
HdInsight.Containers(
    account as text
) as table
```


## Details

返回包含从 Azure 存储库的帐户 URL <code>account</code> 中找到的每个容器行的导航表。每行包含一个到容器 Blob 的链接。



## Category
Accessing data
