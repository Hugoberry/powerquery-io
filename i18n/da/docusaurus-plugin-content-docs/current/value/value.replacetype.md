---
title: Value.ReplaceType
---

# Value.ReplaceType


Erstatter værdiens type.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Remarks

Erstatter `value`s type med den angivne `type`.


## Examples

### Example #1
Erstat standardtypen for en post med en mere specifik type.
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
