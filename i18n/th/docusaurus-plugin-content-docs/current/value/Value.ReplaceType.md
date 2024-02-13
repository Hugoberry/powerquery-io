---
title: Value.ReplaceType
---

# Value.ReplaceType


แทนที่ชนิดของค่า


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Remarks

แทนที่ชนิดของ <code>value</code> ด้วย <code>type</code> ที่ระบุ


## Examples

### Example #1 
แทนที่ชนิดเริ่มต้นของระเบียนด้วยชนิดที่เฉพาะเจาะจงมากขึ้น
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
