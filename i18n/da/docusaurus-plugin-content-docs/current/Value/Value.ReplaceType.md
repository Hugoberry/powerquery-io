---
title: Value.ReplaceType
---

# Value.ReplaceType


## Description

Erstatter værdiens type.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Details

Erstatter <code>value</code>s type med den angivne <code>type</code>.


## Examples

### Example #1 
Erstat standardtypen for en post med en mere specifik type.
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
