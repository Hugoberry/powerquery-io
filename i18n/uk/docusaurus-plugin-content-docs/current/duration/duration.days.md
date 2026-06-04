---
title: Duration.Days
---

# Duration.Days


Повертає денну частину тривалості.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Remarks

Повертає денну частину `duration`.


## Examples

### Example #1
Видобудьте кількість днів між двома датами.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
