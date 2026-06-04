---
title: Value.ReplaceType
---

# Value.ReplaceType


Substitueix el tipus del valor.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Remarks

Substitueix el tipus de `value` per l'element `type` proporcionat.


## Examples

### Example #1
Substituïu el tipus per defecte d'un registre per un tipus més específic.
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
