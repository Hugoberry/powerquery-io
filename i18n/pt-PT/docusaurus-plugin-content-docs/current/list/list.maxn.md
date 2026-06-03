---
title: List.MaxN
---

# List.MaxN


Devolve o(s) valor(es) máximo(s) existente(s) na lista. Tem de especificar o número de valores a devolver ou a condição de filtragem.


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

Devolve o(s) valor(es) máximo(s) da lista especificada. Depois de as linhas serem ordenadas, poderão ser especificados parâmetros opcionais para filtrar ainda mais o resultado.

-   `list`: a lista de valores.
-   `countOrCondition`: especifica o número de valores a devolver ou uma condição de filtro. Se for especificado um número, é devolvida uma lista de até `countOrCondition` itens por ordem de Z a A. Se for especificada uma condição, a lista devolvida incluirá todos os itens que cumpram a condição.
-   `comparisonCriteria`: (opcional) uma função utilizada para transformar os valores antes de serem comparados. Se este parâmetro for `null`, os valores serão comparados sem qualquer transformação.
-   `includeNulls`: (opcional) indica se os valores `null` da lista devem ser incluídos na determinação do item máximo. O valor predefinido é `true`.


## Examples

### Example #1
Encontra os 5 valores principais na lista especificada.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
Encontre as palavras com mais de 3 carateres.
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
Encontra as três datas mais recentes de uma lista de datas alemãs.
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
