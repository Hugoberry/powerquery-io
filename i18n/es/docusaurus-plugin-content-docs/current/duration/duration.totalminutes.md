---
title: Duration.TotalMinutes
---

# Duration.TotalMinutes


Devuelve el total de minutos que abarca esta duración.


## Syntax

```powerquery
Duration.TotalMinutes(
    duration as duration
) as number
```


## Remarks

Devuelve el total de minutos distribuidos por <code>duration</code>.


## Examples

### Example #1 
Busque el total de minutos distribuidos por un valor de duración.
```powerquery
Duration.TotalMinutes(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
7443.0333333333338
```




## Category
Duration
