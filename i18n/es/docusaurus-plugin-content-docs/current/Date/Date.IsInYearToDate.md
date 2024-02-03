---
title: Date.IsInYearToDate
---

# Date.IsInYearToDate


## Description

Indica si esta fecha pertenece al año actual y es anterior o se corresponde con el día de hoy, determinado por la fecha y hora actual del sistema.


## Syntax

```powerquery
Date.IsInYearToDate(
    dateTime as any
) as logical
```


## Details

Indica si el valor de fecha y hora dado <code>dateTime</code> pertenece al año actual y es anterior o se corresponde con el día de hoy, determinado por la fecha y hora actual del sistema.      <ul>      <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> que se va a evaluar.</li>      </ul>


## Examples

### Example #1 
Determinar si la fecha y hora actual del sistema pertenece al año hasta la fecha.
```powerquery
Date.IsInYearToDate(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
