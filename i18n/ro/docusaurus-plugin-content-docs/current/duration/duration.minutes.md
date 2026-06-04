---
title: Duration.Minutes
---

# Duration.Minutes


Returnează porțiunea de minute dintr-o durată.


## Syntax

```powerquery
Duration.Minutes(
    duration as duration
) as number
```


## Remarks

Returnează porțiunea de minute din `duration`.


## Examples

### Example #1
Extrageți minutele dintr-o valoare pentru durată.
```powerquery
Duration.Minutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
3
```




## Category
Duration
