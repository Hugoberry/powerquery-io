---
title: Hdfs.Contents
---

# Hdfs.Contents


Retourne une table qui contient les propriétés et le contenu des fichiers et dossiers trouvés dans le dossier spécifié à partir d&#39;un système de fichiers Hadoop.


## Syntax

```powerquery
Hdfs.Contents(
    url as text
) as table
```


## Remarks

Retourne une table qui contient une ligne pour chaque fichier et le fichier trouvé à l'URL du dossier, <code>url</code>, à partir d'un système de fichiers Hadoop. Chaque ligne contient les propriétés du dossier ou du fichier et un lien vers son contenu.



## Category
Accessing data
