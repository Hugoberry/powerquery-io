---
title: List.ContainsAny
---

# List.ContainsAny


Indica onde a lista inclúe calquera dos valores doutra lista.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica se a lista contén algún dos valores doutra lista. Devolve `verdadeiro` se os valores se atopan na lista, `falso` se non.

-   `list`: A lista a buscar.
-   `values`: A lista de valores a buscar na primeira lista.
-   `equationCriteria`: (Opcional) O comparador usado para determinar se dous valores son iguais.


## Examples

### Example #1
Determina se a lista \{1, 2, 3, 4, 5\} contén 3 ou 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Determina se a lista \{1, 2, 3, 4, 5\} contén 6 ou 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Determina se a lista contén un cabalo e unha curuxa, ignorando as maiúsculas.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Determina se a lista contén unha data do 8 de abril de 2022 ou do 12 de xaneiro de 2021.
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
