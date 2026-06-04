---
title: Duration.Seconds
---

# Duration.Seconds


Returnează porțiunea de secunde dintr-o durată.


## Syntax

```powerquery
Duration.Seconds(
    duration as duration
) as number
```


## Remarks

Returnează porțiunea de secunde din `duration`.


## Examples

### Example #1
Extrageți secundele dintr-o valoare pentru durată.
```powerquery
Duration.Seconds(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
2
```




## Category
Duration
