---
title: List.MatchesAll
---

# List.MatchesAll


Vraća „true“ ako sve vrednosti sa liste zadovolje funkciju uslova.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Vraća `true` ako funkcija uslova zadovoljava sve vrednosti u listi, u suprotnom vraća `false`.

-   `list`: Lista koja sadrži vrednosti koje treba proveriti.
-   `condition`: Uslov koji treba proveriti u odnosu na vrednosti na listi.


## Examples

### Example #1
Utvrđivanje da li su sve vrednosti sa liste \{11, 12, 13\} veće od 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Utvrđivanje da li su sve vrednosti sa liste \{1, 2, 3\} veće od 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Utvrđivanje da li sve tekstualne vrednosti u listi sadrže reč „anna“ prilikom zanemarivanja malih i velikih slova.
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
Utvrditi da li svi datumi sadrže godinu 2021.
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
