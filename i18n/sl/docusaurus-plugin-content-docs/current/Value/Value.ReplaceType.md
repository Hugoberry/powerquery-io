---
title: Value.ReplaceType
---

# Value.ReplaceType


## Description

Zamenja vrsto vrednosti.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Details

Zamenja vrsto <code>value</code> s podanim <code>type</code>.


## Examples

### Example #1 
Zamenjajte privzeto vrsto zapisa z bolj določeno vrsto.
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
