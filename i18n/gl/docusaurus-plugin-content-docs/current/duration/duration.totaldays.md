---
title: Duration.TotalDays
---

# Duration.TotalDays


Devolve o total de días que ocupa esta duración.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Remarks

Devolve o total de días abarcados por `duration`.


## Examples

### Example #1
Busca o total de días abarcados por un valor de duración.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
