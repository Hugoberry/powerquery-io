---
title: List.Max
---

# List.Max


Retornará o valor máximo ou o valor padrão, se a lista estiver vazia.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Retorna o item máximo na lista ou o valor padrão opcional se a lista estiver vazia.

-   `list`: A lista de valores.
-   `default`: (Opcional) O valor a ser retornado se a lista estiver vazia.
-   `comparisonCriteria`: (Opcional) Uma função usada para transformar os valores antes de serem comparados. Se este parâmetro for `null`, os valores serão comparados sem qualquer transformação.
-   `includeNulls`: (Opcional) Indica se os valores `null` na lista devem ser incluídos na determinação do item máximo. O valor padrão é `true`.


## Examples

### Example #1
Localizar o valor máximo na lista especificada.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Localizar o valor máximo na lista especificada ou retornar -1 se estiver vazia.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Localizar o item em uma lista de valores de texto que é o último em ordem alfabética. Se a lista estiver vazia, retornar "nenhum".
```powerquery
let
    Source = {"boy", "dog", "girl", "zebra", "cat", "mouse", "rabbit"},
    MaxText = List.Max(Source, "none")
in
    MaxText
```

Result: 
```powerquery
"zebra"
```


### Example #4
Localizar a data mais recente em uma lista de datas em alemão. Se a lista estiver vazia, retornar 1º de janeiro de 2000.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.Max(Source, #date(2000, 1, 1), each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
"15.05.2025"
```




## Category
List.Ordering
