---
title: Value.ReplaceType
---

# Value.ReplaceType


## Description

Ersetzt den Typ des Werts.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Details

Ersetzt den Typ des <code>value</code> durch den bereitgestellten <code>type</code>.


## Examples

### Example #1 
Ersetzen Sie den Standardtyp eines Datensatzes durch einen spezifischeren Typ.
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
