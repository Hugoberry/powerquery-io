---
title: Date.AddMonths
---

# Date.AddMonths


Datumu doda določene mesece.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Remarks

Vrne rezultat `date`, `datetime` ali `datetimezone` od dodajanja `numberOfMonths` mesecev vrednosti `datetime` `dateTime`.

-   `dateTime`: vrednost `date`, `datetime` ali `datetimezone`, h kateri se dodajo meseci.
-   `numberOfMonths`: število mesecev, ki naj se dodajo.


## Examples

### Example #1
Dodajte 5 mesecev vrednosti `date`, `datetime` ali `datetimezone`, ki predstavlja datum 5/14/2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2
Dodajte 18 mesecev vrednosti `date`, `datetime` ali `datetimezone`, ki predstavlja datum in čas 5/14/2011 08:15:22 AM.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
