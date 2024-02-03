---
title: Table.AddColumn
---

# Table.AddColumn


## Description

Menambahkan kolom dengan nama yang ditetapkan. Nilai dikomputasi menggunakan fungsi pilihan yang ditetapkan dengan setiap baris yang diambil sebagai input.


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

Menambahkan kolom bernama <code>newColumnName</code> ke tabel <code>table</code>. Nilai untuk kolom tersebut dikomputasi menggunakan fungsi pilihan <code>columnGenerator</code> yang ditetapkan dengan setiap baris yang diambil sebagai input.


## Examples

### Example #1 
Tambahkan kolom angka bernama &#34;TotalPrice&#34; ke tabel, yang setiap nilainya merupakan jumlah dari kolom [Price] dan [Shipping].
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
