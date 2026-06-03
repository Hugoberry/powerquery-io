---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


Indica si esta fecha pertenece al trimestre actual, determinado por la fecha y hora actual del sistema.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor de fecha y hora dado `dateTime` pertenece al trimestre actual, determinado por la fecha y hora actual del sistema.

-   `dateTime`: valor `date`, `datetime` o `datetimezone` que se va a evaluar.


## Examples

### Example #1
Determinar si la fecha y hora actual del sistema pertenece al trimestre actual.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
