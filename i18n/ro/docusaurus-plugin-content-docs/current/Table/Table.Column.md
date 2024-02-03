---
title: Table.Column
---

# Table.Column


## Description

Returnează o coloană specificată de date din tabel ca listă.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Details

Returnează coloana de date specificată de <code>column</code> din tabelul <code>table</code> ca listă.


## Examples

### Example #1 
Returnează valorile din coloana [Nume] din tabel.
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
