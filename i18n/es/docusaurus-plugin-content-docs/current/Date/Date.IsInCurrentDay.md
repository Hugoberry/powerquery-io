---
title: Date.IsInCurrentDay
---

# Date.IsInCurrentDay


## Description

Indica si esta fecha corresponde al día de hoy, determinado por la fecha y hora actual del sistema.


## Syntax

```powerquery
Date.IsInCurrentDay(
    dateTime as any
) as logical
```


## Details

Indica si el valor de fecha y hora dado <code>dateTime</code> pertenece al día de hoy, determinado por la fecha y hora actual del sistema.      <ul>      <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> que se va a evaluar.</li>      </ul>


## Examples

### Example #1 
Determinar si la hora actual del sistema pertenece al día de hoy.
```powerquery
Date.IsInCurrentDay(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
