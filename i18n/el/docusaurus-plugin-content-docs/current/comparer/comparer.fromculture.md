---
title: Comparer.FromCulture
---

# Comparer.FromCulture


Επιστρέφει μια συνάρτηση σύγκρισης με βάση την καθορισμένη κουλτούρα και την ευαισθησία πεζών-κεφαλαίων.


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

Επιστρέφει μια συνάρτηση σύγκρισης που χρησιμοποιεί το `culture` και την ευαισθησία πεζών-κεφαλαίων που καθορίζεται από `ignoreCase` για την εκτέλεση συγκρίσεων..  
  
Μια συνάρτηση σύγκρισης δέχεται δύο ορίσματα και επιστρέφει -1, 0 ή 1 με βάση το αν η πρώτη τιμή είναι μικρότερη, ίση ή μεγαλύτερη από τη δεύτερη.  
  
Η προεπιλεγμένη τιμή για `ignoreCase` είναι false. Το `culture` θα πρέπει να είναι μία από τις τοπικές ρυθμίσεις που υποστηρίζονται από το πλαίσιο .NET (για παράδειγμα, "en-US").


## Examples

### Example #1
Συγκρίνετε το "a" και το "A" χρησιμοποιώντας τις τοπικές ρυθμίσεις "en-US" για να προσδιορίσετε αν οι τιμές είναι ίσες.
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2
Συγκρίνετε το "a" και το "A" χρησιμοποιώντας τις τοπικές ρυθμίσεις "en-US", παραβλέποντας τη διάκριση πεζών-κεφαλαίων για να προσδιορίσετε αν οι τιμές είναι ίσες.
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
