---
title: DataLake.Contents
---

# DataLake.Contents


Enter the URL of your Azure Data Lake Storage Gen1 account.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Returns a table containing a row for each folder and file found at <code>url</code> from Azure Data Lake Storage Gen1. Each row contains properties of the folder or file and a link to its content.


