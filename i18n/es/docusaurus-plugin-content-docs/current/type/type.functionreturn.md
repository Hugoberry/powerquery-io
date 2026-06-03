---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Devuelve un tipo devuelto por un tipo de función.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Devuelve un tipo devuelto por una función `type`.


## Examples

### Example #1
Buscar el tipo devuelto de `() as any)`.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
