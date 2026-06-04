---
title: Date.AddYears
---

# Date.AddYears


Datumu doda določena leta.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Vrne rezultat `date`, `datetime` ali `datetimezone` od dodajanja `numberOfYears` vrednosti `datetime` `dateTime`.

-   `dateTime`: vrednost `date`, `datetime` ali `datetimezone`, h kateri se dodajo leta.
-   `numberOfYears`: število let, ki naj se dodajo.


## Examples

### Example #1
Dodajte 4 leta vrednosti `date`, `datetime` ali `datetimezone`, ki predstavlja datum 5/14/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2
Dodajte 10 let vrednosti `date`, `datetime` ali `datetimezone`, ki predstavlja datum in čas 5/14/2011 08:15:22 AM.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
