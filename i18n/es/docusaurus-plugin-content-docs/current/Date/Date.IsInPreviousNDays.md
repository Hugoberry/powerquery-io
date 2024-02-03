---
title: Date.IsInPreviousNDays
---

# Date.IsInPreviousNDays


## Description

Indica si esta fecha se produce durante el número de días anterior, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del día actual.


## Syntax

```powerquery
Date.IsInPreviousNDays(
    dateTime as any,
    days as number
) as logical
```


## Details

Indica si el valor datetime <code>dateTime</code> proporcionado se produce durante el número anterior de días, como se determina por la fecha y hora actual del sistema. Tenga en cuenta que esta función devolverá un valor "false" al pasar un valor que se produzca en el día actual.      <ul>      <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> para evaluar.</li>      <li><code>days</code>: número de días.</li>      </ul>


## Examples

### Example #1 
Determine si el día anterior a la hora del sistema actual se encuentra dentro de los dos días anteriores.
```powerquery
Date.IsInPreviousNDays(Date.AddDays(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
