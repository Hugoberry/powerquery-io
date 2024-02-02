---
title: Record.ToTable
---

# Record.ToTable


## Description

Returns a table with each row being a field name and value of the input record.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Details

Returns a table containing the columns <code>Name</code> and <code>Value</code> with a row for each field in <code>record</code>.


## Examples

### Example #1 
Return the table from the record.
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
