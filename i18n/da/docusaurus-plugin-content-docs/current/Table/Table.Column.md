---
title: Table.Column
---

# Table.Column


## Description

Returnerer en angivet kolonne med data fra tabellen som en liste.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Details

Returnerer den kolonne med data, der er angivet af <code>column</code>, fra tabellen <code>table</code> som en liste.


## Examples

### Example #1 
Find dataene fra kolonnen [Name] i tabellen.
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
