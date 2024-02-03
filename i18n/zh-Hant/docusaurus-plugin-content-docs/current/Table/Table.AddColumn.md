---
title: Table.AddColumn
---

# Table.AddColumn


## Description

加入具有指定名稱的資料行。其值是使用指定的選取函數來計算，並將每個資料列視為輸入。


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

將名為 <code>newColumnName</code> 的資料行加入至資料表 <code>table</code>。此資料行的值是使用指定的選取函數 <code>columnGenerator</code> 來計算，並將每個資料列視為輸入。


## Examples

### Example #1 
將名為「TotalPrice」的數字資料行新增至資料表中，每個值都是 [Price] 和 [Shipping] 資料行的總和。
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
