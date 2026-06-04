---
title: Date.AddQuarters
---

# Date.AddQuarters


Dodaje navedene kvartale u datum.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Vraća rezultat `date`, `datetime` ili `datetimezone` od dodavanja `numberOfQuarters` kvartala u vrednost `datetime` `dateTime`.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` u koju se dodaju kvartali.
-   `numberOfQuarters`: Broj kvartala koji se dodaju.


## Examples

### Example #1
Dodavanje 1 kvartala vrednosti `date`, `datetime` ili `datetimezone`, koja predstavlja datum 14.5.2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
