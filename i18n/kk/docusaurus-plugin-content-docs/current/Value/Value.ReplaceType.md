---
title: Value.ReplaceType
---

# Value.ReplaceType


## Description

Мәннің түрін ауыстырады.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Details

<code>value</code> түрін көрсетілген <code>type</code> түріне ауыстырады.


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
