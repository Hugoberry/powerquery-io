---
title: DataLake.Files
---

# DataLake.Files


Ievadiet sava Azure Data Lake Storage konta vietrādi URL.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Tiek atgriezta tabula, kurā ir ietverta viena rinda katram Azure Data Lake Storage Gen1 vietrādī `url` norādītajam failam. Katrā rindā ir ietverti faila rekvizīti un saite uz tā saturu.


