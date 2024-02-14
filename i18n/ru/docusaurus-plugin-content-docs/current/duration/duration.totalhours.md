---
title: Duration.TotalHours
---

# Duration.TotalHours


Возвращает общее количество часов, охватываемое этой длительностью.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Remarks

Возвращает общее количество часов, охваченных <code>duration</code>.


## Examples

### Example #1 
Найти общее количество часов, охваченных значением длительности.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
