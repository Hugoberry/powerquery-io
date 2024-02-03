---
title: Table.Column
---

# Table.Column


## Description

Retourneert een opgegeven kolom met gegevens vanuit de tabel als een lijst.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Details

Retourneert de door <code>column</code> opgegeven kolom met gegevens vanuit de tabel <code>table</code> als een lijst.


## Examples

### Example #1 
De gegevens in de kolom [Name] uit de tabel retourneren.
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
