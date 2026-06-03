---
title: List.Intersect
---

# List.Intersect


Girdide bulunan liste değerlerinin kesişimini döndürür.


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Remarks

`lists` girdi listesinde bulunan liste değerlerinin kesişimini geri gönderir. `equationCriteria` isteğe bağlı parametre de belirtilebilir.


## Examples

### Example #1
\{1..5\}, \{2..6\}, \{3..7\} listelerinin kesişimini bulur.
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
