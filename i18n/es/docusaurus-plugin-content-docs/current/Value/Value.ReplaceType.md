---
title: Value.ReplaceType
---

# Value.ReplaceType


## Description

Reemplaza el tipo del valor.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Details

Reemplaza el tipo del <code>value</code> por el <code>type</code> proporcionado.


## Examples

### Example #1 
Reemplaza el tipo predeterminado de un registro por un tipo más específico.
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
