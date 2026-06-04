---
title: Value.ReplaceType
---

# Value.ReplaceType


값의 형식을 바꿉니다.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Remarks

`value`의 형식을 제공된 `type`(으)로 바꿉니다.


## Examples

### Example #1
레코드의 기본 유형을 보다 구체적인 유형으로 바꿉니다.
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
