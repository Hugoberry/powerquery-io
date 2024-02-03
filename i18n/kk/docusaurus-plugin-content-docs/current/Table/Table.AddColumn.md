---
title: Table.AddColumn
---

# Table.AddColumn


## Description

Көрсетілген атауы бар бағанды қосады. Мән әр жол кіріс ретінде алынып, көрсетілген таңдау функциясын пайдаланып есептеледі.


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

<code>table</code> кестесіне <code>newColumnName</code> атты бағанды қосады. Бағанның мәндері көрсетілген <code>columnGenerator</code> таңдау функциясын пайдаланып, әр жол кіріс ретінде алынып есептеледі.


## Examples

### Example #1 
Кестеге &#34;TotalPrice&#34; деп аталатын сандық бағанды қосады. Әр мән [Price] және [Shipping] бағандарының қосындысы болып табылады.
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
