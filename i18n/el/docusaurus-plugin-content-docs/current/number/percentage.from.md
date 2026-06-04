---
title: Percentage.From
---

# Percentage.From


Επιστρέφει μια τιμή ποσοστού από τη δεδομένη τιμή.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Επιστρέφει μια τιμή `percentage` από το δεδομένο `value`. Αν το δεδομένο `value` είναι `null`, το `Percentage.From` επιστρέφει `null`. Αν το δεδομένο `value` είναι `κείμενο` με σύμβολο μετά τοις εκατό, τότε ο δεκαδικός αριθμός που έχει μετατραπεί θα επιστραφεί. Διαφορετικά, η τιμή θα μετατραπεί σε `number` χρησιμοποιώντας το `Number.From`. Μπορεί επίσης να παρέχεται ένα προαιρετικό `culture` (για παράδειγμα, "en-US").


## Examples

### Example #1
Λάβετε την τιμή `percentage` του `"12,3%"`.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
