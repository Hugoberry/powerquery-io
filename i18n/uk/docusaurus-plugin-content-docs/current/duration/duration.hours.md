---
title: Duration.Hours
---

# Duration.Hours


Повертає годинну частину тривалості.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Remarks

Повертає годинну частину `duration`.


## Examples

### Example #1
Видобути години зі значення тривалості.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
