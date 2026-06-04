---
title: List.ContainsAll
---

# List.ContainsAll


Indica onde a lista inclúe todos os valores doutra lista.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica se a lista inclúe todos os valores doutra lista. Devolve `verdadeiro` se todos os valores se atopan na lista, `falso` se non.

-   `list`: A lista a buscar.
-   `values`: A lista de valores a buscar na primeira lista.
-   `equationCriteria`: (Opcional) O comparador usado para determinar se dous valores son iguais.


## Examples

### Example #1
Determina se a lista \{1, 2, 3, 4, 5\} contén 3 e 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Determina se a lista \{1, 2, 3, 4, 5\} contén 5 e 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Determina se a lista contén un can e un cabalo, ignorando as maiúsculas.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Determina se a lista contén as datas do 8 de abril de 2022 e do 6 de xullo de 2021.
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
