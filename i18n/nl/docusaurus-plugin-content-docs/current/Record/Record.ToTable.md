---
title: Record.ToTable
---

# Record.ToTable


## Description

Retourneert een tabel waarin elke rij een veldnaam en een veldwaarde uit de invoerrecord is.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Details

Retourneert een tabel met daarin de kolommen <code>Name</code> en <code>Value</code> met een rij voor elk veld in <code>record</code>.


## Examples

### Example #1 
De tabel retourneren uit de record.
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
