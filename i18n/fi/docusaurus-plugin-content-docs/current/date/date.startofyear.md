---
title: Date.StartOfYear
---

# Date.StartOfYear


Palauttaa vuoden alun.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

Palauttaa `dateTime`sisältävän vuoden alun. `dateTime` on oltava `date`, `datetime` tai `datetimezone` arvo.


## Examples

### Example #1
Selvitä vuoden alku kohteelle 10. lokakuuta 2011 klo 8.10.32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
