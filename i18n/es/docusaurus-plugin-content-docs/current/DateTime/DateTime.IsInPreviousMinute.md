---
title: DateTime.IsInPreviousMinute
---

# DateTime.IsInPreviousMinute


## Description

Indica si este valor datetime se produce durante el minuto anterior, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del minuto actual.


## Syntax

```powerquery
DateTime.IsInPreviousMinute(
    dateTime as any
) as logical
```


## Details

Indica si el valor datetime proporcionado <code>dateTime</code> se produce durante el minuto anterior, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del minuto actual.      <ul>      <li><code>dateTime</code>: un valor <code>datetime</code> o <code>datetimezone</code> que se va a evaluar.</li>      </ul>


## Examples

### Example #1 
Determine si el minuto anterior a la hora del sistema actual se encuentra en el minuto anterior.
```powerquery
DateTime.IsInPreviousMinute(DateTime.FixedLocalNow() - #duration(0, 0, 1, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
