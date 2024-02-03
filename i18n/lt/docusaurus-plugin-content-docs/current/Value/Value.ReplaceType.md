---
title: Value.ReplaceType
---

# Value.ReplaceType


## Description

Pakeičia reikšmės tipą.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Details

Pakeičia <code>value</code> tipą pateiktu <code>type</code>.


## Examples

### Example #1 
Pakeiskite numatytąjį įrašo tipą konkretesniu tipu.
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
