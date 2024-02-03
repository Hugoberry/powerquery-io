---
title: Record.ToTable
---

# Record.ToTable


## Description

Tiek atgriezta tabula, kuras katrā rindā ir norādīts ievades ieraksta lauka nosaukums un vērtība.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Details

Tiek atgriezta tabula, kurā ir ietvertas kolonnas <code>Name</code> un <code>Value</code> un viena rinda atbilstoši katram ieraksta <code>record</code> laukam.


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
