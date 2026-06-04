---
title: DataLake.Contents
---

# DataLake.Contents


Adja meg Azure Data Lake Storage Gen1-fiókja URL-címét.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Visszaad egy táblát, amelyben szerepel egy sor minden mappához és fájlhoz, amely az Azure Data Lake Storage Gen1 `url` címén található. Minden egyes sor tartalmazza a mappa vagy a fájl tulajdonságait, valamint egy, a tartalmukra mutató hivatkozást.


