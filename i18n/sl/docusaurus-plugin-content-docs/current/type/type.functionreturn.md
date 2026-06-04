---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Vrne vrsto, ki jo vrne vrsta funkcije.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Vrne vrsto, ki jo vrne funkcija `type`.


## Examples

### Example #1
Poiščite vrsto vrnitve `() as any)`.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
