---
title: Record.ToTable
---

# Record.ToTable


Возвращает таблицу, где каждая строка представляет имя поля и значение входной записи.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Remarks

Возвращает таблицу, содержащую столбцы <code>Name</code> и <code>Value</code> со строкой для каждого поля в <code>record</code>.


## Examples

### Example #1 
Возврат таблицы из записи.
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
