---
title: List.MatchesAny
---

# List.MatchesAny


Vraća „true“ ako bilo koja vrednost zadovolji funkciju uslova.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Vraća `true` ako je funkcija uslova zadovoljna bilo kojim vrednostima na listi, u suprotnom vraća `false`.

-   `list`: Lista koja sadrži vrednosti koje treba proveriti.
-   `condition`: Uslov koji treba proveriti u odnosu na vrednosti na listi.


## Examples

### Example #1
Odredite da li je bilo koja vrednost sa liste \{9, 10, 11\} veća od 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Odredite da li je bilo koja vrednost sa liste \{1, 2, 3\} veća od 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Utvrđivanje da li bilo koja tekstualna vrednost u listi sadrži reč „mačka“ prilikom zanemarivanja malih i velikih slova.
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
Utvrdi da li neki od datuma sadrži godinu 2021.
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
