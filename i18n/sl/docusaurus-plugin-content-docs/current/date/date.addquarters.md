---
title: Date.AddQuarters
---

# Date.AddQuarters


Datumu doda določena četrtletja.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Vrne rezultat `date`, `datetime` ali `datetimezone` od dodajanja `numberOfQuarters` četrtletij vrednosti `datetime` `dateTime`.

-   `dateTime`: vrednost `date`, `datetime` ali `datetimezone`, h kateri se dodajo četrtletja.
-   `numberOfQuarters`: število četrtletij, ki naj se dodajo.


## Examples

### Example #1
Dodajte 1 četrtletje vrednosti `date`, `datetime` ali `datetimezone`, ki predstavlja datum 5/14/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
