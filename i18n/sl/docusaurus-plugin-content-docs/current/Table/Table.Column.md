---
title: Table.Column
---

# Table.Column


## Description

Vrne navedeni stolpec podatkov iz tabele kot seznam.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Details

Vrne stolpec podatkov, ki ga določa <code>column</code>, iz tabele <code>table</code> kot seznam.


## Examples

### Example #1 
Vrne vrednosti iz stolpca [Ime] v tabeli.
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
