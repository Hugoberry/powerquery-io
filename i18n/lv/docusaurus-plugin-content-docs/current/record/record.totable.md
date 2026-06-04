---
title: Record.ToTable
---

# Record.ToTable


Tiek atgriezta tabula, kuras katrā rindā ir norādīts ievades ieraksta lauka nosaukums un vērtība.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Remarks

Tiek atgriezta tabula, kurā ir ietvertas kolonnas `Name` un `Value` un viena rinda atbilstoši katram ieraksta `record` laukam.


## Examples

### Example #1
Izveidojiet tabulu no ieraksta.
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
