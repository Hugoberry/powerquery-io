---
title: Value.ReplaceType
---

# Value.ReplaceType


Ersätter värdets typ.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Remarks

Ersätter <code>value</code>-typen med den angivna <code>type</code>.


## Examples

### Example #1 
Ersätt standardtypen för en post med en mer specifik typ.
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
