---
title: List.ContainsAll
---

# List.ContainsAll


Υποδεικνύει αν μια λίστα περιλαμβάνει όλες τις τιμές μιας άλλης λίστας.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Υποδεικνύει εάν η λίστα περιλαμβάνει όλες τις τιμές από μια άλλη λίστα. Επιστρέφει `αληθής` εάν όλες οι τιμές βρίσκονται στη λίστα, διαφορετικά, `ψευδής`.

-   `list`: Η λίστα προς αναζήτηση.
-   `values`: Η λίστα τιμών για αναζήτηση στην πρώτη λίστα.
-   `equationCriteria`: (Προαιρετικό) Η σύγκριση που χρησιμοποιείται για να προσδιοριστεί εάν δύο τιμές είναι ίσες.


## Examples

### Example #1
Προσδιορίστε αν η λίστα \{1, 2, 3, 4, 5\} περιέχει 3 και 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Προσδιορίστε εάν η λίστα \{1, 2, 3, 4, 5\} περιέχει 5 και 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Προσδιορίστε αν η λίστα περιέχει ένα σκυλί και ένα άλογο, παραβλέποντας τα πεζά-κεφαλαία.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Προσδιορίστε εάν η λίστα περιέχει τις ημερομηνίες 8 Απριλίου 2022 και 6 Ιουλίου 2021.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAll(Source, {#date(2022, 4, 8), #date(2021, 7, 6)})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
