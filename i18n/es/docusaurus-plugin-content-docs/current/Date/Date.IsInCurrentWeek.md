---
title: Date.IsInCurrentWeek
---

# Date.IsInCurrentWeek


Indica si esta fecha pertenece a la semana actual, determinada por la fecha y hora actual del sistema.


## Syntax

```powerquery
Date.IsInCurrentWeek(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor de fecha y hora dado <code>dateTime</code> pertenece a la semana actual, determinada por la fecha y hora actual del sistema.      <ul>      <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> que se va a evaluar.</li>      </ul>


## Examples

### Example #1 
Determinar si la fecha y hora actual del sistema pertenece a la semana actual.
```powerquery
Date.IsInCurrentWeek(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
