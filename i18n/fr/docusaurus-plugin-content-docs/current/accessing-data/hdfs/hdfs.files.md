---
title: Hdfs.Files
---

# Hdfs.Files


Retourne une table qui contient les propriétés et le contenu des fichiers trouvés dans le dossier et les sous-dossiers spécifiés à partir d&#39;un système de fichiers Hadoop.


## Syntax

```powerquery
Hdfs.Files(
    url as text
) as table
```


## Remarks

Retourne une table qui contient une ligne pour chaque fichier trouvé à l'URL du dossier, <code>url</code>, et les sous-dossiers à partir d'un système de fichiers Hadoop. Chaque ligne contient les propriétés du fichier et un lien vers son contenu.



## Category
Accessing data
