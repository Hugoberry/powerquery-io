---
title: Date.AddYears
---

# Date.AddYears


Engade os anos especificados á data.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Devolve o resultado de `date`, `datetime` ou `datetimezone` tras engadir `numberOfYears` ao valor `datetime` `dateTime`.

-   `dateTime`: o valor `date`, `datetime` ou `datetimezone` ao que se van engadir os anos.
-   `numberOfYears`: o número de anos que se van engadir.


## Examples

### Example #1
Engadir 4 anos ao valor `date`, `datetime` ou `datetimezone` que representa a data 14/05/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
Engadir 10 anos ao valor `date`, `datetime` ou `datetimezone` que representa a data e a hora 14/05/2011 08:15:22 a.m.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
