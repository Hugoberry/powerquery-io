---
title: Date.IsInNextMonth
---

# Date.IsInNextMonth


Indica si esta fecha se produce durante el mes siguiente, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del mes actual.


## Syntax

```powerquery
Date.IsInNextMonth(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor datetime proporcionado `dateTime` se produce durante el mes siguiente, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del mes actual.

-   `dateTime`: un valor `date`, `datetime` o `datetimezone` que se va a evaluar.


## Examples

### Example #1
Determinar si el mes posterior a la fecha y hora actual del sistema se corresponde con el mes que viene.
```powerquery
Date.IsInNextMonth(Date.AddMonths(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
