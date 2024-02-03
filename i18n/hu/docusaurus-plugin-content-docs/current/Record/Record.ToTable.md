---
title: Record.ToTable
---

# Record.ToTable


## Description

Egy olyan táblát ad vissza, amelyben mindegyik sor a bemeneti rekord egyik mezőjének nevét és értékét tartalmazza.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Details

Egy olyan táblát ad vissza, amely a <code>Name</code> és a <code>Value</code> oszlopból áll, és a(z) <code>record</code> mindegyik mezőjéhez tartalmaz egy sort.


## Examples

### Example #1 
Visszaadja a táblát a rekordból.
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
