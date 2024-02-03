---
title: HdInsight.Files
---

# HdInsight.Files


## Description

傳回資料表，包含從 Azure 儲存體保存庫中找到的 Blob 屬性和內容。


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Details

傳回資料表，包含從 Azure 儲存體保存庫在容器 URL <code>account</code> 中找到的每個 Blob 檔案的資料列。每個資料列都包含檔案屬性以及其內容的連結。



## Category
Accessing data
