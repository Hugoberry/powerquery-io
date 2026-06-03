---
title: List.Median
---

# List.Median


Zwraca wartość mediany z listy.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

Zwraca element mediany listy `list`. Ta funkcja zwraca wartość `null`, jeśli lista nie zawiera żadnych wartości innych niż `null`. W przypadku parzystej liczby elementów, funkcja wybiera mniejszy z dwóch elementów mediany, chyba, że lista składa się w całości z elementów będących datami i godzinami, czasami trwania, numerami lub godzinami — w takim przypadku zostanie zwrócona średnia wartość dwóch elementów.


## Examples

### Example #1
Znajdź medianę na liście `{5, 3, 1, 7, 9}`.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
