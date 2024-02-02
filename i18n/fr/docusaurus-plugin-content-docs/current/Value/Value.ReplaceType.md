---
title: Value.ReplaceType
---

# Value.ReplaceType


## Description

Remplace le type de la valeur.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Details

Remplace le type du <code>value</code> par le <code>type</code> fourni.


## Examples

### Example #1 
Remplacez le type par défaut d’un enregistrement par un type plus spécifique.
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
