---
title: Value.FromText
---

# Value.FromText


## Description

Δημιουργεί μια τιμή ισχυρού τύπου από μια αναπαράσταση κειμένου.


## Syntax

```powerquery
Value.FromText(
    text as any,
    optional culture as text
) as any
```


## Details

Αποκωδικοποιεί μια τιμή από μια αναπαράσταση κειμένου <code>text</code>, και την ερμηνεύει ως τιμή κατάλληλου τύπου.    Το <code>Value.FromText</code> λαμβάνει μια τιμή κειμένου και επιστρέφει αριθμό, λογική τιμή, τιμή null, τιμή ημερομηνίας/ώρας, τιμή διάρκειας ή τιμή κειμένου. Η κενή τιμή κειμένου ερμηνεύεται ως τιμή null.    Ενδέχεται επίσης να παρέχεται μια προαιρετική τιμή <code>culture</code> (για παράδειγμα, "en-US").



## Category
Text.Conversions from and to text
