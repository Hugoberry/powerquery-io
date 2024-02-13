---
title: Table.ExpandListColumn
---

# Table.ExpandListColumn


En fonction d&#39;une colonne dans les listes d&#39;une table, crée une copie d&#39;une ligne pour chaque valeur dans la liste.


## Syntax

```powerquery
Table.ExpandListColumn(
    table as table,
    column as text
) as table
```


## Remarks

En fonction d'un <code>table</code>, où <code>column</code> est une liste de valeurs, fractionne la liste en une ligne pour chaque valeur. Les valeurs des autres colonnes sont dupliquées dans chaque nouvelle ligne créée.


## Examples

### Example #1 
Fractionne la colonne de liste [Name] dans la table.
```powerquery
Table.ExpandListColumn(
    Table.FromRecords({[Name = {"Bob", "Jim", "Paul"}, Discount = .15]}),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob", Discount = 0.15],
    [Name = "Jim", Discount = 0.15],
    [Name = "Paul", Discount = 0.15]
})
```




## Category
Table.Transformation
