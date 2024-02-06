---
title: Value.ReplaceType
---

# Value.ReplaceType


替换值的类型。


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Remarks

将 <code>value</code> 的类型替换为提供的 <code>type</code>。


## Examples

### Example #1 
将记录的默认类型替换为更具体的类型。
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
