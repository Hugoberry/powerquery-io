---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


## Description

Indica si este valor datetime se produce durante la hora siguiente, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro de la hora actual.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Details

Indica si el valor datetime proporcionado <code>dateTime</code> se produce durante la hora siguiente, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro de la hora actual.      <ul>      <li><code>dateTime</code>: un valor <code>datetime</code> o <code>datetimezone</code> que se va a evaluar.</li>      </ul>


## Examples

### Example #1 
Determine si la hora posterior a la hora del sistema actual se encuentra en la siguiente hora.
```powerquery
DateTime.IsInNextHour(DateTime.FixedLocalNow() + #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
