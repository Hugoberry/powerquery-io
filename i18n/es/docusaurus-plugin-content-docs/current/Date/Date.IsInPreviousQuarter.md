---
title: Date.IsInPreviousQuarter
---

# Date.IsInPreviousQuarter


## Description

Indica si esta fecha se produce durante el trimestre anterior, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del trimestre actual.


## Syntax

```powerquery
Date.IsInPreviousQuarter(
    dateTime as any
) as logical
```


## Details

Indica si el valor datetime proporcionado <code>dateTime</code> se produce durante el trimestre anterior, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del trimestre actual.      <ul>      <li><code>dateTime</code>: un valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> que se va a evaluar.</li>      </ul>


## Examples

### Example #1 
Determinar si el trimestre anterior a la fecha y hora actual del sistema se corresponde con el trimestre pasado.
```powerquery
Date.IsInPreviousQuarter(Date.AddQuarters(DateTime.FixedLocalNow(), -1))
```

Result: 
```powerquery
true
```




## Category
Date
