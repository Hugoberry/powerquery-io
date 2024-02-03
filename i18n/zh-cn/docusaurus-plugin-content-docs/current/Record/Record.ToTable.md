---
title: Record.ToTable
---

# Record.ToTable


## Description

返回一个表，其中的每行是输入记录的字段名称和值。


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Details

返回一个表，它包含 <code>Name</code> 和 <code>Value</code> 列以及对应于 <code>record</code> 中每个字段的行。


## Examples

### Example #1 
从记录返回表。
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
