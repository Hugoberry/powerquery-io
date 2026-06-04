---
title: List.MatchesAny
---

# List.MatchesAny


Returnează true dacă funcţia de condiţionare este îndeplinită de orice valoare.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Returnează `true` dacă funcția condiției este îndeplinită de oricare dintre valorile din listă, altfel returnează `false`.

-   `list`: lista care conține valorile de verificat.
-   `condition`: condiția de verificat în raport cu valorile din listă.


## Examples

### Example #1
Aflați dacă oricare dintre valorile din lista \{9, 10, 11\} este mai mare decât 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Aflați dacă oricare dintre valorile din lista \{1, 2, 3\} sunt mai mari decât 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Aflați dacă oricare dintre valorile text din listă conțin „pisică” în timp ce se ignoră literele mari și mici.
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
Aflați dacă oricare dintre date conține anul 2021.
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
