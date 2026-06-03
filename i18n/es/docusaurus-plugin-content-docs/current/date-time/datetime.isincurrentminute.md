---
title: DateTime.IsInCurrentMinute
---

# DateTime.IsInCurrentMinute


Indica si esta datetime se produce durante el minuto actual, determinado por la fecha y hora actual del sistema.


## Syntax

```powerquery
DateTime.IsInCurrentMinute(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor datetime proporcionado `dateTime` se produce durante el minuto actual, determinado por la fecha y hora actual del sistema.

-   `dateTime`: un valor `datetime` o `datetimezone` que se va a evaluar.


## Examples

### Example #1
Determine si la hora del sistema actual se encuentra en el minuto actual.
```powerquery
DateTime.IsInCurrentMinute(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
