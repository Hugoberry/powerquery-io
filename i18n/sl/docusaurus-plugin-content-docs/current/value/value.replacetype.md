---
title: Value.ReplaceType
---

# Value.ReplaceType


Zamenja vrsto vrednosti.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Remarks

Zamenja vrsto `value` s podanim `type`.


## Examples

### Example #1
Zamenjajte privzeto vrsto zapisa z bolj določeno vrsto.
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
