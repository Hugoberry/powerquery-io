---
title: Record.FieldCount
---

# Record.FieldCount


Повертає кількість полів у записі.


## Syntax

```powerquery
Record.FieldCount(
    record as record
) as number
```


## Remarks

Повертає кількість полів у записі `record`.


## Examples

### Example #1
Знайти кількість полів у записі.
```powerquery
Record.FieldCount([CustomerID = 1, Name = "Bob"])
```

Result: 
```powerquery
2
```




## Category
Record.Information
