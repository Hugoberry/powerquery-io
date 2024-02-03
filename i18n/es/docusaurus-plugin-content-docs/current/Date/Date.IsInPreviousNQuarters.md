---
title: Date.IsInPreviousNQuarters
---

# Date.IsInPreviousNQuarters


## Description

Indica si esta fecha se produce durante el número de trimestres anterior, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del trimestre actual.


## Syntax

```powerquery
Date.IsInPreviousNQuarters(
    dateTime as any,
    quarters as number
) as logical
```


## Details

Indica si el valor datetime <code>dateTime</code> proporcionado se produce durante el número anterior de trimestres, como se determina por la hora y fecha actual del sistema. Tenga en cuenta que esta función devolverá un valor "false" al pasar un valor que se produzca en el trimestre actual.      <ul>      <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> para evaluar.</li>      <li><code>quarters</code>: número de trimestres.</li>      </ul>


## Examples

### Example #1 
Determine si el trimestre anterior a la hora del sistema actual se encuentra dentro de los dos trimestres anteriores.
```powerquery
Date.IsInPreviousNQuarters(Date.AddQuarters(DateTime.FixedLocalNow(), -1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
