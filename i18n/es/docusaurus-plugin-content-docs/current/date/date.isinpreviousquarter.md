---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


Indica si esta fecha se produce durante el trimestre anterior, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del trimestre actual.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor datetime proporcionado `dateTime` se produce durante el trimestre anterior, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del trimestre actual.

-   `dateTime`: un valor `date`, `datetime` o `datetimezone` que se va a evaluar.


## Examples

### Example #1
Determinar si el trimestre anterior a la fecha y hora actual del sistema se corresponde con el trimestre pasado.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
