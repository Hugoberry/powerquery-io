---
title: Date.AddQuarters
---

# Date.AddQuarters


Engade os trimestres especificados á data.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Devolve `date`, `datetime` ou `datetimezone`, resultado de engadir `numberOfQuarters` trimestres ao valor `datetime` `dateTime`.

-   `dateTime`: o valor `date`, `datetime` ou `datetimezone` ao que se van engadir os trimestres.
-   `numberOfQuarters`: o número de trimestres que se van engadir.


## Examples

### Example #1
Engadir 1 trimestre ao valor `date`, `datetime` ou `datetimezone` que representa a data 14/05/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
