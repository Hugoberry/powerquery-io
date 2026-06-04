---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


Palauttaa neljänneksen lopun.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

Palauttaa `dateTime`sisältävän vuosineljänneksen lopun. Aikavyöhyketiedot säilytetään.

-   `dateTime`: `date`, `datetime` tai `datetimezone` arvo, josta vuosineljänneksen loppu lasketaan.


## Examples

### Example #1
Selvitä vuosineljänneksen loppu kohteelle 10. lokakuuta 2011 klo 8.00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
