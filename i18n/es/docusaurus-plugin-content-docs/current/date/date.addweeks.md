---
title: Date.AddWeeks
---

# Date.AddWeeks


Suma las semanas especificadas a la fecha.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Devuelve el resultado `date`, `datetime` o `datetimezone` obtenido al sumar `numberOfWeeks` semanas al valor `datetime` `dateTime`.

-   `dateTime`: el valor `date`, `datetime` o `datetimezone` al que se suman las semanas.
-   `numberOfWeeks`: el número de semanas que se deben sumar.


## Examples

### Example #1
Sumar 2 semanas al valor `date`, `datetime` o `datetimezone` que representa la fecha 14/5/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
