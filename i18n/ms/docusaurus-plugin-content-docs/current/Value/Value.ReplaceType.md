---
title: Value.ReplaceType
---

# Value.ReplaceType


## Description

Menggantikan jenis nilai.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Details

Menggantikan jenis <code>value</code> dengan <code>type</code> yang disediakan.


## Examples

### Example #1 
Gantikan jenis rekod lalai dengan jenis yang lebih khusus.
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
