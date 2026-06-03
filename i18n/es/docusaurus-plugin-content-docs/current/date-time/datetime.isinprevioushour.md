---
title: DateTime.IsInPreviousHour
---

# DateTime.IsInPreviousHour


Indica si este valor datetime se produce durante la hora anterior, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro de la hora actual.


## Syntax

```powerquery
DateTime.IsInPreviousHour(
    dateTime as any
) as logical
```


## Remarks

Indica si el valor datetime proporcionado `dateTime` se produce durante la hora anterior, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro de la hora actual.

-   `dateTime`: un valor `datetime` o `datetimezone` que se va a evaluar.


## Examples

### Example #1
Determine si la hora anterior a la hora del sistema actual se encuentra en la hora anterior.
```powerquery
DateTime.IsInPreviousHour(DateTime.FixedLocalNow() - #duration(0, 1, 0, 0))
```

Result: 
```powerquery
true
```




## Category
DateTime
