---
title: Value.ReplaceType
---

# Value.ReplaceType


## Description

Değerin türünü değiştirir.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Details

<code>value</code> türünü sağlanan <code>type</code> ile değiştirir.


## Examples

### Example #1 
Kaydın varsayılan türünü daha belirli bir türle değiştirin.
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
