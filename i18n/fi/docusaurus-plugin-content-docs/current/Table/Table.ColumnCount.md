---
title: Table.ColumnCount
---

# Table.ColumnCount


## Description

Palauttaa taulukon sarakkeiden määrän.


## Syntax

```powerquery
Table.ColumnCount(
    table as table
) as number
```


## Details

Palauttaa taulukon <code>table</code> sarakkeiden määrän.


## Examples

### Example #1 
Selvitä taulukon sarakkeiden määrä.
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
