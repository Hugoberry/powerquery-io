---
title: List.Min
---

# List.Min


Zwraca wartość minimalną lub wartość domyślną, jeśli lista jest pusta.


## Syntax

```powerquery
List.Min(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Zwraca minimalny element z listy <code>list</code> lub opcjonalną wartość domyślną <code>default</code>, gdy lista jest pusta.    W celu ustalenia sposobu porównywania elementów na liście można określić opcjonalną wartość comparisonCriteria (<code>comparisonCriteria</code>). Jeśli ten parametr ma wartość null, używana jest domyślna funkcja porównująca.


## Examples

### Example #1 
Znajdź wartość minimalną na liście \{1, 4, 7, 3, -2, 5}.
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2 
Znajdź minimalną wartość na liście \{} lub zwróć -1, gdy lista jest pusta. 
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
