---
title: Duration.Seconds
---

# Duration.Seconds


Повертає секундну частину тривалості.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Remarks

Повертає секундну частину `duration`.


## Examples

### Example #1
Видобути секунди зі значення тривалості.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
