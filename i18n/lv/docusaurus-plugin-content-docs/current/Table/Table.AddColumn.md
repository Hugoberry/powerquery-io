---
title: Table.AddColumn
---

# Table.AddColumn


## Description

Tiek pievienota kolonna ar norādīto nosaukumu. Vērtība tiek aprēķināta, izmantojot norādīto atlases funkciju un kā ievades datus lietojot katru rindu.


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

Tabulai <code>table</code> tiek pievienota kolonna ar nosaukumu <code>newColumnName</code>. Kolonnas vērtības tiek aprēķinātas, izmantojot norādīto atlases funkciju <code>columnGenerator</code> un kā ievades datus lietojot katru rindu.


## Examples

### Example #1 
Pievienot skaitļu kolonnu ar nosaukumu &#34;TotalPrice&#34; tabulā, ar katru vērtību kā kolonnu [Price] un [Shipping] summu.
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
