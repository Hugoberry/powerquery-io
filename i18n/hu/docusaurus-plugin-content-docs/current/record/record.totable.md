---
title: Record.ToTable
---

# Record.ToTable


Egy olyan táblát ad vissza, amelyben mindegyik sor a bemeneti rekord egyik mezőjének nevét és értékét tartalmazza.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Remarks

Egy olyan táblát ad vissza, amely a `Name` és a `Value` oszlopból áll, és a(z) `record` mindegyik mezőjéhez tartalmaz egy sort.


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
