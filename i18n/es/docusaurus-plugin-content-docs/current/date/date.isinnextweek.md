---
title: Date.IsInNextWeek
---

# Date.IsInNextWeek


Indica si esta fecha se produce durante la semana siguiente, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro de la semana actual.


## Syntax

```powerquery
Date.IsInNextWeek(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor datetime proporcionado `dateTime` se produce durante la semana siguiente, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro de la semana actual.

-   `dateTime`: un valor `date`, `datetime` o `datetimezone` que se va a evaluar.


## Examples

### Example #1
Determinar si la semana posterior a la fecha y hora actual del sistema se corresponde con la semana que viene.
```powerquery
Date.IsInNextWeek(Date.AddDays(DateTime.FixedLocalNow(), 7))
```

Result: 
```powerquery
true
```




## Category
Date
