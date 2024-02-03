---
title: Table.Column
---

# Table.Column


## Description

Restituisce una colonna di dati specificata dalla tabella come elenco.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Details

Restituisce la colonna di dati specificata da <code>column</code> dalla tabella <code>table</code> come elenco.


## Examples

### Example #1 
Restituisce i valori dalla colonna [Name] nella tabella.
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
