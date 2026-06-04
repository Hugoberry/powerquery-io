---
title: Record.ToTable
---

# Record.ToTable


Повертає таблицю, кожний рядок якої є іменем поля та значенням вхідного запису.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Remarks

Повертає таблицю, яка містить стовпці `Name` та `Value` з рядком для кожного поля в `record`.


## Examples

### Example #1
Повернути таблицю із запису.
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
