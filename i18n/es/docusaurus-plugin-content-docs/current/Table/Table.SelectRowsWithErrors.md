---
title: Table.SelectRowsWithErrors
---

# Table.SelectRowsWithErrors


## Description

Devuelve una tabla solo con aquellas filas de la tabla de entrada que contienen un error en al menos una de las celdas. Si se especifica una lista de columnas, solo las celdas de las columnas especificadas se inspeccionan en busca de errores.


## Syntax

```powerquery
Table.SelectRowsWithErrors(
    table as table,
    optional columns as list
) as table
```


## Details

Devuelve una tabla solo con aquellas filas de la tabla de entrada que contienen un error en al menos una de las celdas. Si se especifica una lista de columnas, solo las celdas de las columnas especificadas se inspeccionan en busca de errores.


## Examples

### Example #1 
Seleccionar los nombres de los clientes que tengan errores en las filas.
```powerquery
Table.SelectRowsWithErrors(
    Table.FromRecords({
        [CustomerID = ..., Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    })
)[Name]
```

Result: 
```powerquery
{"Bob"}
```




## Category
Table.Row operations
