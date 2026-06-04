---
title: Currency.From
---

# Currency.From


Επιστρέφει μια τιμή νομισματικής μονάδας από τη δεδομένη τιμή.


## Syntax

```powerquery
Currency.From(
    value as any,
    optional culture as text,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Επιστρέφει μια τιμή `currency` από το δεδομένο `value`. Αν το δεδομένο `value` είναι `null`, το `Currency.From` επιστρέφει `null`. Αν το δεδομένο `value` είναι `number` εντός του εύρους νομίσματος, κλασματικό μέρος του `value` στρογγυλοποιείται σε 4 δεκαδικά ψηφία και επιστρέφεται. Αν `value` είναι οποιουδήποτε άλλου τύπου, θα μετατραπεί πρώτα σε `number` χρησιμοποιώντας το `Number.FromText`. Το έγκυρο εύρος για το νόμισμα είναι `-922,337,203,685,477,5808` έως `922,337,203,685,477,5807`. Ανατρέξτε στο `Number.Round` για τις διαθέσιμες λειτουργίες στρογγυλοποίησης. Η προεπιλογή είναι `RoundingMode.ToEven`. Μπορεί επίσης να παρέχεται ένα προαιρετικό `culture` (για παράδειγμα, "en-US").


## Examples

### Example #1
Λάβετε την τιμή `currency` του `"1.23455"`.
```powerquery
Currency.From("1.23455")
```

Result: 
```powerquery
1.2346
```


### Example #2
Λάβετε την τιμή `currency` του `"1.23455"` χρησιμοποιώντας το `RoundingMode.Down`.
```powerquery
Currency.From("1.23455", "en-US", RoundingMode.Down)
```

Result: 
```powerquery
1.2345
```




## Category
Number.Conversion and formatting
