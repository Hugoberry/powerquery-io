---
title: Date.AddWeeks
---

# Date.AddWeeks


Dodaje navedene sedmice u datum.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Vraća rezultat `date`, `datetime` ili `datetimezone` od dodavanja `numberOfWeeks` sedmica u vrednost `datetime` `dateTime`.

-   `dateTime`: Vrednost `date`, `datetime` ili `datetimezone` na koju se dodaju sedmice.
-   `numberOfWeeks`: Broj sedmica koje se dodaju.


## Examples

### Example #1
Dodavanje 2 sedmice vrednosti `date`, `datetime` ili `datetimezone`, koja predstavlja datum 14.5.2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
