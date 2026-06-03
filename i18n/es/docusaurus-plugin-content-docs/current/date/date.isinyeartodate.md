---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


Indica si esta fecha pertenece al año actual y es anterior o se corresponde con el día de hoy, determinado por la fecha y hora actual del sistema.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor de fecha y hora dado `dateTime` pertenece al año actual y es anterior o se corresponde con el día de hoy, determinado por la fecha y hora actual del sistema.

-   `dateTime`: valor `date`, `datetime` o `datetimezone` que se va a evaluar.


## Examples

### Example #1
Determinar si la fecha y hora actual del sistema pertenece al año hasta la fecha.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
