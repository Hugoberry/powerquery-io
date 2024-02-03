---
title: Date.IsInPreviousNMonths
---

# Date.IsInPreviousNMonths


## Description

Indica si esta fecha se produce durante el número de meses anterior, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del mes actual.


## Syntax

```powerquery
Date.IsInPreviousNMonths(
    dateTime as any,
    months as number
) as logical
```


## Details

Indica si el valor datetime <code>dateTime</code> proporcionado se produce durante el número anterior de meses, como se determina por la hora y fecha actual del sistema. Tenga en cuenta que esta función devolverá un valor "false" al pasar un valor que se produzca en el mes actual.      <ul>      <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> para evaluar.</li>      <li><code>months</code>: número de meses.</li>      </ul>


## Examples

### Example #1 
Determine si el mes anterior a la hora del sistema actual se encuentra dentro de los dos meses anteriores.
```powerquery
Date.IsInPreviousNMonths(Date.AddMonths(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
