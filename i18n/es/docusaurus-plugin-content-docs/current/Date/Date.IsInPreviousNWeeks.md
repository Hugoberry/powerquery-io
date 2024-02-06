---
title: Date.IsInPreviousNWeeks
---

# Date.IsInPreviousNWeeks


Indica si esta fecha se produce durante el número de semanas anterior, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro de la semana actual.


## Syntax

```powerquery
Date.IsInPreviousNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Remarks

Indica si el valor datetime <code>dateTime</code> proporcionado se produce durante el número anterior de semanas, como se determina por la hora y fecha actual del sistema. Tenga en cuenta que esta función devolverá un valor "false" al pasar un valor que se produzca en la semana actual.      <ul>      <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> para evaluar.</li>      <li><code>weeks</code>: número de semanas.</li>      </ul>


## Examples

### Example #1 
Determine si la semana anterior a la hora del sistema actual está dentro de las dos semanas anteriores.
```powerquery
Date.IsInPreviousNWeeks(Date.AddDays(DateTime.FixedLocalNow(), -7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
