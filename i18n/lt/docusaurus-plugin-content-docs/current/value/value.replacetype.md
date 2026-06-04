---
title: Value.ReplaceType
---

# Value.ReplaceType


Pakeičia reikšmės tipą.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Remarks

Pakeičia `value` tipą pateiktu `type`.


## Examples

### Example #1
Pakeiskite numatytąjį įrašo tipą konkretesniu tipu.
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
