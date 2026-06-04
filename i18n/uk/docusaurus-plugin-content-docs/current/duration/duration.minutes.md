---
title: Duration.Minutes
---

# Duration.Minutes


Повертає хвилинну частину тривалості.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Remarks

Повертає хвилинну частину `duration`.


## Examples

### Example #1
Видобути хвилини зі значення тривалості.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
