---
title: Record.ToTable
---

# Record.ToTable


Mengembalikan jadual dengan setiap baris menjadi nama medan dan nilai bagi rekod input.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Remarks

Mengembalikan jadual yang mengandungi lajur `Name` dan `Value` dengan baris untuk setiap medan dalam `record`.


## Examples

### Example #1
Mengembalikan jadual daripada rekod.
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
