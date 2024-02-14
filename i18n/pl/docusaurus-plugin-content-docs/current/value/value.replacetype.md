---
title: Value.ReplaceType
---

# Value.ReplaceType


Zastępuje typ wartości.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Remarks

Zastępuje typ <code>value</code> podanym typem <code>type</code>.


## Examples

### Example #1 
Zastąp domyślny typ rekordu bardziej określonym typem.
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
