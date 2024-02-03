---
title: Table.RowCount
---

# Table.RowCount


## Description

Visszaadja a táblában található sorok számát.


## Syntax

```powerquery
Table.RowCount(
    table as table
) as number
```


## Details

Visszaadja a(z) <code>table</code> táblában található sorok számát.


## Examples

### Example #1 
Megállapítja a sorok számát a táblában.
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
