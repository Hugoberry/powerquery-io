---
title: Date.AddMonths
---

# Date.AddMonths


Adaugă lunile specificate la dată.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Returnează rezultatul `date`, `datetime` sau `datetimezone` din adăugarea a `numberOfMonths` luni la valoarea `datetime``dateTime`.

-   `dateTime`: valoarea `date`, `datetime` sau `datetimezone` la care sunt adăugate luni.
-   `numberOfMonths`: numărul de luni de adăugat.


## Examples

### Example #1
Adăugaţi 5 luni la valoarea `date`, `datetime` sau `datetimezone` reprezentând data 14/05/2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
Adăugaţi 18 luni la valoarea `date`, `datetime` sau `datetimezone` reprezentând data şi ora 14/05/2011 08:15:22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
