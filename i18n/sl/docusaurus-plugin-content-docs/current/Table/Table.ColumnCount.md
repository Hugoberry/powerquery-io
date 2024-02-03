---
title: Table.ColumnCount
---

# Table.ColumnCount


## Description

Vrne število stolpcev v tabeli.


## Syntax

```powerquery
Table.ColumnCount(
    table as table
) as number
```


## Details

Vrne število stolpcev v tabeli <code>table</code>.


## Examples

### Example #1 
Poiščite število stolpcev v tabeli.
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
