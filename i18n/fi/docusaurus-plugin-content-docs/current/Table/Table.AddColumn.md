---
title: Table.AddColumn
---

# Table.AddColumn


## Description

Lisää sarakkeen, jolla on määritetty nimi. Arvo lasketaan käyttäen määritettyä valintafunktiota ja käyttäen kutakin otettua riviä syötteenä.


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

Lisää sarakkeen <code>newColumnName</code> taulukkoon <code>table</code>. Sarakkeen arvot lasketaan käyttäen määritettyä valintafunktiota <code>columnGenerator</code> ja käyttäen kutakin otettua riviä syötteenä.


## Examples

### Example #1 
Lisää taulukkoon lukusarake nimeltä &#34;TotalPrice&#34;, jossa kukin arvo on [Price]- ja [Shipping]-sarakkeiden summa.
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
