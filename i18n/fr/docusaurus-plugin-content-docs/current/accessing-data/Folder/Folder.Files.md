---
title: Folder.Files
---

# Folder.Files


Retourne une table qui contient les propriétés et le contenu des fichiers trouvés dans le dossier et les sous-dossiers spécifiés.


## Syntax

```powerquery
Folder.Files(
    path as text,
    optional options as record
) as table
```


## Remarks

Renvoie un tableau contenant une ligne pour chaque fichier <code>path</code>trouvé dans le dossier et tous ses sous-dossiers. Chaque ligne contient les propriétés du fichier et un lien vers son contenu. Ce <code>options</code>paramètre est actuellement destiné à un usage interne uniquement.



## Category
Accessing data
