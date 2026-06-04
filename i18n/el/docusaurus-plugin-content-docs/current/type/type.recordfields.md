---
title: Type.RecordFields
---

# Type.RecordFields


Επιστρέφει μια εγγραφή που περιγράφει τα πεδία ενός τύπου εγγραφής, με κάθε πεδίο του επιστρεφόμενου τύπου εγγραφής να περιέχει ένα αντίστοιχο όνομα και μια τιμή.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Remarks

Επιστρέφει μια εγγραφή που περιγράφει τα πεδία μιας εγγραφής `type`. Κάθε πεδίο του επιστρεφόμενου τύπου διαθέτει αντίστοιχο όνομα και τιμή, στη μορφή μιας εγγραφής `[ Type = type, Optional = logical ]`.


## Examples

### Example #1
Εύρεση του ονόματος και της τιμής της εγγραφής `[ A = number, optional B = any]`.
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
