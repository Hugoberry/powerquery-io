---
title: Date.Day
---

# Date.Day


Devuelve el componente del día.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Remarks

Devuelve el componente de día de un valor `date`, `datetime` o `datetimezone`.

-   `dateTime`: un valor `date`, `datetime` o `datetimezone` a partir del que se extrae el componente del día.


## Examples

### Example #1
Obtener el componente del día de un valor `date``datetime` o `datetimezone` que representa la fecha y hora de 5/14/2011 05:00: 00 p.m.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
