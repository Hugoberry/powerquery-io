---
title: List.Max
---

# List.Max


Devolve o valor máximo ou o valor predefinido para uma lista vazia.


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

Devolve o item máximo na lista ou o valor predefinido opcional se a lista estiver vazia.

-   `list`: a lista de valores.
-   `default`: (opcional) o valor a devolver se a lista estiver vazia.
-   `comparisonCriteria`: (opcional) uma função utilizada para transformar os valores antes de serem comparados. Se este parâmetro for `null`, os valores são comparados sem qualquer transformação.
-   `includeNulls`: (opcional) indica se os valores `null` na lista devem ser incluídos na determinação do item máximo. O valor predefinido é `true`.


## Examples

### Example #1
Encontre o valor máximo na lista especificada.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Determina o valor máximo na lista especificada ou devolve -1 se estiver vazia.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Localiza o item numa lista de valores de texto que é o último alfabeticamente. Se a lista estiver vazia, devolve "nenhum".
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
Encontra a data mais recente a partir de uma lista de datas alemãs. Se a lista estiver vazia, devolve 1 de janeiro de 2000.
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
