---
title: Date.AddQuarters
---

# Date.AddQuarters


Suma los trimestres especificados a la fecha.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Devuelve el resultado `date`, `datetime` o `datetimezone` obtenido al sumar `numberOfQuarters` trimestres al valor `datetime` `dateTime`.

-   `dateTime`: el valor `date`, `datetime` o `datetimezone` al que se suman los trimestres.
-   `numberOfQuarters`: el número de trimestres que se deben sumar.


## Examples

### Example #1
Sumar 1 trimestre al valor `date`, `datetime` o `datetimezone` que representa la fecha 14/5/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
