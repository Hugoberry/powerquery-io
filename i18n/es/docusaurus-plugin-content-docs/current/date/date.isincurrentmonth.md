---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


Indica si esta fecha pertenece al mes actual, determinado por la fecha y hora actual del sistema.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor de fecha y hora dado `dateTime` pertenece al mes actual, determinado por la fecha y hora actual del sistema.

-   `dateTime`: valor `date`, `datetime` o `datetimezone` que se va a evaluar.


## Examples

### Example #1
Determinar si la fecha y hora actual del sistema pertenece al mes actual.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
