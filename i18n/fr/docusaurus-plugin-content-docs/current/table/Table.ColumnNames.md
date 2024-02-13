---
title: Table.ColumnNames
---

# Table.ColumnNames


Retourne les noms de colonnes comme une liste.


## Syntax

```powerquery
Table.ColumnNames(
    table as table
) as list
```


## Remarks

Retourne les noms des colonnes dans la table <code>table</code> comme une liste de texte.


## Examples

### Example #1 
Recherche les noms des colonnes de la table.
```powerquery
Table.ColumnNames(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
{"CustomerID", "Name", "Phone"}
```




## Category
Table.Column operations
