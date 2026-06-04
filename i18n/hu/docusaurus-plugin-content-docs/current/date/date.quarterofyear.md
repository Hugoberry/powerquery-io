---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Egy olyan számot ad vissza, amely jelzi, hogy a dátum az év hányadik negyedévébe esik.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Egy olyan 1 és 4 közötti számot ad vissza, amely jelzi, hogy a(z) `dateTime` dátum az év hányadik negyedévébe esik. A(z) `dateTime` egy `date`, `datetime` vagy `datetimezone` típusú érték lehet.


## Examples

### Example #1
Annak megállapítása, hogy a #date(2011, 12, 31) dátum az év hányadik negyedévébe esik
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
