---
title: Record.ToTable
---

# Record.ToTable


## Description

Returnează un tabel în care fiecare rând este un nume şi o valoare pentru câmp din înregistrarea de intrare.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Details

Returnează un tabel ce conţine coloanele <code>Name</code> şi <code>Value</code> cu un rând pentru fiecare câmp din <code>record</code>.


## Examples

### Example #1 
Returnați tabelul din înregistrare.
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
