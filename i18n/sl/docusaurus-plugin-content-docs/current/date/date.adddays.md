---
title: Date.AddDays
---

# Date.AddDays


Datumu doda določene dni.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Vrne rezultat `date`, `datetime` ali `datetimezone` od dodajanja `numberOfDays` dni vrednosti `datetime` `dateTime`.

-   `dateTime`: vrednost `date`, `datetime` ali `datetimezone`, h kateri se dodajo dnevi.
-   `numberOfDays`: število dni, ki naj se dodajo.


## Examples

### Example #1
Dodajte 5 dni vrednosti `date`, `datetime` ali `datetimezone`, ki predstavlja datum 5/14/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
