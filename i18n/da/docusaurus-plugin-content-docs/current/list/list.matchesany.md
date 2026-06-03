---
title: List.MatchesAny
---

# List.MatchesAny


Returnerer true, hvis betingelsesfunktionen er tilfreds med en hvilken som helst værdi.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Returnerer `true`, hvis betingelsesfunktionen er tilfreds med en hvilken som helst værdi på listen. Ellers returneres `false`.

-   `list`: Listen, der indeholder de værdier, der skal kontrolleres.
-   `condition`: Betingelsen, der skal kontrolleres i forhold til værdierne på listen.


## Examples

### Example #1
Find ud af, om nogen af værdierne på listen \{9, 10, 11\} er større end 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Find ud af, om nogen af værdierne på listen \{1, 2, 3\} er større end 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Find ud af, om nogen af tekstværdierne på listen indeholder "cat", mens der ikke skelnes mellem store og små bogstaver.
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
Find ud af, om nogen af datoerne indeholder året 2021.
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
