---
title: Date.IsInNextDay
---

# Date.IsInNextDay


Indica si esta fecha se produce durante el día siguiente, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del día actual.


## Syntax

```powerquery
Date.IsInNextDay(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor datetime proporcionado `dateTime` se produce durante el día siguiente, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del día actual.

-   `dateTime`: un valor `date`, `datetime` o `datetimezone` que se va a evaluar.


## Examples

### Example #1
Determinar si el día posterior a la fecha y hora actual del sistema se corresponde con el día de mañana.
```powerquery
Date.IsInNextDay(Date.AddDays(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
