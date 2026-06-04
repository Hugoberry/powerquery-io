---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


Επιστρέφει την τιμή του καθορισμένου πεδίου σε μια εγγραφή ή την προεπιλεγμένη τιμή εάν δεν βρεθεί το πεδίο.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Remarks

Επιστρέφει την τιμή του καθορισμένου πεδίου `field` στην εγγραφή `record`. Εάν το πεδίο δεν βρεθεί, επιστρέφεται η προαιρετική `defaultValue`.


## Examples

### Example #1
Βρίσκει την τιμή του πεδίου "Phone" στην εγγραφή ή επιστρέψτε null, αν δεν υπάρχει.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2
Βρίσκει την τιμή του πεδίου "Phone" στην εγγραφή ή επιστρέψτε την προεπιλογή, αν δεν υπάρχει.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
