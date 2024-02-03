---
title: Table.ColumnCount
---

# Table.ColumnCount


## Description

Visszaadja a táblában található oszlopok számát.


## Syntax

```powerquery
Table.ColumnCount(
    table as table
) as number
```


## Details

Visszaadja a(z) <code>table</code> táblában található oszlopok számát.


## Examples

### Example #1 
Megállapítja a táblában levő oszlopok számát.
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
