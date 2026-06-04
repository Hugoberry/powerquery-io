---
title: Type.RecordFields
---

# Type.RecordFields


Egy adott rekordtípus mezőit leíró rekord visszaadása. A visszaadott rekordtípus egyes mezői az eredeti típus mezőinek nevét és értékét tartalmazzák.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

A(z) `type` paraméterben megadott rekord mezőit leíró rekord visszaadása. A visszaadott rekordtípus egyes mezői az eredeti típus mezőinek nevét és értékét tartalmazzák, `[ Type = type, Optional = logical ]` formátumban.


## Examples

### Example #1
Az `[ A = number, optional B = any]` rekordbeli mezők nevének és értékének megkeresése.
```powerquery
Type.RecordFields(type [A = number, optional B = any])
```

Result: 
```powerquery
[
    A = [Type = type number, Optional = false],
    B = [Type = type any, Optional = true]
]
```




## Category
Type
