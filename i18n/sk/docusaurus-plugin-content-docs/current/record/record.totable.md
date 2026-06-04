---
title: Record.ToTable
---

# Record.ToTable


Vráti tabuľku, pričom každý riadok tvorí názov poľa a hodnota vstupného záznamu.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Remarks

Vráti tabuľku obsahujúcu stĺpce `Name` a `Value` s riadkom pre každé pole v časti `record`.


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
