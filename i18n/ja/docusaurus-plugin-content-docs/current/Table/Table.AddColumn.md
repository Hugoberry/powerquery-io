---
title: Table.AddColumn
---

# Table.AddColumn


## Description

指定された名前の列を追加します。入力として受け取った行ごとに、指定された選択関数を使用して値を計算します。


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

テーブル <code>table</code> に <code>newColumnName</code> という名前の列を追加します。入力として受け取った行ごとに、指定された選択関数 <code>columnGenerator</code> を使用して列の値を計算します。


## Examples

### Example #1 
値が [Price] 列と [Shipping] 列の合計である &#34;TotalPrice&#34; という名前の数値列をテーブルに追加します。
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
