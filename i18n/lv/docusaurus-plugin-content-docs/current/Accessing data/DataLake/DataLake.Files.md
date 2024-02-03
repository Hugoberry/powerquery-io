---
title: DataLake.Files
---

# DataLake.Files


## Description

Ievadiet sava Azure Data Lake Storage konta vietrādi URL.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Details

Tiek atgriezta tabula, kurā ir ietverta viena rinda katram Azure Data Lake Storage Gen1 vietrādī <code>url</code> norādītajam failam. Katrā rindā ir ietverti faila rekvizīti un saite uz tā saturu.


