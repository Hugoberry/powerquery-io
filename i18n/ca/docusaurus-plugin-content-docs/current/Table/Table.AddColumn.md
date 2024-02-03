---
title: Table.AddColumn
---

# Table.AddColumn


## Description

Afegeix una columna amb el nom especificat. El valor es computa mitjançant la funció de selecció especificada amb cada fila presa com a entrada.


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

Afegeix una columna amb el nom <code>newColumnName</code> a la taula <code>table</code>. Els valors de les columnes es computen mitjançant la funció de selecció especificada <code>columnGenerator</code> amb cada fila presa com a entrada.


## Examples

### Example #1 
Afegeix una columna de nombres amb el nom &#34;TotalPrice&#34; a la taula en què cada valor és la suma de les columnes [Price] i [Shipping].
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
