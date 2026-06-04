---
title: Type.FunctionReturn
---

# Type.FunctionReturn


Palauttaa funktiotyypin palauttaman tyypin.


## Syntax

```powerquery
Type.FunctionReturn(
    type as type
) as type
```


## Remarks

Palauttaa funktion `type` palauttaman tyypin.


## Examples

### Example #1
Etsi kohteen `() as any)` palautustyyppi.
```powerquery
Type.FunctionReturn(type function () as any)
```

Result: 
```powerquery
type any
```




## Category
Type
