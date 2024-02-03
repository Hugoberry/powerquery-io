---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


## Description

Επιστρέφει την τιμή του καθορισμένου πεδίου σε μια εγγραφή ή την προεπιλεγμένη τιμή εάν δεν βρεθεί το πεδίο.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Details

Επιστρέφει την τιμή του καθορισμένου πεδίου <code>field</code> στην εγγραφή <code>record</code>. Εάν το πεδίο δεν βρεθεί, επιστρέφεται η προαιρετική <code>defaultValue</code>.


## Examples

### Example #1 
Βρίσκει την τιμή του πεδίου &#34;Phone&#34; στην εγγραφή ή επιστρέψτε null, αν δεν υπάρχει.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
Βρίσκει την τιμή του πεδίου &#34;Phone&#34; στην εγγραφή ή επιστρέψτε την προεπιλογή, αν δεν υπάρχει.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
