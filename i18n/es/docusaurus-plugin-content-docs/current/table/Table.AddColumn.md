---
title: Table.AddColumn
---

# Table.AddColumn


Agrega una columna con el nombre especificado. El valor se calcula utilizando la función especificada de selección en la que cada fila se toma como entrada.


## Syntax

```powerquery
Table.AddColumn(
    table as table,
    newColumnName as text,
    columnGenerator as function,
    optional columnType as type
) as table
```


## Remarks

Agrega una columna <code>newColumnName</code> con nombre a la tabla <code>table</code>. Los valores de la columna se calculan utilizando la función especificada de selección <code>columnGenerator</code> en la que cada fila se toma como entrada.


## Examples

### Example #1 
Agrega una columna numérica denominada &#34;TotalPrice&#34; a la tabla, en la que cada valor es la suma de las columnas [Price] y [Shipping].
```powerquery
Table.AddColumn(
    Table.FromRecords({
        [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0, Shipping = 10.00],
        [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5.0, Shipping = 15.00],
        [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25.0, Shipping = 10.00]
    }),
    "TotalPrice",
    each [Price] + [Shipping],
    type number
)
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100, Shipping = 10, TotalPrice = 110],
    [OrderID = 2, CustomerID = 1, Item = "1 lb. worms", Price = 5, Shipping = 15, TotalPrice = 20],
    [OrderID = 3, CustomerID = 2, Item = "Fishing net", Price = 25, Shipping = 10, TotalPrice = 35]
})
```




## Category
Table.Transformation
