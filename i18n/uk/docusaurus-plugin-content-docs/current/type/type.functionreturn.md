---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Повертає тип, який повертається за допомогою типу функції.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Повертає тип, який повертається за допомогою функції `type`.


## Examples

### Example #1
Знайти тип повернення `() as any)`.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
