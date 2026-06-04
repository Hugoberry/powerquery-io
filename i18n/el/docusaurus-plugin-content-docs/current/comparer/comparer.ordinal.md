---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Επιστρέφει μια συνάρτηση σύγκρισης που χρησιμοποιεί τακτικούς κανόνες για τη σύγκριση τιμών.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Επιστρέφει μια συνάρτηση σύγκρισης που χρησιμοποιεί Κανόνες Τακτικής για να συγκρίνει τις παρεχόμενες τιμές `x` και `y`.  
  
Μια συνάρτηση σύγκρισης δέχεται δύο ορίσματα και επιστρέφει -1, 0 ή 1 με βάση το αν η πρώτη τιμή είναι μικρότερη, ίση ή μεγαλύτερη από τη δεύτερη.


## Examples

### Example #1
Χρησιμοποιώντας τακτικούς κανόνες, συγκρίνετε αν τα "encyclopædia" και "encyclopaedia" είναι ισοδύναμα. Σημειώστε ότι είναι ισοδύναμα με τη χρήση `Comparer.FromCulture("en-US")`.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
