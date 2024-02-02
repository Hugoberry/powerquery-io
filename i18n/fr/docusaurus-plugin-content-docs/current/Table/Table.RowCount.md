---
title: Table.RowCount
---

# Table.RowCount


## Description

Retourne le nombre de lignes dans la table.


## Syntax

```powerquery
Table.RowCount(
    table as table
) as number
```


## Details

Retourne le nombre de lignes dans <code>table</code>.


## Examples

### Example #1 
Recherche le nombre de lignes de la table.
```powerquery
Table.RowCount(
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
