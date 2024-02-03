---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


## Description

Egy olyan számot ad vissza, amely jelzi, hogy a dátum az év hányadik negyedévébe esik.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Details

Egy olyan 1 és 4 közötti számot ad vissza, amely jelzi, hogy a(z) <code>dateTime</code> dátum az év hányadik negyedévébe esik. A(z) <code>dateTime</code> egy <code>date</code>, <code>datetime</code> vagy <code>datetimezone</code> típusú érték lehet.


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
