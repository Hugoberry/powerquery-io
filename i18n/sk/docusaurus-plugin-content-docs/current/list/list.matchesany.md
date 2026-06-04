---
title: List.MatchesAny
---

# List.MatchesAny


Vráti hodnotu True, ak funkciu podmienky spĺňa ľubovoľná hodnota.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Vráti `true` ak je funkcia podmienky splnená niektorou z hodnôt v zozname, v opačnom prípade vráti hodnotu `false`.

-   `list`: Zoznam obsahujúci hodnoty, ktoré sa majú skontrolovať.
-   `condition`: Podmienka na kontrolu hodnôt v zozname.


## Examples

### Example #1
Určte, či niektorá z hodnôt v zozname \{9, 10, 11\} je väčšia ako 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Určte, či niektorá z hodnôt v zozname \{1, 2, 3\} je väčšia ako 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Určte, či niektoré textové hodnoty v zozname obsahujú slovo mačka, pričom sa ignorujú malé a veľké písmená.
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
Určte, či niektorý z dátumov obsahuje rok 2021.
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
