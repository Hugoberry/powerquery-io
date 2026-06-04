---
title: Single.From
---

# Single.From


Δημιουργεί μια μονή τιμή από την παρεχόμενη τιμή.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Επιστρέφει μια μοναδική τιμή `number` από το δεδομένο `value`. Αν το δεδομένο `value` είναι `null`, το `Single.From` επιστρέφει `null`. Αν το δεδομένο `value` είναι `number` εντός του εύρους Single, επιστρέφεται `value`, διαφορετικά επιστρέφεται ένα σφάλμα. Αν `value` είναι οποιουδήποτε άλλου τύπου, θα μετατραπεί πρώτα σε `αριθμός` χρησιμοποιώντας το `Number.FromText`. Μπορεί επίσης να παρέχεται ένα προαιρετικό `culture`(για παράδειγμα, "en-US").


## Examples

### Example #1
Λάβετε τη μονή τιμή `number` του `"1.5"`.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
