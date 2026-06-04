---
title: Double.From
---

# Double.From


Δημιουργεί διπλή τιμή από την παρεχόμενη τιμή.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Επιστρέφει μια διπλή τιμή `number` από το δεδομένο `value`. Αν το δεδομένο `value` είναι `null`, το `Double.From` επιστρέφει `null`. Αν το δεδομένο `value` είναι `number` εντός του εύρους Double, επιστρέφεται `value`, διαφορετικά επιστρέφεται σφάλμα. Αν `value` είναι οποιουδήποτε άλλου τύπου, θα μετατραπεί πρώτα σε `number` χρησιμοποιώντας το `Number.FromText`. Μπορεί επίσης να παρέχεται ένα προαιρετικό `culture`(για παράδειγμα, "en-US").


## Examples

### Example #1
Λάβετε τη διπλή τιμή `number` του `"4"`.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
