---
title: Date.IsInNextNWeeks
---

# Date.IsInNextNWeeks


## Description

Indica si esta fecha se produce durante el número de semanas siguiente, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro de la semana actual.


## Syntax

```powerquery
Date.IsInNextNWeeks(
    dateTime as any,
    weeks as number
) as logical
```


## Details

Indica si el valor datetime <code>dateTime</code> proporcionado se produce durante el siguiente número de semanas, como se determina por la fecha y hora actual del sistema. Tenga en cuenta que esta función devolverá un valor "false" al pasar un valor que se produzca en la semana actual.      <ul>      <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> para evaluar.</li>      <li><code>weeks</code>: número de semanas.</li>      </ul>


## Examples

### Example #1 
Determina si la semana posterior a la hora del sistema actual se encuentra dentro de las dos semanas siguientes.
```powerquery
Date.IsInNextNWeeks(Date.AddDays(DateTime.FixedLocalNow(), 7), 2)
```

Result: 
```powerquery
true
```




## Category
Date
