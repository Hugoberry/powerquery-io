---
title: Record.ToTable
---

# Record.ToTable


Trả về một bảng trong đó mỗi hàng là một tên trường và giá trị của bản ghi đầu vào.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Remarks

Trả về một bảng chứa các cột <code>Name</code> và <code>Value</code> với một hàng cho mỗi trường trong <code>record</code>.


## Examples

### Example #1 
Tạo một bảng từ bản ghi.
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
