---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Palauttaa vuosineljänneksen alun.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

Palauttaa `dateTime`sisältävän vuosineljänneksen alun. `dateTime` on oltava `date`, `datetime` tai `datetimezone` arvo.


## Examples

### Example #1
Selvitä vuosineljänneksen alku kohteelle 10. lokakuuta 2011 klo 8.00.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
