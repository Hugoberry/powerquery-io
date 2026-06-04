---
title: Record.ToTable
---

# Record.ToTable


Әр жолы кіріс жазбаның өріс атауы және мәні болып табылатын кестені қайтарады.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Remarks

`record` ішідегі әр өріс үшін жол бар `Name` және `Value` бағандарын қамтитын кестені қайтарады.


## Examples

### Example #1
Жазбадан кестені қайтару.
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
