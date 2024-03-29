---
title: Table.Column
---

# Table.Column


Devuelve una columna de datos de la tabla especificada como una lista.


## Syntax

```powerquery
Table.Column(
    table as table,
    column as text
) as list
```


## Remarks

Devuelve la columna de datos especificados por <code>column</code> de la tabla <code>table</code> como una lista.


## Examples

### Example #1 
Devolver los valores de la columna [Name] de la tabla.
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
