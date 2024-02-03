---
title: Table.AddColumn
---

# Table.AddColumn


## Description

Přidá sloupec se zadaným názvem. Hodnota je vypočítána pomocí zadané výběrové funkce a jednotlivých řádků, které jsou použity jako vstup.


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

Přidá sloupec <code>newColumnName</code> do tabulky <code>table</code>. Hodnoty sloupce jsou vypočítány pomocí zadané výběrové funkce <code>columnGenerator</code> a jednotlivých řádků, které jsou použity jako vstup.


## Examples

### Example #1 
Do tabulky přidejte číselný sloupec s názvem TotalPrice, přičemž každá hodnota je součtem sloupců [Price] a [Shipping].
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
