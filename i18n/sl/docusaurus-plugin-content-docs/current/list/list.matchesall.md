---
title: List.MatchesAll
---

# List.MatchesAll


Vrne"true", če je funkcija"condition"zadovoljna z vsemi vrednostmi na seznamu.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Vrne `true` če je funkcija pogoja zadovoljena za vse vrednosti na seznamu, sicer vrne `false`.

-   `list`: Seznam, ki vsebuje vrednosti za preverjanje.
-   `condition`: Pogoj, s katerim se preverjajo vrednosti na seznamu.


## Examples

### Example #1
Ugotovite, ali so vse vrednosti na seznamu \{11, 12, 13\} večje od 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Ugotovite, ali so vse vrednosti na seznamu \{1, 2, 3\} večje od 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Ugotovite, ali vse besedilne vrednosti na seznamu vsebujejo"anna", pri tem pa prezrite velike in male črke.
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
Ugotovite, ali vsi datumi vključujejo leto 2021.
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
