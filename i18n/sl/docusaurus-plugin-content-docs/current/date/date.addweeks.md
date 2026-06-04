---
title: Date.AddWeeks
---

# Date.AddWeeks


Datumu doda določene tedne.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Vrne rezultat `date`, `datetime` ali `datetimezone` od dodajanja `numberOfWeeks` tednov vrednosti `datetime` `dateTime`.

-   `dateTime`: vrednost `date`, `datetime` ali `datetimezone`, h kateri se dodajo tedni.
-   `numberOfWeeks`: število tednov, ki naj se dodajo.


## Examples

### Example #1
Dodajte 2 tedna vrednosti `date`, `datetime` ali `datetimezone`, ki predstavlja datum 5/14/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
