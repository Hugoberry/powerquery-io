---
title: Value.ReplaceType
---

# Value.ReplaceType


## Description

Înlocuiește tipul valorii.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Details

Înlocuiește tipul pentru <code>value</code> cu valoarea <code>type</code> furnizată.


## Examples

### Example #1 
Înlocuiți tipul implicit al unei înregistrări cu un tip mai specific.
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
