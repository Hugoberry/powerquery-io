---
title: Value.ReplaceType
---

# Value.ReplaceType


Αντικαθιστά τον τύπο της τιμής.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Remarks

Αντικαθιστά τον τύπο του `value` με το παρεχόμενο `type`.


## Examples

### Example #1
Αντικαταστήστε τον προεπιλεγμένο τύπο μιας εγγραφής με έναν πιο συγκεκριμένο τύπο.
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
