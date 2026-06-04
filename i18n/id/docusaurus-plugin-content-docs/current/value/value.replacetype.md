---
title: Value.ReplaceType
---

# Value.ReplaceType


Mengganti tipe nilai.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Remarks

Mengganti tipe `value` dengan `type` yang disediakan.


## Examples

### Example #1
Ganti tipe default catatan dengan tipe yang lebih spesifik.
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
