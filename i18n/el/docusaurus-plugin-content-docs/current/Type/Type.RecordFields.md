---
title: Type.RecordFields
---

# Type.RecordFields


## Description

Επιστρέφει μια εγγραφή που περιγράφει τα πεδία ενός τύπου εγγραφής, με κάθε πεδίο του επιστρεφόμενου τύπου εγγραφής να περιέχει ένα αντίστοιχο όνομα και μια τιμή.


## Syntax

```powerquery
Type.RecordFields(
    type as type
) as record
```


## Details

Επιστρέφει μια εγγραφή που περιγράφει τα πεδία μιας εγγραφής <code>type</code>. Κάθε πεδίο του επιστρεφόμενου τύπου διαθέτει αντίστοιχο όνομα και τιμή, στη μορφή μιας εγγραφής <code>[ Type = type, Optional = logical ]</code>.


## Examples

### Example #1 
Εύρεση του ονόματος και της τιμής της εγγραφής &lt;code&gt;[ A = number, optional B = any]&lt;/code&gt;.
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
