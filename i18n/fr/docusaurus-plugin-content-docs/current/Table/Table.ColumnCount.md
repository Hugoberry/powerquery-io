---
title: Table.ColumnCount
---

# Table.ColumnCount


## Description

Retourne le nombre de colonnes dans la table.


## Syntax

```powerquery
Table.ColumnCount(
    table as table
) as number
```


## Details

Retourne le nombre de colonnes dans la table <code>table</code>.


## Examples

### Example #1 
Recherche le nombre de colonnes de la table.
```powerquery
Table.ColumnCount(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
3
```




## Category
Table.Information
