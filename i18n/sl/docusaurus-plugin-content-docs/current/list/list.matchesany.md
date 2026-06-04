---
title: List.MatchesAny
---

# List.MatchesAny


Vrne"true", če je funkcija"condition"zadovoljna s katero koli vrednostjo.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Vrne `true`, če je funkcija pogoja zadovoljena za katero koli od vrednosti na seznamu, sicer vrne`false`.

-   `list`: Seznam, ki vsebuje vrednosti za preverjanje.
-   `condition`: Pogoj, s katerim se preverjajo vrednosti na seznamu.


## Examples

### Example #1
Ugotovite, ali je katera od vrednosti na seznamu \{9, 10, 11\} večja od 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Ugotovite, ali je katera od vrednosti na seznamu \{1, 2, 3\} večja od 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Ugotovite, ali katere koli od besedilnih vrednosti na seznamu vsebujejo"cat", pri tem pa prezrite velike in male črke.
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
Ugotovite, ali kateri od datumov vsebuje leto 2021.
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
