---
title: List.MatchesAll
---

# List.MatchesAll


Devolve verdadeiro se todos os valores da lista satisfán á función de condición.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Devolve `verdadeiro` se a función de condición é cumprida por todos os valores da lista; en caso contrario, devolve `falso`.

-   `list`: A lista que contén os valores a comprobar.
-   `condition`: A condición para comprobar cos valores da lista.


## Examples

### Example #1
Determinar se todos os valores da lista \{11, 12, 13\} son maiores que 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Determinar se todos os valores da lista \{1, 2, 3\} son maiores que 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Determina se todos os valores de texto da lista conteñen "anna" ignorando maiúsculas e minúsculas.
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
Determina se todas as datas conteñen o ano 2021.
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
