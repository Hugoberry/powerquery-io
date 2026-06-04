---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Egy adott function típusú konstrukció visszatérési típusának visszaadása.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

A(z) `type` paraméterben megadott függvény visszatérési típusának visszaadása.


## Examples

### Example #1
Az `() as any)` függvény visszatérési típusának megkeresése.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
