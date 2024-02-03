---
title: Value.ReplaceType
---

# Value.ReplaceType


## Description

Замінює тип значення.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Details

Замінює тип <code>value</code> наданим <code>type</code>.


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
