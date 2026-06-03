---
title: DateTime.IsInCurrentHour
---

# DateTime.IsInCurrentHour


Indica si esta datetime se produce durante la hora actual, determinado por la fecha y hora actual del sistema.


## Syntax

```powerquery
DateTime.IsInCurrentHour(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor datetime proporcionado `dateTime` se produce durante la hora actual, determinado por la fecha y hora actual del sistema.

-   `dateTime`: un valor `datetime` o `datetimezone` que se va a evaluar.


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
