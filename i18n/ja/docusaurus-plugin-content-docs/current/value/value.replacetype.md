---
title: Value.ReplaceType
---

# Value.ReplaceType


値の型を置き換えます。


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Remarks

<code>value</code> の型を指定された <code>type</code> に置き換えます。


## Examples

### Example #1 
レコードの既定の型を、より具体的な型に置き換えます。
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
