---
title: Table.AddColumn
---

# Table.AddColumn


Voegt een kolom met de opgegeven naam toe. De waarde wordt berekend met behulp van de opgegeven selectiefunctie, waarbij elke rij als invoer wordt beschouwd.


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

Voegt een kolom genaamd <code>newColumnName</code> toe aan de tabel <code>table</code>. De waarden voor de kolom worden berekend met behulp van de opgegeven selectiefunctie <code>columnGenerator</code>, waarbij elke rij als invoer wordt beschouwd.


## Examples

### Example #1 
Voeg een numerieke kolom met de naam &#39;TotalPrice&#39; toe aan de tabel, waarbij elke waarde de som is van de kolommen [Prijs] en [Verzending].
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
