---
title: Date.IsInPreviousMonth
---

# Date.IsInPreviousMonth


Indica si esta fecha ocurre durante el mes anterior, según se determine con la fecha y hora actuales del sistema. Tenga en cuenta que esta función devolverá "false" al pasar un valor que ocurra durante el mes actual.


## Syntax

```powerquery
Date.IsInPreviousMonth(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor datetime proporcionado `dateTime` se produce durante el mes anterior, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del mes actual.

-   `dateTime`: un valor `date`, `datetime` o `datetimezone` que se va a evaluar.


## Examples

### Example #1
Determinar si el mes anterior a la fecha y hora actual del sistema se corresponde con el mes pasado.
```powerquery
Date.IsInPreviousMonth(Date.AddMonths(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
