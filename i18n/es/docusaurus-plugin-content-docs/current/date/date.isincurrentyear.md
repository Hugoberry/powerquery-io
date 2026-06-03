---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Indica si esta fecha pertenece al año actual, determinado por la fecha y hora actual del sistema.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor de fecha y hora dado `dateTime` pertenece al año actual, determinado por la fecha y hora actual del sistema.

-   `dateTime`: valor `date`, `datetime` o `datetimezone` que se va a evaluar.


## Examples

### Example #1
Determinar si la fecha y hora actual del sistema pertenece al año actual.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
