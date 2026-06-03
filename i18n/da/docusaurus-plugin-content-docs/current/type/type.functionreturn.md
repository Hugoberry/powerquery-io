---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Returnerer en type, der returneres af en funktionstype.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Returnerer en type, der returneres af en funktion `type`.


## Examples

### Example #1
Find returneringstypen for `() as any)`.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
