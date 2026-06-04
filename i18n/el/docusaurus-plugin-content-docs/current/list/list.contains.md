---
title: List.Contains
---

# List.Contains


Υποδεικνύει αν η λίστα περιέχει την τιμή.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Υποδεικνύει εάν η λίστα περιέχει την καθορισμένη τιμή. Επιστρέφει `αληθής` εάν η τιμή βρίσκεται στη λίστα, διαφορετικά, `ψευδής`.

-   `list`: Η λίστα προς αναζήτηση.
-   `value`: Η τιμή για αναζήτηση στη λίστα.
-   `equationCriteria`: (Προαιρετικό) Η σύγκριση που χρησιμοποιείται για να προσδιοριστεί εάν δύο τιμές είναι ίσες.


## Examples

### Example #1
Προσδιορίστε αν η λίστα \{1, 2, 3, 4, 5\} περιέχει 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Προσδιορίστε αν η λίστα \{1, 2, 3, 4, 5\} περιέχει 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
Παράβλεψη πεζών-κεφαλαίων, προσδιορίστε εάν η λίστα περιέχει "rhubarb".
```powerquery
List.Contains({"Pears", "Bananas", "Rhubarb", "Peaches"},
    "rhubarb",
    Comparer.OrdinalIgnoreCase
)
```

Result: 
```powerquery
true
```


### Example #4
Προσδιορίστε αν η λίστα περιέχει την ημερομηνία 8 Απριλίου 2022.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDate = List.Contains(Source, Date.From("4/8/2022"))
in
    ContainsDate
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
