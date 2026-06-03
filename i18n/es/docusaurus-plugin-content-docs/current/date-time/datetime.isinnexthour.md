---
title: DateTime.IsInNextHour
---

# DateTime.IsInNextHour


Indica si este valor datetime se produce durante la hora siguiente, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro de la hora actual.


## Syntax

```powerquery
DateTime.IsInNextHour(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor datetime proporcionado `dateTime` se produce durante la hora siguiente, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro de la hora actual.

-   `dateTime`: un valor `datetime` o `datetimezone` que se va a evaluar.


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
