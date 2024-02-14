---
title: Date.DayOfYear
---

# Date.DayOfYear


Gibt eine Zahl zwischen eins und 366 zurück, die für den Tag des Jahres steht.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Remarks

Gibt eine Zahl zurück, die für den Tag des Jahres im angegebenen <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert "<code>dateTime</code>" steht.


## Examples

### Example #1 
Der Tag des Jahres für den 1. März 2011.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
