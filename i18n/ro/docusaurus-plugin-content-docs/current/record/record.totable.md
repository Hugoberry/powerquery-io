---
title: Record.ToTable
---

# Record.ToTable


Returnează un tabel în care fiecare rând este un nume şi o valoare pentru câmp din înregistrarea de intrare.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Remarks

Returnează un tabel ce conţine coloanele `Name` şi `Value` cu un rând pentru fiecare câmp din `record`.


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
