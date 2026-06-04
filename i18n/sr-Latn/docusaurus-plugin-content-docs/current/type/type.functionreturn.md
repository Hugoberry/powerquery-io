---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Vraća tip koji daje tip funkcije.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Vraća tip koji daje funkcija `type`.


## Examples

### Example #1
Pronađite tip vraćanja za `() as any)`.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
