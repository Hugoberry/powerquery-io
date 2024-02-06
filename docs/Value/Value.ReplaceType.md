---
title: Value.ReplaceType
---

# Value.ReplaceType


Replaces the value&#39;s type.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Remarks

Replaces the <code>value</code>'s type with the provided <code>type</code>.


## Examples

### Example #1 
Replace the default type of a record with a more specific type.
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
