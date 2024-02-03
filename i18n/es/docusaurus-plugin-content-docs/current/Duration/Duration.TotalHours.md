---
title: Duration.TotalHours
---

# Duration.TotalHours


## Description

Devuelve el total de horas que abarca esta duración.


## Syntax

```powerquery
Duration.TotalHours(
    duration as duration
) as number
```


## Details

Devuelve el total de horas distribuidas por <code>duration</code>.


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
