---
title: Record.ToTable
---

# Record.ToTable


## Description

Mengembalikan jadual dengan setiap baris menjadi nama medan dan nilai bagi rekod input.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Details

Mengembalikan jadual yang mengandungi lajur <code>Name</code> dan <code>Value</code> dengan baris untuk setiap medan dalam <code>record</code>.


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
