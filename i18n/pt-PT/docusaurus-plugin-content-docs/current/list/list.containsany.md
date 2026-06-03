---
title: List.ContainsAny
---

# List.ContainsAny


Indica se uma lista inclui qualquer um dos valores existentes noutra lista.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica se a lista contém qualquer um dos valores de outra lista. Devolve `true` se os valores forem encontrados na lista, `false` caso contrário.

-   `list`: a lista a procurar.
-   `values`: a lista de valores a procurar na primeira lista.
-   `equationCriteria`: (Opcional) O comparador utilizado para determinar se dois valores são iguais.


## Examples

### Example #1
Determinar se a lista \{1, 2, 3, 4, 5\} contém 3 ou 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Determinar se a lista \{1, 2, 3, 4, 5\} contém 6 ou 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Determinar se a lista contém um cavalo ou uma coruja, ignorando maiúsculas e minúsculas.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Determine se a lista contém uma data de 8 de abril de 2022 ou 12 de janeiro de 2021.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAny(Source, {Date.From("Apr 8, 2022"), Date.From("Jan 11, 2021")})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
