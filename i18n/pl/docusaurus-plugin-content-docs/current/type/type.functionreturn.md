---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Zwraca typ zwrócony przez typ funkcji.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Zwraca typ zwrócony przez funkcję `type`.


## Examples

### Example #1
Znajdź typ zwracany `() as any)`.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
