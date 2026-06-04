---
title: List.MaxN
---

# List.MaxN


Devolve o(s) valor(es) máximo(s) da lista. Débese especificar o número de valores que se devolverán ou unha condición de filtro.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Devolve o(s) valor(es) máximo(s) da lista especificada. Despois de ordenar as filas, pódense especificar parámetros opcionais para filtrar aínda máis o resultado.

-   `list` : A lista de valores.
-   `countOrCondition` : Especifica o número de valores que se devolverán ou unha condición de filtro. Se se especifica un número, devolverase unha lista de ata `countOrCondition` elementos en orde decrecente. Se se especifica unha condición, a lista devolvida inclúe todos os elementos que a cumpren.
-   `comparisonCriteria` : (Opcional) Unha función que se usa para transformar os valores antes de comparalos. Se este parámetro é `null`, os valores compáranse sen ningunha transformación.
-   `includeNulls` : (Opcional) Indica se os valores `null` da lista deben incluírse para determinar o elemento máximo. O valor predeterminado é `true`.


## Examples

### Example #1
Atope os 5 valores principais da lista especificada.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
Atope as palabras con máis de 3 caracteres.
```powerquery
List.MaxN(
    {"boy", "dog", "pony", "cat", "rabbit", "bat"},
    each Text.Length(_) > 3
)
```

Result: 
```powerquery
{"rabbit", "pony"}
```


### Example #3
Atope as tres datas máis recentes dunha lista de datas alemás.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.MaxN(Source, 3, each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
{
    "15.05.2025",
    "16.01.2025",
    "12.02.2024"
}
```




## Category
List.Ordering
