---
title: Value.ReplaceType
---

# Value.ReplaceType


## Description

Aizstāj vērtības tipu.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Details

Aizstāj <code>value</code> tipu ar nodrošināto <code>type</code>.


## Examples

### Example #1 
Aizstāj ieraksta noklusējuma tipu ar specifiskāku tipu.
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
