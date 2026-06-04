---
title: Duration.TotalHours
---

# Duration.TotalHours


Повертає загальну кількість годин, які охоплює ця тривалість.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Remarks

Повертає загальну кількість годин, які охоплює `duration`.


## Examples

### Example #1
Знайти загальну кількість годин, які охоплює значення тривалості.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
