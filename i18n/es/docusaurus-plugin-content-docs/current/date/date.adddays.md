---
title: Date.AddDays
---

# Date.AddDays


Suma los días especificados a la fecha.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Devuelve el resultado `date`, `datetime` o `datetimezone` obtenido al sumar `numberOfDays` días al valor `datetime` `dateTime`.

-   `dateTime`: el valor `date`, `datetime` o `datetimezone` al que se suman los días.
-   `numberOfDays`: el número de días que se deben sumar.


## Examples

### Example #1
Sumar 5 días al valor `date`, `datetime` o `datetimezone` que representa la fecha 14/5/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
