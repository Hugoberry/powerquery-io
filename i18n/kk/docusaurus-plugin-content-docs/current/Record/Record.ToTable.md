---
title: Record.ToTable
---

# Record.ToTable


## Description

Әр жолы кіріс жазбаның өріс атауы және мәні болып табылатын кестені қайтарады.


## Syntax

```powerquery
Record.ToTable(
    record as record
) as table
```


## Details

<code>record</code> ішідегі әр өріс үшін жол бар <code>Name</code> және <code>Value</code> бағандарын қамтитын кестені қайтарады.


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
