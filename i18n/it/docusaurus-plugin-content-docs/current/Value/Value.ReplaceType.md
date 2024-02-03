---
title: Value.ReplaceType
---

# Value.ReplaceType


## Description

Sostituisce il tipo del valore.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Details

Sostituisce il tipo di <code>value</code> con il <code>type</code> specificato.


## Examples

### Example #1 
Consente di sostituire il tipo predefinito di un record con un tipo più specifico.
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
