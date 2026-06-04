---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


Retorna el total de minuts que abraça aquesta durada.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

Retorna el total de minuts que abraça `duration`.


## Examples

### Example #1
Trobeu el total de minuts que abraça un valor de duració.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
