---
title: Type.IsOpenRecord
---

# Type.IsOpenRecord


Возвращает данные о том, является ли тип записи открытым.


## Syntax

```powerquery
Type.IsOpenRecord(
    type as type
) as logical
```


## Remarks

Возвращает значение `logical`, указывающее, является ли запись `type` открытой.


## Examples

### Example #1
Определить, является ли запись `type [ A = число, ...]` открытой.
```powerquery
Type.IsOpenRecord(type [A = number, ...])
```

Result: 
```powerquery
true
```




## Category
Type
