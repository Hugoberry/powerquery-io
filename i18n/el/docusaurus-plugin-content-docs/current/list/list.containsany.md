---
title: List.ContainsAny
---

# List.ContainsAny


Υποδεικνύει αν μια λίστα περιλαμβάνει οποιαδήποτε από τις τιμές μιας άλλης λίστας.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Υποδεικνύει εάν η λίστα περιέχει οποιαδήποτε από τις τιμές από μια άλλη λίστα. Επιστρέφει `αληθής` εάν οι τιμές βρίσκονται στη λίστα, διαφορετικά, `ψευδής`.

-   `list`: Η λίστα προς αναζήτηση.
-   `values`: Η λίστα τιμών για αναζήτηση στην πρώτη λίστα.
-   `equationCriteria`: (Προαιρετικό) Η σύγκριση που χρησιμοποιείται για να προσδιοριστεί εάν δύο τιμές είναι ίσες.


## Examples

### Example #1
Προσδιορίστε αν η λίστα \{1, 2, 3, 4, 5\} περιέχει 3 ή 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Προσδιορίστε αν η λίστα \{1, 2, 3, 4, 5\} περιέχει 6 ή 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Προσδιορίστε αν η λίστα περιέχει ένα άλογο ή μια κουκουβάγια, παραβλέποντας τα πεζά-κεφαλαία.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Προσδιορίστε εάν η λίστα περιέχει ημερομηνία 8 Απριλίου 2022 ή 12 Ιανουαρίου 2021.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAny(Source, {Date.From("Apr 8, 2022"), Date.From("Jan 11, 2021")})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
