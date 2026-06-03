---
title: Date.IsInNextNYears
---

# Date.IsInNextNYears


Indica si esta fecha se produce durante el número de años siguiente, determinado por la fecha y hora actual del sistema. Tenga en cuenta que esta función devuelve false cuando se pasa un valor que está dentro del año actual.


## Syntax

```powerquery
Date.IsInNextNYears(
    dateTime as any,
    years as number
) as logical
```


## Remarks

Indica si el valor datetime `dateTime` proporcionado se produce durante el siguiente número de años, como se determina por la fecha y hora actual del sistema. Tenga en cuenta que esta función devolverá un valor "false" al pasar un valor que se produzca en el año actual.

-   `dateTime`: valor `date`, `datetime` o `datetimezone` para evaluar.
-   `years`: número de años.


## Examples

### Example #1
Determine si el año posterior a la hora del sistema actual se encuentra dentro de los dos años siguientes.
```powerquery
Date.IsInNextNYears(Date.AddYears(DateTime.FixedLocalNow(), 1), 2)
```

Result: 
```powerquery
true
```




## Category
Date
