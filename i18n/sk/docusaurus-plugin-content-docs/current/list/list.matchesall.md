---
title: List.MatchesAll
---

# List.MatchesAll


Vráti hodnotu True, ak funkciu podmienky spĺňajú všetky hodnoty v zozname.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Vráti kód `true` ak je funkcia podmienky splnená všetkými hodnotami v zozname, v opačnom prípade vráti kód `false`.

-   `list`: Zoznam obsahujúci hodnoty, ktoré sa majú skontrolovať.
-   `condition`: Podmienka na kontrolu hodnôt v zozname.


## Examples

### Example #1
Určte, či všetky hodnoty v zozname \{11, 12, 13\} sú väčšie ako 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Určte, či všetky hodnoty v zozname \{1, 2, 3\} sú väčšie ako 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Určte, či všetky textové hodnoty v zozname obsahujú slovo anna, pričom sa ignorujú malé a veľké písmená.
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
Určte, či všetky dátumy obsahujú rok 2021.
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
