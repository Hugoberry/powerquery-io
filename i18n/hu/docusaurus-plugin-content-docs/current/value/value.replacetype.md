---
title: Value.ReplaceType
---

# Value.ReplaceType


Lecseréli az érték típusát.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Remarks

Lecseréli a(z) `value` típusát a megadott `type` típussal.


## Examples

### Example #1
A rekord alapértelmezett típusának lecserélése egy pontosabb típusra.
```powerquery
Type.RecordFields(
    Value.Type(
        Value.ReplaceType(
            [Column1 = 123],
            type [Column1 = number]
        )
    )
)[Column1][Type]
```

Result: 
```powerquery
type number
```




## Category
Values.Types
