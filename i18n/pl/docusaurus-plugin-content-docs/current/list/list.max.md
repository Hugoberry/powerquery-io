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

Zwraca maksymalny element z listy <code>list</code> lub opcjonalną wartość domyślną <code>default</code>, gdy lista jest pusta.    W celu ustalenia sposobu porównywania elementów na liście można określić opcjonalną wartość comparisonCriteria (<code>comparisonCriteria</code>). Jeśli ten parametr ma wartość null, używana jest domyślna funkcja porównująca.


## Examples

### Example #1 
Znajdź wartość maksymalną na liście \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
Znajdź maksymalną wartość na liście \{} lub zwróć -1, gdy lista jest pusta. 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
