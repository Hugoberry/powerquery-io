---
title: Record.ToTable
---

# Record.ToTable


## Description

Zwraca tabelę, w której każdy wiersz składa się z nazwy i wartości pola rekordu wejściowego.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Details

Zwraca tabelę zawierającą w każdym wierszu kolumny <code>Name</code> i <code>Value</code> odpowiadające wszystkim polom w rekordzie <code>record</code>.


## Examples

### Example #1 
Utwórz tabelę na podstawie rekordu.
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
