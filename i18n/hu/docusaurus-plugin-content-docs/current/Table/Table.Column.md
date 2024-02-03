---
title: Table.Column
---

# Table.Column


## Description

Az adatok egy megadott oszlopát adja vissza listaként a táblából.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Details

Az adatok <code>column</code> által megadott oszlopát adja vissza listaként a(z) <code>table</code> táblából.


## Examples

### Example #1 
Visszaadja a tábla [Name] oszlopában található értékeket.
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
