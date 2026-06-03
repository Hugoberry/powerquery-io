---
title: DateTime.IsInPreviousSecond
---

# DateTime.IsInPreviousSecond


Indica si este valor datetime se produce durante el segundo anterior, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del segundo actual.


## Syntax

```powerquery
DateTime.IsInPreviousSecond(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor datetime proporcionado `dateTime` se produce durante el segundo anterior, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del segundo actual.

-   `dateTime`: un valor `datetime` o `datetimezone` que se va a evaluar.


## Examples

### Example #1
Determine si el segundo anterior a la hora del sistema actual se encuentra en el segundo anterior.
```powerquery
DateTime.IsInPreviousSecond(DateTime.FixedLocalNow() - #duration(0, 0, 0, 1))
```

Result: 
```powerquery
true
```




## Category
DateTime
