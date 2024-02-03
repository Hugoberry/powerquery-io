---
title: DataLake.Contents
---

# DataLake.Contents


## Description

输入 Azure Data Lake Storage Gen1 帐户的 URL。


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Details

返回 Azure Data Lake Storage Gen1 中 <code>url</code> 处每个文件夹和文件都对应有一行的表。每行包含文件夹或文件的属性及其内容链接。


