---
title: Record.ToTable
---

# Record.ToTable


## Description

Vráti tabuľku, pričom každý riadok tvorí názov poľa a hodnota vstupného záznamu.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Details

Vráti tabuľku obsahujúcu stĺpce <code>Name</code> a <code>Value</code> s riadkom pre každé pole v časti <code>record</code>.


## Examples

### Example #1 
Vráťte tabuľku zo záznamu.
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
