---
title: Date.IsInNextNDays
---

# Date.IsInNextNDays


Indica si esta fecha se produce durante el número de días siguiente, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del día actual.


## Syntax

```powerquery
Date.IsInNextNDays(
    dateTime as any,
    days as number
) as logical
```


## Remarks

Indica si el valor datetime `dateTime` proporcionado se produce durante el siguiente número de días, como se determina por la fecha y hora actual del sistema. Tenga en cuenta que esta función devolverá un valor "false" al pasar un valor que se produzca en el día actual.

-   `dateTime`: valor `date`, `datetime` o `datetimezone` para evaluar.
-   `days`: número de días.


## Examples

### Example #1
Determine si el día posterior a la hora del sistema actual se encuentra dentro de los dos días siguientes.
```powerquery
Date.IsInNextNDays(Date.AddDays(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
