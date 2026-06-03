---
title: Table.ExpandRecordColumn
---

# Table.ExpandRecordColumn


Développe une colonne d'enregistrements dans des colonnes ayant chacune des valeurs.


## Syntax

```powerquery
Table.ExpandRecordColumn(
    table as table,
    column as text,
    fieldNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

En fonction des enregistrements de `column` dans l'entrée `table`, crée une table avec une colonne pour chaque champ dans l'enregistrement. Au besoin, `newColumnNames` peut être spécifié pour garantir que des noms uniques pour les colonnes sont utilisés dans la nouvelle table.

-   `table` : table d'origine avec la colonne des enregistrements à développer.
-   `column` : colonne à développer.
-   `fieldNames` : liste des champs à développer dans des colonnes dans la table.
-   `newColumnNames` : liste des noms de colonne à attribuer aux nouvelles colonnes. Les noms des nouvelles colonnes ne peuvent pas dupliquer une colonne dans la nouvelle table.


## Examples

### Example #1
Développe la colonne \[a\] dans la table `({[a = [aa = 1, bb = 2, cc = 3], b = 2]})` en 3 colonnes « aa », « bb » et « cc ».
```powerquery
Table.ExpandRecordColumn(
    Table.FromRecords({
        [
            a = [aa = 1, bb = 2, cc = 3],
            b = 2
        ]
    }),
    "a",
    {"aa", "bb", "cc"}
)
```

Result: 
```powerquery
Table.FromRecords({[aa = 1, bb = 2, cc = 3, b = 2]})
```




## Category
Table.Transformation
