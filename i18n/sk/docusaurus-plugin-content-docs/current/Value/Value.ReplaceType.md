---
title: Value.ReplaceType
---

# Value.ReplaceType


## Description

Nahradí typ hodnoty.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Details

Nahradí typ <code>value</code> poskytnutým <code>type</code>.


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