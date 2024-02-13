---
title: List.Intersect
---

# List.Intersect


Zwraca część wspólną wartości list znalezionych w danych wejściowych.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Zwraca część wspólną wartości list znalezionych na liście wejściowej <code>lists</code>. Można także określić opcjonalny parametr <code>equationCriteria</code>.


## Examples

### Example #1 
Znajdź część wspólną list \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
