---
title: Date.AddYears
---

# Date.AddYears


Dodaje navedene godine u datum.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Vraća rezultat `date`, `datetime` ili `datetimezone` od dodavanja `numberOfYears` vrednosti `datetime` `dateTime`.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` na koju se dodaju godine.
-   `numberOfYears`: Broj godina koje se dodaju.


## Examples

### Example #1
Dodavanje 4 godine vrednosti `date`, `datetime` ili `datetimezone`, koja predstavlja datum 14.5.2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
Dodavanje 10 godina vrednosti `date`, `datetime` ili `datetimezone`, koja predstavlja datum 14.5.2011. i vreme 08:15:22.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
