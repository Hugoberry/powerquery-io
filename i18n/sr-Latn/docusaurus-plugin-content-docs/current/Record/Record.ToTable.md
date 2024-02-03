---
title: Record.ToTable
---

# Record.ToTable


## Description

Vraća tabelu čiji je svaki red ime polja i vrednost ulaznog zapisa.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Details

Vraća tabelu koja sadrži kolone <code>Name</code> i <code>Value</code> sa redom za svako polje u <code>record</code>.


## Examples

### Example #1 
Vraćanje tabele iz zapisa.
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
