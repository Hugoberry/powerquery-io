---
title: Record.ToTable
---

# Record.ToTable


傳回資料表，其中每個資料列都是輸入記錄的欄位名稱和值。


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Remarks

傳回包含 <code>Name</code> 和 <code>Value</code> 資料行的資料表，並且針對 <code>record</code> 中的每個欄位各包含一個資料列。


## Examples

### Example #1 
根據記錄傳回資料表。
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
