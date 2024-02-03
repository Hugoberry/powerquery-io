---
title: Value.ReplaceType
---

# Value.ReplaceType


## Description

取代值的類型。


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Details

將 <code>value</code>的類型取代為提供的 <code>type</code>。


## Examples

### Example #1 
以更特定的類型取代記錄的預設類型。
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
