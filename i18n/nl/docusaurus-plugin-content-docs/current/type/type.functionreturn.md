---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Retourneert een type dat wordt geretourneerd door een functietype.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Retourneert een type dat wordt geretourneerd door een functie `type`.


## Examples

### Example #1
Zoek het retourtype van `() als willekeurig)`.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
