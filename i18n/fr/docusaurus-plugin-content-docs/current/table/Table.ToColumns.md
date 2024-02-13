---
title: Table.ToColumns
---

# Table.ToColumns


Crée une liste de listes imbriquées de valeurs de colonnes depuis une table.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Remarks

Crée une liste de listes imbriquées depuis la table, <code>table</code>.  Chaque élément de liste est une liste interne qui contient les valeurs des colonnes.


## Examples

### Example #1 
Créer une liste des valeurs de colonne à partir de la table.
```powerquery
Table.ToColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
{{1, 2}, {"Bob", "Jim"}, {"123-4567", "987-6543"}}
```




## Category
Table.Conversions
