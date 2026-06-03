---
title: Duration.TotalHours
---

# Duration.TotalHours


Devuelve el total de horas que abarca esta duración.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Remarks

Devuelve el total de horas distribuidas por `duration`.


## Examples

### Example #1
Busque el total de horas distribuidas por un valor de duración.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
