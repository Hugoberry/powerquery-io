---
title: DateTime.IsInCurrentSecond
---

# DateTime.IsInCurrentSecond


Indica si esta datetime se produce durante el segundo actual, determinado por la fecha y hora actual del sistema.


## Syntax

```powerquery
DateTime.IsInCurrentSecond(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor datetime proporcionado `dateTime` se produce durante el segundo actual, determinado por la fecha y hora actual del sistema.

-   `dateTime`: un valor `datetime` o `datetimezone` que se va a evaluar.


## Examples

### Example #1
Determine si la hora del sistema actual se encuentra en el segundo actual.
```powerquery
DateTime.IsInCurrentSecond(DateTime.FixedLocalNow())
```

Result: 
```powerquery
true
```




## Category
DateTime
