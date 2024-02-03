---
title: Date.IsInNextQuarter
---

# Date.IsInNextQuarter


## Description

Indica si esta fecha se produce durante el trimestre siguiente, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del trimestre actual.


## Syntax

```powerquery
Date.IsInNextQuarter(
    dateTime as any
) as logical
```


## Details

Indica si el valor datetime proporcionado <code>dateTime</code> se produce durante el trimestre siguiente, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del trimestre actual.      <ul>      <li><code>dateTime</code>: un valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> que se va a evaluar.</li>      </ul>


## Examples

### Example #1 
Determinar si el trimestre posterior a la fecha y hora actual del sistema se corresponde con el trimestre que viene.
```powerquery
Date.IsInNextQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), 1))
```

Result: 
```powerquery
true
```




## Category
Date
