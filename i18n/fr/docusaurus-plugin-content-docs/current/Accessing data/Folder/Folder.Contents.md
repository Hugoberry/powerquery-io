---
title: Folder.Contents
---

# Folder.Contents


## Description

Retourne une table qui contient les propriétés et le contenu des fichiers et dossiers trouvés dans le dossier spécifié.


## Syntax

```powerquery
Folder.Contents(
    path as text,
    optional options as record
) as table
```


## Details

Renvoie un tableau contenant une ligne pour chaque dossier et fichier trouvé dans le dossier <code>path</code>. Chaque ligne contient les propriétés du dossier ou du fichier et un lien vers son contenu. Ce <code>options</code>paramètre est actuellement destiné à un usage interne uniquement.



## Category
Accessing data
