---
title: DataLake.Files
---

# DataLake.Files


输入 Azure Data Lake Storage 帐户的 URL。


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

返回 Azure Data Lake Storage Gen1 中 <code>url</code> 处每个文件都对应有一行的表。每行包含文件的属性及其内容链接。


