---
title: Date.AddDays
---

# Date.AddDays


Dodaje navedene dane u datum.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Vraća rezultat `date`, `datetime` ili `datetimezone` od dodavanja `numberOfDays` dana u vrednost `datetime` `dateTime`.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` na koju se dodaju dani.
-   `numberOfDays`: Broj dana koji se dodaju.


## Examples

### Example #1
Dodavanje 5 dana vrednosti `date`, `datetime` ili `datetimezone`, koja predstavlja datum 14.5.2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
