---
title: Date.StartOfDay
---

# Date.StartOfDay


Devuelve el inicio del día.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Remarks

Devuelve el inicio del día representado por `dateTime`. `dateTime` debe ser un valor `date`, `datetime` o `datetimezone`.


## Examples

### Example #1
Buscar el inicio del día del 10 de octubre de 2011, 8:00 a.m.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
