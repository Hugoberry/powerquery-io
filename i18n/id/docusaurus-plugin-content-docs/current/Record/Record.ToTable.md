---
title: Record.ToTable
---

# Record.ToTable


## Description

Menghasilkan tabel dengan setiap baris adalah nama bidang dan nilai data input.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Details

Menghasilkan tabel berisi kolom <code>Name</code> dan <code>Value</code> dengan baris untuk setiap bidang dalam <code>record</code>.


## Examples

### Example #1 
Menghasilkan tabel dari data.
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
