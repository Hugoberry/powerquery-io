---
title: Table.SingleRow
---

# Table.SingleRow


Кестедегі бір жолды қайтарады.


## Syntax

```powerquery
Table.SingleRow(
    table as table
) as record
```


## Remarks

Бір жолдың `table` ішіндегі бір жолды қайтарады. `table` бір жолдан артық қамтыса, қате туындайды.


## Examples

### Example #1
Кестедегі бір жолды қайтару.
```powerquery
Table.SingleRow(Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}))
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Table.Row operations
