---
title: Duration.TotalDays
---

# Duration.TotalDays


Retorna el total de dies que abraça aquesta durada.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Remarks

Retorna el total de dies que abraça `duration`.


## Examples

### Example #1
Trobeu el total de dies que abraça un valor de duració.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
