---
title: Duration.Hours
---

# Duration.Hours


Returnează porțiunea de ore dintr-o durată.


## Syntax

```powerquery
Duration.Hours(
    duration as duration
) as number
```


## Remarks

Returnează porțiunea de ore din `duration`.


## Examples

### Example #1
Extrageți orele dintr-o valoare pentru durată.
```powerquery
Duration.Hours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
4
```




## Category
Duration
