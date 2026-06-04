---
title: List.MatchesAll
---

# List.MatchesAll


Returnează true dacă funcţia de condiţionare este îndeplinită de toate valorile din listă.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Returnează `true` dacă funcția condiției este îndeplinită de toate valorile din listă, altfel returnează `false`.

-   `list`: lista care conține valorile de verificat.
-   `condition`: condiția de verificat în raport cu valorile din listă.


## Examples

### Example #1
Determinaţi dacă toate valorile din lista \{11, 12, 13\} sunt mai mari decât 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Determinaţi dacă toate valorile din lista \{1, 2, 3\} sunt mai mari decât 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Aflați dacă toate valorile text din listă conțin „anna” în timp ce se ignoră literele mari și mici.
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
Aflați dacă toate datele conțin anul 2021.
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
