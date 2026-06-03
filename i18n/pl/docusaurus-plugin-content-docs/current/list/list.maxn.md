---
title: List.MaxN
---

# List.MaxN


Zwraca maksymalne wartości na liście. Należy określić liczbę wartości do zwrócenia lub warunek filtru.


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

Zwraca maksymalne wartości na określonej liście. Po posortowaniu wierszy można określić parametry opcjonalne, aby dodatkowo przefiltrować wynik.

-   `list`: lista wartości.
-   `countOrCondition`: określa liczbę wartości do zwrócenia lub warunek filtru. Jeśli określono liczbę, zwracana jest lista składająca się z maksymalnie `countOrCondition` elementów ułożonych w kolejności malejącej. Jeśli określono warunek, zwrócona lista zawiera wszystkie elementy spełniające warunek.
-   `comparisonCriteria`: (opcjonalnie) funkcja używana do przekształcania wartości przed ich porównaniem. Jeśli ten parametr ma wartość `null`, wartości są porównywane bez żadnego przekształcenia.
-   `includeNulls`: (opcjonalnie) wskazuje, czy wartości `null` na liście powinny być uwzględniane podczas określania maksymalnej wartości elementu. Wartość domyślna to `true`.


## Examples

### Example #1
Znajdź 5 najważniejszych wartości na określonej liście.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
Znajdź wyrazy z więcej niż 3 znakami.
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
Znajdź trzy najnowsze daty z listy dat w formacie niemieckim.
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
