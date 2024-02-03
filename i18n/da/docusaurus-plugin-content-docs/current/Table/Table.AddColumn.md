---
title: Table.AddColumn
---

# Table.AddColumn


## Description

Tilføjer en kolonne med det angivne navn. Værdien beregnes ved hjælp af den angivne udvælgelsesfunktion, og alle rækker bruges som input.


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

Føjer en kolonne med navnet <code>newColumnName</code> til tabellen <code>table</code>. Værdierne for kolonnen beregnes ved hjælp af den angivne udvælgelsesfunktion <code>columnGenerator</code>, og alle rækker bruges som input.


## Examples

### Example #1 
Føj en talkolonne med navnet &#34;TotalPrice&#34; til tabellen, hvor hver værdi er summen af kolonnerne [Price] og [Shipping].
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
