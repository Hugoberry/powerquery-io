---
title: Value.ReplaceType
---

# Value.ReplaceType


Korvaa arvon tyypin.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Remarks

Korvaa `value`:n tyypin annetulla `type`:lla.


## Examples

### Example #1
Korvaa tietueen oletustyypin tietyllä tyypillä.
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
