---
title: Table.RowCount
---

# Table.RowCount


## Description

Palauttaa taulukon rivien määrän.


## Syntax

```powerquery
Table.RowCount(
    table as table
) as number
```


## Details

Palauttaa kohteen <code>table</code> rivien määrän.


## Examples

### Example #1 
Selvitä taulukon rivien määrä.
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
