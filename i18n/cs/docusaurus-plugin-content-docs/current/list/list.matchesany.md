---
title: List.MatchesAny
---

# List.MatchesAny


Vrátí hodnotu True, pokud funkci podmínky splňuje jakákoliv hodnota v seznamu.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Vrátí hodnotu `true`, pokud funkci podmínky splňuje jakákoliv hodnota v seznamu, jinak vrátí hodnotu `false`.

-   `list`: Seznam obsahující hodnoty, které se mají zkontrolovat
-   `condition`: Podmínka, která se má zkontrolovat oproti hodnotám v seznamu


## Examples

### Example #1
Zjistit, jestli je některá z hodnot v seznamu \{9, 10, 11\} větší než 10
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Zjistit, jestli je některá z hodnot v seznamu \{1, 2, 3\} větší než 10
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Zjistit, jestli některá z textových hodnot v seznamu obsahuje text „cat“ při ignorování velkých a malých písmen
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
Zjistit, jestli některé z kalendářních dat obsahuje rok 2021
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
