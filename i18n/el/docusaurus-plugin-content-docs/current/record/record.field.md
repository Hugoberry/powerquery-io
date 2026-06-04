---
title: Record.Field
---

# Record.Field


Επιστρέφει την τιμή του καθορισμένου πεδίου μιας εγγραφής.


## Syntax

```powerquery
Record.Field(
    record as record,
    field as text
) as any
```


## Remarks

Επιστρέφει την τιμή του καθορισμένου `field` στην `record`. Αν το πεδίο δεν βρεθεί, προκύπτει σφάλμα.


## Examples

### Example #1
Βρίσκει τη τιμή του πεδίου "CustomerID" στην εγγραφή.
```powerquery
Record.Field([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
1
```




## Category
Record.Selection
