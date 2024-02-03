---
title: Table.Column
---

# Table.Column


## Description

Vraća navedenu kolonu sa podacima iz tabele u vidu liste.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Details

Vraća kolonu sa podacima koju navodi <code>column</code> iz tabele <code>table</code> u vidu liste.


## Examples

### Example #1 
Vraća vrednosti iz kolone [Ime] iz tabele.
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
