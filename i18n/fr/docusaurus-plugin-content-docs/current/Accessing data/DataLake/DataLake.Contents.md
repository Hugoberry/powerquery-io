---
title: DataLake.Contents
---

# DataLake.Contents


## Description

Entrez l&#39;URL de votre compte Azure Data Lake Storage Gen1.


## Syntax

```powerquery
DataLake.Contents(
    url as text,
    optional options as record
) as table
```


## Details

Retourne une table contenant une ligne pour chaque dossier et chaque fichier trouvés à l'<code>URL</code> dans Azure Data Lake Storage Gen1. Chaque ligne contient les propriétés du dossier ou du fichier ainsi qu'un lien vers son contenu.


