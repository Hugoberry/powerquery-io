---
title: Value.ReplaceType
---

# Value.ReplaceType


## Description

Lecseréli az érték típusát.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Details

Lecseréli a(z) <code>value</code> típusát a megadott <code>type</code> típussal.


## Examples

### Example #1 
A rekord alapértelmezett típusának lecserélése egy pontosabb típusra.
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
