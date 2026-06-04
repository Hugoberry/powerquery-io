---
title: Decimal.From
---

# Decimal.From


Δημιουργεί μια δεκαδική τιμή από την παρεχόμενη τιμή.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Επιστρέφει μια δεκαδική τιμή `number` από το δεδομένο `value`. Αν το δεδομένο `value` είναι `null`, το `Decimal.From` επιστρέφει `null`. Αν το δεδομένο `value` είναι `number` εντός του εύρους του Δεκαδικού, επιστρέφεται `value`, διαφορετικά επιστρέφεται ένα σφάλμα. Αν `value` είναι οποιουδήποτε άλλου τύπου, θα μετατραπεί πρώτα σε `αριθμός` χρησιμοποιώντας το `Number.FromText`. Μπορεί επίσης να παρέχεται ένα προαιρετικό `culture`(για παράδειγμα, "en-US").


## Examples

### Example #1
Λάβετε την τιμή δεκαδικού `number` του `"4.5"`.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
