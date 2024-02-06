---
title: DateTime.IsInNextNMinutes
---

# DateTime.IsInNextNMinutes


Indica si este valor datetime se produce durante el número de minutos siguiente, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del minuto actual.


## Syntax

```powerquery
DateTime.IsInNextNMinutes(
    dateTime as any,
    minutes as number
) as logical
```


## Remarks

Indica si el valor datetime <code>dateTime</code> proporcionado se produce durante el siguiente número de minutos, como se determina por la fecha y hora actual del sistema. Tenga en cuenta que esta función devolverá un valor "false" al pasar un valor que se produzca en el minuto actual.      <ul>      <li><code>dateTime</code>: valor <code>datetime</code> o <code>datetimezone</code> para evaluar.</li>      <li><code>minutes</code>: número de minutos.</li>      </ul>


## Examples

### Example #1 
Determine si el minuto posterior a la hora del sistema actual se encuentra en los siguientes dos minutos.
```powerquery
DateTime.IsInNextNMinutes(DateTime.FixedLocalNow() + #duration(0, 0, 2, 0), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
