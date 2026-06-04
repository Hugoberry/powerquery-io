---
title: Date.StartOfDay
---

# Date.StartOfDay


Palauttaa päivän alun.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Remarks

Palauttaa `dateTime`edustaman päivän alun. `dateTime` on oltava `date`, `datetime` tai `datetimezone` arvo.


## Examples

### Example #1
Selvitä päivän alku kohteelle 10. lokakuuta 2011 klo 8.00.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
