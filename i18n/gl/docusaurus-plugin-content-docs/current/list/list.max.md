---
title: List.Max
---

# List.Max


Devolve o valor máximo da lista ou o valor predefinido nunha lista baleira.


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

Devolve o elemento máximo da lista ou o valor predeterminado opcional se a lista está baleira.

-   `list` : a lista de valores.
-   `default` : (Opcional) O valor que se devolverá se a lista está baleira.
-   `comparisonCriteria` : (Opcional) Unha función que se usa para transformar os valores antes de comparalos. Se este parámetro é `null`, os valores compáranse sen ningunha transformación.
-   `includeNulls` : (Opcional) Indica se os valores `null` da lista deben incluírse para determinar o elemento máximo. O valor predeterminado é `true`.


## Examples

### Example #1
Atope o valor máximo na lista especificada.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Atope o valor máximo na lista especificada ou devolva -1 se está baleira.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Atopa o elemento nunha lista de valores de texto que estea ao final en orde alfabética. Se a lista está baleira, devolve "none".
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
Atope a data máis recente dunha lista de datas alemás. Se a lista está baleira, devolve o 1 de xaneiro de 2000.
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
