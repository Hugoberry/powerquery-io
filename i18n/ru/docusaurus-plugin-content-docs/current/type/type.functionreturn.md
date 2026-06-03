---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Возвращает тип, возвращенный типом функции.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Возвращает тип, возвращенный функцией `type`.


## Examples

### Example #1
Найти возвращаемый тип `() как любой)`.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
