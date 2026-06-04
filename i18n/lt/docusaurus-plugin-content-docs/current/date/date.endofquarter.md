---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


Pateikia ketvirčio pabaigą.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

Pateikiama ketvirčio, kuriame yra `dateTime`, pabaiga. Išsaugoma laiko juostos informacija.

-   `dateTime`: `date`, `datetime` arba `datetimezone` reikšmė, pagal kurią apskaičiuojama ketvirčio pabaiga.


## Examples

### Example #1
Rasti 2011 m. spalio 10 d. 8:00 ketvirčio pabaigą.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
