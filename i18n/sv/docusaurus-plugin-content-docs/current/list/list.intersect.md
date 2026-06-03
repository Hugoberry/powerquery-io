---
title: List.Intersect
---

# List.Intersect


Returnerar skärningen för listvärdena i indata.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

Returnerar skärningen för listvärdena i indatalistan `lists`. En valfri parameter, `equationCriteria`, kan användas.


## Examples

### Example #1
Hitta skärningen för listorna \{1..5\}, \{2..6\}, \{3..7\}.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
