---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


Indica si esta fecha corresponde al día de hoy, determinado por la fecha y hora actual del sistema.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor de fecha y hora dado `dateTime` pertenece al día de hoy, determinado por la fecha y hora actual del sistema.

-   `dateTime`: valor `date`, `datetime` o `datetimezone` que se va a evaluar.


## Examples

### Example #1
Determinar si la hora actual del sistema pertenece al día de hoy.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
