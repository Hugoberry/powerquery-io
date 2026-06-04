---
title: Logical.From
---

# Logical.From


Δημιουργεί μια λογική τιμή από την τιμή που δόθηκε.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Επιστρέφει μια τιμή `logical` από το δεδομένο `value`. Αν το δεδομένο `value` είναι `null`, το `Logical.From` επιστρέφει `null`. Αν το δεδομένο `value` είναι `logical`, επιστρέφεται `value`. Οι τιμές των ακόλουθων τύπων μπορούν να μετατραπούν σε τιμή `logical`:

-   `text`: Μια τιμή `logical` από την τιμή κειμένου, είτε `"true"` είτε `"false"`. Ανατρέξτε στο `Logical.FromText` για λεπτομέρειες.
-   `number`: `false` αν `value` ισούται με `0`, `true` διαφορετικά.

Αν `value` είναι οποιουδήποτε άλλου τύπου, επιστρέφεται ένα σφάλμα.


## Examples

### Example #1
Μετατρέψτε το `2` σε τιμή `logical`.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
