---
title: Date.IsInCurrentMonth
---

# Date.IsInCurrentMonth


## Description

Indica si esta fecha pertenece al mes actual, determinado por la fecha y hora actual del sistema.


## Syntax

```powerquery
Date.IsInCurrentMonth(
    dateTime as any
) as logical
```


## Details

Indica si el valor de fecha y hora dado <code>dateTime</code> pertenece al mes actual, determinado por la fecha y hora actual del sistema.      <ul>      <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> que se va a evaluar.</li>      </ul>


## Examples

### Example #1 
Determinar si la fecha y hora actual del sistema pertenece al mes actual.
```powerquery
Date.IsInCurrentMonth(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
