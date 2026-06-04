---
title: List.MatchesAll
---

# List.MatchesAll


Tiek atgriezta vērtība True, ja visas saraksta vērtības atbilst nosacījuma funkcijai.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Tiek atgriezta vērtība `true`, ja visas saraksta vērtības atbilst nosacījuma funkcijai, pretējā gadījumā tiek atgriezta vērtība `false`.

-   `list`: Saraksts, kurā ir vērtības, kuras jāpārbauda.
-   `condition`: Nosacījums, kas jāpārbauda attiecībā uz saraksta vērtībām.


## Examples

### Example #1
Nosakiet, vai visas saraksta \{11, 12, 13\} vērtības ir lielākas par 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Nosakiet, vai visas saraksta \{1, 2, 3\} vērtības ir lielākas par 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Nosakiet, vai visas saraksta teksta vērtības satur "anna", ignorējot reģistru.
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
Nosakiet, vai visos datumos ir 2021. gads.
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
