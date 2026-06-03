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

Retourne une table contenant une ligne pour chaque fichier trouvé dans le dossier spécifié et tous ses sous-dossiers.

-   `path` : Le chemin d’accès au dossier à partir duquel vous souhaitez récupérer les fichiers. Le chemin d'accès de dossier spécifié doit être un chemin d'accès absolu valide.
-   `options` : (Facultatif) Ce paramètre est actuellement destiné à un usage interne uniquement.

Chaque ligne de la table retournée contient les propriétés du fichier et un lien vers son contenu.


## Examples

### Example #1
Retournez une table contenant tous les fichiers trouvés dans C:\\test-examples\\example-folder et tous ses sous-dossiers.
```powerquery
Folder.Files("C:\test-examples\example-folder")
```

Result: 
```powerquery
A table containing the files, their properties, and a link to their content.
```




## Category
Accessing data
