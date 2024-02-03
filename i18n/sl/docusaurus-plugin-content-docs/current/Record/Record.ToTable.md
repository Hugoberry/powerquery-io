---
title: Record.ToTable
---

# Record.ToTable


## Description

Vrne tabelo, v kateri je vsaka vrstica ime polja in vrednost vhodnega zapisa.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Details

Vrne tabelo, ki vsebuje stolpca <code>Name</code> in <code>Value</code> ter vrstico za vsako polje v <code>record</code>.


## Examples

### Example #1 
Vrnite tabelo iz zapisa.
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
