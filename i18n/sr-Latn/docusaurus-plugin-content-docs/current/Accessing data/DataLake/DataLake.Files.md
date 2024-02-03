---
title: DataLake.Files
---

# DataLake.Files


## Description

Enter the URL of your Azure Data Lake Storage account.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Details

Returns a table containing a row for each file found at <code>url</code>, from Azure Data Lake Storage Gen1. Each row contains properties of the file and a link to its content.


