---
title: DataLake.Files
---

# DataLake.Files


## Description

Adja meg Azure Data Lake Storage-fiókja URL-címét.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Details

Visszaad egy táblát, amelyben szerepel egy sor minden fájlhoz, amely az Azure Data Lake Storage Gen1 <code>url</code> címén található. Minden egyes sor tartalmazza a fájl tulajdonságait, valamint egy, a tartalmára mutató hivatkozást.


