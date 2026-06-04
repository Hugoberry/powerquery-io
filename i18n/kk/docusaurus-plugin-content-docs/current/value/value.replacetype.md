---
title: Value.ReplaceType
---

# Value.ReplaceType


Мәннің түрін ауыстырады.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Remarks

`value` түрін көрсетілген `type` түріне ауыстырады.


## Examples

### Example #1
Жазбаның әдепкі түрін нақтырақ түрмен алмастырыңыз.
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
