---
title: List.MatchesAny
---

# List.MatchesAny


Retourneert 'true' als er door een willekeurige waarde wordt voldaan aan de voorwaardefunctie.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Retourneert `waar` als aan de voorwaardefunctie wordt voldaan door een van de waarden in de lijst, anders wordt `onwaar` geretourneerd.

-   `list`: de lijst met de te controleren waarden.
-   `condition`: de voorwaarde die moet worden gecontroleerd op basis van de waarden in de lijst.


## Examples

### Example #1
Bepaal of een van de waarden in de lijst \{9, 10, 11\} groter is dan 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Bepaal of een van de waarden in de lijst \{1, 2, 3\} groter is dan 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Bepaal of een van de tekstwaarden in de lijst 'kat' bevat en negeer daarbij hoofdletters.
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
Bepaal of een van de datums het jaar 2021 bevat.
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
