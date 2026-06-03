---
title: List.MatchesAll
---

# List.MatchesAll


Returnerer true, hvis betingelsesfunktionen er tilfreds med alle værdier på listen.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Returnerer `true`, hvis betingelsesfunktionen er tilfreds med alle værdier på listen. Ellers returneres `false`.

-   `list`: Listen, der indeholder de værdier, der skal kontrolleres.
-   `condition`: Betingelsen, der skal kontrolleres i forhold til værdierne på listen.


## Examples

### Example #1
Find ud af, om alle værdierne på listen \{11, 12, 13\} er større end 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Find ud af, om alle værdierne på listen \{1, 2, 3\} er større end 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Find ud af, om alle tekstværdierne på listen indeholder "anna", mens der ikke skelnes mellem store og små bogstaver.
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
Find ud af, om alle datoer indeholder året 2021.
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
