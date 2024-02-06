---
title: DateTime.IsInPreviousNHours
---

# DateTime.IsInPreviousNHours


Indica si este valor datetime se produce durante el número de horas anterior, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro de la hora actual.


## Syntax

```powerquery
DateTime.IsInPreviousNHours(
    dateTime as any,
    hours as number
) as logical
```


## Remarks

Indica si el valor datetime <code>dateTime</code> proporcionado se produce durante el número anterior de horas, como se determina por la fecha y hora actual del sistema. Tenga en cuenta que esta función devolverá un valor "false" al pasar un valor que se produzca en la hora actual.      <ul>      <li><code>dateTime</code>: valor <code>datetime</code> o <code>datetimezone</code> para evaluar.</li>      <li><code>hours</code>: número de horas.</li>      </ul>


## Examples

### Example #1 
Determine si la hora anterior a la hora del sistema actual se encuentra en las dos horas anteriores.
```powerquery
DateTime.IsInPreviousNHours(DateTime.FixedLocalNow() - #duration(0, 2, 0, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
