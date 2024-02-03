---
title: Table.AddColumn
---

# Table.AddColumn


## Description

Menambah lajur dengan nama ditetapkan. Nilai dikira menggunakan fungsi pilihan yang ditentukan dengan setiap baris diambil sebagai input.


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

Menambah lajur bernama <code>newColumnName</code> pada jadual <code>table</code>. Nilai untuk lajur dikira menggunakan fungsi pilihan yang ditentukan <code>columnGenerator</code> dengan setiap baris diambil sebagai input.


## Examples

### Example #1 
Tambahkan lajur nombor yang bernama &#34;TotalPrice&#34; pada jadual dengan setiap nilai merupakan jumlah bagi lajur [Price] dan lajur [Shipping].
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
