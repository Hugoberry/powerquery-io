---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


Combine les colonnes spécifiées dans une nouvelle colonne d’enregistrements où chaque enregistrement a des noms de champs et des valeurs correspondant aux noms et aux valeurs des colonnes qui ont été combinées.


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Remarks

Combine les colonnes spécifiées de `table` dans une nouvelle colonne d’enregistrements nommée `newColumnName`, où chaque enregistrement a des noms de champs et des valeurs correspondant aux noms et valeurs des colonnes qui ont été combinées. Si un enregistrement est spécifié pour `options`, les options suivantes peuvent être fournies :

-   `DisplayNameColumn` : quand spécifié en tant que texte, indique que le nom de colonne indiqué doit être considéré comme le nom d’affichage de l’enregistrement. Il ne doit pas s’agir de l’une des colonnes de l’enregistrement lui-même.
-   `TypeName` : quand spécifié en tant que texte, fournit un nom de type logique pour l’enregistrement résultant, qui peut être utilisé durant le chargement des données pour piloter le comportement de l’environnement de chargement.



## Category
Table.Transformation
