---
title: List.MatchesAll
---

# List.MatchesAll


Retourneert 'true' als er door alle waarden uit de lijst wordt voldaan aan de voorwaardefunctie.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Retourneert `waar` als er door alle waarden uit de lijst wordt voldaan aan de voorwaardefunctie, of retourneert `onwaar` als dat niet het geval is.

-   `list`: de lijst met de te controleren waarden.
-   `condition`: de voorwaarde die moet worden gecontroleerd op basis van de waarden in de lijst.


## Examples

### Example #1
Bepalen of alle waarden in de lijst \{11, 12, 13\} groter zijn dan 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Bepalen of alle waarden in de lijst \{1, 2, 3\} groter zijn dan 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Bepaal of alle tekstwaarden in de lijst 'anna' bevatten terwijl hoofdletters worden genegeerd.
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
Bepalen of alle datums het jaar 2021 bevatten.
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
