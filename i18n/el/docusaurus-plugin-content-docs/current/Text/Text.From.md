---
title: Text.From
---

# Text.From


## Description

Δημιουργεί μια τιμή κειμένου από την παρεχόμενη τιμή.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Details

Επιστρέφει την αναπαράσταση κειμένου της τιμής <code>value</code>. Η τιμή <code>value</code> μπορεί να είναι τιμή <code>number</code>, <code>date</code>, <code>time</code>, <code>datetime</code>, <code>datetimezone</code>, <code>logical</code>, <code>duration</code> ή <code>binary</code>.    Αν η δεδομένη τιμή είναι null, το <code>Text.From</code> επιστρέφει null. Ενδέχεται επίσης να παρέχεται μια προαιρετική τιμή <code>culture</code> (για παράδειγμα, "en-US").


## Examples

### Example #1 
Δημιουργήστε μια τιμή κειμένου από τον αριθμό 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```




## Category
Text.Conversions from and to text
