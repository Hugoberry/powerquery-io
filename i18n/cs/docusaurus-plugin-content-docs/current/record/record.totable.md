---
title: Record.ToTable
---

# Record.ToTable


Vrátí tabulku obsahující v každém řádku název pole a hodnotu vstupního záznamu.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Remarks

Vrátí tabulku se sloupci `Name` a `Value` a řádkem pro každé pole v záznamu `record`.


## Examples

### Example #1
Vrátí tabulku ze záznamu.
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
