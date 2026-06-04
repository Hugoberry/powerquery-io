---
title: Value.ReplaceType
---

# Value.ReplaceType


Nahradí typ hodnoty.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Remarks

Nahradí typ `value` poskytnutým `type`.


## Examples

### Example #1
Nahraďte predvolený typ záznamu špecifickejším typom.
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
