---
title: Value.ReplaceType
---

# Value.ReplaceType


## Description

Thay thế loại của giá trị.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Details

Thay thế loại của <code>value</code> bằng <code>type</code> được cung cấp.


## Examples

### Example #1 
Thay thế loại mặc định của bản ghi với loại cụ thể hơn.
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
