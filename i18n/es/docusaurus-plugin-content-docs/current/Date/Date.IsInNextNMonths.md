---
title: Date.IsInNextNMonths
---

# Date.IsInNextNMonths


Indica si esta fecha se produce durante el número de meses siguiente, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del mes actual.


## Syntax

```powerquery
Date.IsInNextNMonths(
    dateTime as any,
    months as number
) as logical
```


## Remarks

Indica si el valor datetime <code>dateTime</code> proporcionado se produce durante el siguiente número de meses, como se determina por la fecha y hora actual del sistema. Tenga en cuenta que esta función devolverá un valor "false" al pasar un valor que se produzca en el mes actual.      <ul>      <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> para evaluar.</li>      <li><code>months</code>: número de meses.</li>      </ul>


## Examples

### Example #1 
Determina si el mes posterior a la hora del sistema actual se encuentra dentro de los siguientes dos meses.
```powerquery
Date.IsInNextNMonths(Date.AddMonths(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
