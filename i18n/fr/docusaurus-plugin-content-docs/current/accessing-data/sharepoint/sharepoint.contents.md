---
title: SharePoint.Contents
---

# SharePoint.Contents


Retourne une table qui contient le contenu d'un site SharePoint.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Retourne une table qui contient une ligne pour chaque dossier et document trouvé dans le site SharePoint spécifié `url`. Chaque ligne contient les propriétés du dossier ou du fichier, et un lien vers son contenu. Vous pouvez spécifier `options` pour contrôler les options suivantes :

-   `ApiVersion` : Nombre (14 ou 15) ou texte « Auto » spécifiant la version de l'API SharePoint à utiliser pour ce site. Si aucune valeur n'est spécifiée, la version 14 de l'API est utilisée. Si la valeur Auto est spécifiée, la version du serveur est détectée automatiquement (si possible) ; sinon, la version 14 est utilisée par défaut. Les sites SharePoint qui ne sont pas en anglais nécessitent au moins la version 15.
-   `Implementation` : Facultatif. Spécifie la version du connecteur Microsoft Office SharePoint Online à utiliser. Les valeurs acceptées sont "2.0" ou null. Si la valeur est "2.0", l'implémentation 2.0 du connecteur Microsoft Office SharePoint Online est utilisée. Si la valeur est nulle, l'implémentation d'origine du connecteur Microsoft Office SharePoint Online est utilisée.



## Category
Accessing data
