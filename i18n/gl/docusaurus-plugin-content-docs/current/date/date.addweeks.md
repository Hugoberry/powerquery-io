---
title: Date.AddWeeks
---

# Date.AddWeeks


Engade as semanas especificadas á data.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Devolve `date`, `datetime` ou `datetimezone`, resultado de engadir `numberOfWeeks` semanas ao valor `datetime` `dateTime`.

-   `dateTime`: o valor `date`, `datetime` ou `datetimezone` ao que se van engadir as semanas.
-   `numberOfWeeks`: o número de semanas que se van engadir.


## Examples

### Example #1
Engadir 2 semanas ao valor `date`, `datetime` ou `datetimezone` que representa a data 14/05/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
