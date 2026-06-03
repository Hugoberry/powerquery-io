---
title: Date.AddMonths
---

# Date.AddMonths


Suma los meses especificados a la fecha.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Devuelve el valor `date``datetime` o `datetimezone` como resultado de sumar `numberOfMonths` meses al valor `datetime` `dateTime`.

-   `dateTime`: el valor `date``datetime` o `datetimezone` al que se suman los meses.
-   `numberOfMonths`: número de meses que se sumarán.


## Examples

### Example #1
Sumar 5 meses al valor `date``datetime` o `datetimezone` que representa la fecha 5/14/2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
Sumar 18 meses al valor `date``datetime` o `datetimezone` que representa la fecha y la hora 5/14/2011 08:15:22 a.m.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
