---
title: List.MatchesAny
---

# List.MatchesAny


Retornará true se a função condition for atendida por qualquer valor.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Retorna `true` se a função de condição for atendida por qualquer um dos valores na lista; caso contrário, retorna `false`.

-   `list`: a lista que contém os valores a serem verificados.
-   `condition`: a condição a ser verificada em relação aos valores na lista.


## Examples

### Example #1
Determine se algum dos valores na lista \{9, 10, 11\} é maior que 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Determine se algum dos valores na lista \{1, 2, 3\} é maior que 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Determine se algum dos valores de texto na lista contém "gato" ao ignorar maiúsculas e minúsculas.
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
Determine se alguma das datas contém o ano de 2021.
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
