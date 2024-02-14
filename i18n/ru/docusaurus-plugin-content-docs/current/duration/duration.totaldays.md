---
title: Duration.TotalDays
---

# Duration.TotalDays


Возвращает общее количество дней, охватываемое этой длительностью.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Remarks

Возвращает общее количество дней, охваченных <code>duration</code>.


## Examples

### Example #1 
Найти общее количество дней, охваченных значением длительности.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
