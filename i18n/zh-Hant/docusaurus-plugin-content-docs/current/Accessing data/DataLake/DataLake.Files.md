---
title: DataLake.Files
---

# DataLake.Files


## Description

請輸入您 Azure Data Lake Storage 帳戶的 URL。


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Details

從 Azure Data Lake Storage Gen1 傳回資料表，其中的每一個資料列，各列有在 <code>url</code> 中找到的每個檔案。每個資料列皆包含檔案的屬性及其內容的連結。

