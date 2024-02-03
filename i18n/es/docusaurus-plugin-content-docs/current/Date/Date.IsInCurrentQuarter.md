---
title: Date.IsInCurrentQuarter
---

# Date.IsInCurrentQuarter


## Description

Indica si esta fecha pertenece al trimestre actual, determinado por la fecha y hora actual del sistema.


## Syntax

```powerquery
Date.IsInCurrentQuarter(
    dateTime as any
) as logical
```


## Details

Indica si el valor de fecha y hora dado <code>dateTime</code> pertenece al trimestre actual, determinado por la fecha y hora actual del sistema.      <ul>      <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> que se va a evaluar.</li>      </ul>


## Examples

### Example #1 
Determinar si la fecha y hora actual del sistema pertenece al trimestre actual.
```powerquery
Date.IsInCurrentQuarter(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
Date
