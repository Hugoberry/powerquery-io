---
title: Duration.TotalHours
---

# Duration.TotalHours


Retorna el total d'hores que abraça aquesta durada.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Remarks

Retorna el total d'hores que abraça `duration`.


## Examples

### Example #1
Trobeu el total d'hores que abraça un valor de duració.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
