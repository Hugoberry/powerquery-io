---
title: Duration.Days
---

# Duration.Days


Returnează porțiunea de zile dintr-o durată.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Remarks

Returnează porțiunea de zile din `duration`.


## Examples

### Example #1
Extrageți numărul de zile dintre două date.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
