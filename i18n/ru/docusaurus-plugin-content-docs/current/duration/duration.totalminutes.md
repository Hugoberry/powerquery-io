---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


Возвращает общее количество минут, охватываемое этой длительностью.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

Возвращает общее количество минут, охваченных <code>duration</code>.


## Examples

### Example #1 
Найти общее количество минут, охваченных значением длительности.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
