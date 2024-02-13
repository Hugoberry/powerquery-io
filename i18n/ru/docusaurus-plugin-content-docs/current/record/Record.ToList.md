---
title: Record.ToList
---

# Record.ToList


Возвращает список значений, содержащий значения полей из входной записи.


## Syntax

```powerquery
Record.ToList(
    record as record
) as list
```


## Remarks

Возвращает список значений, содержащих значения полей из входных данных <code>record</code>.


## Examples

### Example #1 
Извлечь значения полей из записи.
```powerquery
Record.ToList([A = 1, B = 2, C = 3])
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
Record.Serialization
