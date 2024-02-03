---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


## Description

Indica si esta datetime se produce durante la hora actual, determinado por la fecha y hora actual del sistema.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Details

Indica si el valor datetime proporcionado <code>dateTime</code> se produce durante la hora actual, determinado por la fecha y hora actual del sistema.      <ul>      <li><code>dateTime</code>: un valor <code>datetime</code> o <code>datetimezone</code> que se va a evaluar.</li>      </ul>


## Examples

### Example #1 
Determine si la hora del sistema actual se encuentra en la hora actual.
```powerquery
DateTime.IsInCurrentHour(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
