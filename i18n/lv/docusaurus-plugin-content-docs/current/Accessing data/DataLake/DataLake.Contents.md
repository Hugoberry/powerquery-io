---
title: DataLake.Contents
---

# DataLake.Contents


## Description

Ievadiet sava Azure Data Lake Storage Gen1 konta vietrādi URL.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Details

Tiek atgriezta tabula, kurā ir ietverta viena rinda katrai Azure Data Lake Storage Gen1 vietrādī <code>url</code> norādītajai mapei un failam. Katrā rindā ir ietverti mapes vai faila rekvizīti un saite uz tā saturu.


