---
title: List.ContainsAll
---

# List.ContainsAll


Indica se uma lista inclui todos os valores existentes noutra lista.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica se a lista inclui todos os valores de outra lista. Devolve `verdadeiro` se todos os valores forem encontrados na lista, `falso` caso contrário.

-   `list`: a lista a procurar.
-   `values`: a lista de valores a procurar na primeira lista.
-   `equationCriteria`: (Opcional) O comparador utilizado para determinar se dois valores são iguais.


## Examples

### Example #1
Determinar se a lista \{1, 2, 3, 4, 5\} contém 3 e 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Determinar se a lista \{1, 2, 3, 4, 5\} contém 5 e 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Determinar se a lista contém um cão e um cavalo, ignorando maiúsculas e minúsculas.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Determinar se a lista contém as datas de 8 de abril de 2022 e 6 de julho de 2021.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAll(Source, {#date(2022, 4, 8), #date(2021, 7, 6)})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
