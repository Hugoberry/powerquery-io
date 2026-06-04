---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


Devolve o total de minutos que ocupa esta duración.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

Devolve o total de minutos abarcados por `duration`.


## Examples

### Example #1
Busca o total de minutos abarcados por un valor de duración.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
