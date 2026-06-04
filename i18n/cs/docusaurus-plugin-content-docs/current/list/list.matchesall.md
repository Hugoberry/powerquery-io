---
title: List.MatchesAll
---

# List.MatchesAll


Vrátí hodnotu True, pokud funkci podmínky splňují všechny hodnoty v seznamu.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Vrátí hodnotu `true`, pokud funkci podmínky splňují všechny hodnoty v seznamu, jinak vrátí hodnotu `false`.

-   `list`: Seznam obsahující hodnoty, které se mají zkontrolovat
-   `condition`: Podmínka, která se má zkontrolovat oproti hodnotám v seznamu


## Examples

### Example #1
Určí, zda jsou všechny hodnoty v seznamu \{11, 12, 13\} větší než 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Určí, zda jsou všechny hodnoty v seznamu \{1, 2, 3\} větší než 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Zjistit, jestli všechny textové hodnoty v seznamu obsahují text „anna“ při ignorování velkých a malých písmen
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
Zjistit, jestli všechna kalendářní data obsahují rok 2021
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
