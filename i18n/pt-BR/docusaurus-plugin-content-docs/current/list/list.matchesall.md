---
title: List.MatchesAll
---

# List.MatchesAll


Retornará true se a função condition for atendida por todos os valores da lista.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Retorna `true` se a função de condição for atendida por todos os valores da lista; caso contrário, retorna `false`.

-   `list`: a lista que contém os valores a serem verificados.
-   `condition`: a condição a ser verificada em relação aos valores na lista.


## Examples

### Example #1
Determine se todos os valores da lista \{11, 12, 13\} serão maiores que 10.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Determine se todos os valores da lista \{1, 2, 3\} serão maiores que 10.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Determine se todos os valores de texto na lista contêm "anna" ao ignorar maiúsculas e minúsculas.
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
Determine se todas as datas contêm o ano de 2021.
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
