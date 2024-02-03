---
title: Duration.TotalHours
---

# Duration.TotalHours


## Description

Retorna o total de horas desta duração.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Details

Retorna o total de horas abrangidas por <code>duration</code>.


## Examples

### Example #1 
Localize o total de horas abrangidas por um valor de duração.
```powerquery
Duration.TotalHours(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
124.05055555555555
```




## Category
Duration
