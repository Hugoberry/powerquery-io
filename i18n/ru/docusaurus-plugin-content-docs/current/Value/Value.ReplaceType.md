---
title: Value.ReplaceType
---

# Value.ReplaceType


Заменяет тип значения.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Remarks

Заменяет тип <code>value</code> на указанный <code>type</code>.


## Examples

### Example #1 
Замените стандартный тип записи на более конкретный.
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
