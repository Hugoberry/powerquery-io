---
title: Date.AddMonths
---

# Date.AddMonths


Dodaje navedene mesece u datum.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Vraća rezultat `date`, `datetime` ili `datetimezone` od dodavanja `numberOfMonths` meseci u vrednost `datetime` `dateTime`.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` u koju se dodaju meseci.
-   `numberOfMonths`: Broj meseci koji se dodaju.


## Examples

### Example #1
Dodavanje 5 meseci vrednosti `date`, `datetime` ili `datetimezone`, koja predstavlja datum 14.5.2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
Dodavanje 18 meseci vrednosti `date`, `datetime` ili `datetimezone`, koja predstavlja datum 14.5.2011. i vreme 08:15:22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
