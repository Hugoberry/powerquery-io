---
title: List.Contains
---

# List.Contains


Indica se a lista contém o valor.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica se a lista contém o valor especificado. Devolve `true` se o valor for encontrado na lista, `false` caso contrário.

-   `list`: a lista a procurar.
-   `value`: o valor a procurar na lista.
-   `equationCriteria`: (Opcional) O comparador utilizado para determinar se dois valores são iguais.


## Examples

### Example #1
Determinar se a lista \{1, 2, 3, 4, 5\} contém 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Determinar se a lista \{1, 2, 3, 4, 5\} contém 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
A ignorar o caso; determine se a lista contém "rhubarb".
```powerquery
List.Contains({"Pears", "Bananas", "Rhubarb", "Peaches"},
    "rhubarb",
    Comparer.OrdinalIgnoreCase
)
```

Result: 
```powerquery
true
```


### Example #4
Determinar se a lista contém a data de 8 de abril de 2022.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDate = List.Contains(Source, Date.From("4/8/2022"))
in
    ContainsDate
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
