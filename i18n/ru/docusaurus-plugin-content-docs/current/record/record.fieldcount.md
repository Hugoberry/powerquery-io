---
title: Record.FieldCount
---

# Record.FieldCount


Возвращает число полей в записи.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Remarks

Возвращает число полей в записи <code>record</code>.


## Examples

### Example #1 
Нахождение числа полей в записи.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
