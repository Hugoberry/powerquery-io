---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Devuelve el final de la semana.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Devuelve el final de la semana que contiene `dateTime`. Esta función toma un `Day` opcional, `firstDayOfWeek`, para establecerlo como el primer día de la semana para este cálculo relativo. El valor predeterminado es `Day.Sunday`.

-   `dateTime`: un valor `date`, `datetime` o `datetimezone` a partir del cual se calcula el último día de la semana
-   `firstDayOfWeek`: *(Opcional)* valor A `Day.Type` que representa el primer día de la semana. Los valores posibles son `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` y `Day.Saturday`. El valor predeterminado es `Day.Sunday`.


## Examples

### Example #1
Obtener el final de la semana de 5/14/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
Obtener el final de la semana de 5/17/2011 05:00: 00 p.m. -7:00, siendo el domingo el primer día de la semana.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
