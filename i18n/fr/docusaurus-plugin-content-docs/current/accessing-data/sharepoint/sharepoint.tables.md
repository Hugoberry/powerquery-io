---
title: SharePoint.Tables
---

# SharePoint.Tables


Retourne une table qui contient le contenu d'une liste SharePoint.


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

Retourne une table qui contient une ligne pour chaque élément de liste dans la liste SharePoint spécifiée `url`. Chaque ligne contient les propriétés de la liste. Vous pouvez spécifier `options` pour contrôler les options suivantes :

-   `ApiVersion` : Nombre (14 ou 15) ou texte « Auto » spécifiant la version de l'API SharePoint à utiliser pour ce site. Si aucune valeur n'est spécifiée, la version 14 de l'API est utilisée. Si la valeur Auto est spécifiée, la version du serveur est détectée automatiquement (si possible) ; sinon, la version 14 est utilisée par défaut. Les sites SharePoint qui ne sont pas en anglais nécessitent au moins la version 15.
-   `Implementation` : Facultatif. Spécifie la version du connecteur Microsoft Office SharePoint Online à utiliser. Les valeurs acceptées sont "2.0" ou null. Si la valeur est "2.0", l'implémentation 2.0 du connecteur Microsoft Office SharePoint Online est utilisée. Si la valeur est nulle, l'implémentation d'origine du connecteur Microsoft Office SharePoint Online est utilisée.
-   `ViewMode` : Facultatif. Cette option n'est valable que pour l'implémentation 2.0. Les valeurs acceptées sont "All" et "Default". Si aucune valeur n'est spécifiée, la valeur est définie sur "Tous". Lorsque "All" est spécifié, la vue inclut toutes les colonnes créées par l'utilisateur et définies par le système. Lorsque "Par défaut" est spécifié, la vue correspondra à ce que l'utilisateur voit lorsqu'il consulte la liste en ligne dans la vue que l'utilisateur a définie comme Par défaut dans ses paramètres. Si l'utilisateur modifie sa vue par défaut pour ajouter ou supprimer des colonnes créées par l'utilisateur ou définies par le système, ou en créant une nouvelle vue et en la définissant par défaut, ces modifications se propageront via le connecteur.
-   `DisableAppendNoteColumns` : Empêche le connecteur d’utiliser un point de terminaison distinct pour les colonnes de note.



## Category
Accessing data
