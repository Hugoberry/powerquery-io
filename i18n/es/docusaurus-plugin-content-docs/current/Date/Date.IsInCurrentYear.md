---
title: Date.IsInCurrentYear
---

# Date.IsInCurrentYear


Indica si esta fecha pertenece al año actual, determinado por la fecha y hora actual del sistema.


## Syntax

```powerquery
Date.IsInCurrentYear(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor de fecha y hora dado <code>dateTime</code> pertenece al año actual, determinado por la fecha y hora actual del sistema.      <ul>      <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> que se va a evaluar.</li>      </ul>


## Examples

### Example #1 
Determinar si la fecha y hora actual del sistema pertenece al año actual.
```powerquery
Date.IsInCurrentYear(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
