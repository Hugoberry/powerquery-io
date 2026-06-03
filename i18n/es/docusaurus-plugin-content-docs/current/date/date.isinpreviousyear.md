---
title: Date.IsInPreviousYear
---

# Date.IsInPreviousYear


Indica si esta fecha se produce durante el año anterior, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del año actual.


## Syntax

```powerquery
Date.IsInPreviousYear(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor datetime proporcionado `dateTime` se produce durante el año anterior, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del año actual.

-   `dateTime`: un valor `date`, `datetime` o `datetimezone` que se va a evaluar.


## Examples

### Example #1
Determinar si el año anterior a la fecha y hora actual del sistema se corresponde con el año pasado.
```powerquery
Date.IsInPreviousYear(Date.AddYears(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
