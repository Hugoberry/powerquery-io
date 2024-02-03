---
title: Table.AddColumn
---

# Table.AddColumn


## Description

Pridedamas stulpelis su nurodytu pavadinimu. Reikšmė skaičiuojama naudojant nurodytą pasirinkimo funkciją, kur kiekvienoje eilutėje nurodyta įvestis.


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

Pridedamas stulpelis pavadinimu <code>newColumnName</code> prie lentelės <code>table</code>. Stulpelio reikšmės apskaičiuojamos naudojant nurodytą pasirinkimo funkciją <code>columnGenerator</code>, kur kiekvienoje eilutėje nurodyta įvestis.


## Examples

### Example #1 
Įtraukite skaičių stulpelį pavadinimu „TotalPrice“ į lentelę, kuriame kiekviena reikšmė yra stulpelių [Price] ir [Shipping] suma.
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
