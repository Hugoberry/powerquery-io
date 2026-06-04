---
title: List.MatchesAny
---

# List.MatchesAny


Devolve verdadeiro se un valor satisfai á función de condición.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Devolve `verdadeiro` se a función de condición é cumprida por calquera dos valores da lista; en caso contrario, devolve `falso`.

-   `list`: A lista que contén os valores a comprobar.
-   `condition`: A condición para comprobar cos valores da lista.


## Examples

### Example #1
Determina se algún dos valores da lista \{9, 10, 11\} é maior que 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Determina se algún dos valores da lista \{1, 2, 3\} é maior que 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Determina se algún dos valores de texto da lista contén "gato" ignorando maiúsculas e minúsculas.
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
Comproba se algunha das datas contén o ano 2021.
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
