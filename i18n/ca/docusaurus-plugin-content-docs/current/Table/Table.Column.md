---
title: Table.Column
---

# Table.Column


## Description

Retorna una columna de dades especificada de la taula com a llista.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Details

Retorna la columna de dades especificada per <code>column</code> de la taula <code>table</code> com una llista.


## Examples

### Example #1 
Retorna els valors de la columna [Name] de la taula.
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
