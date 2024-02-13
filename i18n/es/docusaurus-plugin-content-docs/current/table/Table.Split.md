---
title: Table.Split
---

# Table.Split


Permite dividir la tabla especificada en una lista de tablas usando el tamaño de página especificado.


## Syntax

```powerquery
Table.Split(
    table as table,
    pageSize as number
) as list
```


## Remarks

Divide <code>table</code> una lista de tablas donde el primer elemento de la lista es una tabla que contiene las primeras <code>pageSize</code>filas desde    la tabla de origen, el siguiente elemento de la lista es una tabla que contiene las siguientes <code>pageSize</code>filas de la tabla de origen, etc.


## Examples

### Example #1 
Permite dividir una tabla de cinco registros en tablas con dos registros cada una.
```powerquery
let
    Customers = Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"],
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
in
    Table.Split(Customers, 2)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    }),
    Table.FromRecords({
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Cristina", Phone = "232-1550"]
    }),
    Table.FromRecords({
        [CustomerID = 5, Name = "Anita", Phone = "530-1459"]
    })
}
```




## Category
Table.Transformation
