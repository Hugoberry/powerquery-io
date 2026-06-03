---
title: List.Max
---

# List.Max


Zwraca wartość maksymalną lub wartość domyślną, jeśli lista jest pusta.


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

Zwraca maksymalny element na liście lub opcjonalną wartość domyślną, jeśli lista jest pusta.

-   `list`: lista wartości.
-   `default`: (opcjonalnie) wartość do zwrócenia, jeśli lista jest pusta.
-   `comparisonCriteria`: (opcjonalnie) funkcja używana do przekształcania wartości przed ich porównaniem. Jeśli ten parametr ma wartość `null`, wartości są porównywane bez żadnego przekształcenia.
-   `includeNulls`: (opcjonalnie) wskazuje, czy wartości `null` na liście powinny być uwzględniane podczas określania maksymalnej wartości elementu. Wartość domyślna to `true`.


## Examples

### Example #1
Znajdź maksymalną wartość na określonej liście.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Znajdź maksymalną wartość na określonej liście lub zwróć wartość -1, jeśli jest pusta.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Znajdź element na liście wartości tekstowych na ostatnią literę alfabetu. Jeśli lista jest pusta, zwróć wartość „none”.
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
Znajdź najnowszą datę z listy dat w formacie niemieckim. Jeśli lista jest pusta, zwróć datę 1 stycznia 2000 r.
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
