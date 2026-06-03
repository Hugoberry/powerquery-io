---
title: DateTime.IsInNextNHours
---

# DateTime.IsInNextNHours


Indica si este valor datetime se produce durante el número de horas siguiente, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro de la hora actual.


## Syntax

```powerquery
DateTime.IsInNextNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Indica si el valor datetime `dateTime` proporcionado se produce durante el siguiente número de horas, como se determina por la fecha y hora actual del sistema. Tenga en cuenta que esta función devolverá un valor "false" al pasar un valor que se produzca en la hora actual.

-   `dateTime`: valor `datetime` o `datetimezone` para evaluar.
-   `hours`: número de horas.


## Examples

### Example #1
Determina si la hora posterior a la hora del sistema actual se encuentra en las siguientes dos horas.
```powerquery
DateTime.IsInNextNHours(DateTime.FixedLocalNow() + #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
