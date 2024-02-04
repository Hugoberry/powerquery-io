---
title: Value.ReplaceType
---

# Value.ReplaceType


## Description

Substitui o tipo do valor.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Details

Substitui o tipo de <code>value</code> pelo <code>type</code> fornecido.


## Examples

### Example #1 
Substitua o tipo predefinido de um registo por um tipo mais específico.
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
