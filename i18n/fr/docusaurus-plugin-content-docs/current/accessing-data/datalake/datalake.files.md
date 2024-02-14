---
title: DataLake.Files
---

# DataLake.Files


Entrez l&#39;URL de votre compte Azure Data Lake Storage.


## Syntax

```powerquery
DataLake.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Retourne une table contenant une ligne pour chaque fichier trouvé à l'<code>URL</code> dans Azure Data Lake Storage Gen1. Chaque ligne contient les propriétés du fichier et un lien vers son contenu.


