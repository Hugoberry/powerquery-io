---
title: Duration.TotalHours
---

# Duration.TotalHours


Devolve o total de horas que ocupa esta duración.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Remarks

Devolve o total de horas abarcadas por `duration`.


## Examples

### Example #1
Busca o total de horas abarcadas por un valor de duración.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
