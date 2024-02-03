---
title: Value.ReplaceType
---

# Value.ReplaceType


## Description

Substitúe o tipo de valor.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Details

Substitúe o tipo de <code>value</code> con <code>type</code> que se forneceu.


## Examples

### Example #1 
Substitúe o tipo predefinido dun rexistro por un tipo máis específico.
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
