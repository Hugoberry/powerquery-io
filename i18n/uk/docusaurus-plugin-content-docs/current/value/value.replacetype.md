---
title: Value.ReplaceType
---

# Value.ReplaceType


Замінює тип значення.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Remarks

Замінює тип `value` наданим `type`.


## Examples

### Example #1
Замінити стандартний тип запису на більш конкретний.
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
