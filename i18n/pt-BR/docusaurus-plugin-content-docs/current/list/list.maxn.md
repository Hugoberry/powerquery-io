---
title: List.MaxN
---

# List.MaxN


Retorna o(s) valor(es) máximo(s) na lista. O número de valores a serem retornados ou uma condição de filtro deve ser especificado.


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

Retorna o(s) valor(es) máximo(s) na lista especificada. Após classificar as linhas, é possível especificar parâmetros opcionais para filtrar ainda mais o resultado.

-   `list`: A lista de valores.
-   `countOrCondition`: Especifica o número de valores a serem retornados ou uma condição de filtro. Se um número for especificado, uma lista de até `countOrCondition` itens em ordem decrescente será retornada. Se uma condição for especificada, a lista retornada incluirá todos os itens que atenderem à condição.
-   `comparisonCriteria`: (Opcional) Uma função usada para transformar os valores antes de serem comparados. Se este parâmetro for `null`, os valores serão comparados sem qualquer transformação.
-   `includeNulls`: (Opcional) Indica se os valores `null` na lista devem ser incluídos na determinação do item máximo. O valor padrão é `true`.


## Examples

### Example #1
Localizar os 5 principais valores na lista especificada.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
Localizar as palavras com mais de 3 caracteres.
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
Localizar as três datas mais recentes em uma lista de datas em alemão.
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
