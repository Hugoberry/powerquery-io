---
title: List.MatchesAll
---

# List.MatchesAll


Επιστρέφει την τιμή true εάν η συνάρτηση συνθήκης ικανοποιείται από όλες τις τιμές της λίστας.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Επιστρέφει την τιμή `true` εάν η συνάρτηση συνθήκης ικανοποιείται από όλες τις τιμές της λίστας, διαφορετικά επιστρέφει την τιμή `false`.

-   `list`: Η λίστα που περιέχει τις τιμές προς έλεγχο.
-   `condition`: Η συνθήκη που θα ελεγχθεί με βάση τις τιμές της λίστας.


## Examples

### Example #1
Προσδιορίστε αν όλες οι τιμές της λίστας \{11, 12, 13\} είναι μεγαλύτερες του 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Προσδιορίστε αν όλες οι τιμές της λίστας \{1, 2, 3\} είναι μεγαλύτερες του 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Προσδιορίστε εάν όλες οι τιμές κειμένου στη λίστα περιέχουν τη λέξη "άννα" παραβλέποντας τη διάκριση πεζών-κεφαλαίων.
```powerquery
let
    Source = {"Savannah", "Annabelle", "Annals", "wannabe", "MANNA"},
    Result = List.MatchesAll(Source, each Text.Contains(_, "anna", Comparer.OrdinalIgnoreCase))
in
    Result
```

Result: 
```powerquery
true
```


### Example #4
Ελέγξτε εάν όλες οι ημερομηνίες περιέχουν το έτος 2021.
```powerquery
let
    Source = {#date(2021, 11, 28), #date(2021, 1, 14), #date(2021, 12, 31), #date(2021, 7, 6)},
    Result = List.MatchesAll(Source, each Date.Year(_) = 2021)
in
    Result
```

Result: 
```powerquery
true
```




## Category
List.Selection
