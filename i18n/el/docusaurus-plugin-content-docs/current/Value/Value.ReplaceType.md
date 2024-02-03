---
title: Value.ReplaceType
---

# Value.ReplaceType


## Description

Αντικαθιστά τον τύπο της τιμής.


## Syntax

```powerquery
Value.ReplaceType(
    value as any,
    type as type
) as any
```


## Details

Αντικαθιστά τον τύπο του <code>value</code> με το παρεχόμενο <code>type</code>.


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
