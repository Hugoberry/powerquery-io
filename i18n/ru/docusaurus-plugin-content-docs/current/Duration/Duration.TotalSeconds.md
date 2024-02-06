---
title: Duration.TotalSeconds
---

# Duration.TotalSeconds


Возвращает общее количество секунд, охватываемое этой длительностью.


## Syntax

```powerquery
Duration.TotalSeconds(
    duration as duration
) as number
```


## Remarks

Возвращает общее количество секунд, охваченных <code>duration</code>.


## Examples

### Example #1 
Найти общее количество секунд, охваченных значением длительности.
```powerquery
Duration.TotalSeconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
446582
```




## Category
Duration
