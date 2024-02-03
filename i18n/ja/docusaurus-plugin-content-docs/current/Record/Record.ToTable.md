---
title: Record.ToTable
---

# Record.ToTable


## Description

各行に入力レコードのフィールド名と値を含むテーブルを返します。


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Details

<code>record</code> 内のフィールドごとに 1 行あり、列 <code>Name</code> と <code>Value</code> を含むテーブルを返します。


## Examples

### Example #1 
レコードからテーブルを返します。
```powerquery
Record.ToTable([OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0])
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "OrderID", Value = 1],
    [Name = "CustomerID", Value = 1],
    [Name = "Item", Value = "Fishing rod"],
    [Name = "Price", Value = 100]
})
```




## Category
Record.Serialization
