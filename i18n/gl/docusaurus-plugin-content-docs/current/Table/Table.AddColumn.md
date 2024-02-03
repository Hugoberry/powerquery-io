---
title: Table.AddColumn
---

# Table.AddColumn


## Description

Engade unha columna co nome especificado. O valor calcúlase coa función de selección específica con cada fila tomada como unha entrada.


## Syntax

```powerquery
Table.AddColumn(
    table as table,
    newColumnName as text,
    columnGenerator as function,
    optional columnType as type
) as table
```


## Details

Engade unha columna co nome <code>newColumnName</code> á táboa <code>table</code>. Os valores da columna calcúlanse coa función de selección específica <code>columnGenerator</code> con cada fila tomada como unha entrada.


## Examples

### Example #1 
Engadir unha columna de número co nome &#34;TotalPrice&#34; á táboa, no que cada valor vai ser a suma das columnas [Price] e [Shipping].
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
