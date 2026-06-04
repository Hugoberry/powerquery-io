---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Returnează un tip returnat de un tip de funcție.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Returnează un tip returnat de o funcție `type`.


## Examples

### Example #1
Găsiți tipul returnat de `() ca any)`.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
