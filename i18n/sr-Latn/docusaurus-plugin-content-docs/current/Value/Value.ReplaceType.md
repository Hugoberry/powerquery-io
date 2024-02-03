---
title: Value.ReplaceType
---

# Value.ReplaceType


## Description

Zamenjuje tip vrednosti.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Details

Zamenjuje tip <code>value</code> navedenim <code>type</code>.


## Examples

### Example #1 
Zamenite podrazumevani tip zapisa određenijim tipom.
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
