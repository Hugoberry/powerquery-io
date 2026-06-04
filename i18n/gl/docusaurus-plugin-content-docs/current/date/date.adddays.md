---
title: Date.AddDays
---

# Date.AddDays


Engade os días especificados á data.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Devolve `date`, `datetime` ou `datetimezone`, resultado de engadir `numberOfDays` días ao valor `datetime` `dateTime`.

-   `dateTime`: o valor `date`, `datetime` ou `datetimezone` ao se van engadir os días.
-   `numberOfDays`: o número de días que se van engadir.


## Examples

### Example #1
Engadir 5 días ao valor `date`, `datetime` ou `datetimezone` que representa a data 14/05/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
