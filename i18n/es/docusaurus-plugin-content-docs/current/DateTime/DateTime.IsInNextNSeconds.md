---
title: DateTime.IsInNextNSeconds
---

# DateTime.IsInNextNSeconds


Indica si este valor datetime se produce durante el número de segundos siguiente, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del segundo actual.


## Syntax

```powerquery
DateTime.IsInNextNSeconds(
    dateTime as any,
    seconds as number
) as logical
```


## Remarks

Indica si el valor datetime <code>dateTime</code> proporcionado se produce durante el siguiente número de segundos, como se determina por la fecha y hora actual del sistema. Tenga en cuenta que esta función devolverá un valor "false" al pasar un valor que se produzca en el segundo actual.      <ul>      <li><code>dateTime</code>: valor <code>datetime</code> o <code>datetimezone</code> para evaluar.</li>      <li><code>seconds</code>: número de segundos.</li>      </ul>


## Examples

### Example #1 
Determina si el segundo posterior a la hora del sistema actual se encuentra en los siguientes dos segundos.
```powerquery
DateTime.IsInNextNSeconds(DateTime.FixedLocalNow() + #duration(0, 0, 0, 2), 2)
```

Result: 
```powerquery
true
```




## Category
DateTime
