---
title: Value.ReplaceType
---

# Value.ReplaceType


Vervangt het type van de waarde.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Remarks

Vervangt het type van de <code>value</code>door de opgegeven <code>type</code>.


## Examples

### Example #1 
Vervang het standaardtype van een record door een specifieker type.
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
