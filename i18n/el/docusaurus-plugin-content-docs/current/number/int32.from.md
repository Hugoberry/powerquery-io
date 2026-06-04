---
title: Int32.From
---

# Int32.From


Δημιουργεί έναν ακέραιο 32 bit από την παρεχόμενη τιμή.


## Syntax

```powerquery
Int32.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Επιστρέφει μια τιμή ακέραιου `number` 32 bit από το δεδομένο `value`. Αν το δεδομένο `value` είναι `null`, το `Int32.From` επιστρέφει `null`. Αν το δεδομένο `value` είναι `number` εντός του εύρους ακέραιου αριθμού 32 bit χωρίς κλασματικό τμήμα, επιστρέφεται `value`. Αν έχει κλασματικό τμήμα, τότε ο αριθμός στρογγυλοποιείται με τον καθορισμένο τρόπο στρογγυλοποίησης. Η προεπιλεγμένη λειτουργία στρογγυλοποίησης είναι `RoundingMode.ToEven`. Αν `value` είναι οποιουδήποτε άλλου τύπου, θα μετατραπεί πρώτα σε `number` χρησιμοποιώντας το `Number.FromText`. Ανατρέξτε στο `Number.Round` για τις διαθέσιμες λειτουργίες στρογγυλοποίησης. Μπορεί επίσης να παρέχεται ένα προαιρετικό `culture`(για παράδειγμα, "en-US").


## Examples

### Example #1
Λάβετε την τιμή ακέραιου 32 bit `number` του `"4"`.
```powerquery
Int32.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Λάβετε την τιμή ακέραιου 32 bit `number` του `"4.5"` χρησιμοποιώντας το `RoundingMode.AwayFromZero`.
```powerquery
Int32.From("4.5", null, RoundingMode.AwayFromZero)
```

Result: 
```powerquery
5
```




## Category
Number.Conversion and formatting
