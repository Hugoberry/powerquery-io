---
title: Table.Column
---

# Table.Column


## Description

Devolve unha columna específica de datos da táboa como unha lista.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Details

Devolve a columna de datos especificada por <code>column</code> da táboa <code>table</code> como unha lista.


## Examples

### Example #1 
Devolve os valores da columna [Name] da táboa.
```powerquery
Table.Column(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
{"Bob", "Jim", "Paul", "Ringo"}
```




## Category
Table.Column operations
