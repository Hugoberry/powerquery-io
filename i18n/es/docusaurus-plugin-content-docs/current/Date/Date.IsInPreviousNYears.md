---
title: Date.IsInPreviousNYears
---

# Date.IsInPreviousNYears


## Description

Indica si esta fecha se produce durante el número de años anterior, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del año actual.


## Syntax

```powerquery
Date.IsInPreviousNYears(
    dateTime as any,
    years as number
) as logical
```


## Details

Indica si el valor datetime <code>dateTime</code> proporcionado se produce durante el número anterior de años, como se determina por la fecha y hora actual del sistema. Tenga en cuenta que esta función devolverá un valor "false" al pasar un valor que se produzca en el año actual.      <ul>      <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> para evaluar.</li>      <li><code>years</code>: número de años.</li>      </ul>


## Examples

### Example #1 
Determina si el año anterior a la hora del sistema actual se encuentra dentro de los dos años anteriores.
```powerquery
Date.IsInPreviousNYears(Date.AddYears(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
