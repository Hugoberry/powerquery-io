---
title: Table.Column
---

# Table.Column


## Description

Vrátí zadaný sloupec dat z tabulky jako seznam.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Details

Vrátí sloupec dat zadaný hodnotou <code>column</code> z tabulky <code>table</code> jako seznam.


## Examples

### Example #1 
Vrátí hodnoty ze sloupce [Name] tabulky.
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
