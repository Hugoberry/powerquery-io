---
title: Table.ColumnNames
---

# Table.ColumnNames


Devuelve los nombres de columna como una lista.


## Syntax

```powerquery
Table.ColumnNames(
    table as table
) as list
```


## Remarks

Devuelve los nombres de columna de la tabla <code>table</code> como una lista de texto.


## Examples

### Example #1 
Buscar los nombres de columna de la tabla.
```powerquery
Table.ColumnNames(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)
```

Result: 
```powerquery
{"CustomerID", "Name", "Phone"}
```




## Category
Table.Column operations
