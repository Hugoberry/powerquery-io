---
title: Date.AddMonths
---

# Date.AddMonths


Engade os meses especificados á data.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Devolve o resultado de `date`, `datetime` ou `datetimezone` tras engadir `numberOfMonths` meses ao valor `datetime` `dateTime`.

-   `dateTime`: o valor `date`, `datetime` ou `datetimezone` ao que se van engadir os meses.
-   `numberOfMonths`: o número de meses que se van engadir.


## Examples

### Example #1
Engadir 5 meses ao valor `date`, `datetime` ou `datetimezone` que representa a data 14/05/2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
Engadir 18 meses ao valor `date`, `datetime` ou `datetimezone` que representa a data e a hora 14/05/2011 08:15:22 a.m.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
