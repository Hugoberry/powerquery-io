---
title: Table.ColumnNames
---

# Table.ColumnNames


## Description

Palauttaa sarakkeiden nimet luettelona.


## Syntax

```powerquery
Table.ColumnNames(
    table as table
) as list
```


## Details

Palauttaa taulukon <code>table</code> sarakkeiden nimet tekstiluettelona.


## Examples

### Example #1 
Selvitä taulukon sarakkeiden nimet.
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
