---
title: Byte.From
---

# Byte.From


Δημιουργεί έναν ακέραιο 8-bit από τη δεδομένη τιμή.


## Syntax

```powerquery
Byte.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Επιστρέφει μια ακέραια τιμή 8-bit `number` από το δεδομένο `value`. Αν το δεδομένο `value` είναι `null`, το `Byte.From` επιστρέφει `null`. Εάν το δεδομένο `value` είναι ένας `number` εντός του εύρους ενός ακέραιου αριθμού 8-bit χωρίς κλασματικό μέρος, επιστρέφεται `value`. Εάν έχει κλασματικό τμήμα, τότε ο αριθμός στρογγυλοποιείται με τον καθορισμένο τρόπο στρογγυλοποίησης. Η προεπιλεγμένη λειτουργία στρογγυλοποίησης είναι `RoundingMode.ToEven`. Αν `value` είναι οποιουδήποτε άλλου τύπου, θα μετατραπεί πρώτα σε `αριθμός` χρησιμοποιώντας το `Number.FromText`. Ανατρέξτε στο `Number.Round` για τις διαθέσιμες λειτουργίες στρογγυλοποίησης. Μπορεί επίσης να παρέχεται ένα προαιρετικό `culture` (για παράδειγμα, "en-US").


## Examples

### Example #1
Λάβετε την τιμή ακέραιου 8 bit `number` του `"4"`.
```powerquery
Byte.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Λάβετε την τιμή ακέραιου 8 bit `number` του `"4.5"` χρησιμοποιώντας το `RoundingMode.AwayFromZero`.
```powerquery
Byte.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
