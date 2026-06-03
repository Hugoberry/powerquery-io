---
title: Table.ExpandTableColumn
---

# Table.ExpandTableColumn


Développe une colonne d'enregistrements ou une colonne de tables en plusieurs colonnes dans la table conteneur.


## Syntax

```powerquery
Table.ExpandTableColumn(
    table as table,
    column as text,
    columnNames as list,
    optional newColumnNames as list
) as table
```


## Remarks

Développe les tables dans `table`\[`column`\] en plusieurs lignes et colonnes. `columnNames` est utilisé pour sélectionner les colonnes à développer à partir d'une table interne. Spécifie `newColumnNames` pour éviter les conflits entre des colonnes existantes et de nouvelles colonnes.


## Examples

### Example #1
Développe les colonnes de la table dans `[a]` dans la table `({[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]})` en 3 colonnes `[t.a]`, `[t.b]` et `[t.c]`.
```powerquery
Table.ExpandTableColumn(
    Table.FromRecords({
        [
            t = Table.FromRecords({
                [a = 1, b = 2, c = 3],
                [a = 2, b = 4, c = 6]
            }),
            b = 2
        ]
    }),
    "t",
    {"a", "b", "c"},
    {"t.a", "t.b", "t.c"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [t.a = 1, t.b = 2, t.c = 3, b = 2],
    [t.a = 2, t.b = 4, t.c = 6, b = 2]
})
```




## Category
Table.Transformation
