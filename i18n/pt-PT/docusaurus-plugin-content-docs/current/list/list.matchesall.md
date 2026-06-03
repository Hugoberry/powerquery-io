---
title: List.MatchesAll
---

# List.MatchesAll


Devolve true se a função de condição for satisfeita por todos os valores existentes na lista.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Devolve `true` se a função de condição for satisfeita por todos os valores na lista, caso contrário, devolve `false`.

-   `list`: a lista que contém os valores a verificar.
-   `condition`: a condição a verificar em relação aos valores na lista.


## Examples

### Example #1
Determinar se todos os valores existentes na lista \{11, 12, 13\} são maiores que 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Determinar se todos os valores existentes na lista \{1, 2, 3\} são maiores que 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Determine se todos os valores de texto na lista contêm "anna" ao ignorar a capitalização.
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
Determine se todas as datas contêm o ano 2021.
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
