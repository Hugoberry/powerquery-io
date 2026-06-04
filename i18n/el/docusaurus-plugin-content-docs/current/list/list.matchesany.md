---
title: List.MatchesAny
---

# List.MatchesAny


Επιστρέφει την τιμή true εάν η συνάρτηση συνθήκης ικανοποιείται από οποιαδήποτε τιμή.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Επιστρέφει την τιμή `true` εάν η συνάρτηση συνθήκης ικανοποιείται από οποιαδήποτε τιμή της λίστας, διαφορετικά επιστρέφει την τιμή `false`.

-   `list`: Η λίστα που περιέχει τις τιμές προς έλεγχο.
-   `condition`: Η συνθήκη που θα ελεγχθεί με βάση τις τιμές της λίστας.


## Examples

### Example #1
Προσδιορίστε εάν όλες οι τιμές στη λίστα \{9, 10, 11\} είναι μεγαλύτερες από 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Προσδιορίστε εάν όλες οι τιμές στη λίστα \{1, 2, 3\} είναι μεγαλύτερες από 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Προσδιορίστε εάν οποιαδήποτε τιμή κειμένου στη λίστα περιέχει τη λέξη "γάτα" παραβλέποντας τη διάκριση πεζών-κεφαλαίων.
```powerquery
let
    Source = {"A Brown Fox", "A Loyal Dog", "A Curious Cat", "A Wild Horse", "A Rascally Rabbit"},
    Result = List.MatchesAny(Source, each Text.Contains(_, "cat", Comparer.OrdinalIgnoreCase))
in
    Result
```

Result: 
```powerquery
true
```


### Example #4
Ελέγξτε εάν οποιαδήποτε ημερομηνία περιέχει το έτος 2021.
```powerquery
let
    Source = {#date(2024, 11, 28), #date(2023, 1, 14), #date(2021, 12, 31), #date(2025, 7, 6)},
    Result = List.MatchesAny(Source, each Date.Year(_) = 2021)
in
    Result
```

Result: 
```powerquery
true
```




## Category
List.Selection
